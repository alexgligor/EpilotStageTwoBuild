"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServer = void 0;
var http_1 = __importDefault(require("http"));
var config_1 = require("./config/config");
var app_1 = require("./app");
var logger_1 = require("./config/logger");
exports.httpServer = http_1.default.createServer(app_1.app);
exports.httpServer.listen(config_1.config.server.port, function () { return logger_1.logger.log('info', "Server running on " + config_1.config.server.hostname + ":" + config_1.config.server.port); });
//# sourceMappingURL=server.js.map