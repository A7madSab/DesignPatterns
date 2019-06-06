using System;

namespace Strategy {
    interface Strategy {
        void CalTime ();
    }

    class ByBus : Strategy {
        public void CalTime () {
            System.Console.WriteLine ("Calculate time if you used Bus");
        }
    }

    class ByCar : Strategy {
        public void CalTime () {
            System.Console.WriteLine ("Calculate time if you used Car");
        }
    }

    class ByTrain : Strategy {
        public void CalTime () {
            System.Console.WriteLine ("Calculate time if you used Train");
        }
    }

    class Tranporter {
        public Strategy Strategy { get; set; }
        public void SetStrategy (int method) {
            if (method == 1) {
                //this.Strategy = new ByBus ();
            } else if (method == 2) {
                this.Strategy = new ByTrain ();
            } else {
                this.Strategy = new ByCar ();
            }
        }
    }

    class Program {
        static void Main (string[] args) {
            Tranporter Tranporter = new Tranporter ();
            Tranporter.SetStrategy (2);
            Tranporter.Strategy.CalTime ();

            Tranporter.SetStrategy (1);
            Tranporter.Strategy.CalTime ();

            Tranporter.SetStrategy (3);
            Tranporter.Strategy.CalTime ();
        }
    }
}