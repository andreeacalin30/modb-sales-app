import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material';
import { Proiect } from 'src/app/models/proiect.model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-form-proiecte',
  templateUrl: './form-proiecte.component.html',
  styleUrls: ['./form-proiecte.component.scss'],
  
})
export class FormProiecteComponent implements OnInit {
  public proiectForm: FormGroup;
  validDeLa: any;
  validPanaLa: any;
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
  constructor( private formBuilder: FormBuilder, private salesService:SalesService) {

    this.proiectForm = this.formBuilder.group({
      idProiect: ['', [Validators.required]],
      numeProiect: ['', [Validators.required]],
      validDeLa: ['', [Validators.required]],
      validPanaLa: ['', [Validators.required]],
      activ: ['', [Validators.required]]
    });

    this.proiectForm.get('idProiect').setValue(this.makeid(8));
   }
  ngOnInit() {
  }

  selectedValue(event: MatSelectChange) {
    this.selectedConnection = event.value;
    console.log(this.selectedConnection);
}

  adaugaProiect(){
    let proiect=new Proiect(this.proiectForm.get('idProiect').value, this.proiectForm.get('numeProiect').value,
    this.validDeLa,this.validPanaLa,
    this.proiectForm.get('activ').value)
    this.salesService.postProiect(proiect, this.selectedConnection).subscribe(data=>{console.log(data)})
  }

  parseValidDeLa(value: any){
    if (value) { 
      value = value.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/, function(match,y,m,d) { 
          return m + '/' + d + '/' + y;  
      }); 
    }
    this.validDeLa=value
  }

  parseValidPanaLa(value: any){
    if (value) { 
      value = value.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/, function(match,y,m,d) { 
          return m + '/' + d + '/' + y;  
      }); 
    }
    this.validPanaLa=value
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

  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    }
    return null;
}

}
