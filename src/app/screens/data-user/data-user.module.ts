import { DataTransaksiService } from './../data-transaksi/data-transaksi.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataUserPageRoutingModule } from './data-user-routing.module';

import { DataUserPage } from './data-user.page';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataUserPageRoutingModule,
    HttpClientModule,
    NgxDatatableModule,
    ReactiveFormsModule
  ],
  declarations: [DataUserPage],
  providers: [DataTransaksiService]
})
export class DataUserPageModule {}
