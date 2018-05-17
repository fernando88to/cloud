import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicosCloudProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicosCloudProvider {

    servidores  : {
        "servidores": [
            {"nome":"GetUpCloud", "moeda":"real", "pagamentofixo":true,"periodoteste":true,"servidornobrasil":true,"cotagratuitaproducao":false, "url":"https://getupcloud.com/pt-br/precos/"},
            {"nome":"Google APP Engine", "moeda":"real", "pagamentofixo":false,"periodoteste":true,"servidornobrasil":true,"cotagratuitaproducao":true, "url":"https://cloud.google.com/appengine/"},
            {"nome":"Google firebase", "moeda":"real", "pagamentofixo":null,"periodoteste":true,"servidornobrasil":false,"cotagratuitaproducao":false, "url":"https://firebase.google.com/pricing/?hl=pt-br"},
            {"nome":"Heroku", "moeda":"dolar", "pagamentofixo":true,"periodoteste":true,"servidornobrasil":false,"cotagratuitaproducao":false, "url":"https://www.heroku.com/pricing"},
            {"nome":"Windows Azure Cloud", "moeda":"real", "pagamentofixo":false,"periodoteste":true,"servidornobrasil":true,"cotagratuitaproducao":false, "url":"https://azure.microsoft.com/pt-br/pricing/calculator/"},
            {"nome":"AWS Lambda", "moeda":"dolar", "pagamentofixo":false,"periodoteste":true,"servidornobrasil":true,"cotagratuitaproducao":false, "url":"https://aws.amazon.com/pt/lambda/pricing/"}
        ]
    }

  /*constructor(public http: HttpClient) {
    console.log('Hello ServicosCloudProvider Provider');
  }*/

    constructor() {
        console.log('Hello ServicosCloudProvider Provider');
    }


    public todosServidoresCarregados(){
        let that = this;
        return new Promise(function(resolve, reject) {
                resolve(that.servidores);
        });


    }





}
