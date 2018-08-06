import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateService} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { TabsModule,TooltipModule,CarouselModule ,CollapseModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RandDComponent } from './components/rand-d/rand-d.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGalleryModule } from 'ngx-gallery';
import { SingleProductComponent } from './components/single-product/single-product.component';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsComponent,
    ContactUsComponent,
    RandDComponent,
    AboutUsComponent,
    SingleProductComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CollapseModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
   TabsModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCfTuB2SDEMdQvMj5Ndt_Q5skeDfH2c9UI'
    }),
    TooltipModule.forRoot(),
    CarouselModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  }),
  RouterModule.forRoot([
    {path:'homepage', component:HomePageComponent},
    {path:'products',component:ProductsComponent,children:[
      {path:':brand/:type',component:SingleProductComponent},
    ]
  },
    
    {path:'contactUs',component:ContactUsComponent},
    {path:'RandD',component:RandDComponent},
    {path:'aboutUs', component:AboutUsComponent},
    {path:"",redirectTo:'homepage',pathMatch:'full'}
    
  ])
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
