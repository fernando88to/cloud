import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {ResultadoPage} from "../resultado/resultado";

/**
 * Generated class for the CotagratuitaproducaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-cotagratuitaproducao',
  templateUrl: 'cotagratuitaproducao.html',
})
export class CotagratuitaproducaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

    selecionarValor(valor){
        //pega o json
        let valor_selecionado = this.navParams.get("valor_selecionado");
        valor_selecionado["cotagratuitaproducao"] = valor;

        this.navCtrl.push(ResultadoPage, {
            valor_selecionado:valor_selecionado
        });

    }

}
