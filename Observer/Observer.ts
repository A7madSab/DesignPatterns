interface IObserver {
  Update(MovieName: string): void;
}

interface IObservable {
  Observers: IObserver[];
  Notify(): void;
  Add(Iobserver: IObserver): void;
  Remove(Iobserver: IObserver): void;
}

class Movie implements IObservable {
  Observers: IObserver[];
  Name: string;

  constructor(name: string) {
    this.Name = name;
    this.Observers = new Array();
  }

  Add(Iobserver: IObserver): void {
    this.Observers.push(Iobserver);
  }

  Notify(): void {
    this.Observers.forEach(element => {
      element.Update(this.Name);
    });
  }

  Remove(Iobserver: IObserver): void {
    this.Observers = this.Observers.filter(obj => obj !== Iobserver);
  }
}

class User implements IObserver {
  Name: String;
  constructor(name: string) {
    this.Name = name;
  }
  Update(MovieName: string): void {
    console.log(`${this.Name} is being Notified that ${MovieName} is out`);
  }
}

const HomeAlone = new Movie("Home Alone");
const Ahmad = new User("Ahmad Sabry");
const Aly = new User("Aly Sabry");
const Sabry = new User("Sabry Aly");

HomeAlone.Add(Ahmad);
HomeAlone.Add(Aly);
HomeAlone.Add(Sabry);
HomeAlone.Remove(Ahmad);

HomeAlone.Notify();

let JohnWich = new Movie("John Wich");
JohnWich.Add(Ahmad);
JohnWich.Add(Aly);
JohnWich.Notify();
