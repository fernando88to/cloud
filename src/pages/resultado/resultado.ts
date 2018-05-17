import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {

  servico_mais_indicado: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
      let servidores   =  {
          "servidores_cadastrados": [
              {"id":1,"nome":"GetUpCloud", "moeda":"real", "pagamentofixo":true,"periodoteste":true,"servidornobrasil":true,"cotagratuitaproducao":false, "url":"https://getupcloud.com/pt-br/precos/", "quantidade_acertos":0},
              {"id":2,"nome":"Google APP Engine", "moeda":"real", "pagamentofixo":false,"periodoteste":true,"servidornobrasil":true,"cotagratuitaproducao":true, "url":"https://cloud.google.com/appengine/", "quantidade_acertos":0},
              {"id":3,"nome":"Google firebase", "moeda":"real", "pagamentofixo":true,"periodoteste":true,"servidornobrasil":false,"cotagratuitaproducao":false, "url":"https://firebase.google.com/pricing/?hl=pt-br", "quantidade_acertos":0},
              {"id":4,"nome":"Heroku", "moeda":"dolar", "pagamentofixo":true,"periodoteste":true,"servidornobrasil":false,"cotagratuitaproducao":false, "url":"https://www.heroku.com/pricing", "quantidade_acertos":0},
              {"id":5,"nome":"Windows Azure Cloud", "moeda":"real", "pagamentofixo":false,"periodoteste":true,"servidornobrasil":true,"cotagratuitaproducao":false, "url":"https://azure.microsoft.com/pt-br/pricing/calculator/", "quantidade_acertos":0},
              {"id":6,"nome":"AWS Lambda", "moeda":"dolar", "pagamentofixo":false,"periodoteste":true,"servidornobrasil":true,"cotagratuitaproducao":false, "url":"https://aws.amazon.com/pt/lambda/pricing/", "quantidade_acertos":0}
          ]
      };



      //todos os parametros que o usuário informou
      let dados_formulario_usuario = this.navParams.get("valor_selecionado");

      for (let value of servidores.servidores_cadastrados) {
          if(value.moeda==dados_formulario_usuario.moeda){
            value.quantidade_acertos = value.quantidade_acertos +1 ;
            //value.selecionado=false;
          }
          if(value.pagamentofixo==dados_formulario_usuario.pagamentofixo){
              value.quantidade_acertos = value.quantidade_acertos +1 ;
          }

          if(value.periodoteste==dados_formulario_usuario.periodoteste){
              value.quantidade_acertos = value.quantidade_acertos +1 ;
          }

          if(value.servidornobrasil==dados_formulario_usuario.servidornobrasil){
              value.quantidade_acertos = value.quantidade_acertos +1 ;
          }
          if(value.cotagratuitaproducao==dados_formulario_usuario.cotagratuitaproducao){
              value.quantidade_acertos = value.quantidade_acertos +1 ;
          }

          if(value.cotagratuitaproducao==dados_formulario_usuario.cotagratuitaproducao){
              value.quantidade_acertos = value.quantidade_acertos +1 ;
          }


      }



      servidores.servidores_cadastrados.sort(function(a, b) {
          return a.quantidade_acertos - b.quantidade_acertos;
      });
      servidores.servidores_cadastrados.reverse();
      /*for (let value of servidores.servidores_cadastrados) {
            console.log(value.nome + " " +  value.quantidade_acertos);
      }*/

      this.servico_mais_indicado = servidores.servidores_cadastrados[0];
      console.log(this.servico_mais_indicado);









  }

}