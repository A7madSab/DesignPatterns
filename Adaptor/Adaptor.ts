interface IOldService {
  DrawGraphs(): string;
}

interface INewService {
  DrawBetterGraphs(): string;
}

class XmlSerevrs implements IOldService {
  public DrawGraphs(): string {
    return "Default XML Graphs are Drawn";
  }
}

class JsonServers implements INewService {
  public DrawBetterGraphs(): string {
    return "Better Json Graphs are Drawn";
  }
}

class Adaptor extends XmlSerevrs {
  NewService: INewService;
  constructor(NewService: INewService) {
    super();
    this.NewService = NewService;
  }
  Request(): string {
    return this.NewService.DrawBetterGraphs();
  }
}

let xml = new XmlSerevrs();
let json = new JsonServers();

const adaptor = new Adaptor(json);
console.log(adaptor.DrawGraphs());
console.log(adaptor.Request());
