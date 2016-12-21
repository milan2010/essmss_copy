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
import { PaystubPage } from "../pages/paystub/paystub";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HubPage,
    TeamPage,
    PersonalPage,
    WorkPage,
    TabsPage,
    PaystubPage,
    IonProfileHeader
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
    PaystubPage,
    TabsPage,
    LoginPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
