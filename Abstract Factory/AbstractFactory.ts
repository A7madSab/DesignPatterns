interface PCFactory {
  GetProcessor(): IProcessor;
  GetRam(): IRam;
  GetHardDrive(): IHardDrive;
}

class CreateCheapPC implements PCFactory {
  GetProcessor(): IProcessor {
    return new CheapProcessor();
  }
  GetRam(): IRam {
    return new CheapRam();
  }
  GetHardDrive(): IHardDrive {
    return new CheapHardDrive();
  }
}

class CreateExpensivePC implements PCFactory {
  GetProcessor(): IProcessor {
    return new ExpensiveProcessor();
  }
  GetRam(): IRam {
    return new ExpensiveRam();
  }
  GetHardDrive(): IHardDrive {
    return new ExpensiveHardDrive();
  }
}

interface IProcessor {}
class CheapProcessor implements IProcessor {
  constructor() {
    console.log("CheapProcessor");
  }
}
class ExpensiveProcessor implements IProcessor {
  constructor() {
    console.log("ExpensiveProcessor");
  }
}

interface IRam {}
class CheapRam implements IRam {
  constructor() {
    console.log("CheapProcessor");
  }
}
class ExpensiveRam implements IRam {
  constructor() {
    console.log("ExpensiveProcessor");
  }
}

interface IHardDrive {}
class CheapHardDrive implements IHardDrive {
  constructor() {
    console.log("Cheap Hard Drive");
  }
}
class ExpensiveHardDrive implements IHardDrive {
  constructor() {
    console.log("ExpensiveHard Drive");
  }
}

let cheapPCCreator = new CreateCheapPC();
cheapPCCreator.GetRam();
cheapPCCreator.GetHardDrive();
cheapPCCreator.GetProcessor();

let ExpensivePCCreator: CreateExpensivePC = new CreateExpensivePC();
ExpensivePCCreator.GetRam();
ExpensivePCCreator.GetHardDrive();
ExpensivePCCreator.GetProcessor();
