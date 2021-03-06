import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { LinieVanzare } from 'src/app/models/linie-vanzare.model';
import { Vanzare } from 'src/app/models/vanzare.model';
import { VanzareDTO } from 'src/app/models/vanzareDTO.model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-update-linie-vanzare',
  templateUrl: './update-linie-vanzare.component.html',
  styleUrls: ['./update-linie-vanzare.component.scss']
})
export class UpdateLinieVanzareComponent implements OnInit {

  public linieVanzare:FormGroup;
  public vanzatorLista: any;
  public sucursalaLista: any;
  public articolLista: any;
  public proiectLista: any;
  public partenerLista: any;
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

  async getVanzatoriLista(){
    var lista= await this.salesService.getVanzatori(this.selectedConnection).toPromise();
    return lista
   }

   async getSucursaleLista(){
    var lista= await this.salesService.getSucursale(this.selectedConnection).toPromise();
    return lista
   }

   async getArticoleLista(){
    var lista= await this.salesService.getArticole(this.selectedConnection).toPromise();
    return lista
   }

   async getProiecteLista(){
    var lista= await this.salesService.getProiecte(this.selectedConnection).toPromise();
    return lista
   }

   async getParteneriLista(){
    var lista= await this.salesService.getParteneri(this.selectedConnection).toPromise();
    return lista
   }


  dataVanzare: any;
  dataLivrareVanzare: any;
  public listaLiniiVanzari:LinieVanzare[];
  public vanzariLista: any;
  public liniiVanzari: any=[];
  public elemEditat: LinieVanzare;

  constructor( private route: ActivatedRoute,private router: Router, private formBuilder: FormBuilder, private salesService: SalesService) {
  this.selectedConnection=this.defaultDB;
    this.linieVanzare= this.formBuilder.group({
      codArticol: ['', [Validators.required]],
      cantitate: ['', [Validators.required]],
      pret: ['', [Validators.required]],
      discount:['', [Validators.required]],
      vat:['', [Validators.required]],
      idProiect:['', [Validators.required]]
    });
   }

    selectedValue(event: MatSelectChange) {
      this.selectedConnection = event.value;
      console.log(this.selectedConnection);
  }
  async ngOnInit() {
    let IDIntrare;
    let NumarLinie;
    this.route.queryParams
            .subscribe(params => {
              IDIntrare = params['IDIntrare'];
              NumarLinie = params['NumarLinie'];
            });
            console.log(NumarLinie)
    this.listaLiniiVanzari=new Array<LinieVanzare>();
    this.proiectLista=await this.getProiecteLista();
    this.articolLista=await this.getArticoleLista();

    this.vanzariLista=await this.getVanzariLista();
    console.log(this.vanzariLista[0].IDIntrare)
    for(let i=0; i<this.vanzariLista.length; i++){
      let liniiVanzare=await this.getLiniiByIdLista(this.vanzariLista[i].IDIntrare)
      for(let i=0; i<liniiVanzare.length; i++){
        if(liniiVanzare[i].IDIntrare==IDIntrare && liniiVanzare[i].NumarLinie==NumarLinie ){
         this.elemEditat=new LinieVanzare(liniiVanzare[i].IDIntrare,liniiVanzare[i].NumarLinie,liniiVanzare[i].CodArticol,
          liniiVanzare[i].Cantitate,
          liniiVanzare[i].Pret,liniiVanzare[i].Discount,liniiVanzare[i].VAT,liniiVanzare[i].TotalLinie,
          liniiVanzare[i].IDProiect)
            this.linieVanzare.get('codArticol').setValue(liniiVanzare[i].CodArticol);
            this.linieVanzare.get('cantitate').setValue(liniiVanzare[i].Cantitate);
            this.linieVanzare.get('pret').setValue(liniiVanzare[i].Pret);
            this.linieVanzare.get('discount').setValue(liniiVanzare[i].Discount);
            this.linieVanzare.get('vat').setValue(liniiVanzare[i].VAT);
            this.linieVanzare.get('idProiect').setValue(liniiVanzare[i].IDProiect);
        }
      }
    }
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

  editeazaLinieVanzare(){
        if(this.linieVanzare.valid){
        let totalLinie=this.calculTotalLinie(this.linieVanzare.get('pret').value, this.linieVanzare.get('discount').value, 
        this.linieVanzare.get('cantitate').value);
        let newLinieVanzare=new LinieVanzare(this.elemEditat.IDIntrare,this.elemEditat.NumarLinie,this.linieVanzare.get('codArticol').value,
        this.linieVanzare.get('cantitate').value, this.linieVanzare.get('pret').value,
        this.linieVanzare.get('discount').value, this.linieVanzare.get('vat').value,
        totalLinie,this.linieVanzare.get('idProiect').value)
        
        this.salesService.updateLinieVanzare(newLinieVanzare, this.selectedConnection).subscribe(data=>{console.log(data);
          this.router.navigateByUrl('/table-vanzari');});
        }
  }

  renunta(){
    this.router.navigateByUrl('/table-vanzari');
  }

  async getLinieVanzare(event:any, IdIntrare: string){
    var lista= await this.salesService.getVanzari(this.selectedConnection).toPromise();
    return lista
  }

  async getLiniiByIdLista(IdIntrare:any){
    var lista= await this.salesService.getLiniiVanzariByIdVanzare(IdIntrare,this.selectedConnection).toPromise();
    return lista
   }

   async getVanzariLista(){
    var lista= await this.salesService.getVanzari(this.selectedConnection).toPromise();
    return lista
   }

  calculTotalLinie(pret, discount, cantitate){
    let total = (pret*119/100*cantitate)*(100-discount)/100
    return total
  }


}
