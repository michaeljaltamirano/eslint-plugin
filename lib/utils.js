"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObjectLike = exports.isNotNullish = exports.isJson = void 0;
function isNotNullish(arg) {
    return arg !== null && arg !== undefined;
}
exports.isNotNullish = isNotNullish;
function isObjectLike(arg) {
    return (typeof arg === 'object' && isNotNullish(arg) && !!Object.keys(arg).length);
}
exports.isObjectLike = isObjectLike;
function isJson(arg) {
    if (!isNotNullish(arg))
        return false;
    return isObjectLike(arg);
}
exports.isJson = isJson;
