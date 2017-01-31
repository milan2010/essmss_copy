import {NgModule, ErrorHandler} from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import {MyApp} from './app.component';
import {LoginPage} from './pages/login/login.component';
import {HubPage} from './pages/hub/hub.components';
import {TabsPage} from './pages/tabs/tabs.component';
import {TeamPage} from "./pages/team/team.components";
import {PersonalPage} from "./pages/personal/personal.components";
import {WorkPage} from "./pages/work/work.components";
import {IonProfileHeader} from "./pages/personal/profileheader/ion-profile-header.components";
import {PaystubPage} from "./pages/personal/paystub/paystub.components";
import {PersonaldataPage} from "./pages/personal/personaldata/personaldata.components";
import {ContactpersonPage} from "./pages/personal/contactperson/contactperson.components";
import {AbsencePage} from "./pages/personal/absence/absence.components";
import {WorkingtimePage} from "./pages/personal/workingtime/workingtime.components";
import {TeamMembersPage} from "./pages/team/members/members.components";
import {Calendar} from "./shared/calendar/calendar.component";
import {SettingsPage} from "./pages/settings/settings.component";
import {ChatPage} from "./pages/chat/chat.component";
import {ExpenseItemList} from "./pages/personal/paystub/expenseitemlist/expense-item-list";

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
    ExpenseItemList
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
    ChatPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
