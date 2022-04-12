import { DataTransaksiService } from './../data-transaksi/data-transaksi.service';
import { ToastController, ViewWillEnter } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.page.html',
  styleUrls: ['./data-user.page.scss'],
})
export class DataUserPage implements OnInit, ViewWillEnter {
  public data: Data;
  public columns: any;
  public rows: any;
  kasir: Array<any> = [];
  showtable = false;

  constructor(
    private http: HttpClient,
    private service: DataTransaksiService,
    private toastCtrl: ToastController
    ) { }
  ionViewWillEnter(): void {
    this.getData();
  }

  ngOnInit() {
  }

  getData(){
    this.showtable = false;
      this.columns = [
        { name: 'Username' },
        { name: 'Role' },
        { name: 'Action' }
      ];
      this.http.get<any[]>(`${environment.baseUrl}/api/user/findAllUser`)
        .subscribe((res) => {
          console.log(res);
          this.rows = res;
          this.showtable = true;
        });
    }


    delete(id){
      const swalWithBootstrapButtons = Swal.mixin({
      });
      swalWithBootstrapButtons.fire({
          title: 'Anda Yakin',
          text: 'Menghapus Akun?',
          type: 'warning',
          showCancelButton: true,
          showCloseButton: true,
          confirmButtonText: 'Ya',
          cancelButtonText: 'Tidak',
          reverseButtons: true,
          confirmButtonColor: '#36c6d3',
          cancelButtonColor: '#d33',
      }).then((result) => {
          if (result.value) {
              this.service.deleteUser(id).subscribe(response=>{
                this.presentToast('User Baru Ditambahkan');
                this.getData();
                // this.ionViewWillEnter();
              }, error=>{
                // eslint-disable-next-line eqeqeq
                if(error.status == 200){
                  this.presentToast('User Baru Ditambahkan');
                  this.getData();
                } else {
                  this.presentToast('Gagal Menambahkan User');
                }
              });
          }
      });
    }

    async presentToast(message) {
      const toast = await this.toastCtrl.create({
        message: message,
        mode: 'ios',
        duration: 1000,
        position: 'top',
      });
      toast.present();
    }

}
