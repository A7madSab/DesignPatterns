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
var Burger = /** @class */ (function () {
    function Burger(Name, Cost) {
        this.Name = Name;
        this.Cost = Cost;
    }
    Burger.prototype.PrintB = function () {
        console.log("Name: " + this.Name + " Cost: " + this.Cost);
    };
    return Burger;
}());
var CheeseBurger = /** @class */ (function (_super) {
    __extends(CheeseBurger, _super);
    function CheeseBurger(Name, Cost) {
        var _this = _super.call(this, Name, Cost) || this;
        _this.Added = "Cheese";
        return _this;
    }
    CheeseBurger.prototype.PrintB = function () {
        console.log("Name: " + this.Name + " Cost: " + this.Cost + " Added: " + this.Added);
    };
    return CheeseBurger;
}(Burger));
var MashroomBurger = /** @class */ (function (_super) {
    __extends(MashroomBurger, _super);
    function MashroomBurger(name, cost) {
        var _this = _super.call(this, name, cost) || this;
        _this.Added = "Mashroom";
        return _this;
    }
    MashroomBurger.prototype.PrintB = function () {
        console.log("Name: " + this.Name + " Cost: " + this.Cost + " Added: " + this.Added);
    };
    return MashroomBurger;
}(Burger));
var OnionBurger = /** @class */ (function (_super) {
    __extends(OnionBurger, _super);
    function OnionBurger(name, cost) {
        var _this = _super.call(this, name, cost) || this;
        _this.Added = "Onion";
        return _this;
    }
    OnionBurger.prototype.PrintB = function () {
        console.log("Name: " + this.Name + " Cost: " + this.Cost + " Added: " + this.Added);
    };
    return OnionBurger;
}(Burger));
var CheeseBurgerFactory = /** @class */ (function () {
    function CheeseBurgerFactory() {
    }
    CheeseBurgerFactory.prototype.CreateBuger = function () {
        return new CheeseBurger("CheeseBurger", 5);
    };
    return CheeseBurgerFactory;
}());
var MashroomBurgerFactory = /** @class */ (function () {
    function MashroomBurgerFactory() {
    }
    MashroomBurgerFactory.prototype.CreateBuger = function () {
        return new MashroomBurger("MashroomBurger", 50);
    };
    return MashroomBurgerFactory;
}());
var OnionBurgerFactory = /** @class */ (function () {
    function OnionBurgerFactory() {
    }
    OnionBurgerFactory.prototype.CreateBuger = function () {
        return new OnionBurger("OnionBurger", 15);
    };
    return OnionBurgerFactory;
}());
var CHFactory = new MashroomBurgerFactory();
var c = CHFactory.CreateBuger();
c.PrintB();
