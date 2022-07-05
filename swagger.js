const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });
const swaggerGenFile = "./swagger.json"; // 輸出的文件名稱
const endpointsFiles = ["./src/app.js"]; // 要指向的 API，通常使用 Express 直接指向到 app.js 就可以

const doc = {
    info: {
        title: "Swagger Title",
        description: "Swagger Description",
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
    // components: {
    //     "@schemas": {
    //         resSchema: {
    //             type: "object",
    //             properties: {
    //                 code: {
    //                     type: "Integer",
    //                     description: "代碼"
    //                 },
    //                 data: {
    //                     type: "Any",
    //                     description: "回傳資料"
    //                 },
    //                 msg: {
    //                     type: "String",
    //                     description: "訊息"
    //                 }
    //             }
    //         }
    //     }
    // }
};

// swaggerAutogen(swaggerGenFile, endpointsFiles)
swaggerAutogen(swaggerGenFile, endpointsFiles, doc).then(() => {
    console.log("Swagger-autogen End");
}); // swaggerAutogen 的方法