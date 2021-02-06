"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areMoreAdditonsThenDeletions = void 0;
var areMoreAdditonsThenDeletions = function (files) {
    var deletions = 0;
    var additions = 0;
    files.forEach(function (file) {
        deletions += file.deletions ? parseInt(file.deletions) : 0;
        additions += file.additions ? parseInt(file.additions) : 0;
    });
    return additions > deletions;
};
exports.areMoreAdditonsThenDeletions = areMoreAdditonsThenDeletions;
//# sourceMappingURL=github-downwards.js.map