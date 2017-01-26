import {Http, Response} from '@angular/http';
import {Injectable, Inject} from "@angular/core";
import {LoadingController} from "ionic-angular";

@Injectable()
export class PaystubService {

  private data: Object = null;

  constructor(@Inject(Http) private http: Http, @Inject(LoadingController) private loadingCtrl: LoadingController) {
  }

  getData() {
    return new Promise<Object>((resolve, reject) => {
      let loading = this.loadingCtrl.create();
      loading.present();

      this.http.get('assets/responses/EntgeltDetailSet.json', {})
        .toPromise()
        .then(res => {
          loading.dismiss();
          this.data = res.json().d.results;
          resolve(this.data);
        })
        .catch(function (error: Response) {
          loading.dismiss();
          reject(error);
        });
    });
  }
}
