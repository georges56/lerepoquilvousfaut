import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppareilsPage } from './appareils.page';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: AppareilsPage
  },
  {
    path: ':id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppareilsPage, DetailsComponent]
})
export class AppareilsPageModule {}
