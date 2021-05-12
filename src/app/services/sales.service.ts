import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adresa } from '../models/adresa.model';
import { Articol } from '../models/articol.model';
import { PartenerDTO } from '../models/partenerDTO.model';
import { Proiect } from '../models/proiect.model';
import { RaportDTO } from '../models/raportDTO.model';
import { SucursalaDTO } from '../models/sucursalaDTO.model';
import { VanzareDTO } from '../models/vanzareDTO.model';
import { VanzatorDTO } from '../models/vanzatorDTO.model';
import { Settings } from '../settings';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private UMPath=Settings.serverUrl+"/um";
  private AdresePath=Settings.serverUrl+"/adrese";
  private VanzatoriPath=Settings.serverUrl+"/vanzatori";
  private ArticolePath=Settings.serverUrl+"/articole";
  private ParteneriPath=Settings.serverUrl+"/parteneri";
  private SucursalePath=Settings.serverUrl+"/sucursale";
  private ProiectePath=Settings.serverUrl+"/proiecte";
  private VanzariPath=Settings.serverUrl+"/vanzari";
  private LiniiVanzariPath=Settings.serverUrl+"/liniiVanzari";
  private GrupeArticolePath=Settings.serverUrl+"/grupeArticole";
  private FormReportPath=Settings.serverUrl+"/formReport";
  private FormReportCombinedPath=Settings.serverUrl+"/groupedFormReport";
  constructor(private http: HttpClient) { }

  getUM(dbConnection:any): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
     let params = new HttpParams()
            .set('dbConnection', dbConnection.toString())
    return this.http.get(this.UMPath, {
        headers, params
    }); 
  }

  getAdrese(dbConnection:any): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
     let params = new HttpParams()
            .set('dbConnection', dbConnection.toString())
    return this.http.get(this.AdresePath, {
        headers, params
    }); 
  }

  getVanzatori(dbConnection:any): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
     let params = new HttpParams()
            .set('dbConnection', dbConnection.toString())
    return this.http.get(this.VanzatoriPath, {
        headers, params
    }); 
  }

  getVanzari(dbConnection:any): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    let params = new HttpParams()
            .set('dbConnection', dbConnection.toString())
    return this.http.get(this.VanzariPath, {
        headers, params
    }); 
  }

  getLiniiVanzariByIdVanzare(idVanzare: any, dbConnection: any): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    const params=new HttpParams()
    .set('IDIntrare', idVanzare)
    .set('dbConnection', dbConnection.toString())
    return this.http.get(this.LiniiVanzariPath, {
        headers, params
    }); 
  }

  getValoriRaport(raportDTO: RaportDTO): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    const params=new HttpParams()
    .set('CodVanzator', raportDTO.CodVanzator)
    .set('NumeArticol', raportDTO.NumeArticol)
    .set('NumePartener', raportDTO.NumePartener)
    .set('NumeSucursala', raportDTO.NumeSucursala)
    .set('DataStart', raportDTO.DataStart)
    .set('DataEnd', raportDTO.DataEnd)
    return this.http.get(this.FormReportPath, {
        headers, params
    }); 
  }

  getValoriCombinateRaport(raportDTO: RaportDTO): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    const params=new HttpParams()
    .set('CodVanzator', raportDTO.CodVanzator)
    .set('NumeArticol', raportDTO.NumeArticol)
    .set('NumePartener', raportDTO.NumePartener)
    .set('NumeSucursala', raportDTO.NumeSucursala)
    .set('DataStart', raportDTO.DataStart)
    .set('DataEnd', raportDTO.DataEnd)
    return this.http.get(this.FormReportCombinedPath, {
        headers, params
    }); 
  }
/////////////////graphics
  getVanzariGrupeArticole(): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    return this.http.get(Settings.serverUrl+"/vanzariGrupeArticole", {
        headers
    }); 
  }

  getCantitatiJudete(): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    return this.http.get(Settings.serverUrl+"/cantitatiJudete", {
        headers
    }); 
  }

  getVolumZile(): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    return this.http.get(Settings.serverUrl+"/volumZile", {
        headers
    }); 
  }

  getDiscountTrimeste(): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    return this.http.get(Settings.serverUrl+"/discountTrimestre", {
        headers
    }); 
  }
///////////////////////////////////
  getArticole(dbConnection: any): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    let params = new HttpParams()
            .set('dbConnection', dbConnection.toString())
    return this.http.get(this.ArticolePath, {
        headers, params
    }); 
  }

  getParteneri(dbConnection: any): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    let params = new HttpParams()
            .set('dbConnection', dbConnection.toString())
    return this.http.get(this.ParteneriPath, {
        headers,params
    }); 
  }

  getSucursale(dbConnection: any): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    let params = new HttpParams()
            .set('dbConnection', dbConnection.toString())
    return this.http.get(this.SucursalePath, {
        headers, params
    }); 
  }

  getProiecte(dbConnection: any): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    let params = new HttpParams()
            .set('dbConnection', dbConnection.toString())
    return this.http.get(this.ProiectePath, {
        headers, params
    }); 
  }

  getGrupeArticole(dbConnection:any): Observable<any> {
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', '*')
    .set('Content-Type', 'application/json');
    let params = new HttpParams()
            .set('dbConnection', dbConnection.toString())
    return this.http.get(this.GrupeArticolePath, {
        headers, params
    }); 
  }

  postPartener(partenerDTO: PartenerDTO, dbConnection:any): Observable<any> {
    console.log('post')
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    .set('Content-Type', 'application/json');
    let params = new HttpParams()
            .set('dbConnection', dbConnection.toString())
    return this.http.post(this.ParteneriPath, partenerDTO, {
        headers, params
    }); 
  }

  postArticol(articol: Articol, dbConnection:any): Observable<any> {
    console.log('post')
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    .set('Content-Type', 'application/json');
     let params = new HttpParams()
            .set('dbConnection', dbConnection.toString())
    return this.http.post(this.ArticolePath, articol, {
        headers, params
    }); 
  }

  postAdresa(adresa: Adresa, dbConnection:any): Observable<any> {
    console.log('post')
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    .set('Content-Type', 'application/json');
     let params = new HttpParams()
            .set('dbConnection', dbConnection.toString())
    return this.http.post(this.AdresePath, adresa, {
        headers, params
    }); 
  }

  postProiect(proiect: Proiect, dbConnection:any): Observable<any> {
    console.log('post')
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    .set('Content-Type', 'application/json');
     let params = new HttpParams()
            .set('dbConnection', dbConnection.toString())
    return this.http.post(this.ProiectePath, proiect, {
        headers, params
    }); 
  }

  postVanzator(vanzatorDTO: VanzatorDTO, dbConnection:any): Observable<any> {
    console.log('post')
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    .set('Content-Type', 'application/json');
     let params = new HttpParams()
            .set('dbConnection', dbConnection.toString())
    return this.http.post(this.VanzatoriPath, vanzatorDTO, {
        headers, params
    }); 
  }

  postSucursala(sucursalaDTO: SucursalaDTO, dbConnection:any): Observable<any> {
    console.log('post')
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    .set('Content-Type', 'application/json');
     let params = new HttpParams()
            .set('dbConnection', dbConnection.toString())
    return this.http.post(this.SucursalePath, sucursalaDTO, {
        headers, params
    }); 
  }

  postVanzare(vanzareDTO: VanzareDTO, dbConnection:any): Observable<any> {
    console.log('post')
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    .set('Content-Type', 'application/json');
    let params = new HttpParams()
            .set('dbConnection', dbConnection.toString())
    return this.http.post(this.VanzariPath, vanzareDTO, {
        headers, params
    }); 
  }


  updateLinieVanzare(linieVanzare: any): Observable<any> {
    console.log('post')
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    .set('Content-Type', 'application/json');
    return this.http.put(this.LiniiVanzariPath, linieVanzare, {
        headers
    }); 
  }

  deleteLinieVanzare(IDIntrare: any, NumarLinie: any, dbConnection:any): Observable<any> {
    console.log('post')
    const headers = new HttpHeaders()
    .set('Accept', '*/*')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    .set('Content-Type', 'application/json');
    const params=new HttpParams()
    .set('IDIntrare', IDIntrare)
    .set('NumarLinie', NumarLinie)
    .set('dbConnection', dbConnection.toString())

    return this.http.delete(this.LiniiVanzariPath, {
        headers, params
    }); 
  }


  
}
