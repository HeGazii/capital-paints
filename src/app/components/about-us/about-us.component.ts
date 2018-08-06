import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor( private translate:TranslateService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    if(this.translate.currentLang=='en'){
      $('#un-list ,#ul-list-two,#address-col, .section').css({"text-align": "left", "direction":"ltr"});
      
    }
   else if(this.translate.currentLang=='ar'){
     
    $('#un-list,#ul-list-two,#address-col,.section').css({"text-align": "right", "direction":"rtl"});
   
   }
  }

}
