export class LinieVanzare{
    IDIntrare : number;
    NumarLinie    : number;
    CodArticol   : string;
    Cantitate  : number;
    Pret  : number;
    Discount : number;
    VAT  : number;
    TotalLinie  : number;
    IDProiect  : string;

    constructor(IDIntrare : number,
        NumarLinie    : number,
        CodArticol   : string,
        Cantitate  : number,
        Pret  : number,
        Discount : number,
        VAT  : number,
        TotalLinie  : number,
        IDProiect  : string){
            this.IDIntrare=IDIntrare;
            this.NumarLinie=NumarLinie;
            this.CodArticol=CodArticol;
            this.Cantitate=Cantitate;
            this.Pret=Pret;
            this.VAT=VAT;
            this.Discount=Discount;
            this.TotalLinie=TotalLinie;
            this.IDProiect=IDProiect;
        }
}