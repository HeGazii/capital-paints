import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import{AppComponent} from '../../app.component';
import * as $ from 'jquery';
@Component({
  selector: 'app-rand-d',
  templateUrl: './rand-d.component.html',
  styleUrls: ['./rand-d.component.css']
})
export class RandDComponent implements OnInit {
  
  constructor(public translate:TranslateService) { }
  
  ngOnInit() {
    window.scrollTo(0, 0);
    if(this.translate.currentLang=='en'){
      $('#un-list ,#ul-list-two,#address-col, .section').css({"text-align": "left", "direction":"ltr"});
    }
   else{
    $('#un-list,#ul-list-two,#address-col,.section').css({"text-align": "right", "direction":"rtl"});
   }
  }


}
