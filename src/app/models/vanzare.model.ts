export class Vanzare{
    IDIntrare : number;
    CodPartener   : string;
    Status  : string;
    Data  : string;
    DataLivrare  : string;
    Total  : number;
    VAT  : number;
    Discount  : number;
    Moneda  : string;
    Platit  : number;
    Comentarii  : string;
    CodVanzator  : number;
    IDSucursala  : number;

    constructor( IDIntrare : number,
        CodPartener   : string,
        Status  : string,
        Data  : string,
        DataLivrare  : string,
        Total  : number,
        VAT  : number,
        Discount  : number,
        Moneda  : string,
        Platit  : number,
        Comentarii  : string,
        CodVanzator  : number,
        IDSucursala  : number){
            this.CodPartener=CodPartener;
            this.IDIntrare=IDIntrare;
            this.Status=Status;
            this.Data=Data;
            this.DataLivrare=DataLivrare;
            this.Total=Total;
            this.VAT=VAT;
            this.Discount=Discount;
            this.Moneda=Moneda;
            this.Platit=Platit;
            this.Comentarii=Comentarii;
            this.CodVanzator=CodVanzator;
            this.IDSucursala=IDSucursala;
        }
}