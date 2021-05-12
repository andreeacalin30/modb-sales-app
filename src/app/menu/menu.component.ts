import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  formularOptions:boolean = false;
  tabelOptions:boolean=false;
  rapoarteOptions:boolean=false;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  
  openFormularOptions(){
    this.formularOptions=!this.formularOptions;
  }

  openTableOptions(){
    this.tabelOptions=!this.tabelOptions;
  }

  openRapoarteOptions(){
    this.rapoarteOptions=!this.rapoarteOptions;
  }

  goToArticoleForm(){
    this.router.navigateByUrl('/form-articole');
  }

  goToAdreseForm(){
    this.router.navigateByUrl('/form-adrese');
  }

  goToParteneriForm(){
    this.router.navigateByUrl('/form-parteneri');
  }
  goToVanzatoriForm(){
    this.router.navigateByUrl('/form-vanzatori');
  }
  goToVanzariForm(){
    this.router.navigateByUrl('/form-vanzari');
  }
  goToSucursaleForm(){
    this.router.navigateByUrl('/form-sucursale');
  }
  goToProiecteForm(){
    this.router.navigateByUrl('/form-proiecte');
  }
  goToHomePage(){
    this.router.navigateByUrl('/');
  }
  goToArticoleTable(){
    this.router.navigateByUrl('/table-articole');
  }
  goToAdreseTable(){
    this.router.navigateByUrl('/table-adrese');
  }
  
  goToParteneriTable(){
    this.router.navigateByUrl('/table-parteneri');
  }
  goToVanzatoriTable(){
    this.router.navigateByUrl('/table-vanzatori');
  }
  goToVanzariTable(){
    this.router.navigateByUrl('/table-vanzari');
  }
  goToSucursaleTable(){
    this.router.navigateByUrl('/table-sucursale');
  }
  goToProiecteTable(){
    this.router.navigateByUrl('/table-proiecte');
  }
  goToRaportForm(){
    this.router.navigateByUrl('/form-rapoarte');
  }
  goToGrafice1(){
    this.router.navigateByUrl('/grafice1');
  }
  goToGrafice2(){
    this.router.navigateByUrl('/grafice2');
  }
}
