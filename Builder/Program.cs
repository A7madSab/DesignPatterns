using System;

namespace Builder {
    public class Person {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public int Age { get; set; }
        public bool Gender { get; set; }
        public Person (string Name) {
            this.FirstName = Name;
        }
    }

    public class PersonBuilder {
        Person Person;
        public PersonBuilder (string FirstName) {
            Person = new Person (FirstName);
        }
        public PersonBuilder AddMiddleName (string MiddleName) {
            this.Person.MiddleName = MiddleName;
            return this;
        }
        public PersonBuilder AddLastName (string LastName) {
            this.Person.LastName = LastName;
            return this;
        }
        public PersonBuilder AddAge (int Age) {
            this.Person.Age = Age;
            return this;
        }
        public PersonBuilder AddGender (string Gender) {
            this.Person.Gender = Gender == "Male" ? true : false;
            return this;
        }

        public Person GetPerson () {
            return this.Person;
        }

    }

    class Program {
        static void Main (string[] args) {
            Person Person = new PersonBuilder ("Ahmad")
                .AddLastName ("Aly")
                .AddMiddleName ("Sabry")
                .AddAge (15)
                .AddGender ("Male")
                .GetPerson ();

            System.Console.WriteLine (Person.FirstName);
            System.Console.WriteLine (Person.MiddleName);
            System.Console.WriteLine (Person.LastName);
            System.Console.WriteLine (Person.Age);
            System.Console.WriteLine (Person.Gender);
        }
    }
}