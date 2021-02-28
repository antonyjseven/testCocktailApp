import {Component, OnInit, OnChanges, OnDestroy, DoCheck} from '@angular/core';
import {CocktailApiService} from '../service/cocktail-api.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cocktail-db',
  templateUrl: './cocktail-db.page.html',
  styleUrls: ['./cocktail-db.page.scss'],
})
export class CocktailDBPage implements OnInit, OnChanges, OnDestroy, DoCheck {
  drinks;
  state;

  constructor(private cocktailApi: CocktailApiService, private router: Router) {
    console.log('app component constructor called');
  }

  trackCocktailCategory(cocktail) {
    return cocktail.key;
  }

  ngOnInit() {
    console.log('this.cocktailApi.getState()', this.cocktailApi.getState());
    this.state = this.cocktailApi.getState();
  }

  ngOnChanges() {
    console.log('azaza', this.cocktailApi.getState());
    this.state = this.cocktailApi.getState();
  }

  ngDoCheck() {
    console.log('ngDoCheck');
    this.state = this.cocktailApi.getState();
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  goToFilters() {
    this.router.navigate(['filter']);
  }

  // ionViewDidEnter() {
  //   this.cocktailApi.getCocktail('Ordinary Drink').subscribe(d => {
  //     console.log(d);
  //     this.drinks = d[`drinks`];
  //   });
  // }
}
