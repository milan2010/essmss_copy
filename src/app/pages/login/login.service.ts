import {Inject, Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {LoadingController} from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(@Inject(Http) private http: Http, @Inject(LoadingController) private loadingCtrl: LoadingController) {
  }

  auth(username, password) {
    return new Promise((resolve, reject) => {
      let loading = this.loadingCtrl.create();
      loading.present();

      let url = 'assets/responses/' + (username.toLowerCase() === 'employee' ? 'EmployeeDataSet.json' : 'ManagerDataSet.json');

      let headers = new Headers();
      headers.append("Authorization", "Basic " + btoa(username + ":" + password));
      headers.append("Content-Type", "application/x-www-form-urlencoded");
      this.http.get(url, {})
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
