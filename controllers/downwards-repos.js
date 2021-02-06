"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downwardsController = void 0;
var axios_1 = __importDefault(require("axios"));
var github_downwards_1 = require("../services/github-downwards");
var config_1 = require("../config/config");
var logger_1 = require("../config/logger");
var SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;
var downwardsController = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var repoName, userName, timeFromLastSevenDays, secondsFromLastSevenDays, ownerAndRepoName, findRepoUrl, resp, areMoreAdditions, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                repoName = req.params.repo;
                userName = req.query.userName;
                timeFromLastSevenDays = Date.now() - SEVEN_DAYS;
                secondsFromLastSevenDays = timeFromLastSevenDays.toString().substr(0, 10);
                ownerAndRepoName = '';
                if (!userName) return [3 /*break*/, 1];
                ownerAndRepoName = userName + "/" + repoName;
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, fetchOwnerAndRepositoryName(repoName)];
            case 2:
                ownerAndRepoName = _a.sent();
                _a.label = 3;
            case 3:
                if (!ownerAndRepoName)
                    return [2 /*return*/, res.status(404).json({
                            message: "No repository with name '" + repoName + "' was found!"
                        })];
                findRepoUrl = config_1.env.github + "/repos/" + ownerAndRepoName + "/compare/master@{" + secondsFromLastSevenDays + "}...master";
                logger_1.logger.log('info', findRepoUrl);
                _a.label = 4;
            case 4:
                _a.trys.push([4, 6, , 7]);
                return [4 /*yield*/, axios_1.default.get(findRepoUrl)];
            case 5:
                resp = _a.sent();
                areMoreAdditions = github_downwards_1.areMoreAdditonsThenDeletions(resp.data.files);
                return [2 /*return*/, res.status(200).json({
                        result: areMoreAdditions
                    })];
            case 6:
                err_1 = _a.sent();
                return [2 /*return*/, res.status(404).json({
                        message: "No repository found at path " + ownerAndRepoName
                    })];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.downwardsController = downwardsController;
var fetchOwnerAndRepositoryName = function (repositoriName) { return __awaiter(void 0, void 0, void 0, function () {
    var resp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.default.get(config_1.env.github + "/search/repositories?q=" + repositoriName + "&type=repositories")];
            case 1:
                resp = _a.sent();
                if (resp.data && resp.data.items.length > 0)
                    return [2 /*return*/, resp.data.items[0].full_name];
                return [2 /*return*/, ''];
        }
    });
}); };
//# sourceMappingURL=downwards-repos.js.map