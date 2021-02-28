import {Component, OnInit} from '@angular/core';
import {CocktailApiService} from '../../service/cocktail-api.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {
  checkbox;
  constructor(private service: CocktailApiService) { }
  ngOnInit() {
  }
  toggleCheckbox(id){
    console.log(id);
    this.service.toggle(id);
  }

  saveChanges() {
    this.service.save();
  }
  ionViewDidEnter() {
    this.checkbox = this.service.copyState;
  }

}
