"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenCheck = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var SECRET_KEY = 'secret_key';
var tokenCheck = function (req, res, next) {
    var token = req.headers['authorization'];
    if (token) {
        jsonwebtoken_1.default.verify(token, SECRET_KEY, function (err) {
            if (err)
                res.sendStatus(203);
            else
                next();
        });
    }
    else
        res.sendStatus(203);
};
exports.tokenCheck = tokenCheck;
//# sourceMappingURL=token-check.js.map