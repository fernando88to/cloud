import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PagamentofixoPage} from "../pagamentofixo/pagamentofixo";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    let servidores  = {
        "servidores": [
            {"nome":"GetUpCloud", "moeda":"real", "pagamentofixo":true,"periodoteste":true,"servidornobrasil":true,"cotagratuitaproducao":false, "url":"https://getupcloud.com/pt-br/precos/"},
            {"nome":"Google APP Engine", "moeda":"real", "pagamentofixo":false,"periodoteste":true,"servidornobrasil":true,"cotagratuitaproducao":true, "url":"https://cloud.google.com/appengine/"},
            {"nome":"Google firebase", "moeda":"real", "pagamentofixo":null,"periodoteste":true,"servidornobrasil":false,"cotagratuitaproducao":false, "url":"https://firebase.google.com/pricing/?hl=pt-br"},
            {"nome":"Heroku", "moeda":"dolar", "pagamentofixo":true,"periodoteste":true,"servidornobrasil":false,"cotagratuitaproducao":false, "url":"https://www.heroku.com/pricing"},
            {"nome":"Windows Azure Cloud", "moeda":"real", "pagamentofixo":false,"periodoteste":true,"servidornobrasil":true,"cotagratuitaproducao":false, "url":"https://azure.microsoft.com/pt-br/pricing/calculator/"},
            {"nome":"AWS Lambda", "moeda":"dolar", "pagamentofixo":false,"periodoteste":true,"servidornobrasil":true,"cotagratuitaproducao":false, "url":"https://aws.amazon.com/pt/lambda/pricing/"},
        ]
    }

  }

  proximo(){
      this.navCtrl.push(PagamentofixoPage)
  }


  selecionarValor(valor){
      let valor_selecionado = {"moeda":valor};
      this.navCtrl.push(PagamentofixoPage, {
          valor_selecionado:valor_selecionado
      });

  }

}
