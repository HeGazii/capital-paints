import { Component, OnInit, HostListener} from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import * as $ from 'jquery';
import 'bootstrap';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loading = true
  title = 'app';
  collapsed=false;
  toAr:boolean=false;
  toEn:boolean=true;
  mobile:boolean;
  innerWidth:any;
  auto="Automotive";
  navigate:string;
  //........map...........
  lat: number = 29.609413;
  lng: number = 30.870006;
  constructor(public translate:TranslateService, private router:Router) {
    translate.setDefaultLang('en');
    translate.use('en');
    
    this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
      {
        if(event.lang == 'ar'){
          $('#un-list,#ul-list-two,#address-col,.section, #news, #nav,#newss').css({"text-align": "right", "direction":"rtl"});
          $('#nav').css({"display":"flex"});
          this.navigate=event.lang;
        }
        else{
          $('#un-list ,#ul-list-two,#address-col, .section,#news, #nav,#newss').css({"text-align": "left", "direction":"ltr"});
          this.navigate=event.lang;
        }
      });
    }

   @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.innerWidth = window.innerWidth;
      if(this.innerWidth<=767){
        this.mobile = true;
      }
      else{
        this.mobile=false;

      } 
    }
   
   ngOnInit(){
    console.log(this.navigate) 
    
    $(document).ready(function () {
      var url = window.location;
      $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
      $('ul.nav a').filter(function() {
           return this.href == url;
      }).parent().addClass('active');
      $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if (scroll==0){
        $('#nav-style').removeClass('navbar-default');
        $('#nav-style').addClass('navStyle');
        $('#logo-nav').removeClass('logo-img');
        $('#logo-nav').addClass('logoStyle');
        $('.navLink').removeClass('nav-link');
        $('.navLink').addClass('navlinkStyle');
        $('.flag').removeClass('flag-img');
        $('.flag').addClass('flagStyle');
      }
      if(scroll>5){
        $('#nav-style').removeClass('navStyle');
        $('#nav-style').addClass('navbar-default');
        $('#logo-nav').removeClass('logoStyle');
        $('#logo-nav').addClass('logo-img');
        $('.navLink').removeClass('navlinkStyle');
        $('.navLink').addClass('nav-link');
        $('.flag').removeClass('flagStyle');
        $('.flag').addClass('flag-img');
      }
      
});
});

   }
   toggleBtn(){
    this.collapsed=!this.collapsed;
   }
   switchLanguageAr(language:string){
    this.translate.use(language);
    this.toggleBtnAr();
    this.collapsed=false;
    
  }
  toggleBtnAr(){
    this.toAr=true;
    this.toEn=false;
    
    
  }
  toggleBtnEn(){
    this.toAr=false;
    this.toEn=true;
    
   
  }
  switchLanguageEn(language:string){
    this.translate.use(language);
    this.toggleBtnEn();
    this.collapsed=false;
    
  }
  toHome(){
    this.collapsed=false;
    window.location.reload();
  }
  toProducts(){
    $('.products-sec').css({'display':'block'})
    this.collapsed=false;
  }
  toRandD(){
    
    this.collapsed=false;
  }
  toContact(){
    
    this.collapsed=false;
  }
  toAbout(){
    
    this.collapsed=false;
  }


}
