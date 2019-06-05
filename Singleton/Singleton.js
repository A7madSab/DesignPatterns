var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.Instance) {
            console.log("new");
            return (Singleton.Instance = new Singleton());
        }
        console.log("old");
        return Singleton.Instance;
    };
    return Singleton;
}());
Singleton.getInstance();
Singleton.getInstance();
