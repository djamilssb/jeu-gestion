import { Resource } from "./resource";
import { typeResource } from "./typeResource";
import { worker } from "./worker";

export class Hunter extends worker {
    constructor() {
      super();
    }
    override giveResource(): Resource {
      let resource : Resource = new Resource(typeResource.MEAT,2);
      return resource
    }
  }