import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServidorbrasilPage} from "../servidorbrasil/servidorbrasil";

/**
 * Generated class for the PeriodotestePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-periodoteste',
  templateUrl: 'periodoteste.html',
})
export class PeriodotestePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PeriodotestePage');
  }

    selecionarValor(valor){
        //pega o json
        let valor_selecionado = this.navParams.get("valor_selecionado");
        valor_selecionado["periodoteste"] = valor;
        this.navCtrl.push(ServidorbrasilPage, {
            valor_selecionado:valor_selecionado
        });

    }

}
