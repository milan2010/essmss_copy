
import { Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

export class LoginService {

    constructor( @Inject(Http) private http: Http, @Inject(LoadingController) private loadingCtrl: LoadingController) { }

    auth(username, password) {
        return new Promise((resolve, reject) => {
            let loading = this.loadingCtrl.create();
            loading.present();

            // let headers = new Headers();
            // headers.append("Authorization", "Basic " + btoa(username + ":" + password));
            // headers.append("Content-Type", "application/x-www-form-urlencoded");
            // this.http.post('login', {}, headers)

            this.http.get('assets/responses/EmployeeDataSet.json', {})
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
