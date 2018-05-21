import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {ServicosCloudProvider} from "../../providers/servicos-cloud/servicos-cloud";

import {HomePage} from "../home/home";



/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {

    servicos_em_ordem:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicoscloud:ServicosCloudProvider,
              private alertCtrl: AlertController
  ) {



  }

  ionViewDidLoad() {
            let that = this
          this.servicoscloud.todosServidoresCarregados()
              .then(data => {
                  let dados_formulario_usuario = this.navParams.get("valor_selecionado");
                  let servidores_cadastrados = data["servidores_cadastrados"];
                  for (let value of servidores_cadastrados) {
                      if(value.moeda==dados_formulario_usuario.moeda){
                          value.pontuacao = value.pontuacao +1 ;
                      }
                      if(value.pagamentofixo==dados_formulario_usuario.pagamentofixo){
                          value.pontuacao = value.pontuacao +1 ;
                      }

                      if(value.periodoteste==dados_formulario_usuario.periodoteste){
                          value.pontuacao = value.pontuacao +1 ;
                      }

                      if(value.servidornobrasil==dados_formulario_usuario.servidornobrasil){
                          value.pontuacao = value.pontuacao +1 ;
                      }


                      if(value.cotagratuitaproducao==dados_formulario_usuario.cotagratuitaproducao){
                          value.pontuacao = value.pontuacao +1 ;
                      }




                  }


                  servidores_cadastrados.sort(function(a, b) {
                      return a.pontuacao - b.pontuacao;
                  });
                  servidores_cadastrados.reverse();
                  this.servicos_em_ordem = servidores_cadastrados



              }, function(err) {
                  let alert = that.alertCtrl.create({
                      title: 'Alerta',
                      subTitle: 'Erro na consulta, verifique sua internet',
                      buttons: ['Dismiss']
                  });
                  alert.present();

              });


  }

  abrirLink(indice_servico){


      for (let value of this.servicos_em_ordem) {
          if(value.id==indice_servico){
              window.open(value.url,'_system', 'location=yes');
          }
      }






  }

    refazer(){
        this.navCtrl.push(HomePage, {

        });
    }



}
