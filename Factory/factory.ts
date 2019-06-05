class Burger {
  Name: String;
  Cost: number;
  constructor(Name: string, Cost: number) {
    this.Name = Name;
    this.Cost = Cost;
  }
  PrintB(): void {
    console.log(`Name: ${this.Name} Cost: ${this.Cost}`);
  }
}

class CheeseBurger extends Burger {
  Added: string;
  constructor(Name: string, Cost: number) {
    super(Name, Cost);
    this.Added = "Cheese";
  }
  PrintB(): void {
    console.log(`Name: ${this.Name} Cost: ${this.Cost} Added: ${this.Added}`);
  }
}
class MashroomBurger extends Burger {
  Added: string = "Mashroom";
  constructor(name: string, cost: number) {
    super(name, cost);
  }
  PrintB(): void {
    console.log(`Name: ${this.Name} Cost: ${this.Cost} Added: ${this.Added}`);
  }
}

class OnionBurger extends Burger {
  Added: string = "Onion";
  constructor(name: string, cost: number) {
    super(name, cost);
  }
  PrintB(): void {
    console.log(`Name: ${this.Name} Cost: ${this.Cost} Added: ${this.Added}`);
  }
}

interface Factory {
  CreateBuger(): Burger;
}

class CheeseBurgerFactory implements Factory {
  CreateBuger(): Burger {
    return new CheeseBurger("CheeseBurger", 5);
  }
}

class MashroomBurgerFactory implements Factory {
  CreateBuger(): Burger {
    return new MashroomBurger("MashroomBurger", 50);
  }
}
class OnionBurgerFactory implements Factory {
  CreateBuger(): Burger {
    return new OnionBurger("OnionBurger", 15);
  }
}

let CHFactory: MashroomBurgerFactory = new MashroomBurgerFactory();
let c = CHFactory.CreateBuger();
c.PrintB();
