abstract class BuildHouse {
  public BuildFoundation(): void {
    console.log("Put Foundations");
  }
  public abstract BuildWalls(): void;
  public abstract PutWindows(): void;
  public abstract PutDoors(): void;

  public TemplateMethod(): void {
    this.BuildFoundation();
    this.BuildWalls();
    this.PutWindows();
    this.PutDoors();
  }
}

class BuildVilla extends BuildHouse {
  public BuildWalls(): void {
    console.log("Put Villa Walls");
  }
  public PutWindows(): void {
    console.log("Put Villa Windows.");
  }
  public PutDoors(): void {
    console.log("Put Villa Doors.");
  }
}

class BuildAppartment extends BuildHouse {
  public BuildWalls(): void {
    console.log("Put flat Walls");
  }
  public PutWindows(): void {
    console.log("Put flat Windows.");
  }
  public PutDoors(): void {
    console.log("Put flat Doors.");
  }
}

let Appartment = new BuildAppartment();
Appartment.TemplateMethod();
console.log("<br>");
let Villa = new BuildVilla();
Appartment.TemplateMethod();
