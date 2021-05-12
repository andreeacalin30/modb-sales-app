import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSelectChange, MatSort, MatTableDataSource } from '@angular/material';
import { Sucursala } from 'src/app/models/sucursala.model';
import { SucursalaDTO } from 'src/app/models/sucursalaDTO.model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-table-sucursale',
  templateUrl: './table-sucursale.component.html',
  styleUrls: ['./table-sucursale.component.scss']
})
export class TableSucursaleComponent implements OnInit {

  displayedColumns: string[] = ['idSucursala', 'numeSucursala', 'idAdresa'];
  dataSource: MatTableDataSource<Sucursala>;
  public sucursaleLista: any;
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
  }
  
  async ngOnInit() {
    this.fillTable();
  }

  async fillTable(){
    this.sucursaleLista=await this.getSucursaleLista();
    this.dataSource = new MatTableDataSource( this.sucursaleLista);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  async getSucursaleLista(){
    var lista= await this.salesService.getSucursale(this.selectedConnection).toPromise();
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
