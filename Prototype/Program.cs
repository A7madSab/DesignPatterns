using System;

namespace Prototype {
    public abstract class Shape {
        public int X { get; set; }
        public int Y { get; set; }
        public string Color { get; set; }

        public Shape () { }
        public Shape (Shape shape) {
            this.X = shape.X;
            this.Y = shape.Y;
            this.Color = shape.Color;
        }
        public abstract Shape Clone ();
    }

    // public class Reactangle : Shape {
    //     public int Width { get; set; }
    //     public int Height { get; set; }
    //     public Reactangle () { }
    //     public Reactangle (Reactangle reactangle) : base (Reactangle) {
    //         this.Width = reactangle.Width;
    //         this.Height = reactangle.Height;
    //     }
    //     public override Shape Clone () {
    //         return new Reactangle (this);
    //     }
    // }
    public class Circle : Shape {
        public int Radius { get; set; }
        public Circle () { }
        public Circle (Circle Circle) : base (Circle) {
            this.Radius = Circle.Radius;
        }
        public override Shape Clone () {
            Circle c = new Circle (this);
            return (Shape) c;
        }
    }

    class Prototype {
        static void Main (string[] args) {
            Circle Circle = new Circle ();
            Circle.X = 10;
            Circle.Y = 15;
            Circle.Color = "Red";
            Circle.Radius = 5;
            System.Console.WriteLine ("Circle 1 X, Y, Color, Radius" + Circle.X + " " + Circle.Y + " " + Circle.Color +
                " " + Circle.Radius);

            Circle newCircle = (Circle) Circle.Clone ();
            System.Console.WriteLine ("Circle 1 X, Y, Color, Radius" + newCircle.X + " " + newCircle.Y + " " + newCircle.Color +
                " " + newCircle.Radius);

        }
    }
}