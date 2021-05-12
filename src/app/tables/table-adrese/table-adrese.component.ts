import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSelectChange, MatSort, MatTableDataSource } from '@angular/material';
import { Adresa } from 'src/app/models/adresa.model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-table-adrese',
  templateUrl: './table-adrese.component.html',
  styleUrls: ['./table-adrese.component.scss']
})
export class TableAdreseComponent implements OnInit {

  displayedColumns: string[] = ['idAdresa', 'numeAdresa', 'oras', 'judet', 'sector', 'strada', 'numar', 'bloc', 'etaj'];
  dataSource: MatTableDataSource<Adresa>;
  public adreseLista: any;
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
    this.adreseLista=await this.getParteneriLista();
    this.displayedColumns = []
 
      if(this.adreseLista[0].IDAdresa!=""){
         this.displayedColumns.push('idAdresa')
      }  if(this.adreseLista[0].NumeAdresa!=""){
         this.displayedColumns.push('numeAdresa')
      }  if(this.adreseLista[0].Oras!=""){
         this.displayedColumns.push('oras')
      } if(this.adreseLista[0].Judet!=""){
         this.displayedColumns.push('judet')
      } if(this.adreseLista[0].Sector!=""){
         this.displayedColumns.push('sector')
      }if(this.adreseLista[0].Strada!=""){
         this.displayedColumns.push('strada')
      }if(this.adreseLista[0].Numar!=""){
         this.displayedColumns.push('numar')
      }if(this.adreseLista[0].Bloc!=""){
         this.displayedColumns.push('bloc')
      }if(this.adreseLista[0].Etaj!=""){
         this.displayedColumns.push('etaj')
      }

    console.log(this.displayedColumns)
    this.dataSource = new MatTableDataSource( this.adreseLista);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  async getParteneriLista(){
    var lista= await this.salesService.getAdrese(this.selectedConnection).toPromise();
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
