import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HubPage } from '../pages/hub/hub';
import { TabsPage } from '../pages/tabs/tabs';
import { TeamPage } from "../pages/team/team";
import { PersonalPage } from "../pages/personal/personal";
import { WorkPage } from "../pages/work/work";
import { IonProfileHeader } from "../pages/profileheader/ion-profile-header";
//Profile Subnavigations
import { PaystubPage } from "../pages/paystub/paystub";
import { PersonaldataPage } from "../pages/personaldata/personaldata";
import { ContactpersonPage } from "../pages/contactperson/contactperson";
import { AbsencePage } from "../pages/absence/absence";
import { WorkingtimePage } from "../pages/workingtime/workingtime";

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
