import { Villager } from "./villager";
import { Resource } from "./resource";
import { Merchant } from "./merchant";
import { Fisher } from "./fisherman";
import { worker } from "./worker";
import { Farmer } from "./farmer";
import { Hunter } from "./hunter";

export class Village {
    protected gold : number;
    protected workers : worker[];
    protected merchants : Merchant[];
    protected ressources : Resource[];
    protected nb_days : number;


    constructor(gold:number) {
        this.gold = gold;
        this.nb_days = 0;
        this.workers = [];
        this.ressources = [];
    }

    displayAll():void{
        
    }
    
    runDay():void{

    }

    public createVillager(v_type:string): void {
        switch (v_type) {
            case "f" :
                let fisherman : Fisher = new Fisher();
                this.workers.push(fisherman);
                break ;

            case "fa" :
                let farmer : Farmer = new Farmer();
                this.workers.push(farmer);
                break ;

            case "h" :
                let hunter : Hunter = new Hunter();
                this.workers.push(hunter);
                break ;

            case "m" :
                let merchant = new Merchant(0,6);
                this.merchants.push(merchant);
                break ;
        }
    }
}