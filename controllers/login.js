"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var SECRET_KEY = 'secret_key';
var loginController = function (req, res) {
    var user = { id: 7 };
    var token = jsonwebtoken_1.default.sign(user, SECRET_KEY);
    return res.status(200).json({
        result: token
    });
};
exports.loginController = loginController;
//# sourceMappingURL=login.js.map