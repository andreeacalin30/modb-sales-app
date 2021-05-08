import { Adresa } from './adresa.model';
import { Sucursala } from './sucursala.model';

export class SucursalaDTO{
    Sucursala: Sucursala;
    Adresa: Adresa;

    constructor( sucursala: Sucursala,
        adresa: Adresa){
            this.Sucursala=sucursala;
            this.Adresa=adresa;
        }
}