import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { SingleCardComponent } from './components/single-card/single-card.component';
import { OutlineTextComponent } from './components/outline-text/outline-text.component';
import { GroupCardsComponent } from './components/group-cards/group-cards.component';
import { BodyLayoutComponent } from './components/body-layout/body-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { FeaturedArticlesComponent } from './components/featured-articles/featured-articles.component';
import { TextEffectComponent } from './components/text-effect/text-effect.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroBannerComponent,
    SingleCardComponent,
    OutlineTextComponent,
    GroupCardsComponent,
    BodyLayoutComponent,
    FeaturedArticlesComponent,
    TextEffectComponent,
    FooterComponent,
    FaqComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
