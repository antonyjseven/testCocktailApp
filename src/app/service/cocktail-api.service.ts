import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailApiService {

  state = {
    'Ordinary Drink': false,
    Cocktail: true,
    Cocoa: true,
    Beer: false,
  };

  copyState = {
    ...this.state,
  };

  constructor(private http: HttpClient) { }
  getCocktail(drink: string) {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drink}`);
  }

  getState() {
    return this.state;
  }

  toggle(value: string) {
    this.copyState[value] = !this.copyState[value];
  }

  save() {
    this.state = {...this.copyState};
  }
}
