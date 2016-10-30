import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class Searchservice {

    private searchUrl: string;
    private artistUrl: string;
    private detailsUrl: string;
    private albumsUrl: string;
    private albumUrl: string;
    private trackUrl: string;




    constructor(private _http: Http) {

    }

    searchMusic(str: string, type:string, hipsterMode: boolean){
        this.searchUrl = 'https://api.spotify.com/v1/search?query="'+str+'"&offset=0&limit=20&type='+type;
        if(hipsterMode){this.searchUrl += '&tag:hipster'}
        console.log(this.searchUrl);
        return this._http.get(this.searchUrl)
            .map(res => res.json());

    }

    getResultDetail(str: string, type: string){
        this.detailsUrl = 'https://api.spotify.com/v1/artists/' + str;
        return this._http.get(this.detailsUrl)
            .map(res => res.json());
    }

}
