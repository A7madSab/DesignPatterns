class Singleton {
  private static Instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.Instance) {
      console.log("new");
      return (Singleton.Instance = new Singleton());
    }
    console.log("old");
    return Singleton.Instance;
  }
}

Singleton.getInstance();
Singleton.getInstance();
