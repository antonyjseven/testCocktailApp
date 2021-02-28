import {Component, Input, OnInit} from '@angular/core';
import {CocktailApiService} from '../../service/cocktail-api.service';

@Component({
  selector: 'app-coctail-list',
  templateUrl: './coctail-list.component.html',
  styleUrls: ['./coctail-list.component.scss'],
})
export class CoctailListComponent implements OnInit {
  drinksFromCertainCategory;
  isDataLoaded;
  @Input() category: string;
  constructor(private cocktailApi: CocktailApiService) {
  }

  ngOnInit() {
    console.log('this.category', this.category);
    this.cocktailApi.getCocktail(this.category).subscribe(d => {
      this.drinksFromCertainCategory = d[`drinks`];
      this.isDataLoaded = true;
    });
  }

  // ionViewDidEnter() {
  //   console.log('this.category', this.category);
  //   this.cocktailApi.getCocktail(this.category).subscribe(d => {
  //     console.log(d);
  //     console.log('zaupa');
  //     this.drinksFromCertainCategory = d[`drinks`];
  //   });
  // }

}
