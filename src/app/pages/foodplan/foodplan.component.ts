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
    this.foodentrys.push(new FoodEntry("(M)esslabor","assets/img/Messlabor.jpg"));
    this.foodentrys.push(new FoodEntry("Oase","assets/img/Oase.jpg"));
    this.foodentrys.push(new FoodEntry("Hafenblick","assets/img/Hafenblick.jpg"));
    this.foodentrys.push(new FoodEntry("Eat & Meet","assets/img/MeetAEat.jpg"));
    this.foodentrys.push(new FoodEntry("Alt Nürnberg","assets/img/AltNuernberg.jpg"));
    this.foodentrys.push(new FoodEntry("Treffpunkt","assets/img/Treffpunkt.jpg"));
  }
  openDetails() {
    this.nav.push(FoodPlanDetailsPage);
  }
}

export class FoodEntry {
  constructor(public name: string, public imageURL: string) {}
}
