export class Partener{
    CodPartener  : string;
    NumePartener   : string;
    CUI  : string;
    Email  : string;
    IDAdresa  : number;

    constructor(CodPartener  : string,
        NumePartener   : string,
        CUI  : string,
        Email  : string,
        IDAdresa  : number){
            this.CodPartener=CodPartener;
            this.NumePartener=NumePartener;
            this.CUI=CUI;
            this.Email=Email;
            this.IDAdresa=IDAdresa;
        }
}