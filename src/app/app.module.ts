import {NgModule, ErrorHandler} from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';

import {MyApp} from './app.component';
import {LoginPage} from './pages/login/login.component';
import {HubPage} from './pages/hub/hub.components';
import {TabsPage} from './pages/tabs/tabs.component';
import {TeamPage} from "./pages/team/team.components";
import {PersonalPage} from "./pages/personal/personal.components";
import {WorkPage} from "./pages/work/work.components";
import {PaystubPage} from "./pages/personal/paystub/paystub.components";
import {PersonaldataPage} from "./pages/personal/personaldata/personaldata.components";
import {ContactpersonPage} from "./pages/personal/contactperson/contactperson.components";
import {AbsencePage} from "./pages/personal/absence/absence.components";
import {WorkingtimePage} from "./pages/personal/workingtime/workingtime.components";
import {TeamMembersPage} from "./pages/team/members/members.components";
import {SettingsPage} from "./pages/settings/settings.component";
import {ChatPage} from "./pages/chat/chat.component";
import {ExpenseItemList} from "./pages/personal/paystub/expense-item-list/expense-item-list";
import {TeamMemberDetailsPage} from "./pages/team/memberdetails/member-details.component";
import {PresswerkPage} from "./pages/work/presswerk/presswerk.components";
import {CanteenPage} from "./pages/work/canteen/canteen.component";
import {AccountPage} from "./pages/settings/account/account.component";

/* COMPONENTS */
import {NewsItem} from "./pages/hub/news-item/news-item.component";
import {MessageItem} from "./pages/hub/message-item/message-item.component";
import {ExpenseItem} from "./pages/hub/expense-item/expense-item.component";
import {CalendarItem} from "./pages/hub/calendar-item/calendar-item.component";
import {ListItemComponent} from "./components/listitem/listitem.component";
import {IonProfileHeader} from "./components/profileheader/ion-profile-header.components";
import {Calendar} from "./components/calendar/calendar.component";
import {UserDetailsPage} from "./components/userdetails/user-details.component";
import {UserOverviewPage} from "./components/useroverview/useroverview.components";

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HubPage,
    TeamPage,
    TeamMembersPage,
    TeamMemberDetailsPage,
    UserDetailsPage,
    UserOverviewPage,
    PersonalPage,
    WorkPage,
    TabsPage,
    IonProfileHeader,
    PaystubPage,
    PersonaldataPage,
    ContactpersonPage,
    AbsencePage,
    WorkingtimePage,
    Calendar,
    SettingsPage,
    ChatPage,
    ExpenseItemList,
    NewsItem,
    MessageItem,
    ExpenseItem,
    CalendarItem,
    PresswerkPage,
    CanteenPage,
    AccountPage,
    ListItemComponent
  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HubPage,
    TeamPage,
    TeamMembersPage,
    TeamMemberDetailsPage,
    UserDetailsPage,
    UserOverviewPage,
    PersonalPage,
    WorkPage,
    TabsPage,
    PaystubPage,
    TabsPage,
    LoginPage,
    PersonaldataPage,
    ContactpersonPage,
    AbsencePage,
    WorkingtimePage,
    SettingsPage,
    ChatPage,
    NewsItem,
    MessageItem,
    ExpenseItem,
    CalendarItem,
    PresswerkPage,
    CanteenPage,
    AccountPage,
    ListItemComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
