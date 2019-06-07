var Command1 = /** @class */ (function () {
    function Command1() {
    }
    Command1.prototype.execute = function () {
        console.log("executing Command 1");
    };
    Command1.prototype.unexecute = function () {
        console.log("unexecuting Command 1");
    };
    return Command1;
}());
var Command2 = /** @class */ (function () {
    function Command2() {
        this.UserID = 0;
    }
    Command2.prototype.getNumber = function () {
        this.UserID = Math.floor(Math.random() * 100);
    };
    Command2.prototype.execute = function () {
        console.log("executing Command 2 using " + this.UserID);
    };
    Command2.prototype.unexecute = function () {
        console.log("unexecuting Command 2 using " + this.UserID);
    };
    return Command2;
}());
var Command3 = /** @class */ (function () {
    function Command3(name) {
        this.Name = name;
    }
    Command3.prototype.execute = function () {
        console.log("executing Command 2 using " + this.Name);
    };
    Command3.prototype.unexecute = function () {
        console.log("unexecuting Command 2 using " + this.Name);
    };
    return Command3;
}());
var Invoker = /** @class */ (function () {
    function Invoker(Command1, Command2, Command3) {
        this.Command1 = Command1;
        this.Command2 = Command2;
        this.Command3 = Command3;
    }
    Invoker.prototype.Execute = function () {
        this.Command1.execute();
        this.Command2.execute();
        this.Command3.execute();
    };
    Invoker.prototype.unExecute = function () {
        this.Command3.unexecute();
        this.Command2.unexecute();
        this.Command1.unexecute();
    };
    return Invoker;
}());
var invoker = new Invoker(new Command1(), new Command2(), new Command3("Ahmad"));
invoker.Execute();
invoker.unExecute();
