import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Transaksi } from './../../models/transaksi';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Data } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ViewWillEnter } from '@ionic/angular';
import { DataTransaksiService } from './data-transaksi.service';

@Component({
  selector: 'app-data-transaksi',
  templateUrl: './data-transaksi.page.html',
  styleUrls: ['./data-transaksi.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataTransaksiPage implements OnInit, ViewWillEnter {
  public data: Data;
  public columns: any;
  public rows: any;
  form: FormGroup;
  dateInput: any;
  kasir: Array<any> = [];
  showtable = false;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private service: DataTransaksiService
  ) {
    this.form = this.formBuilder.group({
      idPegawai: this.formBuilder.control(null),
      tanggal: this.formBuilder.control(null)
    });

    this.getData();
   }

  ionViewWillEnter(): void {
    this.form.patchValue({
      idPegawai : null,
      tanggal : null,
    });
    this.getData();
    this.service.findAllkasir().subscribe(data=> {
      this.kasir = data.body;
    });
  }

  ngOnInit() {
  }

  reset(){
    this.form.patchValue({
      idPegawai : null,
      tanggal : null,
    });
    this.getData();
  }

  getData(){
  this.showtable = false;
    this.columns = [
      { name: 'No.Transaksi' },
      { name: 'Kasir' },
      { name: 'Nominal' },
      { name: 'Tanggal' }
    ];
    const value: Transaksi = this.form.value;
    this.http.post<any[]>(`${environment.baseUrl}/api/transaksi/findDataTransaksi`, value)
      .subscribe((res) => {
        console.log(res);
        this.rows = res;
        this.showtable = true;
      });
  }

}
