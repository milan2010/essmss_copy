import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from './pages/login/login.component';
import { HubPage } from './pages/hub/hub.components';
import { TabsPage } from './pages/tabs/tabs.component';
import { TeamPage } from "./pages/team/team.components";
import { PersonalPage } from "./pages/personal/personal.components";
import { WorkPage } from "./pages/work/work.components";
import { IonProfileHeader } from "./pages/personal/profileheader/ion-profile-header.components";
//Profile Subnavigations
import { PaystubPage } from "./pages/personal/paystub/paystub.components";
import { PersonaldataPage } from "./pages/personal/personaldata/personaldata.components";
import { ContactpersonPage } from "./pages/personal/contactperson/contactperson.components";
import { AbsencePage } from "./pages/personal/absence/absence.components";
import { WorkingtimePage } from "./pages/personal/workingtime/workingtime.components";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HubPage,
    TeamPage,
    PersonalPage,
    WorkPage,
    TabsPage,
    IonProfileHeader,
    PaystubPage,
    PersonaldataPage,
    ContactpersonPage,
    AbsencePage,
    WorkingtimePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HubPage,
    TeamPage,
    PersonalPage,
    WorkPage,
    TabsPage,
    PaystubPage,
    TabsPage,
    LoginPage,
    PersonaldataPage,
    ContactpersonPage,
    AbsencePage,
    WorkingtimePage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
