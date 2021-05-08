import { Adresa } from './adresa.model';
import { Vanzator } from './vanzator.model';

export class VanzatorDTO{
    Vanzator: Vanzator;
    Adresa: Adresa;

    constructor( vanzator: Vanzator,
        adresa: Adresa){
            this.Vanzator=vanzator;
            this.Adresa=adresa;
        }
}