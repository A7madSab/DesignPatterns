interface Command {
  execute(): void;
  unexecute(): void;
}

class Command1 implements Command {
  execute(): void {
    console.log("executing Command 1");
  }
  unexecute(): void {
    console.log("unexecuting Command 1");
  }
}

class Command2 implements Command {
  //if this command needs some parameters u must define here as attr and create a
  // function that featches this data
  private UserID: Number;

  constructor() {
    this.UserID = 0;
  }

  getNumber() {
    this.UserID = Math.floor(Math.random() * 100);
  }

  execute(): void {
    console.log(`executing Command 2 using ${this.UserID}`);
  }
  unexecute(): void {
    console.log(`unexecuting Command 2 using ${this.UserID}`);
  }
}

class Command3 implements Command {
  Name: String;
  constructor(name: String) {
    this.Name = name;
  }

  execute(): void {
    console.log(`executing Command 2 using ${this.Name}`);
  }
  unexecute(): void {
    console.log(`unexecuting Command 2 using ${this.Name}`);
  }
}

class Invoker {
  Command1: Command;
  Command2: Command;
  Command3: Command;
  constructor(Command1: Command1, Command2: Command2, Command3: Command3) {
    this.Command1 = Command1;
    this.Command2 = Command2;
    this.Command3 = Command3;
  }

  Execute() {
    this.Command1.execute();
    this.Command2.execute();
    this.Command3.execute();
  }
  unExecute() {
    this.Command3.unexecute();
    this.Command2.unexecute();
    this.Command1.unexecute();
  }
}

let invoker = new Invoker(
  new Command1(),
  new Command2(),
  new Command3("Ahmad")
);

invoker.Execute();
invoker.unExecute();
