import {Injectable, Inject} from "@angular/core";
import {LoadingController} from "ionic-angular";
import {Http, Response} from "@angular/http";

@Injectable()
export class TeamService {

  constructor(@Inject(Http) private http: Http, @Inject(LoadingController) private loadingCtrl: LoadingController) {

  }

  getTeam() {
    return new Promise((resolve, reject) => {
      let loading = this.loadingCtrl.create();
      loading.present();

      this.http.get('assets/responses/Team.json', {})
        .toPromise()
        .then(function (res: Response) {
          loading.dismiss();
          resolve(res.json().d.results[0]);
        })
        .catch(function (error: Response) {
          loading.dismiss();
          reject(error);
        });
    });
  }

}
