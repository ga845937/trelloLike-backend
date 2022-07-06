const _user = require("./user");

function initModels(mongoose) {
    const user = _user(mongoose);

    return {
        user
    };
}

module.exports = initModels;