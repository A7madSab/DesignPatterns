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
var BuildHouse = /** @class */ (function () {
    function BuildHouse() {
    }
    BuildHouse.prototype.BuildFoundation = function () {
        console.log("Put Foundations");
    };
    BuildHouse.prototype.TemplateMethod = function () {
        this.BuildFoundation();
        this.BuildWalls();
        this.PutWindows();
        this.PutDoors();
    };
    return BuildHouse;
}());
var BuildVilla = /** @class */ (function (_super) {
    __extends(BuildVilla, _super);
    function BuildVilla() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BuildVilla.prototype.BuildWalls = function () {
        console.log("Put Villa Walls");
    };
    BuildVilla.prototype.PutWindows = function () {
        console.log("Put Villa Windows.");
    };
    BuildVilla.prototype.PutDoors = function () {
        console.log("Put Villa Doors.");
    };
    return BuildVilla;
}(BuildHouse));
var BuildAppartment = /** @class */ (function (_super) {
    __extends(BuildAppartment, _super);
    function BuildAppartment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BuildAppartment.prototype.BuildWalls = function () {
        console.log("Put flat Walls");
    };
    BuildAppartment.prototype.PutWindows = function () {
        console.log("Put flat Windows.");
    };
    BuildAppartment.prototype.PutDoors = function () {
        console.log("Put flat Doors.");
    };
    return BuildAppartment;
}(BuildHouse));
var Appartment = new BuildAppartment();
Appartment.TemplateMethod();
console.log("<br>");
var Villa = new BuildVilla();
Appartment.TemplateMethod();
