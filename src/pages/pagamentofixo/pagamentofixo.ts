import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
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
    console.log('ionViewDidLoad PagamentofixoPage');
  }

    anterior(){
        this.navCtrl.push(HomePage);
    }
    proximo(){
        this.navCtrl.push(PeriodotestePage);
    }

}
