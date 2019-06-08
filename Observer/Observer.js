var Movie = /** @class */ (function () {
    function Movie(name) {
        this.Name = name;
        this.Observers = new Array();
    }
    Movie.prototype.Add = function (Iobserver) {
        this.Observers.push(Iobserver);
    };
    Movie.prototype.Notify = function () {
        var _this = this;
        this.Observers.forEach(function (element) {
            element.Update(_this.Name);
        });
    };
    Movie.prototype.Remove = function (Iobserver) {
        this.Observers = this.Observers.filter(function (obj) { return obj !== Iobserver; });
    };
    return Movie;
}());
var User = /** @class */ (function () {
    function User(name) {
        this.Name = name;
    }
    User.prototype.Update = function (MovieName) {
        console.log(this.Name + " is being Notified that " + MovieName + " is out");
    };
    return User;
}());
var HomeAlone = new Movie("Home Alone");
var Ahmad = new User("Ahmad Sabry");
var Aly = new User("Aly Sabry");
var Sabry = new User("Sabry Aly");
HomeAlone.Add(Ahmad);
HomeAlone.Add(Aly);
HomeAlone.Add(Sabry);
HomeAlone.Remove(Ahmad);
HomeAlone.Notify();
var JohnWich = new Movie("John Wich");
JohnWich.Add(Ahmad);
JohnWich.Add(Aly);
JohnWich.Notify();
