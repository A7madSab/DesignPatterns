interface Beverage {
  Cost(): number;
  Description(): string;
}

class Coffee implements Beverage {
  Cost(): number {
    return 15;
  }
  Description(): string {
    return "Coffee";
  }
}

class Tea implements Beverage {
  Cost(): number {
    return 10;
  }
  Description(): string {
    return "Tea";
  }
}

class MilkDecorator implements Beverage {
  Beverage: Beverage;
  constructor(Beverage: Beverage) {
    this.Beverage = Beverage;
  }
  Cost(): number {
    return this.Beverage.Cost() + 3;
  }
  Description(): string {
    return this.Beverage.Description() + " Milk";
  }
}

// const tea = new Tea();
// console.log(`Cost: ${tea.Cost()} Description: ${tea.Description()}`);

// const TeaWithMilk = new MilkDecorator(tea);
// console.log(
//   `Cost: ${TeaWithMilk.Cost()} Description: ${TeaWithMilk.Description()}`
// );

// const TeaWithMilkWithMilk = new MilkDecorator(TeaWithMilk);
// console.log(
//   `Cost: ${TeaWithMilkWithMilk.Cost()} Description: ${TeaWithMilkWithMilk.Description()}`
// );
