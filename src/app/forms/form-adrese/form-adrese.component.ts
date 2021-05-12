import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material';
import { Adresa } from 'src/app/models/adresa.model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-form-adrese',
  templateUrl: './form-adrese.component.html',
  styleUrls: ['./form-adrese.component.scss']
})
export class FormAdreseComponent implements OnInit {

   public adreseForm: FormGroup;
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
  public selectedConnection: any;
  constructor( private formBuilder: FormBuilder, private salesService: SalesService) {

    this.adreseForm = this.formBuilder.group({
      numeAdresa: ['', [Validators.required]],
      oras: ['', [Validators.required]], 
      judet: ['', [Validators.required]],
      sector: ['', [Validators.required]],
      strada: ['', [Validators.required]],
      numar: ['', [Validators.required]],
      bloc: ['', [Validators.required]],
      etaj: ['', [Validators.required]]
    });
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

  selectedValue(event: MatSelectChange) {
    this.selectedConnection = event.value;
    console.log(this.selectedConnection);
}

adaugaAdresa(){
  if(this.adreseForm.valid){
    let adresa=new Adresa(null,this.adreseForm.get('numeAdresa').value,
    this.adreseForm.get('oras').value,this.adreseForm.get('judet').value,this.adreseForm.get('sector').value,
    this.adreseForm.get('strada').value,this.adreseForm.get('numar').value,this.adreseForm.get('bloc').value,
    this.adreseForm.get('etaj').value)
    console.log(adresa)
    this.salesService.postAdresa(adresa,  this.selectedConnection).subscribe(data=>{console.log(data)});  
  }
}
  ngOnInit() {

}

}
