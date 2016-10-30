import {Component, OnInit, OnChanges} from '@angular/core';
import {Artists} from "./searchTypes/artist";
import {Searchservice} from "./search.service";
import {isUndefined} from "util";
import any = jasmine.any;
import {SelectedResultService} from "../shared/selected-result.service";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {

    showWelcome: boolean = true;
    hidenWelcome: boolean = false;
    isInputFocused: boolean = false;

    searchStr: string;
    searchFor: string = 'artist';
    hipsterMode: boolean = false;
    searchRes: any;

    searchOptions : string[] = ['artist', 'album', 'track', 'playlist'];

    selectedResult: string;

    constructor(private _spotifyService: Searchservice, private select: SelectedResultService) { }


    searchMusic(){
        if(this.showResults()){
            this._spotifyService.searchMusic(encodeURI(this.searchStr), this.searchFor, this.hipsterMode).subscribe(
                res => {
                    switch (this.searchFor){
                        case 'artist': this.searchRes = res.artists.items;
                            break;
                        case 'album': this.searchRes = res.albums.items;
                            break;
                        case 'track' : this.searchRes = res.tracks.items;
                            break;
                        case 'playlist' : this.searchRes = res.playlists.items;
                    }

                }
            )
        }
    }

    toggleInput(){
        if(this.isInputFocused){
            this.isInputFocused = false;
        }else {
            this.isInputFocused = true;
        }

    }

    showResults(){
        if (this.searchStr !== undefined){
            if (this.searchStr.length > 0){
                return true;
            }
        }
        return false;
    }


    hideWelcome(){
        /*Fade out */
        this.showWelcome = false;
        /*Hide */
        setTimeout(() => {this.hidenWelcome = true} , 600);
    }

    check(){
        console.log(this.hipsterMode);
        console.log(this.searchFor)
    }

    ngOnInit() {
    }

    ngOnChanges() {
        console.log(this.searchFor);
    }

    onSelected(result){
        this.selectedResult = result;
        this.select.activeResult = result;
        this.select.resultType = this.searchFor  ;
        this.select.isResultSelected = true;

        console.log(this.searchFor + '**' +  this.select.resultType);
    }

}
