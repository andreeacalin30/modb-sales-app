import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material';
import { LinieVanzare } from 'src/app/models/linie-vanzare.model';
import { Vanzare } from 'src/app/models/vanzare.model';
import { VanzareDTO } from 'src/app/models/vanzareDTO.model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-form-vanzari',
  templateUrl: './form-vanzari.component.html',
  styleUrls: ['./form-vanzari.component.scss']
})
export class FormVanzariComponent implements OnInit {

  public vanzareForm: FormGroup;
  public linieVanzare:FormGroup;
  public vanzatorLista: any;
  public sucursalaLista: any;
  public articolLista: any;
  public proiectLista: any;
  public partenerLista: any;
  public dbConnections=[
    {
      value: 'conn1'
    },{
       value: 'conn2'
    },{
       value: 'conn3'
    }
  ]
  public selectedConnection: any;

  async getVanzatoriLista(){
    var lista= await this.salesService.getVanzatori(this.selectedConnection).toPromise();
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

   selectedValue(event: MatSelectChange) {
      this.selectedConnection = event.value;
      console.log(this.selectedConnection);
  }


  dataVanzare: any;
  dataLivrareVanzare: any;
  public listaLiniiVanzari:LinieVanzare[];

  constructor( private formBuilder: FormBuilder, private salesService: SalesService) {

    this.vanzareForm = this.formBuilder.group({
      codPartener: ['', [Validators.required]],
      status: ['', [Validators.required]],
      data: ['', [Validators.required]],
      dataLivrare:['', [Validators.required]],
      total:['', [Validators.required]],
      vatVanzare:['', [Validators.required]],
      discountVanzare:['', [Validators.required]],
      moneda:['', [Validators.required]],
      platit:['', [Validators.required]],
      comentarii:['', [Validators.required]],
      codVanzator:['', [Validators.required]],
      idSucursala:['', [Validators.required]]
    });

    this.linieVanzare= this.formBuilder.group({
      codArticol: ['', [Validators.required]],
      cantitate: ['', [Validators.required]],
      pret: ['', [Validators.required]],
      discount:['', [Validators.required]],
      vat:['', [Validators.required]],
      idProiect:['', [Validators.required]]
    });
   }
  async ngOnInit() {
    this.listaLiniiVanzari=new Array<LinieVanzare>();
    this.proiectLista=await this.getProiecteLista();
    this.sucursalaLista=await this.getSucursaleLista();
    this.articolLista=await this.getArticoleLista();
    this.vanzatorLista=await this.getVanzatoriLista();
    this.partenerLista=await this.getParteneriLista();
  }

  makeid(length) {
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
    }

  adaugaLinieVanzare(){
        if(this.linieVanzare.valid){
        let totalLinie=this.calculTotalLinie(this.linieVanzare.get('pret').value, this.linieVanzare.get('discount').value, 
        this.linieVanzare.get('cantitate').value);
        let newId:number=+this.makeid(4);
        let newLinieVanzare=new LinieVanzare(newId,this.listaLiniiVanzari.length+1,this.linieVanzare.get('codArticol').value,
        this.linieVanzare.get('cantitate').value, this.linieVanzare.get('pret').value,
        this.linieVanzare.get('discount').value, this.linieVanzare.get('vat').value,
        totalLinie,this.linieVanzare.get('idProiect').value)
        this.listaLiniiVanzari.push(newLinieVanzare); 
        console.log( this.listaLiniiVanzari)
        this.vanzareForm.get('total').setValue(this.calculTotalFinal())
        }
  }

  parseDataLivrare(value: any){
    if (value) { 
      value = value.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/, function(match,y,m,d) { 
          return m + '/' + d + '/' + y;  
      }); 
    }
    this.dataLivrareVanzare=value
  }

  parseData(value: any){
    if (value) { 
      value = value.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/, function(match,y,m,d) { 
          return m + '/' + d + '/' + y;  
      }); 
    }
    this.dataVanzare=value
  }

  calculTotalLinie(pret, discount, cantitate){
    let total = (pret*119/100*cantitate)*(100-discount)/100
    return total
  }

  calculTotalFinal(){
    let suma=0;
    for(let i=0; i<this.listaLiniiVanzari.length; i++){
     suma+=this.listaLiniiVanzari[i].TotalLinie;
    }
    let total = suma*(100-this.vanzareForm.get('discountVanzare').value)/100 - this.vanzareForm.get('platit').value;
    return total;
  }

  adaugaVanzareFinala(){
    let vanzareDeBaza= new Vanzare(null,this.vanzareForm.get('codPartener').value,this.vanzareForm.get('status').value,
    this.dataVanzare,this.dataLivrareVanzare,this.calculTotalFinal(),
    this.vanzareForm.get('vatVanzare').value,this.vanzareForm.get('discountVanzare').value,this.vanzareForm.get('moneda').value,
    this.vanzareForm.get('platit').value,this.vanzareForm.get('comentarii').value,this.vanzareForm.get('codVanzator').value,
    this.vanzareForm.get('idSucursala').value)
    let vanzareFinala = new VanzareDTO(vanzareDeBaza, this.listaLiniiVanzari);
    this.salesService.postVanzare(vanzareFinala, this.selectedConnection).subscribe();
    console.log(vanzareFinala);
  }

}
