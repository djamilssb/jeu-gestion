import { question } from "readline-sync";
import { Villager } from "./villager";
import { Hunter } from "./hunter";
import { Fisher } from "./fisherman";
import { Farmer } from "./farmer";
import { Village } from "./village";

export class Game {
    protected isRunning : boolean = false;
    protected village : Village ;

    constructor() {
        this.village = new Village(15);
    }

    protected showInfos():void{
    }

    protected showSells():void{
    }

    
    protected help():void{
    }
    
    protected pass():void{
    }

    protected quit():void{
    }
    
    
    protected createVillager():void{
    }
    
    public Run(): void {
        this.isRunning = true;
        this.Gameloop();
    }

    public Gameloop() : void {
        
        while (this.isRunning == true) {
            let command : string = question("command");
            if (command =="quit") {
                this.isRunning = false;
            }
            else if (command=="help") {
                this.help();
            }
            else if (command=="showInfos") {
                this.showInfos();
            }
            else if (command=="pass") {
                this.pass();
            }
            else if (command=="showSells") {
                this.showSells();
            }
            else {
                let params:string[] = command.split(" ") ;
                if (params[0]=="createVillager") {
                    let tab:string[]= ["f","fa","h","m"]
                    for (let i=0; i< tab.length; i++) {
                        if (params[1]==tab[i]) {

                        }
                    }
                } 
            }
        }
    }
};