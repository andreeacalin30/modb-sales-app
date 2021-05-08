import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Articol } from 'src/app/models/articol.model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-table-articol',
  templateUrl: './table-articol.component.html',
  styleUrls: ['./table-articol.component.scss']
})
export class TableArticolComponent implements OnInit {
  displayedColumns: string[] = ['codArticol', 'numeArticol', 'codGrupa', 'cantitateStoc', 'idUM'];
  dataSource: MatTableDataSource<Articol>;
  public articoleLista: any;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(private salesService: SalesService) { }

  async ngOnInit() {
    this.articoleLista=await this.getArticoleLista();
    this.dataSource = new MatTableDataSource( this.articoleLista);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  async getArticoleLista(){
    var lista= await this.salesService.getArticole().toPromise();
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
