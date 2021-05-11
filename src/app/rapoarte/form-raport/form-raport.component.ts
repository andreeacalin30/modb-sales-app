import { GridOptions, Module } from '@ag-grid-community/all-modules';
import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatPaginator, MatSelectChange, MatSort, MatTableDataSource } from '@angular/material';
import { RaportDTO } from 'src/app/models/raportDTO.model';
import { RaportValoriMediiDTO } from 'src/app/models/raportValoriMediiDTO.model';
import { RaportValoriNormaleDTO } from 'src/app/models/raportValoriNormaleDTO';
import { RaportValoriTotaleDTO } from 'src/app/models/raportValoriTotaleDTO.model';
import { SalesService } from 'src/app/services/sales.service';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { ErrorDialogComponent } from 'src/app/dialogs/error-dialog/error-dialog.component';
@Component({
  selector: 'app-form-raport',
  templateUrl: './form-raport.component.html',
  styleUrls: ['./form-raport.component.scss']
})
export class FormRaportComponent implements OnInit {

  public raportForm: FormGroup;
  public vanzatorLista: any;
  public sucursalaLista: any;
  public articolLista: any;
  public proiectLista: any;
  public partenerLista: any;
  dataStart: any;
  dataEnd: any;
  public valori:boolean;
  public valoriNormaleList:any;
  public valoriCombinateList:any;
  public valoriNormaleDTO:RaportValoriNormaleDTO;
  public valoriMediiDTO:RaportValoriMediiDTO;
  public valoriTotaleDTO:RaportValoriTotaleDTO;

  displayedColumns: string[] = ['pret', 'cantitate', 'vat', 'discount', 'platit', 'comision', 'volum', 'numarTranzactii'];
  dataSource: MatTableDataSource<any>;
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

  public afiseazaRaportLista=[{nume: "Valori normale"}, 
  {nume:"Media valorilor"},
  {nume: "Totalul valorilor"}]

  public defaultOption="Media valorilor";
   constructor( private dialog: MatDialog, private formBuilder: FormBuilder, private salesService: SalesService,private cdRef: ChangeDetectorRef) {
      this.valori=false;
    this.raportForm = this.formBuilder.group({
      numePartener: [''],
      numeSucursala: [''],
      numeArticol: [''],
      codVanzator: [''],
      dataStart:[''],
      dataEnd:[''],
      afiseazaRaport:['']
    });
    this.selectedConnection=this.defaultDB;
  };
    
    selectedValue(event: MatSelectChange) {
      this.selectedConnection = event.value;
      console.log(this.selectedConnection);
  }

   async getValoriCombinateRaport(raportDTO: RaportDTO){
    var lista= await this.salesService.getValoriCombinateRaport(raportDTO).toPromise();
    return lista
   }


   async getValoriRaport(raportDTO: RaportDTO){
    var lista= await this.salesService.getValoriRaport(raportDTO).toPromise();
    return lista
   }


   async getVanzatoriLista(){
    var lista= await this.salesService.getVanzatori( this.selectedConnection).toPromise();
    return lista
   }

   async getSucursaleLista(){
    var lista= await this.salesService.getSucursale( this.selectedConnection).toPromise();
    return lista
   }

   async getArticoleLista(){
    var lista= await this.salesService.getArticole( this.selectedConnection).toPromise();
    return lista
   }

   async getProiecteLista(){
    var lista= await this.salesService.getProiecte( this.selectedConnection).toPromise();
    return lista
   }

   async getParteneriLista(){
    var lista= await this.salesService.getParteneri( this.selectedConnection).toPromise();
    return lista
   }

  async ngOnInit() {
    this.proiectLista=await this.getProiecteLista();
    this.sucursalaLista=await this.getSucursaleLista();
    this.articolLista=await this.getArticoleLista();
    this.vanzatorLista=await this.getVanzatoriLista();
    this.partenerLista=await this.getParteneriLista();
  }

  parseDataStart(value: any){
    if (value) { 
      value = value.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/, function(match,y,m,d) { 
          return m + '/' + d + '/' + y;  
      }); 
    }
    this.dataStart=value
  }

  parseDataEnd(value: any){
    if (value) { 
      value = value.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/, function(match,y,m,d) { 
          return m + '/' + d + '/' + y;  
      }); 
    }
    this.dataEnd=value
  }
  
  async afiseazaRaport(){

    
      this.valori=true;
      let numePartener=this.raportForm.get('numePartener').value!=""?this.raportForm.get('numePartener').value:""
      let numeSucursala=this.raportForm.get('numeSucursala').value!=""?this.raportForm.get('numeSucursala').value:""
      let numeArticol=this.raportForm.get('numeArticol').value!=""?this.raportForm.get('numeArticol').value:""
      let codVanzator=this.raportForm.get('codVanzator').value!=""?this.raportForm.get('codVanzator').value:""
      let dataStart=this.raportForm.get('dataStart').value!=""?this.dataStart:""
      let dataEnd=this.raportForm.get('dataEnd').value!=""?this.dataEnd:""
      if(numePartener!=""||numeSucursala!=""||numeArticol!=""||codVanzator!=""||
      dataStart!=""||dataEnd!=""){
      let raportDTO=new RaportDTO(numeArticol,numePartener,numeSucursala,codVanzator,dataStart,dataEnd);
      this.valoriNormaleList=await this.getValoriRaport(raportDTO);
      this.valoriCombinateList=await this.getValoriCombinateRaport(raportDTO);
      let valoriMedii=[]
      valoriMedii.push(this.valoriCombinateList[1])
      let valoriTotale=[]
      valoriTotale.push(this.valoriCombinateList[0])
      console.log(this.valoriNormaleList)
      if(this.raportForm.get('afiseazaRaport').value=="Valori normale"){
        this.dataSource = new MatTableDataSource( this.valoriNormaleList);
        this.dataSource.paginator = this.paginator;
      } else if(this.raportForm.get('afiseazaRaport').value=="Media valorilor"){
        this.dataSource = new MatTableDataSource(valoriMedii );
        this.dataSource.paginator = this.paginator;
      } else if(this.raportForm.get('afiseazaRaport').value=="Totalul valorilor"){
        this.dataSource = new MatTableDataSource(valoriTotale);
        this.dataSource.paginator = this.paginator;
      }
    } else {
      let dialogRef = this.dialog.open(ErrorDialogComponent);
    }
    
  }

  ngAfterViewInit() {
    
  }

}
