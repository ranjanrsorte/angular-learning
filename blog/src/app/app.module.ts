import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InlineCssExpComponent } from './inline-css-exp/inline-css-exp.component';
import { InlineHtmlEmpComponent } from './inline-html-emp/inline-html-emp.component';
import { InlineHtmlCssExpComponent } from './inline-html-css-exp/inline-html-css-exp.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    InlineCssExpComponent,
    InlineHtmlEmpComponent,
    InlineHtmlCssExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
