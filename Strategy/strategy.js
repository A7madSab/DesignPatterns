var ByCar = /** @class */ (function () {
    function ByCar() {
    }
    ByCar.prototype.BuildRoute = function () {
        console.log("Get Route By Car");
    };
    return ByCar;
}());
var ByBus = /** @class */ (function () {
    function ByBus() {
    }
    ByBus.prototype.BuildRoute = function () {
        console.log("Get Route By Bus");
    };
    return ByBus;
}());
var ByTrain = /** @class */ (function () {
    function ByTrain() {
    }
    ByTrain.prototype.BuildRoute = function () {
        console.log("Get Route By Train");
    };
    return ByTrain;
}());
var Transporter = /** @class */ (function () {
    function Transporter() {
    }
    Transporter.prototype.SetStrategy = function (StrategyType) {
        if (StrategyType === 1) {
            this.method = new ByCar();
        }
        else if (StrategyType === 2) {
            this.method = new ByBus();
        }
        else {
            this.method = new ByTrain();
        }
    };
    Transporter.prototype.Print = function () {
        this.method.BuildRoute();
    };
    return Transporter;
}());
var Transport = new Transporter();
Transport.SetStrategy(1);
Transport.Print();
Transport.SetStrategy(2);
Transport.Print();
Transport.SetStrategy(3);
Transport.Print();
