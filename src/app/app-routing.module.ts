import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HowGbrWorksComponent } from './how-gbr-works/how-gbr-works.component';
import { CompanyComponent } from './company/company.component';
import { InvestorComponent } from './investor/investor.component';
import { ExpertComponent } from './expert/expert.component';
import { NewMemberRegistrationComponent } from './new-member-registration/new-member-registration.component';
import { NewMemberRegistrationInvestorComponent } from './new-member-registration-investor/new-member-registration-investor.component';
import { NewMemberRegistrationExpertComponent } from './new-member-registration-expert/new-member-registration-expert.component';
import { LoggedPageComponent } from './logged-page/logged-page.component';
import { LoggedpageSearchCompanyComponent } from './loggedpage-search-company/loggedpage-search-company.component';
import { LoggedpageSearchInvestorComponent } from './loggedpage-search-investor/loggedpage-search-investor.component';
import { LoggedpageSearchExpertComponent } from './loggedpage-search-expert/loggedpage-search-expert.component';
import { PaymentComponent } from './payment/payment.component';
import { NotificationPageComponent } from './notification-page/notification-page.component';
const routes: Routes = [
{
 path:'home',
 component:HomeComponent	
},
{
 path:'',
 component:HomeComponent	
},
{
 path:'about',
 component:AboutComponent	
},
{
 path:'how-gbr-works',
 component:HowGbrWorksComponent	
},
{
 path:'company',
 component:CompanyComponent	
},
{
 path:'investor',
 component:InvestorComponent	
},
{
 path:'expert',
 component:ExpertComponent	
},
{
 path:'new-member-registration-companies',
 component:NewMemberRegistrationComponent	
},
{
 path:'new-member-registration-investors',
 component:NewMemberRegistrationInvestorComponent	
},
{
 path:'new-member-registration-expert',
 component:NewMemberRegistrationExpertComponent	
},
{
 path:'logged-page',
 component:LoggedPageComponent	
},
{
 path:'logged-page-search-company',
 component:LoggedpageSearchCompanyComponent	
},
{
 path:'logged-page-search-investor',
 component:LoggedpageSearchInvestorComponent	
},
{
 path:'logged-page-search-expert',
 component:LoggedpageSearchExpertComponent	
},
{
 path:'payment',
 component:PaymentComponent	
},
{
 path:'notification',
 component:NotificationPageComponent	
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
