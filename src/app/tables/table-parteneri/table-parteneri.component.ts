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
      value: 'conn1'
    },{
       value: 'conn2'
    },{
       value: 'conn3'
    }
  ]
  public defaultDB = 'conn1'
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
