var Coffee = /** @class */ (function () {
    function Coffee() {
    }
    Coffee.prototype.Cost = function () {
        return 15;
    };
    Coffee.prototype.Description = function () {
        return "Coffee";
    };
    return Coffee;
}());
var Tea = /** @class */ (function () {
    function Tea() {
    }
    Tea.prototype.Cost = function () {
        return 10;
    };
    Tea.prototype.Description = function () {
        return "Tea";
    };
    return Tea;
}());
var MilkDecorator = /** @class */ (function () {
    function MilkDecorator(Beverage) {
        this.Beverage = Beverage;
    }
    MilkDecorator.prototype.Cost = function () {
        return this.Beverage.Cost() + 3;
    };
    MilkDecorator.prototype.Description = function () {
        return this.Beverage.Description() + " Milk";
    };
    return MilkDecorator;
}());
var tea = new Tea();
console.log("Cost: " + tea.Cost() + " Description: " + tea.Description());
var TeaWithMilk = new MilkDecorator(tea);
console.log("Cost: " + TeaWithMilk.Cost() + " Description: " + TeaWithMilk.Description());
var TeaWithMilkWithMilk = new MilkDecorator(TeaWithMilk);
console.log("Cost: " + TeaWithMilkWithMilk.Cost() + " Description: " + TeaWithMilkWithMilk.Description());
