import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material';
import { Adresa } from 'src/app/models/adresa.model';
import { Partener } from 'src/app/models/partener.model';
import { PartenerDTO } from 'src/app/models/partenerDTO.model';
import { SalesService } from 'src/app/services/sales.service';
@Component({
  selector: 'app-form-parteneri',
  templateUrl: './form-parteneri.component.html',
  styleUrls: ['./form-parteneri.component.scss']
})
export class FormParteneriComponent implements OnInit {

  public parteneriForm: FormGroup;
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
  constructor( private formBuilder: FormBuilder, private salesService: SalesService) {

    this.parteneriForm = this.formBuilder.group({
      codPartener: ['', [Validators.required]],
      numePartener: ['', [Validators.required]],
      cui: ['', [Validators.required]],
      email: ['', [Validators.required]],
      numeAdresa: ['', [Validators.required]],
      oras: ['', [Validators.required]], 
      judet: ['', [Validators.required]],
      sector: ['', [Validators.required]],
      strada: ['', [Validators.required]],
      numar: ['', [Validators.required]],
      bloc: ['', [Validators.required]],
      etaj: ['', [Validators.required]]
    });
    
    this.parteneriForm.get('codPartener').setValue(this.makeid(10));
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

adaugaPartener(){
  if(this.parteneriForm.valid){
    let partener =new Partener(this.parteneriForm.get('codPartener').value, this.parteneriForm.get('numePartener').value,
    this.parteneriForm.get('cui').value, this.parteneriForm.get('email').value, null)
    let adresa=new Adresa(null,this.parteneriForm.get('numeAdresa').value,
    this.parteneriForm.get('oras').value,this.parteneriForm.get('judet').value,this.parteneriForm.get('sector').value,
    this.parteneriForm.get('strada').value,this.parteneriForm.get('numar').value,this.parteneriForm.get('bloc').value,
    this.parteneriForm.get('etaj').value)
    let partenerDTO = new PartenerDTO(partener, adresa);
    console.log(partenerDTO)
    this.salesService.postPartener(partenerDTO,  this.selectedConnection).subscribe(data=>{console.log(data)});  
  }
}
  ngOnInit() {
  }

}
