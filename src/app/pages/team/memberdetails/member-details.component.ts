import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-team-member-details',
  templateUrl: 'member-details.html'
})
export class TeamMemberDetailsPage {
  userData: Object = null;
  userMenu: any[];

  constructor(private navParams: NavParams) {
    this.userData = navParams.data;
    this.userMenu = [
      {
        icon: 'md-star-outline',
        title: 'Qualifikationen',
        subtitle: '2 Scheine'
      },
      {
        icon: 'ios-information-circle-outline',
        title: 'Mitarbeiterinfo',
        subtitle: 'Siehe Infos'
      },
      {
        icon: 'md-plane',
        title: 'Urlaub & Abwesenheit',
        subtitle: 'Noch 5 Tage Urlaub'
      },
      {
        icon: 'ios-information-circle-outline',
        title: 'Einschränkung',
        subtitle: 'Keine Einschränkung'
      },
      {
        icon: 'md-folder-open',
        title: 'Belehrung',
        subtitle: 'Noch ausstehend'
      }];
  }
}
