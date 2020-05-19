import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { RecipesPageRoutingModule } from './recipes-routing.module';

import { RecipesPage } from './recipes.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RecipesPageRoutingModule
  ],
  declarations: [RecipesPage]
})
export class RecipesPageModule {}
