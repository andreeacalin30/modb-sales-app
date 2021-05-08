import { Adresa } from "./adresa.model";
import { Partener } from "./partener.model";

export class PartenerDTO {
    Partener: Partener;
    Adresa: Adresa

    constructor( partener: Partener,
        adresa: Adresa){
            this.Partener=partener;
            this.Adresa=adresa;
        }
}