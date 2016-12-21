import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HubPage } from '../pages/hub/hub';
import { TabsPage } from '../pages/tabs/tabs';
import {PersonalPage} from "../pages/personal/personal";
import { TeamPage } from "../pages/team/team";
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
    AboutPage,
    ContactPage,
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
    AboutPage,
    ContactPage,
    HubPage,
    TeamPage,
    PersonalPage,
    WorkPage,
    TabsPage,
    PaystubPage,
    PersonaldataPage,
    ContactpersonPage,
    AbsencePage,
    WorkingtimePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
