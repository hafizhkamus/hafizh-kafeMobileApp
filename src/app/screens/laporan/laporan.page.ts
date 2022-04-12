import { ViewWillEnter } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LaporanService } from './laporan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laporan',
  templateUrl: './laporan.page.html',
  styleUrls: ['./laporan.page.scss'],
})
export class LaporanPage implements OnInit, ViewWillEnter {

  form: FormGroup;
  data: any = null;

  constructor(
    private service: LaporanService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      saldoTransaksi: this.formBuilder.control(null),
      saldoUangMasuk: this.formBuilder.control(null),
      saldoUangKeluar: this.formBuilder.control(null),
      jumlahTranasksi: this.formBuilder.control(null),
      tahunPenjualan: this.formBuilder.control(null)
    });
   }

  ionViewWillEnter(): void {
    this.form.patchValue({
      saldoTransaksi: 0,
      saldoUangMasuk: 0,
      saldoUangKeluar: 0,
      jumlahTranasksi: 0,
      tahunPenjualan: (new Date()).getFullYear()
    });
    this.service.findData(this.form.get('tahunPenjualan').value).subscribe(response => {
      this.data = response.body;
      this.form.patchValue({
        saldoTransaksi: response.body.saldoTransaksi,
        saldoUangMasuk: response.body.saldoUangMasuk,
        saldoUangKeluar: response.body.saldoUangKeluar,
        jumlahTranasksi: response.body.jumlahTranasksi
      });
    });
    // throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }

}
