import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundExpComponent } from './page-not-found-exp/page-not-found-exp.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { 
    component: AboutComponent, 
    path: 'about',
    children: [
      { path: 'company', component:AboutCompanyComponent },
      { path: 'me', component:AboutMeComponent }
    ]
  },
  { component: UserComponent, path: 'user/:id' },
  { component: HomeComponent, path: '' },
  { component: PageNotFoundExpComponent, path: '**' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
