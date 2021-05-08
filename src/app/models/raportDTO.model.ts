export class RaportDTO{
    public NumeArticol: string;
    public NumePartener: string;
    public NumeSucursala: string;
    public CodVanzator: string;
    public DataStart: string;
    public DataEnd: string;

    constructor(NumeArticol: string, NumePartener: string,NumeSucursala: string,
        CodVanzator: string,DataStart: string,DataEnd: string){
            this.NumeArticol=NumeArticol
            this.NumePartener=NumePartener
            this.NumeSucursala=NumeSucursala
            this.CodVanzator=CodVanzator
            this.DataStart=DataStart
            this.DataEnd=DataEnd
    }
}