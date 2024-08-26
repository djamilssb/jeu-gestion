import { Resource } from "./resource";
import { worker } from "./worker";
import { typeResource } from "./typeResource";

export class Farmer extends worker {
    constructor() {
      super();
    }
    override giveResource(): Resource {
      let resource : Resource = new Resource(typeResource.WHEAT,1);
      return resource
    }
}