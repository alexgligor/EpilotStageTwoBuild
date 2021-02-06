"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
var winston_1 = __importDefault(require("winston"));
var logConfig = {
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({
            filename: "./logs/server_" + new Date().getTime() + ".log"
        })
    ]
};
exports.logger = winston_1.default.createLogger(logConfig);
//# sourceMappingURL=logger.js.map