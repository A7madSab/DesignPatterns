interface RouteStrategy {
  BuildRoute(): void;
}

class ByCar implements RouteStrategy {
  BuildRoute(): void {
    console.log("Get Route By Car");
  }
}

class ByBus implements RouteStrategy {
  BuildRoute(): void {
    console.log("Get Route By Bus");
  }
}
class ByTrain implements RouteStrategy {
  BuildRoute(): void {
    console.log("Get Route By Train");
  }
}

class Transporter {
  public method: RouteStrategy;

  public SetStrategy(StrategyType: number): void {
    if (StrategyType === 1) {
      this.method = new ByCar();
    } else if (StrategyType === 2) {
      this.method = new ByBus();
    } else {
      this.method = new ByTrain();
    }
  }
  public Print(): void {
    this.method.BuildRoute();
  }
}

let Transport = new Transporter();
Transport.SetStrategy(1);
Transport.Print();

Transport.SetStrategy(2);
Transport.Print();

Transport.SetStrategy(3);
Transport.Print();
