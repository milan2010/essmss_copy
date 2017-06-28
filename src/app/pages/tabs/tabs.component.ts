import { FoodPlanPage } from './../foodplan/foodplan.component';
import { AbsencePage } from './../personal/absence/absence.components';
import {Component} from '@angular/core';
import {NewsPage} from '../news/news.component';
import {TeamPage} from '../team/team.components';
import {WorkPage} from '../work/work.components';
import {PersonalPage} from '../personal/personal.components';
import {ChatPage} from '../chat/chat.component';

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = NewsPage;
  tab2Root: any = AbsencePage;
  tab3Root: any = ChatPage;
  tab4Root: any = PersonalPage;
  tab5Root: any = FoodPlanPage;

  constructor() {
  }
}
