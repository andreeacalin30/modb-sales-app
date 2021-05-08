export class Articol{
    CodArticol       : string;
    NumeArticol         : string;
    CodGrupa              : number;
    CantitateStoc      : number;
    IDUnitateMasura         : number;

    constructor(CodArticol : string,
        NumeArticol    : string,
        CodGrupa   : number,
        CantitateStoc  : number,
        IDUnitateMasura  : number){
            this.CodArticol=CodArticol;
            this.NumeArticol=NumeArticol;
            this.CodGrupa=CodGrupa;
            this.CantitateStoc=CantitateStoc;
            this.IDUnitateMasura=IDUnitateMasura;
        }
}