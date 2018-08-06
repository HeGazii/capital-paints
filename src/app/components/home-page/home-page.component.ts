import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 29.961927;
  lng: number = 31.311328;
  constructor(private translate:TranslateService) {
    translate.setDefaultLang('en');
   }

  ngOnInit() {
    window.scrollTo(0, 0);
    if(this.translate.currentLang=='en'){
      $('#un-list ,#ul-list-two,#address-col, .section').css({"text-align": "left", "direction":"ltr"});
    }
   else{
    $('#un-list,#ul-list-two,#address-col,.section').css({"text-align": "right", "direction":"rtl"});
   }
  }

  switchLanguage(language:string){
    this.translate.use(language);
  }
  

}
