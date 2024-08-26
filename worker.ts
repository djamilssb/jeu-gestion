import { Villager } from "./villager";
import { Resource } from "./resource";
export abstract class worker extends Villager {
    constructor() {
        super()
    }
    public abstract giveResource():Resource;
}