import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicosCloudProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicosCloudProvider {



  constructor(public http: HttpClient) {
    console.log('Hello ServicosCloudProvider Provider');
  }


    todosServidoresCarregados() {
        return new Promise(resolve => {
            this.http.get("https://api-comunicaocloud.getup.io/servicos").subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    /*public todosServidoresCarregados(){
        let that = this;
        return new Promise(function(resolve, reject) {
                resolve(that.servidores);
        });


    }*/





}
