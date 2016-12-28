import {Injectable, Inject} from "@angular/core";
import {LoadingController} from "ionic-angular";
import {Http, Response} from "@angular/http";

@Injectable()
export class TeamService {

  private team: Object = null;

  constructor(@Inject(Http) private http: Http, @Inject(LoadingController) private loadingCtrl: LoadingController) {

  }

  getTeam() {
    return new Promise<Object>((resolve, reject) => {
      let loading = this.loadingCtrl.create();
      loading.present();

      this.http.get('assets/responses/Team.json', {})
        .toPromise()
        .then(res => {
          loading.dismiss();
          this.team = res.json().d.results[0];
          resolve(this.team);
        })
        .catch(function (error: Response) {
          loading.dismiss();
          reject(error);
        });
    });
  }
}
