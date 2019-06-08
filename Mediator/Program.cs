using System;

namespace Mediators {
    public interface Tower {
        void Notify (Component c, string Message);
    }

    public class ConcreateTower : Tower {

        public ConcreateTower (Plane p, Worker w) {
            this.Plane = p;
            this.Plane.Tower = this;
            this.Worker = w;
            this.Worker.Tower = this;
        }
        private Plane Plane { get; set; }
        private Worker Worker { get; set; }
        public void Notify (Component c, string Message) {
            // what will the mediator do when it is notified
            // differs from each scenario 

            if (Message == "Plane Landed") {
                System.Threading.Thread.Sleep (5000);
                this.Worker.UnloadPlane ();
            }
            if (Message == "Plane Unloaded") {
                System.Threading.Thread.Sleep (5000);
                this.Plane.PlaneLand ();
            }
        }
    }

    public abstract class Component {
        public Tower Tower { get; set; }
    }

    public class Worker : Component {
        public void UnloadPlane () {
            System.Console.WriteLine ("Workers are Unloading Plain");
            this.Tower.Notify (this, "Plane Unloaded");
        }
    }

    public class Plane : Component {
        public void PlaneLand () {
            System.Console.WriteLine ("Plane Landed");
            this.Tower.Notify (this, "Plane Landed");
        }
    }

    class Program {
        static void Main (string[] args) {
            Plane P = new Plane ();
            Worker W = new Worker ();

            ConcreateTower Tower = new ConcreateTower (P, W);

            P.Tower = Tower;
            W.Tower = Tower;

            P.PlaneLand ();
        }
    }
}