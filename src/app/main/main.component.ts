import {Component, OnInit, OnChanges, DoCheck} from '@angular/core';
import {SelectedResultService} from "../shared/selected-result.service";
import {Searchservice} from "../search/search.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnChanges, DoCheck {


  selectedResult: string;
  detailType: string;
  detailActive: boolean;

  resDetail : any;

  constructor(private activeResult: SelectedResultService, private details: Searchservice) { }

  ngOnInit() {

  }

  ngOnChanges(){

  }

  showSetails(){
    this.details.getResultDetail(this.selectedResult, this.detailType).subscribe(
        res => {

        this.resDetail = res;
          console.log(this.resDetail);


        }
    )
  }

  ngDoCheck(){
    if(this.activeResult.activeResult !== this.selectedResult){
      this.selectedResult = this.activeResult.activeResult;
      this.detailType = this.activeResult.resultType;
      this.detailActive = this.activeResult.isResultSelected;
      this.showSetails()
    }

  }

}
