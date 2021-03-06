import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSelectChange, MatSort, MatTableDataSource } from '@angular/material';
import { Partener } from 'src/app/models/partener.model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-table-parteneri',
  templateUrl: './table-parteneri.component.html',
  styleUrls: ['./table-parteneri.component.scss']
})
export class TableParteneriComponent implements OnInit {
  displayedColumns: string[] = ['codPartener', 'numePartener', 'cui', 'email', 'idAdresa'];
  dataSource: MatTableDataSource<Partener>;
  public parteneriLista: any;
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
  constructor(private salesService: SalesService) {
     this.selectedConnection=this.defaultDB;
   }

   selectedValue(event: MatSelectChange) {
      this.selectedConnection = event.value;
      console.log(this.selectedConnection);
      this.fillTable();
  }

  async ngOnInit() {
    this.fillTable();
  }

  async fillTable(){
    this.parteneriLista=await this.getParteneriLista();
    this.displayedColumns = []
 
      if(this.parteneriLista[0].CodPartener!=""){
         this.displayedColumns.push('codPartener')
      }  if(this.parteneriLista[0].NumePartener!=""){
         this.displayedColumns.push('numePartener')
      }  if(this.parteneriLista[0].CUI!=""){
         this.displayedColumns.push('cui')
      } if(this.parteneriLista[0].Email!=""){
         this.displayedColumns.push('email')
      } if(this.parteneriLista[0].IDAdresa!=""){
         this.displayedColumns.push('idAdresa')
      }
    console.log(this.displayedColumns)
    this.dataSource = new MatTableDataSource( this.parteneriLista);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  async getParteneriLista(){
    var lista= await this.salesService.getParteneri(this.selectedConnection).toPromise();
    return lista
   }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
