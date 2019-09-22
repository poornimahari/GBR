import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderBottomComponent } from './header-bottom/header-bottom.component';
import { AboutComponent } from './about/about.component';
import { HowGbrWorksComponent } from './how-gbr-works/how-gbr-works.component';
import { CompanyComponent } from './company/company.component';
import { InvestorComponent } from './investor/investor.component';
import { ExpertComponent } from './expert/expert.component';
import { NewMemberRegistrationComponent } from './new-member-registration/new-member-registration.component';
import { NewMemberRegistrationInvestorComponent } from './new-member-registration-investor/new-member-registration-investor.component';
import { NewMemberRegistrationExpertComponent } from './new-member-registration-expert/new-member-registration-expert.component';
import { LoggedPageComponent } from './logged-page/logged-page.component';
import { LoggedpageHeaderbtmComponent } from './loggedpage-headerbtm/loggedpage-headerbtm.component';
import { LoggedpageSearchCompanyComponent } from './loggedpage-search-company/loggedpage-search-company.component';
import { LoggedpageSearchInvestorComponent } from './loggedpage-search-investor/loggedpage-search-investor.component';
import { LoggedpageSearchExpertComponent } from './loggedpage-search-expert/loggedpage-search-expert.component';
import { PaymentComponent } from './payment/payment.component';
import { NotificationPageComponent } from './notification-page/notification-page.component';
import { ChatboxwidgetComponent } from './chatboxwidget/chatboxwidget.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeaderBottomComponent,
    AboutComponent,
    HowGbrWorksComponent,
    CompanyComponent,
    InvestorComponent,
    ExpertComponent,
    NewMemberRegistrationComponent,
    NewMemberRegistrationInvestorComponent,
    NewMemberRegistrationExpertComponent,
    LoggedPageComponent,
    LoggedpageHeaderbtmComponent,
    LoggedpageSearchCompanyComponent,
    LoggedpageSearchInvestorComponent,
    LoggedpageSearchExpertComponent,
    PaymentComponent,
    NotificationPageComponent,
    ChatboxwidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NgbPaginationModule, NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
