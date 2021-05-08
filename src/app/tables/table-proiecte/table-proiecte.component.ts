import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
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

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(private salesService: SalesService) { }

  async ngOnInit() {
    this.proiecteLista=await this.getProiecteLista();
    this.dataSource = new MatTableDataSource( this.proiecteLista);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  async getProiecteLista(){
    var lista= await this.salesService.getProiecte().toPromise();
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
