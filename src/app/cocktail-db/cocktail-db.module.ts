import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CocktailDBPageRoutingModule } from './cocktail-db-routing.module';

import { CocktailDBPage } from './cocktail-db.page';
import {CoctailListComponent} from './coctail-list/coctail-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CocktailDBPageRoutingModule
  ],
  declarations: [CocktailDBPage, CoctailListComponent]
})
export class CocktailDBPageModule {}
