const getCodeMsg = require("../utils/codeMsgConversion");

/**
 * @param {Int} code 錯誤代碼 
 * @param {String} message 錯誤訊息
 * @param {Error} realErr 發生錯誤的堆疊
 */

class errModel extends Error {
    constructor(code, realErr) {
        super(code);
        this.code = code;
        this.message = getCodeMsg(code);
        if (realErr) {
            this.stack = realErr.stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

module.exports = errModel;