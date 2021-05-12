import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSelectChange, MatSort, MatTableDataSource } from '@angular/material';
import { GeneralDialogComponent } from 'src/app/dialogs/general-dialog/general-dialog.component';
import { Vanzare } from 'src/app/models/vanzare.model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-table-vanzari',
  templateUrl: './table-vanzari.component.html',
  styleUrls: ['./table-vanzari.component.scss']
})
export class TableVanzariComponent implements OnInit {

  displayedColumns: string[] = ['idIntrare','status', 'data', 'dataLivrare', 'discount','moneda','platit','total', 'comentarii'];
  dataSource: MatTableDataSource<Vanzare>;
  public vanzariLista: any;
  public liniiVanzari: any=[];

  public dbConnections=[
    {
      value: 'global'
    },{
       value: 'local1'
    },{
       value: 'local2'
    },{
       value: 'local3'
    },{
       value: 'local4'
    }
  ]
  public defaultDB = 'global'
  public selectedConnection: any;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(private salesService: SalesService, private dialog:MatDialog) { 
    this.selectedConnection=this.defaultDB;
  }

  isExpansionDetailRow = (row: any) => row.hasOwnProperty('detailRow');

  async ngOnInit() {
   this.fillTable();
  }

  async fillTable(){
     this.incarcaLiniiTabel();
   
    this.dataSource = new MatTableDataSource( this.vanzariLista);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  selectedValue(event: MatSelectChange) {
      this.selectedConnection = event.value;
      console.log(this.selectedConnection);
      this.fillTable();
  }

  async incarcaLiniiTabel(){
    this.vanzariLista=await this.getVanzariLista();
    console.log(this.vanzariLista)
    for(let i=0; i<this.vanzariLista.length; i++){
      let liniiVanzare=await this.getLiniiByIdLista(this.vanzariLista[i].IDIntrare)
      this.liniiVanzari.push(liniiVanzare);
    }
    console.log( this.liniiVanzari)
  }

  async getVanzariLista(){
    var lista= await this.salesService.getVanzari(this.selectedConnection).toPromise();
    return lista
   }

   editLinieVanzare(event: any, IDIntrare: any, NumarLinie: any){
      window.open("update-linieVanzare?IDIntrare=" + IDIntrare + "&NumarLinie=" + NumarLinie);
   }

   deleteLinieVanzare(event: any, IDIntrare: any, NumarLinie: any){
    let dialogRef = this.dialog.open(GeneralDialogComponent);

     dialogRef.componentInstance.onOk.subscribe(() => {
      this.salesService.deleteLinieVanzare(IDIntrare, NumarLinie, this.selectedConnection).subscribe(data=>{console.log(data);
        this.liniiVanzari=[];
        this.incarcaLiniiTabel();})
      });
 }

  async getLinieVanzare(event:any, IdIntrare: string){
    var lista= await this.salesService.getVanzari(this.selectedConnection).toPromise();
    return lista
  }

  async getLiniiByIdLista(IdIntrare:any){
    var lista= await this.salesService.getLiniiVanzariByIdVanzare(IdIntrare, this.selectedConnection).toPromise();
    return lista
   }
}
