var Person = /** @class */ (function () {
    function Person(Name) {
        this.Name = Name;
    }
    return Person;
}());
var PersonBuilder = /** @class */ (function () {
    function PersonBuilder(Name) {
        this.Person = new Person(Name);
    }
    PersonBuilder.prototype.SetAge = function (Age) {
        this.Person.Age = Age;
        return this;
    };
    PersonBuilder.prototype.SetGender = function (Gender) {
        this.Person.Gender = Gender;
        return this;
    };
    PersonBuilder.prototype.GetPerson = function () {
        return this.Person;
    };
    return PersonBuilder;
}());
var person = new PersonBuilder("Ahmad Sabry ALy")
    .SetAge(15)
    .GetPerson();
console.log(person);
