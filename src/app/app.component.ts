import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {ApiExchangeProvider} from '../providers/api-exchange/api-exchange';


@Component({
  templateUrl: 'app.html',
  providers : [ApiExchangeProvider]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;

  public apiData: any;
  public dataSize: number =50;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public apiExchangeProvider :ApiExchangeProvider
  ) {
    // set our app's pages
    this.pages = [
      { title: 'My First List', component: ListPage }
    ];
    this.loadData();
  }

  loadData(){
  this.apiExchangeProvider.load()
  .then(data => {
    this.apiData = data;
  });}

  doRefresh(refresher){
      this.dataSize +=10;
      this.loadData();
      refresher.complete();
  }

}
