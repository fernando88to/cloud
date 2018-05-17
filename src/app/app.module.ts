import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PagamentofixoPage} from "../pages/pagamentofixo/pagamentofixo";
import {PeriodotestePage} from "../pages/periodoteste/periodoteste";
import {ServidorbrasilPage} from "../pages/servidorbrasil/servidorbrasil";
import {CotagratuitaproducaoPage} from "../pages/cotagratuitaproducao/cotagratuitaproducao";
import {ResultadoPage} from "../pages/resultado/resultado";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage, PagamentofixoPage, PeriodotestePage, ServidorbrasilPage, CotagratuitaproducaoPage, ResultadoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,PagamentofixoPage,PeriodotestePage, ServidorbrasilPage,CotagratuitaproducaoPage,ResultadoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
