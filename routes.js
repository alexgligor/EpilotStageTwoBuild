"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = __importDefault(require("express"));
var active_users_1 = require("./controllers/active-users");
var downwards_repos_1 = require("./controllers/downwards-repos");
var login_1 = require("./controllers/login");
var token_check_1 = require("./authorization/token-check");
var page_1 = require("./controllers/page");
exports.routes = express_1.default.Router();
exports.routes.get('/v1/active/:user', active_users_1.activeUsersController);
exports.routes.get('/v1/downwards/:repo', downwards_repos_1.downwardsController);
exports.routes.get('/v2/downwards/:repo', token_check_1.tokenCheck, downwards_repos_1.downwardsController);
exports.routes.get('/v1/login/', login_1.loginController);
exports.routes.get('/', page_1.page);
//# sourceMappingURL=routes.js.map