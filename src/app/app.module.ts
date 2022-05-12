import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { SingleCardComponent } from './components/single-card/single-card.component';
import { OutlineTextComponent } from './components/outline-text/outline-text.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroBannerComponent,
    SingleCardComponent,
    OutlineTextComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
