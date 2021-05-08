import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Articol } from 'src/app/models/articol.model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-form-articol',
  templateUrl: './form-articol.component.html',
  styleUrls: ['./form-articol.component.scss']
})
export class FormArticolComponent implements OnInit {
  public articolForm: FormGroup;
  public umLista:any;
  public grupeArticoleLista:any;
   constructor( private formBuilder: FormBuilder, private salesService: SalesService) {

    this.articolForm = this.formBuilder.group({
      codArticol: ['', [Validators.required]],
      numeArticol: ['', [Validators.required]],
      codGrupa: ['', [Validators.required]],
      cantitateStoc: ['', [Validators.required]],
      idUnitateMasura:['', [Validators.required]]
    });
    
   }

   async getUMLista(){
    var umLista= await this.salesService.getUM().toPromise();
    return umLista
   }

   async getCodGrupeLista(){
    var lista= await this.salesService.getGrupeArticole().toPromise();
    return lista
   }

   makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
    }

adaugaArticol(){
  if(this.articolForm.valid){
    let newArticol=new Articol(this.articolForm.get('codArticol').value,this.articolForm.get('numeArticol').value,this.articolForm.get('codGrupa').value,
    this.articolForm.get('cantitateStoc').value,this.articolForm.get('idUnitateMasura').value)
    console.log(newArticol)
    this.articolForm.get('codArticol').setValue(this.makeid(7));
    this.salesService.postArticol(newArticol).subscribe(data=>{console.log(data)});
  }
}

  async ngOnInit() {
    this.articolForm.get('codArticol').setValue(this.makeid(7));
    this.umLista=await this.getUMLista();
    this.grupeArticoleLista=await this.getCodGrupeLista();
    console.log( this.umLista)
  }

}
