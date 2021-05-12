import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormArticolComponent } from './forms/form-articol/form-articol.component';
import { FormParteneriComponent } from './forms/form-parteneri/form-parteneri.component';
import { FormVanzatoriComponent } from './forms/form-vanzatori/form-vanzatori.component';
import { FormVanzariComponent } from './forms/form-vanzari/form-vanzari.component';
import { FormSucursaleComponent } from './forms/form-sucursale/form-sucursale.component';
import { FormProiecteComponent } from './forms/form-proiecte/form-proiecte.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TableArticolComponent } from './tables/table-articol/table-articol.component';
import { TableParteneriComponent } from './tables/table-parteneri/table-parteneri.component';
import { TableVanzatoriComponent } from './tables/table-vanzatori/table-vanzatori.component';
import { TableVanzariComponent } from './tables/table-vanzari/table-vanzari.component';
import { TableSucursaleComponent } from './tables/table-sucursale/table-sucursale.component';
import { TableProiecteComponent } from './tables/table-proiecte/table-proiecte.component';
import { UpdateLinieVanzareComponent } from './update/update-linie-vanzare/update-linie-vanzare.component';
import { FormRaportComponent } from './rapoarte/form-raport/form-raport.component';
import { GraficeComponent } from './rapoarte/grafice/grafice.component';
import { GraficCantitateJudeteComponent } from './rapoarte/grafice-2/grafic-cantitate-judete.component';
import { TableAdreseComponent } from './tables/table-adrese/table-adrese.component';
import { FormAdreseComponent } from './forms/form-adrese/form-adrese.component';

const routes: Routes = [
  {
    path: 'form-articole',
    component: FormArticolComponent
  },
  {
    path: 'form-adrese',
    component: FormAdreseComponent
  },
  {
    path: 'form-parteneri',
    component: FormParteneriComponent
  },{
    path: 'form-vanzatori',
    component: FormVanzatoriComponent
  }
  ,{
    path: 'form-vanzari',
    component: FormVanzariComponent
  },
  {
    path: 'form-sucursale',
    component: FormSucursaleComponent
  },
  {
    path: 'form-proiecte',
    component: FormProiecteComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'table-articole',
    component: TableArticolComponent
  },
  {
    path: 'table-adrese',
    component: TableAdreseComponent
  },
  {
    path: 'table-parteneri',
    component: TableParteneriComponent
  },{
    path: 'table-vanzatori',
    component: TableVanzatoriComponent
  }
  ,{
    path: 'table-vanzari',
    component: TableVanzariComponent
  },
  {
    path: 'table-sucursale',
    component: TableSucursaleComponent
  },
  {
    path: 'table-proiecte',
    component: TableProiecteComponent
  },
  {
    path: 'update-linieVanzare',
    component: UpdateLinieVanzareComponent
  },
  {
    path: 'form-rapoarte',
    component: FormRaportComponent
  },
  {
    path: 'grafice1',
    component: GraficeComponent
  },
  {
    path: 'grafice2',
    component: GraficCantitateJudeteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
