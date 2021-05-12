import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material';
import { Adresa } from 'src/app/models/adresa.model';
import { Sucursala } from 'src/app/models/sucursala.model';
import { SucursalaDTO } from 'src/app/models/sucursalaDTO.model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-form-sucursale',
  templateUrl: './form-sucursale.component.html',
  styleUrls: ['./form-sucursale.component.scss']
})
export class FormSucursaleComponent implements OnInit {
  public sucursalaForm: FormGroup;
  foods= [
    {value: '1'},
    {value: '2'},
    {value: '3'}
  ];
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

    this.sucursalaForm = this.formBuilder.group({
      numeSucursala: ['', [Validators.required]],
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

   adaugaSucursala(){
     let sucursala=new Sucursala(null,this.sucursalaForm.get('numeSucursala').value,
     null)
     let adresa= new Adresa(null,this.sucursalaForm.get('numeAdresa').value,
     this.sucursalaForm.get('oras').value,this.sucursalaForm.get('judet').value,this.sucursalaForm.get('sector').value,
     this.sucursalaForm.get('strada').value,this.sucursalaForm.get('numar').value,this.sucursalaForm.get('bloc').value,
     this.sucursalaForm.get('etaj').value)
     let sucursalaDTO=new SucursalaDTO(sucursala, adresa);
     this.salesService.postSucursala(sucursalaDTO, this.selectedConnection).subscribe(data=>{console.log(data)})
   }

  ngOnInit() {
  }

}
