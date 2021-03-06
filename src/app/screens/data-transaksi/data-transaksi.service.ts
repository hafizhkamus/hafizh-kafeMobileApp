import { Transaksi } from './../../models/transaksi';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataTransaksiService {

  constructor(
    private http: HttpClient
  ) { }

  public findDataTransaksi(transaksi: Transaksi)  {
    return this.http.post<Transaksi[]>(`${environment.baseUrl}/api/transaksi/findDataTransaksi`, transaksi, {observe : 'response'});
  }

  public findAllkasir()  {
    return this.http.get<any>(`${environment.baseUrl}/api/user/findAllKasir`, {observe : 'response'});
  }

  public deleteUser(id){
    return this.http.delete<any>(`${environment.baseUrl}/api/user/delete/${id}`, {observe : 'response'});
  }
}
