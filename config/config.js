"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = exports.config = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
var SERVER_PORT = process.env.SERVER_PORT || 1342;
var GITHUB_URL = process.env.GITHUB_URL || 'https://api.github.com';
var GITHUB_PAGINATION_LIMIT = process.env.GITHUB_PAGINATION_LIMIT || 10;
var SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};
exports.config = {
    server: SERVER,
    github: {
        url: GITHUB_URL
    }
};
exports.env = {
    github: GITHUB_URL,
    githubpaginationlimit: GITHUB_PAGINATION_LIMIT
};
//# sourceMappingURL=config.js.map