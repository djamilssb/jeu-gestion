import { Resource } from "./resource";
import { worker } from "./worker";
import { typeResource } from "./typeResource";
export class Merchant {
    protected listSell : number[] = [0,0,0];
    protected min_q : number;
    protected max_q : number;
    constructor(min_q:number=0,max_q:number=6) {
        this.listSell[typeResource.MEAT] = 0;
        this.listSell[typeResource.FISH] = 0;
        this.listSell[typeResource.WHEAT] = 0;
        this.min_q = min_q;
        this.max_q = max_q;
    }
    public getListSell(): number[] {
      return this.listSell;
    }
    public RandomiseListSell(): void {
      this.listSell[typeResource.MEAT] = this.getrandval();
      this.listSell[typeResource.FISH] = this.getrandval();
      this.listSell[typeResource.WHEAT] = this.getrandval();
    }
    private getrandval():number {
      let r = Math.random();
      let res = Math.round(r * (this.max_q - this.min_q)) + this.min_q;
      return res;
    }
}