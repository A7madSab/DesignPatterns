using System;

namespace Command {
    public interface Command {
        void Execute ();
        void unExecute ();
    }

    public class Bulb {
        public string Location { get; set; }
        public Bulb (string Location) {
            this.Location = Location;
        }

    }
    public class AC {
        public string Location { get; set; }
        public AC (string Locatoin) { this.Location = Location; }

    }

    public class SwitchOnLight : Command {
        public Bulb Bulb { get; set; }
        public SwitchOnLight (Bulb bulb) {
            this.Bulb = bulb;
        }
        public void Execute () {
            System.Console.WriteLine ("Switching On Bulb on this Location" + this.Bulb.Location);
        }
        public void unExecute () {
            System.Console.WriteLine ("Switching Off Bulb on this Location" + this.Bulb.Location);
        }
    }

    public class SwitchOnAC : Command {
        public AC AC { get; set; }

        public SwitchOnAC (AC AC) { this.AC = AC; }

        public void Execute () {
            System.Console.WriteLine ("Switching on AC on this Location" + this.AC.Location);
        }
        public void unExecute () {
            System.Console.WriteLine ("Switching off AC on this Location" + this.AC.Location);
        }
    }

    public class Person {
        public SwitchOnAC SwitchOnAC { get; set; }
        public SwitchOnLight SwitchOnLight { get; set; }

        public Person (SwitchOnAC c1, SwitchOnLight c2) {
            this.SwitchOnAC = c1;
            this.SwitchOnLight = c2;
        }

        public void WalksIn () {
            this.SwitchOnAC.Execute ();
            this.SwitchOnLight.Execute ();
        }

        public void WalksOut () {
            this.SwitchOnAC.unExecute ();
            this.SwitchOnLight.unExecute ();
        }

    }

    class Program {
        static void Main (string[] args) {

            var AC = new AC ("LivingRoom");
            var Bulb = new Bulb ("LivingRoom");

            var Person = new Person (new SwitchOnAC (AC), new SwitchOnLight (Bulb));

            Person.WalksIn ();
            Person.WalksOut ();
        }
    }
}