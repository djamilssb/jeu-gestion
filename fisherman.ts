import { Resource } from "./resource";
import { worker } from "./worker";
import { typeResource } from "./typeResource";

export class Fisher extends worker {
    constructor() {
      super();
    }
    override giveResource(): Resource {
      let resource : Resource = new Resource(typeResource.FISH,1);
      return resource
    }
}