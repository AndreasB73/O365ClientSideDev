"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.prototype.log = function () {
        console.log("hello word logged from Util");
    };
    Util.prototype.get = function (url) {
        console.log("fetching...");
        var cctx = new SP.ClientContext(url);
        var web = cctx.get_web();
        cctx.load(web);
        cctx.executeQueryAsync(function () {
            console.log("Successfully loaded web", web.get_title());
        });
    };
    return Util;
}());
exports.Util = Util;
//# sourceMappingURL=util.js.map