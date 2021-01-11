import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from 'src/app/Pages/accueil/accueil.component';
import { AProposComponent } from 'src/app/Pages/a-propos/a-propos.component';
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { BlogComponent } from 'src/app/Pages/blog/blog.component';
import { InvestissementComponent } from 'src/app/Pages/investissement/investissement.component';


@NgModule({
  declarations: [
    AccueilComponent,
    AProposComponent,
    BlogComponent,
    InvestissementComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule
  ]
})
export class AdminLayoutModule { }
