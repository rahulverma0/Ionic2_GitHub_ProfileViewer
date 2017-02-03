import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username = 'USERNAME';
    private client_id = 'CLIENTID_FROM GITHUB';
    private client_secret='CLIENTSECRETKEY';
    
    constructor(private _http:Http){
        
    }
    
    getUser(){
        return this._http.get('https://api.github.com/users/'+
        this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(result =>result.json());
    }
    
    getRepos(){
        return this._http.get('https://api.github.com/users/'+
        this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(result => result.json());
    }
    
    setUsername(username:string){
        this.username = username;
    }
}
