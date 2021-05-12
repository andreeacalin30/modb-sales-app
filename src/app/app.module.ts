import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormArticolComponent } from './forms/form-articol/form-articol.component';
import { FormParteneriComponent } from './forms/form-parteneri/form-parteneri.component';
import { FormProiecteComponent } from './forms/form-proiecte/form-proiecte.component';
import { FormSucursaleComponent } from './forms/form-sucursale/form-sucursale.component';
import { FormVanzariComponent } from './forms/form-vanzari/form-vanzari.component';
import { FormVanzatoriComponent } from './forms/form-vanzatori/form-vanzatori.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material";
import { TableArticolComponent } from './tables/table-articol/table-articol.component';
import { TableParteneriComponent } from './tables/table-parteneri/table-parteneri.component';
import { TableProiecteComponent } from './tables/table-proiecte/table-proiecte.component';
import { TableSucursaleComponent } from './tables/table-sucursale/table-sucursale.component';
import { TableVanzariComponent } from './tables/table-vanzari/table-vanzari.component';
import { TableVanzatoriComponent } from './tables/table-vanzatori/table-vanzatori.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { UpdateLinieVanzareComponent } from './update/update-linie-vanzare/update-linie-vanzare.component';
import {MatDialogModule} from '@angular/material/dialog';
import { GeneralDialogComponent } from './dialogs/general-dialog/general-dialog.component';
import { FormRaportComponent } from './rapoarte/form-raport/form-raport.component';
import { GraficeComponent } from './rapoarte/grafice/grafice.component';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
import { GraficCantitateJudeteComponent } from './rapoarte/grafice-2/grafic-cantitate-judete.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AgGridModule } from '@ag-grid-community/angular';
import {  TableModule } from 'angular-bootstrap-md';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import { TableAdreseComponent } from './tables/table-adrese/table-adrese.component';
import { FormAdreseComponent } from './forms/form-adrese/form-adrese.component';
@NgModule({
  declarations: [
    AppComponent,
    FormArticolComponent,
    FormParteneriComponent,
    FormProiecteComponent,
    FormSucursaleComponent,
    FormVanzariComponent,
    FormVanzatoriComponent,
    HomePageComponent,
    MenuComponent,
    TableArticolComponent,
    TableParteneriComponent,
    TableProiecteComponent,
    TableSucursaleComponent,
    TableVanzariComponent,
    TableVanzatoriComponent,
    UpdateLinieVanzareComponent,
    GeneralDialogComponent,
    FormRaportComponent,
    GraficeComponent,
    GraficCantitateJudeteComponent,
    ErrorDialogComponent,
    TableAdreseComponent,
    FormAdreseComponent
  ],
  entryComponents:[GeneralDialogComponent,ErrorDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule, 
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    ChartsModule,
     WavesModule,
     NgApexchartsModule,
     AgGridModule.withComponents([]),
     TableModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
