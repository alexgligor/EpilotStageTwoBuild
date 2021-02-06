"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var logger_1 = require("./config/logger");
var routes_1 = require("./routes");
var NAMESPACE = 'Server';
var app = express_1.default();
exports.app = app;
/** Logging the request */
app.use(function (req, res, next) {
    logger_1.logger.log({ level: 'info', message: NAMESPACE + " METHOD 0 [" + req.method + "], URL - [" + req.url + ", IP - [" + req.socket.remoteAddress + "]" });
    res.on('finish', function () {
        logger_1.logger.log({ level: 'info', message: NAMESPACE + " METHOD 0 [" + req.method + "], URL - [" + req.url + ", IP - [" + req.socket.remoteAddress + "], STATUS  - [" + res.statusCode + "]" });
    });
    next();
});
/** Parse the request */
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
/** Rules of the API */
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATC DELETE POST PUT');
        return res.status(200).json({});
    }
    next();
});
/** Routes */
app.use('/', routes_1.routes);
/** Error Handling */
app.use(function (req, res, next) {
    var error = new Error('Service not found');
    return res.status(404).json({ message: error.message });
});
//# sourceMappingURL=app.js.map