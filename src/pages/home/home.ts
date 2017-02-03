import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GithubService } from '../../app/shared/shared';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:any;
  repos:any;
  username:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public githubService: GithubService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

   getItems(ev: any) {  
    let val = ev.target.value;    
    if (val && val.trim() != '') {
     this.username=val;
     console.log(this.username);
     this.search();
    }
   }

  search(){
        this.githubService.setUsername(this.username);
        
        this.githubService.getUser().subscribe(user => {
            //console.log(user);
            this.user = user;
        });
        
        this.githubService.getRepos().subscribe(repos => {
            this.repos = repos;
        });
    }
}
