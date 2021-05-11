import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSelectChange, MatSort, MatTableDataSource } from '@angular/material';
import { Proiect } from 'src/app/models/proiect.model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-table-proiecte',
  templateUrl: './table-proiecte.component.html',
  styleUrls: ['./table-proiecte.component.scss']
})
export class TableProiecteComponent implements OnInit {
  displayedColumns: string[] = ['idProiect', 'numeProiect', 'validDeLa', 'validPanaLa', 'activ'];
  dataSource: MatTableDataSource<Proiect>;
  public proiecteLista: any;
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
    this.proiecteLista=await this.getProiecteLista();
    this.dataSource = new MatTableDataSource( this.proiecteLista);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  async getProiecteLista(){
    var lista= await this.salesService.getProiecte(this.selectedConnection).toPromise();
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
