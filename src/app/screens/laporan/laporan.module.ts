import { LaporanService } from './laporan.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaporanPageRoutingModule } from './laporan-routing.module';

import { LaporanPage } from './laporan.page';
import { NgxCurrencyModule } from 'ngx-currency';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaporanPageRoutingModule,
    NgxCurrencyModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [LaporanPage],
  providers:[
    LaporanService
  ]
})
export class LaporanPageModule {}
