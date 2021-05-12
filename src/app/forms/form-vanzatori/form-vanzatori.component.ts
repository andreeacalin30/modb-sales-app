import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material';
import { Adresa } from 'src/app/models/adresa.model';
import { Vanzator } from 'src/app/models/vanzator.model';
import { VanzatorDTO } from 'src/app/models/vanzatorDTO.model';
import { SalesService } from 'src/app/services/sales.service';
@Component({
  selector: 'app-form-vanzatori',
  templateUrl: './form-vanzatori.component.html',
  styleUrls: ['./form-vanzatori.component.scss']
})
export class FormVanzatoriComponent implements OnInit {
  public vanzatoriForm: FormGroup;
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

    this.vanzatoriForm = this.formBuilder.group({
      numeVanzator: ['', [Validators.required]],
      prenumeVanzator: ['', [Validators.required]],
      salariuBaza: ['', [Validators.required]],
      comision: ['', [Validators.required]],
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
   }

   selectedValue(event: MatSelectChange) {
      this.selectedConnection = event.value;
      console.log(this.selectedConnection);
  }

   adaugaVanzator(){
     let vanzator=new Vanzator(null,this.vanzatoriForm.get('numeVanzator').value,
     this.vanzatoriForm.get('prenumeVanzator').value,this.vanzatoriForm.get('salariuBaza').value,this.vanzatoriForm.get('comision').value,
     this.vanzatoriForm.get('email').value,null)
     let adresa= new Adresa(null,this.vanzatoriForm.get('numeAdresa').value,
     this.vanzatoriForm.get('oras').value,this.vanzatoriForm.get('judet').value,this.vanzatoriForm.get('sector').value,
     this.vanzatoriForm.get('strada').value,this.vanzatoriForm.get('numar').value,this.vanzatoriForm.get('bloc').value,
     this.vanzatoriForm.get('etaj').value)
     let vanzatorDTO=new VanzatorDTO(vanzator, adresa);
     this.salesService.postVanzator(vanzatorDTO, this.selectedConnection).subscribe(data=>{console.log(data)})
   }
  ngOnInit() {
  }

}
