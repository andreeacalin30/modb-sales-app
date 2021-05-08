export class Proiect{
    IDProiect : string;
    NumeProiect    : string;
    ValidDeLa      : string;
    ValidPanaLa   : string;
    Activ         : string;

    constructor(IDProiect : string,
        NumeProiect    : string,
        ValidDeLa   : string,
        ValidPanaLa  : string,
        Activ  : string){
            this.IDProiect=IDProiect;
            this.NumeProiect=NumeProiect;
            this.ValidDeLa=ValidDeLa;
            this.ValidPanaLa=ValidPanaLa;
            this.Activ=Activ;
        }
}