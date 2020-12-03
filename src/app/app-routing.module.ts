import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

//import components//
import { PrincipalComponent } from './components/principal/principal.component';
import { FinishComponent } from './components/finish/finish.component';
import { NotAvailableComponent } from './components/not-available/not-available.component';
import { ExpiredLinkComponent } from './components/expired-link/expired-link.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 's/:k', component: PrincipalComponent},
  {path: 'finish', component: FinishComponent},
  {path: 'notAvailable', component: NotAvailableComponent},
  {path: 'expiredLink', component: ExpiredLinkComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
