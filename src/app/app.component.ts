import { Component, ViewChild } from '@angular/core';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Nav, Platform,LoadingController,Events } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import {HomePage} from '../pages/pages';
import { GithubService } from './shared/shared';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public githubService: GithubService) {
    this.initializeApp();   

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
