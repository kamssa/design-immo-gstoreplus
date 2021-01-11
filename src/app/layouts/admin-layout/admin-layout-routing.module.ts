import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AProposComponent } from 'src/app/Pages/a-propos/a-propos.component';
import { AccueilComponent } from 'src/app/Pages/accueil/accueil.component';
import { BlogComponent } from 'src/app/Pages/blog/blog.component';
import { InvestissementComponent } from 'src/app/Pages/investissement/investissement.component';


const routes: Routes = [
  { path: 'accueil',component: AccueilComponent},
  { path: 'propos',component: AProposComponent},
  { path: 'blog',component: BlogComponent},
  { path: 'investissement',component: InvestissementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
