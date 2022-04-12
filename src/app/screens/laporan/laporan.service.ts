import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaporanService {

  constructor(
    private http: HttpClient
  ) { }

  public findData(tahun) {
    return this.http.get<any>(`${environment.baseUrl}/api/laporan-keuangan/get/${tahun}`, {observe : 'response'});
  }
}
