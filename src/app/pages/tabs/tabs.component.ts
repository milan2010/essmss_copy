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
  tab2Root: any = TeamPage;
  tab3Root: any = WorkPage;
  tab4Root: any = PersonalPage;
  tab5Root: any = ChatPage;

  constructor() {
  }
}
