import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material';
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
  public selectedConnection: any;
  
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

   constructor( private formBuilder: FormBuilder, private salesService: SalesService) {

    this.articolForm = this.formBuilder.group({
      codArticol: ['', [Validators.required]],
      numeArticol: ['', [Validators.required]],
      codGrupa: ['', [Validators.required]],
      cantitateStoc: ['', [Validators.required]],
      idUnitateMasura:['', [Validators.required]]
    });
    
   }

   selectedValue(event: MatSelectChange) {
    this.selectedConnection = event.value;
    console.log(this.selectedConnection);
}

   async getUMLista(){
     //posibil sa hardcodam db-ul din care apeleaza
    var umLista= await this.salesService.getUM(this.selectedConnection).toPromise();
    return umLista
   }

   async getCodGrupeLista(){
      //posibil sa hardcodam db-ul din care apeleaza
    var lista= await this.salesService.getGrupeArticole(this.selectedConnection).toPromise();
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
    this.articolForm.get('cantitateStoc').value,this.articolForm.get('idUnitateMasura').value);
    console.log(newArticol)
    this.articolForm.get('codArticol').setValue(this.makeid(7));
    this.salesService.postArticol(newArticol,  this.selectedConnection).subscribe(data=>{console.log(data)});
  }
}

  async ngOnInit() {
    this.articolForm.get('codArticol').setValue(this.makeid(7));
    this.umLista=await this.getUMLista();
    this.grupeArticoleLista=await this.getCodGrupeLista();
    console.log( this.umLista)
  }

}
