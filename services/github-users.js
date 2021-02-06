"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arePushEventsInLast24Hours = exports.Status = void 0;
var HOURS_24 = 24 * 60 * 60 * 1000;
var PUSH_EVENT_TYPE = 'PushEvent';
var Status;
(function (Status) {
    Status[Status["TRUE"] = 0] = "TRUE";
    Status[Status["NONE"] = 1] = "NONE";
    Status[Status["LOAD_MORE"] = 2] = "LOAD_MORE";
})(Status = exports.Status || (exports.Status = {}));
var arePushEventsInLast24Hours = function (events) {
    if (!events || events.length < 1) {
        return Status.NONE;
    }
    var firstPushEvent = events.find(function (event) { return event.type === PUSH_EVENT_TYPE; });
    if (firstPushEvent) {
        var createdAt = new Date(firstPushEvent.created_at);
        return isNewerThen24Hours(createdAt) ? Status.TRUE : Status.NONE;
    }
    var lastPushEvent = events[events.length - 1];
    var createdAt_LastEvent = new Date(lastPushEvent.created_at);
    if (isNewerThen24Hours(createdAt_LastEvent)) {
        return Status.LOAD_MORE;
    }
    return Status.NONE;
};
exports.arePushEventsInLast24Hours = arePushEventsInLast24Hours;
var isNewerThen24Hours = function (dateToCheck) {
    var diff = Math.abs(Date.now() - dateToCheck.getTime());
    return HOURS_24 > diff;
};
//# sourceMappingURL=github-users.js.map