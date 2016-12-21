import {Component} from '@angular/core';

import {HubPage} from '../hub/hub';
import {TeamPage} from '../team/team';
import {WorkPage} from '../work/work';
import {PersonalPage} from '../personal/personal';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HubPage;
  tab2Root: any = TeamPage;
  tab3Root: any = WorkPage;
  tab4Root: any = PersonalPage;

  constructor() {

  }
}
