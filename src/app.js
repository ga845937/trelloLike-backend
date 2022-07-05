const express = require("express");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const cors = require("cors");
const env = require("../env");

const mainRoute = require("./routes/mainRoute");
const usersRoute = require("./routes/users");
const app = express();

const swaggerFile = require("../swagger.json");
const swaggerUI = require("swagger-ui-express");
const swaggerUiOptions = {
    //customCss: "#header {display: none}"
};

app.use("/api-doc/list", swaggerUI.serve, swaggerUI.setup(swaggerFile, swaggerUiOptions));

app.use(helmet());
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/main", mainRoute);
app.use("/users", usersRoute);

// error handler
const resModel = require("./models/resModel");
app.use((err, req, res, next) => {
    console.error(err);
    const resData = new resModel(null, err.code || 99);
    res.json(resData);
    next();
});

const port = env.httpServerPort;
app.listen(port, () => {
    console.log(`Server Running: http://localhost:${port}`);
    console.log(`Swagger URL: http://localhost:${port}/api-doc/list`);
});

module.exports = app;