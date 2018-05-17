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


  selecionarValor(valor){
      let valor_selecionado = {"moeda":valor};
      this.navCtrl.push(PagamentofixoPage, {
          valor_selecionado:valor_selecionado
      });

  }

}
