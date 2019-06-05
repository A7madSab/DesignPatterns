var CreateCheapPC = /** @class */ (function () {
    function CreateCheapPC() {
    }
    CreateCheapPC.prototype.GetProcessor = function () {
        return new CheapProcessor();
    };
    CreateCheapPC.prototype.GetRam = function () {
        return new CheapRam();
    };
    CreateCheapPC.prototype.GetHardDrive = function () {
        return new CheapHardDrive();
    };
    return CreateCheapPC;
}());
var CreateExpensivePC = /** @class */ (function () {
    function CreateExpensivePC() {
    }
    CreateExpensivePC.prototype.GetProcessor = function () {
        return new ExpensiveProcessor();
    };
    CreateExpensivePC.prototype.GetRam = function () {
        return new ExpensiveRam();
    };
    CreateExpensivePC.prototype.GetHardDrive = function () {
        return new ExpensiveHardDrive();
    };
    return CreateExpensivePC;
}());
var CheapProcessor = /** @class */ (function () {
    function CheapProcessor() {
        console.log("CheapProcessor");
    }
    return CheapProcessor;
}());
var ExpensiveProcessor = /** @class */ (function () {
    function ExpensiveProcessor() {
        console.log("ExpensiveProcessor");
    }
    return ExpensiveProcessor;
}());
var CheapRam = /** @class */ (function () {
    function CheapRam() {
        console.log("CheapProcessor");
    }
    return CheapRam;
}());
var ExpensiveRam = /** @class */ (function () {
    function ExpensiveRam() {
        console.log("ExpensiveProcessor");
    }
    return ExpensiveRam;
}());
var CheapHardDrive = /** @class */ (function () {
    function CheapHardDrive() {
        console.log("Cheap Hard Drive");
    }
    return CheapHardDrive;
}());
var ExpensiveHardDrive = /** @class */ (function () {
    function ExpensiveHardDrive() {
        console.log("ExpensiveHard Drive");
    }
    return ExpensiveHardDrive;
}());
var cheapPCCreator = new CreateCheapPC();
cheapPCCreator.GetRam();
cheapPCCreator.GetHardDrive();
cheapPCCreator.GetProcessor();
var ExpensivePCCreator = new CreateExpensivePC();
ExpensivePCCreator.GetRam();
ExpensivePCCreator.GetHardDrive();
ExpensivePCCreator.GetProcessor();
