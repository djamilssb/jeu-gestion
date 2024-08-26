import { typeResource } from "./typeResource";
export class Resource {
    protected price: number;
    protected type : typeResource;

    constructor(type : typeResource,price:number) {
      this.type = type;
      this.price = price;
    }
    
    public getName():typeResource {
      return this.type;
    }
    
    public setName(type : typeResource):void {
      this.type = type;
    }
    
    public getPrice():number {
      return this.price;
    }
    
    public setPrice(price:number):void {
      this.price = price;
    }

    public getType(type:typeResource):typeResource{
      return this.type
    }
  }