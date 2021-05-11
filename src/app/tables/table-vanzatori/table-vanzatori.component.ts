import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSelectChange, MatSort, MatTableDataSource } from '@angular/material';
import { Articol } from 'src/app/models/articol.model';
import { Vanzator } from 'src/app/models/vanzator.model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-table-vanzatori',
  templateUrl: './table-vanzatori.component.html',
  styleUrls: ['./table-vanzatori.component.scss']
})
export class TableVanzatoriComponent implements OnInit {
  displayedColumns: string[] = ['codVanzator', 'numeVanzator', 'prenume', 'salariuBaza', 'comision','email','idAdresa'];
  dataSource: MatTableDataSource<Vanzator>;
  public vanzatoriLista: any;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
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
  constructor(private salesService: SalesService) { }

  async ngOnInit() {
    this.fillTable();
  }

  async fillTable(){
    this.vanzatoriLista=await this.getVanzatoriLista();
    this.dataSource = new MatTableDataSource( this.vanzatoriLista);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  selectedValue(event: MatSelectChange) {
        this.selectedConnection = event.value;
        console.log(this.selectedConnection);
        this.fillTable();
    }

  async getVanzatoriLista(){
    var lista= await this.salesService.getVanzatori( this.selectedConnection).toPromise();
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
