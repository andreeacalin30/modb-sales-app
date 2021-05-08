export class Adresa{
    IDAdresa      : number;
    NumeAdresa : string;
    Oras  : string;
    Judet  : string;
    Sector : string;
    Strada  : string;
    Numar: string;
    Bloc : string;
    Etaj : number;

    constructor(IDAdresa : number,
        NumeAdresa : string,
        Oras  : string,
        Judet  : string,
        Sector : string,
        Strada  : string,
        Numar: string,
        Bloc : string,
        Etaj : number){
            this.IDAdresa=IDAdresa;
            this.NumeAdresa=NumeAdresa
            this.Oras=Oras
            this.Judet=Judet
            this.Sector=Sector
            this.Strada=Strada
            this.Numar=Numar
            this.Bloc=Bloc
            this.Etaj=Etaj
    }
}