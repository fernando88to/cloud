webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/fernando/pos_graduacao/repositorio/cloud/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="1">\n  <ion-tab [root]="tab1Root" tabTitle="Formulário" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Sobre" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Código Fonte" tabIcon="bug"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/fernando/pos_graduacao/repositorio/cloud/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.comecar = function () {
        //manda para o formulário
        this.navCtrl.parent.select(0);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/fernando/pos_graduacao/repositorio/cloud/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Sobre\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>Esse aplicativo é fruto da conclusão do TCC de Pós Graduação em Desenvolvimento de\n  Aplicativos Móveis na Universidade Católica do Tocantins.</p>\n\n  <p>A startup tem como objetivo transformar ideias em produtos, criar novos empreendimentos,\n    que estão à procura de mercado para seu produto inovador e uma característica importante é\n    um monitoramento mais aprimorado e controle nas ações de grande impacto dentro de uma empresa.\n    O objetivo deste trabalho foi desenvolver um aplicativo mobile, que auxilie um startup no planejamento inicial,\n    mais precisamente na plataforma para cloud computing mais adequada para se integrar ao aplicativo para celular,\n    site e outras tecnologias (produto). A pesquisa foi aplicada no município de Palmas-TO, em uma população de 69 pessoas,\n    por meio de questionário, os dados coletados foram representados por meio de gráficos. Observou-se que, apesar de uma maioria\n    dos entrevistados possuírem interesse em criar uma Startup, 42,1 % demonstraram possuir pouco conhecimento sobre este processo\n    inicial e o aplicativo mostrou que foi possível auxiliar na escolha para a plataforma de cloud computing, sendo a plataforma\n    PaaS tendo maior preferência (61,4 %), devido a sua praticidade, não necessitando de conhecimentos específicos e\n    já estando pronta para o uso. 	Logo, o aplicativo elaborado atendeu o objetivo em auxiliar um empreendedor na\n    fase inicial de desenvolvimento de uma startup, podendo tirar dúvidas em relação ao tipo de pagamentos e principalmente\n    plataforma que será implementada.\n  </p>\n\n</ion-content>\n\n<ion-footer no-shadow>\n  <ion-toolbar position="bottom">\n    <ion-row>\n      <ion-col col-12><button ion-button full (click)="comecar()" >Começar</button></ion-col>\n\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/home/fernando/pos_graduacao/repositorio/cloud/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage.prototype.enviarEmail = function () {
        window.open("mailto:fernando88to@gmail.com", '_system');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/fernando/pos_graduacao/repositorio/cloud/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Código Fonte\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>O código fonte desse aplicativo pode ser encontrado no repositório abaixo: </p>\n  <p><a href="https://github.com/fernando88to/cloud">Repositório</a></p>\n  <p>\n    <a (click)="enviarEmail()">Enviar Sugestão</a>\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"/home/fernando/pos_graduacao/repositorio/cloud/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagamentofixoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__periodoteste_periodoteste__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PagamentofixoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagamentofixoPage = /** @class */ (function () {
    function PagamentofixoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PagamentofixoPage.prototype.ionViewDidLoad = function () {
    };
    PagamentofixoPage.prototype.selecionarValor = function (valor) {
        var valor_selecionado = this.navParams.get("valor_selecionado");
        valor_selecionado["pagamentofixo"] = valor;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__periodoteste_periodoteste__["a" /* PeriodotestePage */], {
            valor_selecionado: valor_selecionado
        });
    };
    PagamentofixoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pagamentofixo',template:/*ion-inline-start:"/home/fernando/pos_graduacao/repositorio/cloud/src/pages/pagamentofixo/pagamentofixo.html"*/'<!--\n  Generated template for the PagamentofixoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pagamento Fixo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2>Pagar um valor Fixo ?</h2>\n\n\n\n  <ion-row responsive-sm>\n\n\n    <ion-col width-50>\n      <ion-card (click)="selecionarValor(true)" >\n        <img src="assets/imgs/yes-icon.png" style="width: 100%;"/>\n        <ion-card-content>\n          <ion-card-title>\n            Sim\n          </ion-card-title>\n\n          <p>Geralmente existe uma cota de uso</p>\n          <p>Recomandado quando não se tem muitos acesso no começo</p>\n\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n\n\n    <ion-col width-50>\n      <ion-card (click)="selecionarValor(false)">\n        <img src="assets/imgs/no-icon.png" style="width: 100%;"/>\n        <ion-card-content>\n          <ion-card-title>\n            Não\n          </ion-card-title>\n\n            <p>Geralmente não existe cota de uso</p>\n            <p>Se tiver poucos acesso o valor a ser pago pode ser menor do que o fixo.</p>\n\n\n\n\n\n        </ion-card-content>\n      </ion-card>\n\n    </ion-col>\n\n\n  </ion-row>\n\n\n\n</ion-content>\n\n<!--<ion-footer no-shadow>\n  <ion-toolbar position="bottom">\n    <ion-row>\n      <ion-col col-6><button ion-button full (click)="anterior()">Anterior</button></ion-col>\n      <ion-col col-6><button ion-button full (click)="proximo()">Próximo</button></ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>-->\n\n'/*ion-inline-end:"/home/fernando/pos_graduacao/repositorio/cloud/src/pages/pagamentofixo/pagamentofixo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PagamentofixoPage);
    return PagamentofixoPage;
}());

//# sourceMappingURL=pagamentofixo.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodotestePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servidorbrasil_servidorbrasil__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PeriodotestePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PeriodotestePage = /** @class */ (function () {
    function PeriodotestePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PeriodotestePage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad PeriodotestePage');
    };
    PeriodotestePage.prototype.selecionarValor = function (valor) {
        //pega o json
        var valor_selecionado = this.navParams.get("valor_selecionado");
        valor_selecionado["periodoteste"] = valor;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__servidorbrasil_servidorbrasil__["a" /* ServidorbrasilPage */], {
            valor_selecionado: valor_selecionado
        });
    };
    PeriodotestePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-periodoteste',template:/*ion-inline-start:"/home/fernando/pos_graduacao/repositorio/cloud/src/pages/periodoteste/periodoteste.html"*/'<!--\n  Generated template for the PeriodotestePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Período de Teste</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2>Permite um período de teste Gratuito ?</h2>\n\n\n\n  <ion-row responsive-sm>\n\n\n    <ion-col width-50>\n      <ion-card (click)="selecionarValor(true)" >\n        <img src="assets/imgs/yes-icon.png"/>\n        <ion-card-content>\n          <ion-card-title>\n            Sim\n          </ion-card-title>\n          <p>\n\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n\n\n    <ion-col width-50>\n      <ion-card (click)="selecionarValor(false)">\n        <img src="assets/imgs/no-icon.png"/>\n        <ion-card-content>\n          <ion-card-title>\n            Não\n          </ion-card-title>\n\n        </ion-card-content>\n      </ion-card>\n\n    </ion-col>\n\n\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/home/fernando/pos_graduacao/repositorio/cloud/src/pages/periodoteste/periodoteste.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PeriodotestePage);
    return PeriodotestePage;
}());

//# sourceMappingURL=periodoteste.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServidorbrasilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cotagratuitaproducao_cotagratuitaproducao__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ServidorbrasilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServidorbrasilPage = /** @class */ (function () {
    function ServidorbrasilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ServidorbrasilPage.prototype.ionViewDidLoad = function () {
    };
    ServidorbrasilPage.prototype.selecionarValor = function (valor) {
        //pega o json
        var valor_selecionado = this.navParams.get("valor_selecionado");
        valor_selecionado["servidornobrasil"] = valor;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cotagratuitaproducao_cotagratuitaproducao__["a" /* CotagratuitaproducaoPage */], {
            valor_selecionado: valor_selecionado
        });
    };
    ServidorbrasilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-servidorbrasil',template:/*ion-inline-start:"/home/fernando/pos_graduacao/repositorio/cloud/src/pages/servidorbrasil/servidorbrasil.html"*/'<!--\n  Generated template for the ServidorbrasilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Servidor no Brasil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h2>Os servidores devem está localizados no Brasil ?</h2>\n  <ion-row responsive-sm>\n\n\n    <ion-col width-50>\n      <ion-card (click)="selecionarValor(true)" >\n        <img src="assets/imgs/yes-icon.png"/>\n        <ion-card-content>\n          <ion-card-title>\n            Sim\n          </ion-card-title>\n          <p>\n\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n\n\n    <ion-col width-50>\n      <ion-card (click)="selecionarValor(false)">\n        <img src="assets/imgs/no-icon.png"/>\n        <ion-card-content>\n          <ion-card-title>\n            Não\n          </ion-card-title>\n\n        </ion-card-content>\n      </ion-card>\n\n    </ion-col>\n\n\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/home/fernando/pos_graduacao/repositorio/cloud/src/pages/servidorbrasil/servidorbrasil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ServidorbrasilPage);
    return ServidorbrasilPage;
}());

//# sourceMappingURL=servidorbrasil.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotagratuitaproducaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resultado_resultado__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CotagratuitaproducaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CotagratuitaproducaoPage = /** @class */ (function () {
    function CotagratuitaproducaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CotagratuitaproducaoPage.prototype.ionViewDidLoad = function () {
    };
    CotagratuitaproducaoPage.prototype.selecionarValor = function (valor) {
        //pega o json
        var valor_selecionado = this.navParams.get("valor_selecionado");
        valor_selecionado["cotagratuitaproducao"] = valor;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__resultado_resultado__["a" /* ResultadoPage */], {
            valor_selecionado: valor_selecionado
        });
    };
    CotagratuitaproducaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cotagratuitaproducao',template:/*ion-inline-start:"/home/fernando/pos_graduacao/repositorio/cloud/src/pages/cotagratuitaproducao/cotagratuitaproducao.html"*/'<!--\n  Generated template for the CotagratuitaproducaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cota Gratuita em Produção</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h2>Possuir cota gratuita em produção ?</h2>\n\n\n\n  <ion-row responsive-sm>\n\n\n    <ion-col width-50>\n      <ion-card (click)="selecionarValor(true)" >\n        <img src="assets/imgs/yes-icon.png"/>\n        <ion-card-content>\n          <ion-card-title>\n            Sim\n          </ion-card-title>\n          <p>\n          Alguns serviços disponibilizam uma cota gratuito em produção, será cobrado somente o excedente dessa cota, contudo\n            existem muitas restrições.\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n\n\n    <ion-col width-50>\n      <ion-card (click)="selecionarValor(false)">\n        <img src="assets/imgs/no-icon.png"/>\n        <ion-card-content>\n          <ion-card-title>\n            Não\n          </ion-card-title>\n\n        </ion-card-content>\n      </ion-card>\n\n    </ion-col>\n\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/home/fernando/pos_graduacao/repositorio/cloud/src/pages/cotagratuitaproducao/cotagratuitaproducao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CotagratuitaproducaoPage);
    return CotagratuitaproducaoPage;
}());

//# sourceMappingURL=cotagratuitaproducao.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicos_cloud_servicos_cloud__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultadoPage = /** @class */ (function () {
    function ResultadoPage(navCtrl, navParams, servicoscloud, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servicoscloud = servicoscloud;
        this.alertCtrl = alertCtrl;
    }
    ResultadoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var that = this;
        this.servicoscloud.todosServidoresCarregados()
            .then(function (data) {
            var dados_formulario_usuario = _this.navParams.get("valor_selecionado");
            var servidores_cadastrados = data["servidores_cadastrados"];
            for (var _i = 0, servidores_cadastrados_1 = servidores_cadastrados; _i < servidores_cadastrados_1.length; _i++) {
                var value = servidores_cadastrados_1[_i];
                if (value.moeda == dados_formulario_usuario.moeda) {
                    value.pontuacao = value.pontuacao + 1;
                }
                if (value.pagamentofixo == dados_formulario_usuario.pagamentofixo) {
                    value.pontuacao = value.pontuacao + 1;
                }
                if (value.periodoteste == dados_formulario_usuario.periodoteste) {
                    value.pontuacao = value.pontuacao + 1;
                }
                if (value.servidornobrasil == dados_formulario_usuario.servidornobrasil) {
                    value.pontuacao = value.pontuacao + 1;
                }
                if (value.cotagratuitaproducao == dados_formulario_usuario.cotagratuitaproducao) {
                    value.pontuacao = value.pontuacao + 1;
                }
            }
            servidores_cadastrados.sort(function (a, b) {
                return a.pontuacao - b.pontuacao;
            });
            servidores_cadastrados.reverse();
            _this.servicos_em_ordem = servidores_cadastrados;
        }, function (err) {
            var alert = that.alertCtrl.create({
                title: 'Alerta',
                subTitle: 'Erro na consulta, verifique sua internet',
                buttons: ['Dismiss']
            });
            alert.present();
        });
    };
    ResultadoPage.prototype.abrirLink = function (indice_servico) {
        for (var _i = 0, _a = this.servicos_em_ordem; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.id == indice_servico) {
                window.open(value.url, '_system', 'location=yes');
            }
        }
    };
    ResultadoPage.prototype.refazer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], {});
    };
    ResultadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resultado',template:/*ion-inline-start:"/home/fernando/pos_graduacao/repositorio/cloud/src/pages/resultado/resultado.html"*/'<!--\n  Generated template for the ResultadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Resultado</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p>Pontuação de cada serviço de acordo com os dados que você informou</p>\n  <p>Click no serviço para saber mais</p>\n\n  <ion-list>\n    <ion-item *ngFor="let servico of servicos_em_ordem" (click)="abrirLink(servico.id)">\n      {{servico.nome}} <ion-icon class="estrela_amarela" name="star" *ngFor="let dummy of \' \'.repeat(servico.pontuacao).split(\'\'), let x = index"></ion-icon>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer no-shadow>\n  <ion-toolbar position="bottom">\n    <ion-row>\n      <ion-col col-12><button ion-button full (click)="refazer()" >Refazer</button></ion-col>\n\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/fernando/pos_graduacao/repositorio/cloud/src/pages/resultado/resultado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_servicos_cloud_servicos_cloud__["a" /* ServicosCloudProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ResultadoPage);
    return ResultadoPage;
}());

//# sourceMappingURL=resultado.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicosCloudProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ServicosCloudProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServicosCloudProvider = /** @class */ (function () {
    function ServicosCloudProvider(http) {
        this.http = http;
        console.log('Hello ServicosCloudProvider Provider');
    }
    ServicosCloudProvider.prototype.todosServidoresCarregados = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https://api-comunicaocloud.getup.io/servicos").subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ServicosCloudProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServicosCloudProvider);
    return ServicosCloudProvider;
}());

//# sourceMappingURL=servicos-cloud.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_servicos_cloud_servicos_cloud__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pagamentofixo_pagamentofixo__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_periodoteste_periodoteste__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_servidorbrasil_servidorbrasil__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cotagratuitaproducao_cotagratuitaproducao__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_resultado_resultado__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_12__pages_pagamentofixo_pagamentofixo__["a" /* PagamentofixoPage */], __WEBPACK_IMPORTED_MODULE_13__pages_periodoteste_periodoteste__["a" /* PeriodotestePage */], __WEBPACK_IMPORTED_MODULE_14__pages_servidorbrasil_servidorbrasil__["a" /* ServidorbrasilPage */], __WEBPACK_IMPORTED_MODULE_15__pages_cotagratuitaproducao_cotagratuitaproducao__["a" /* CotagratuitaproducaoPage */], __WEBPACK_IMPORTED_MODULE_16__pages_resultado_resultado__["a" /* ResultadoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_12__pages_pagamentofixo_pagamentofixo__["a" /* PagamentofixoPage */], __WEBPACK_IMPORTED_MODULE_13__pages_periodoteste_periodoteste__["a" /* PeriodotestePage */], __WEBPACK_IMPORTED_MODULE_14__pages_servidorbrasil_servidorbrasil__["a" /* ServidorbrasilPage */], __WEBPACK_IMPORTED_MODULE_15__pages_cotagratuitaproducao_cotagratuitaproducao__["a" /* CotagratuitaproducaoPage */], __WEBPACK_IMPORTED_MODULE_16__pages_resultado_resultado__["a" /* ResultadoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_servicos_cloud_servicos_cloud__["a" /* ServicosCloudProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/fernando/pos_graduacao/repositorio/cloud/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/fernando/pos_graduacao/repositorio/cloud/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagamentofixo_pagamentofixo__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.proximo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pagamentofixo_pagamentofixo__["a" /* PagamentofixoPage */]);
    };
    HomePage.prototype.selecionarValor = function (valor) {
        var valor_selecionado = { "moeda": valor };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pagamentofixo_pagamentofixo__["a" /* PagamentofixoPage */], {
            valor_selecionado: valor_selecionado
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/fernando/pos_graduacao/repositorio/cloud/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Moeda</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Pagar em qual moeda?</h2>\n\n\n\n\n  <ion-row responsive-sm>\n\n\n    <ion-col width-50>\n      <ion-card (click)="selecionarValor(\'real\')" >\n        <img src="assets/imgs/real.png" style="width: 100%;" />\n        <ion-card-content>\n          <ion-card-title>\n            Real\n          </ion-card-title>\n          <p>\n            Facilidade no pagamento e sem preocupação com a variação cambial diária.\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n\n\n    <ion-col width-50>\n      <ion-card (click)="selecionarValor(\'dolar\')" >\n        <img src="assets/imgs/dolar.png" style="width: 100%;" />\n        <ion-card-content>\n          <ion-card-title>\n            Dólar\n          </ion-card-title>\n          <p>Mesmo em uma conversão direta a opção por dólar seja mais barata é importante ressaltar os itens abaixo:</p>\n            <ul>\n          <li>  Nessa modalidade é incluído IOF de 6,38% se o pagamento for feito por cartão de crédito.</li>\n          <li>Está sujeita a variação cambial</li>\n\n          </ul>\n          <br />\n          <br />\n          <p></p>\n        </ion-card-content>\n      </ion-card>\n\n    </ion-col>\n\n\n  </ion-row>\n\n\n\n\n\n\n</ion-content>\n\n<!--<ion-footer no-shadow>\n  <ion-toolbar position="bottom">\n    <ion-row>\n      <ion-col col-6><button ion-button full >Anterior</button></ion-col>\n      <ion-col col-6><button ion-button full (click)="proximo()">Próximo</button></ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>-->\n'/*ion-inline-end:"/home/fernando/pos_graduacao/repositorio/cloud/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map