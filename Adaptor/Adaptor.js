var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var XmlSerevrs = /** @class */ (function () {
    function XmlSerevrs() {
    }
    XmlSerevrs.prototype.DrawGraphs = function () {
        return "Default XML Graphs are Drawn";
    };
    return XmlSerevrs;
}());
var JsonServers = /** @class */ (function () {
    function JsonServers() {
    }
    JsonServers.prototype.DrawBetterGraphs = function () {
        return "Better Json Graphs are Drawn";
    };
    return JsonServers;
}());
var Adaptor = /** @class */ (function (_super) {
    __extends(Adaptor, _super);
    function Adaptor(NewService) {
        var _this = _super.call(this) || this;
        _this.NewService = NewService;
        return _this;
    }
    Adaptor.prototype.Request = function () {
        return this.NewService.DrawBetterGraphs();
    };
    return Adaptor;
}(XmlSerevrs));
var xml = new XmlSerevrs();
var json = new JsonServers();
var adaptor = new Adaptor(json);
console.log(adaptor.DrawGraphs());
console.log(adaptor.Request());
