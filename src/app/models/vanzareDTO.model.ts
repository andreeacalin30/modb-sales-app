import { LinieVanzare } from "./linie-vanzare.model";
import { Vanzare } from "./vanzare.model";

export class VanzareDTO{
    Vanzare: Vanzare;
    LiniiVanzare: LinieVanzare[];

    constructor( vanzare: Vanzare,
        liniiVanzari: LinieVanzare[]){
            this.Vanzare=vanzare;
            this.LiniiVanzare=liniiVanzari;
        }
}