import { FoodPlanDetailsPage } from './../foodplan-details/foodplan-details.component';
import {Component} from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
  selector: 'food-plan-Page',
  templateUrl: 'foodplan.html'
})

export class FoodPlanPage {
  foodentrys: FoodEntry[] = [];
  
  constructor(private nav: NavController) {
  }
  
  ionViewDidLoad() { 
    this.foodentrys.push(new FoodEntry("@Network",""));
    this.foodentrys.push(new FoodEntry("(M)esslabor",""));
    this.foodentrys.push(new FoodEntry("Oase",""));
    this.foodentrys.push(new FoodEntry("Hafenblick",""));
    this.foodentrys.push(new FoodEntry("Eat & Meet",""));
    this.foodentrys.push(new FoodEntry("Alt Nürnberg",""));
    this.foodentrys.push(new FoodEntry("Treffpunkt",""));
  }
  openDetails() {
    this.nav.push(FoodPlanDetailsPage);
  }
}

export class FoodEntry {
  constructor(public name: string, public imageURL: string) {}
}
