import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
import { PlatformLocation } from '@angular/common';
import { ImageShow } from '../../../models/imageShow';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit  {
  isEng:boolean;
  isAr:boolean;
  iscoatex=false;
  isAuto:boolean=true;
  isDeco=false;
  isWood=false;
  isIndust=false;
  isSilver=false;
  isSilverA=false;
  isSilverD=false;
  isSilverW=false;
  isSilverI=false;
  galleryImages: ImageShow[];
  type:any;
  brand:any;
  sub:any;
  isLinco:boolean=true;
  autoImgs:ImageShow[]=[
    {
      image:"P-C-A-1", 
      header:"1",
      text:"1",
     
    },
    {
      image:"P-C-A-2",
      header:"2",
      text:"2",
      
    },
    {
      image:"P-C-A-3",
      header:"3",
      text:"3",
     
    },
    {
      image:"P-C-A-4",
      header:"4",
      text:"4",
      
      },
   
    {
      image:"P-C-A-5",
      header:"5",
      text:"5",
      
    },
    {
      image:"P-C-A-6",
      header:"6",
      text:"6",
      
    },
    {
      image:"P-C-A-7",
      header:"7",
      text:"7",
      
    },
    {
      image:"P-C-A-8",
      header:"8",
      text:"8",
      
    },
    {
      image:"P-C-A-9",
      header:"9",
      text:"9",
      
    },
    {
      image:"P-C-A-10",
      header:"10",
      text:"10",
      
    },
    {
      image:"P-C-A-11",
      header:"11",
      text:"11",
      
    },
    {
      image:"P-C-A-12",
      header:"12",
      text:"12",
      
    },
    {
      image:"P-C-A-13",
      header:"13",
      text:"13",
      
    },
    
  ]
  decoImgs:ImageShow[]=[
    {
      image:"P-C-C-1",
      header:"14",
      text:"14"
    },
    {
      image:"P-C-C-2",
      header:"15",
      text:"15"
    },
    {
      image:"P-C-C-3",
      header:"16",
      text:"16"
    },
    {
      image:"P-C-C-4",
      header:"17",
      text:"17"
    },
    {
      image:"P-C-C-5",
      header:"18",
      text:"18"
    },
    {
      image:"P-C-C-6",
      header:"19",
      text:"19"
    },
    {
      image:"P-C-C-7",
      header:"20",
      text:"20"
    },
    {
      image:"P-C-C-8",
      header:"21",
      text:"21"
    },
    {
      image:"P-C-C-9",
      header:"22",
      text:"22"
    },
    {
      image:"P-C-C-10",
      header:"23",
      text:"23"
    },
    {
      image:"P-C-C-11",
      header:"24",
      text:"24"
    },
    {
      image:"P-C-C-12",
      header:"25",
      text:"25"
    },
    {
      image:"P-C-C-13",
      header:"26",
      text:"26"
    }
  ]
  woodImgs:ImageShow[]=[
    {
      image:"P-C-W-1",
      header:"27",
      text:"27"
    },
    {
      image:"P-C-W-2",
      header:"28",
      text:"28"
    },
    {
      image:"P-C-W-3",
      header:"29",
      text:"29"
    },
    {
      image:"P-C-W-4",
      header:"30",
      text:"30"
    },
    {
      image:"P-C-W-5",
      header:"31",
      text:"31"
    },
    {
      image:"P-C-W-6",
      header:"32",
     text:"32"
    },
    {
      image:"P-C-W-7",
      header:"33",
      text:"33"
    },
    {
      image:"P-C-W-8",
      header:"34",
      text:"34"
    },
    {
      image:"P-C-W-9",
      header:"35",
      text:"35"
    },
    {
      image:"P-C-W-10",
      header:"36",
      text:"36"
    },
    {
      image:"P-C-W-11",
      header:"37",
      text:"37"
    },
    {
      image:"P-C-W-12",
      header:"38",
      text:"38"
    },
    {
      image:"P-C-W-13",
      header:"39",
      text:"39"
    }
  ]
  industImgs:ImageShow[]=[
    {
      image:"P-C-I-1",
      header:"40",
      text:"40"
    }
  ]
  silverAutoImgs:ImageShow[]=[
    {
      image:"silver/P-S-A-1",
      header:"41",
      text:"41"
    },
    {
      image:"silver/P-S-A-2",
      header:"42",
      text:"42"
    },
    {
      image:"silver/P-S-A-3",
      header:"43",
      text:"43"
    },
    {
      image:"silver/P-S-A-4",
      header:"44",
      text:"44"
    },
    {
      image:"silver/P-S-A-5",
      header:"45",
      text:"45"
    },
    {
      image:"silver/P-S-A-6",
      header:"46",
      text:"46"
    },
    {
      image:"silver/P-S-A-7",
      header:"47",
      text:"47"
    },
    {
      image:"silver/P-S-A-8",
      header:"48",
      text:"48"
    },
  ]
  silverDecoImgs:ImageShow[]=[
    {
      image:"silver/P-S-C-1",
      header:"49",
      text:"49"
    },
    {
      image:"silver/P-S-C-2",
      header:"50",
      text:"50"
    },
    {
      image:"silver/P-S-C-3",
      header:"51",
      text:"51"
    },
    {
      image:"silver/P-S-C-4",
      header:"52",
      text:"52"
    },
    {
      image:"silver/P-S-C-5",
      header:"53",
      text:"53"
    },
    {
      image:"silver/P-S-C-6",
      header:"54",
      text:"54"
    },
    
  ]
  silverWoodImgs:ImageShow[]=[
    {
      image:"silver/P-S-W-1",
      header:"55",
      text:"55"
    },
    {
      image:"silver/P-S-W-2",
      header:"56",
      text:"56"
    },
    {
      image:"silver/P-S-W-3",
      header:"57",
      text:"57"
    },
    {
      image:"silver/P-S-W-4",
      header:"58",
      text:"58"
    },
    {
      image:"silver/P-S-W-5",
      header:"59",
     text:"59"
    },
  ]
  silverIndusImgs:ImageShow[]=[
    {
      image:"silver/P-S-I-1",
      header:"60",
      text:"60"
    },
    {
      image:"silver/P-S-I-2",
      header:"61",
      text:"61"
    },
    
  ]
  lincoImgs:ImageShow[]=[
    {
      image: 'linco/P-L-1',
      header: '62',
      text:'62'
    },
    {
      image: 'linco/P-L-2',
      header: '63',
      text:'63'
    },
    {
      image: 'linco/P-L-3',
      header: '64',
      text:'64'
    },
    {
      image: 'linco/P-L-4',
      header: '65',
      text:'65'
    },
    {
      image: 'linco/P-L-5',
      header: '66',
      text:'66'
    },
    {
      image: 'linco/P-L-6',
      header: '67',
      text:'67'
    }
  ]
  
  constructor(private route: ActivatedRoute, public translate:TranslateService,location: PlatformLocation) {
    location.onPopState(() => {

      $('.products-sec').css({'display':'block'})

  });
   }
   
  ngOnInit() :void{
   $(window).on('load', function(){
    $('.products-sec').css({'display':'none'})
});
    this.sub = this.route.params.subscribe(params => {
      this.brand=params['brand']
      this.type = params['type']; 
      });
      

    if(this.brand=="Coatex"){
      this.iscoatex=true;
      this.isSilver=false;
      if(this.type=="Automotive"){
        this.galleryImages = this.autoImgs.slice();
        this.isAuto=true;
        this.isDeco=false;
        this.isIndust=false;
        this.isWood=false;
        
      }
      else if(this.type=="Decorative"){
        this.galleryImages =this.decoImgs.slice();
        this.isAuto=false;
        this.isDeco=true;
        this.isIndust=false;
        this.isWood=false;
      }
      else if(this.type=="Wood"){
        this.galleryImages = this.woodImgs.slice();
        this.isAuto=false;
        this.isDeco=false;
        this.isIndust=false;
        this.isWood=true;
      }
      else if(this.type=="Industrial"){
        this.galleryImages = this.industImgs.slice();
        this.isAuto=false;
        this.isDeco=false;
        this.isIndust=true;
        this.isWood=false;
        
      }

    }
    else if(this.brand=="Silver-Star"){
      this.isSilver=true;
      this.iscoatex=false;
      if(this.type=="Automotive"){
        this.galleryImages = this.silverAutoImgs.slice();
        this.isSilverA=true;
        this.isSilverD=false;
        this.isSilverI=false;
        this.isSilverW=false;
        
      }
      else if(this.type=="Decorative"){
        this.galleryImages =this.silverDecoImgs.slice();
        this.isSilverA=false;
        this.isSilverD=true;
        this.isSilverI=false;
        this.isSilverW=false;
      }
      else if(this.type=="Wood"){
        this.galleryImages = this.silverWoodImgs.slice();
        this.isSilverA=false;
        this.isSilverD=false;
        this.isSilverI=false;
        this.isSilverW=true;
      }
      else if(this.type=="Industrial"){
        this.galleryImages = this.silverIndusImgs.slice();
        this.isSilverA=false;
        this.isSilverD=false;
        this.isSilverI=true;
        this.isSilverW=false;
      }
    }
    else if(this.brand=="Linco"){
      if(this.type=='linco'){
      this.isLinco=false;
      this.galleryImages = this.lincoImgs.slice();
    }
    }
    
    
  }


  toShowAuto(){
    if(this.brand != 'linco'){
    $("a.card-click").click(function() {
      $('html,body').animate({
          scrollTop: $(".point").offset().top},
          500);
  });
}
   console.log(this.type)
   this.galleryImages.length=0;
   this.galleryImages=this.autoImgs.slice();
   
   this.iscoatex=true;
    this.isAuto=true;
     this.isDeco=false;
     this.isIndust=false;
     this.isWood=false;
     this.isLinco=true;
     this.isSilver=false;
    
   }
  toShowDeco(){
    console.log(this.type)
    this.galleryImages.length=0;
    this.galleryImages=this.decoImgs.slice();
    this.isSilver=false;
    this.iscoatex=true;
    this.isAuto=false;
     this.isDeco=true;
     this.isIndust=false;
     this.isWood=false;
     this.isLinco=true;
    
  }
  toShowWood(){
    console.log(this.type)
    this.galleryImages.length=0;
    this.galleryImages=this.woodImgs.slice();
    this.isSilver=false;
    this.iscoatex=true;
    this.isAuto=false;
     this.isDeco=false;
     this.isIndust=false;
     this.isWood=true;
     this.isLinco=true;
   
  }
  toShowIndust(){
    console.log(this.type)
    this.galleryImages.length=0;
    this.galleryImages=this.industImgs.slice();
    this.isSilver=false;
    this.iscoatex=true;
    this.isAuto=false;
     this.isDeco=false;
     this.isIndust=true;
     this.isWood=false;
     this.isLinco=true;
     
  }
  toShowLinco(){
    $("a.card-click").click(function() {
      $('html,body').animate({
          scrollTop: $("#toImgs").offset().top},
          500);
  });
    
    this.galleryImages.length=0;
    this.galleryImages=this.lincoImgs.slice();
    this.isLinco=false;
  }
 showSilverAuto(){
  $("a.card-click").click(function() {
    $('html,body').animate({
        scrollTop: $(".point").offset().top},
        500);
});
 console.log(this.type)
 this.galleryImages.length=0;
 this.galleryImages=this.silverAutoImgs.slice();
 this.isSilver=true;
 this.iscoatex=false;
  this.isAuto=false;
  this.isDeco=false;
  this.isIndust=false;
  this.isWood=false;
  this.isLinco=true;
  this.isSilverA=true;
this.isSilverD=false;
this.isSilverW=false;
this.isSilverI=false;

 }
 showSilverDeco(){
  this.galleryImages.length=0;
  this.galleryImages=this.silverDecoImgs.slice();
  this.isSilver=true;
  this.iscoatex=false;
  this.isAuto=false;
  this.isDeco=false;
  this.isIndust=false;
  this.isWood=false;
  this.isLinco=true;
  this.isSilverA=false;
this.isSilverD=true;
this.isSilverW=false;
this.isSilverI=false;
}
showSilverWood(){
  this.galleryImages.length=0;
 this.galleryImages=this.silverWoodImgs.slice();
 this.isSilver=true;
 this.iscoatex=false;
  this.isAuto=false;
  this.isDeco=false;
  this.isIndust=false;
  this.isWood=false;
  this.isLinco=true;
  this.isSilverA=false;
this.isSilverD=false;
this.isSilverW=true;
this.isSilverI=false;
}
showSilverIndus(){
  this.galleryImages.length=0;
 this.galleryImages=this.silverIndusImgs.slice();
 this.isSilver=true;
 this.iscoatex=false;
  this.isAuto=false;
  this.isDeco=false;
  this.isIndust=false;
  this.isWood=false;
  this.isLinco=true;
  this.isSilverA=false;
this.isSilverD=false;
this.isSilverW=false;
this.isSilverI=true;
}

}
