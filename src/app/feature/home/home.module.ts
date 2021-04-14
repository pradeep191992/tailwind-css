import { CardModule } from './../../modules/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';


@NgModule({
  declarations: [HomeComponent, HomeBannerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
  ]
})
export class HomeModule { }
