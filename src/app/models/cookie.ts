import { Color } from "./colors.enum";

export class Cookie{
    id: number;
    name : string;
    color: Color;
    ChipNum : number;


constructor(id:number, name:string) {
    this.id = id;
    this.name = name;
    this.color = Color.Brown;
    this.ChipNum = 0;
}

}

