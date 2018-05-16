import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PagamentofixoPage} from "../pagamentofixo/pagamentofixo";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  proximo(){
      this.navCtrl.push(PagamentofixoPage)

  }

}
