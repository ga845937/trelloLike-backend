const swaggerAutogenOption = {
    openapi: "3.0.0",
    autoHeaders: false,
    autoQuery: false,
    autoBody: false
};
const swaggerAutogen = require("swagger-autogen")(swaggerAutogenOption);
const swaggerGenFile = "./swagger.json"; // 輸出的文件名稱
const endpointsFiles = ["./src/app.js"]; // 要指向的 API，通常使用 Express 直接指向到 app.js 就可以
const j2s = require("joi-to-swagger");
const env = require("./env.js");

const doc = {
    host: `${env.httpServerHost}:${env.httpServerPort}`,
    info: {
        title: "TrelloLike",
        description: "TrelloLike",
    },
    securityDefinitions: {
        jwt: {
            type: "apiKey",
            name: "authorization",
            in: "header"
        },
        authPower: {
            type: "apiKey",
            name: "authorization",
            in: "header"
        }
    },
    components: {
        "@schemas": {
            resSchema: {
                type: "object",
                properties: {
                    code: {
                        type: "integer",
                        description: "代碼"
                    },
                    data: {
                        type: "object",
                        description: "回傳資料"
                    },
                    msg: {
                        type: "string",
                        description: "訊息"
                    }
                }
            }
        }
    }
};

require("fs").readdirSync("./src/models/view").forEach((file) => {
    if (file.match(/\.js$/) !== null) {
        const fileName = file.replace(".js", "");
        const tmpRequire = require("./src/models/view/" + fileName);
        for (const key in tmpRequire) {
            if (key === "description") {
                return;
            }
            const { swagger } = j2s(tmpRequire[key]);
            for (const schemaKey in swagger.properties) {
                swagger.properties[schemaKey].Description = tmpRequire.description[schemaKey];
            }
            doc.components["@schemas"][key + "Schema"] = swagger;
        }
    }
});

// swaggerAutogen(swaggerGenFile, endpointsFiles)
swaggerAutogen(swaggerGenFile, endpointsFiles, doc).then(() => {
    console.log("Swagger-autogen End");
}); 