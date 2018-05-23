# Cloud
Aplicativo mobile utilizando a abordagem PWA, em que o aplicativo para ser utilizado não necessita ser instalado diretamente no smartphone, mas caso o usuário queira instalar ele pode optar por essa opção. 
Esse aplicativo foi desenvolvindo na Pós Graduação de Desenvolvimento de Aplicativos Móveis na Faculdade Católica do Tocantins, campus Palmas.



### Requisitos
* node instalado
* git instalado

### Instalação do Ionic
```shell
$ npm install -g ionic
$ npm install -g cordova ionic
```
### Como baixar o código fonte

```shell
$ git clone https://github.com/fernando88to/cloud.git
$ cd  cloud
```

### Como rodar o projeto no navegador
```shell
$ npm install
$ ionic serve
```


### Como rodar o projeto no celular android
```shell
$ ionic cordova run android --device
``` 
 
### Como publicar o projeto na playstore 

* https://ionicframework.com/docs/v1/guide/publishing.html


### Como publicar o projeto em pwa

* Editar o arquivo index.html conforme https://blog.ionicframework.com/how-to-make-pwas-with-ionic/

* Rodar o comando abaixo

```shell
$ ionic build browser --prod
``` 

* Todo o html será alocado dentro do diretório wwww, copiar esses arquivos para um servidor com suporte a https










