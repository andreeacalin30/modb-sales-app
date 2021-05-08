export class Vanzator{
    CodVanzator   : number;
    Nume: string;
    Prenume  : string;
    SalariuBaza   : number;
    Comision      : number;
    Email         : string;
    IDAdresa  : number;

    constructor(CodVanzator   : number,
        Nume: string,
        Prenume  : string,
        SalariuBaza   : number,
        Comision      : number,
        Email         : string,
        IDAdresa  : number){
            this.CodVanzator=CodVanzator;
            this.Nume=Nume
            this.Prenume=Prenume
            this.SalariuBaza=SalariuBaza
            this.Comision=Comision
            this.Email=Email
            this.IDAdresa=IDAdresa
    }
}