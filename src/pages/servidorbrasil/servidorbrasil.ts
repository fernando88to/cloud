import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CotagratuitaproducaoPage} from "../cotagratuitaproducao/cotagratuitaproducao";

/**
 * Generated class for the ServidorbrasilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servidorbrasil',
  templateUrl: 'servidorbrasil.html',
})
export class ServidorbrasilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

    selecionarValor(valor){
        //pega o json
        let valor_selecionado = this.navParams.get("valor_selecionado");
        valor_selecionado["servidornobrasil"] = valor;

        this.navCtrl.push(CotagratuitaproducaoPage, {
            valor_selecionado:valor_selecionado
        });

    }

}
