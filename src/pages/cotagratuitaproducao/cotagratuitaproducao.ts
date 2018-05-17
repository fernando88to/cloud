import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServidorbrasilPage} from "../servidorbrasil/servidorbrasil";
import {ResultadoPage} from "../resultado/resultado";

/**
 * Generated class for the CotagratuitaproducaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cotagratuitaproducao',
  templateUrl: 'cotagratuitaproducao.html',
})
export class CotagratuitaproducaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CotagratuitaproducaoPage');
  }

    selecionarValor(valor){
        //pega o json
        let valor_selecionado = this.navParams.get("valor_selecionado");
        valor_selecionado["cotagratuitaproducao"] = valor;
        console.log(valor_selecionado);


        this.navCtrl.push(ResultadoPage, {
            valor_selecionado:valor_selecionado
        });

    }

}
