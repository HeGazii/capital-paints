import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageShow } from '../../../models/imageShow';
import { TranslateService, LangChangeEvent, DefaultLangChangeEvent } from '@ngx-translate/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  showGrid:boolean=true;
  public location:string;
  constructor(private route: ActivatedRoute, public translate:TranslateService,private  _router : Router) {
    this.location = _router.url;
    console.log("navigate to= ",this.location)
   }

  ngOnInit() {
    window.scrollTo(0, 0);
    $('.products-sec').css({'display':'block'})
    console.log(this.translate.currentLang)
    if(this.translate.currentLang=='en'){
      //used currentLang to solve the translation direction to all routing pages
      $('#un-list ,#ul-list-two,#address-col, .section,#newss').css({"text-align": "left", "direction":"ltr"});
    }
   else{
      $('#un-list,#ul-list-two,#address-col,.section,#newss').css({"text-align": "right", "direction":"rtl"});
   }
   $("a.card-click").click(function() {
    $('html,body').animate({
        scrollTop: $(".point").offset().top},
        500);
});
 }
  hideGrid(){
    $('.products-sec').css({"display":"none"})
  }
 

}
