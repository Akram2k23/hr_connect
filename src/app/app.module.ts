import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { TextHeadingComponent } from './shared/components/text-heading/text-heading.component';
import { TextSubHeadingComponent } from './shared/components/text-sub-heading/text-sub-heading.component';
import { SearchFilterComponent } from './shared/components/search-filter/search-filter.component';
import { LayoutComponent } from './layout/layout.component';
import { NavigationComponent } from './layout/components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TextHeadingComponent,
    TextSubHeadingComponent,
    SearchFilterComponent,
    LayoutComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
