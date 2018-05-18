import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PeriodotestePage} from "../periodoteste/periodoteste";

/**
 * Generated class for the PagamentofixoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagamentofixo',
  templateUrl: 'pagamentofixo.html',
})
export class PagamentofixoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }



    selecionarValor(valor){
        let valor_selecionado = this.navParams.get("valor_selecionado");
        valor_selecionado["pagamentofixo"] = valor;
        this.navCtrl.push(PeriodotestePage, {
            valor_selecionado:valor_selecionado
        });

    }

}
