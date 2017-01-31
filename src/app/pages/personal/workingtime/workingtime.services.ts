import {Injectable, Inject} from "@angular/core";
import {Http, Response} from "@angular/http";
import {LoadingController} from "ionic-angular";

@Injectable()
export class WorkingTimeService {

  private data: Array<Object> = null;

  constructor(@Inject(Http) private http: Http, @Inject(LoadingController) private loadingCtrl: LoadingController) {

  }

  getData() {
    return new Promise<Array<Object>>((resolve, reject) => {
      let loading = this.loadingCtrl.create();
      // loading.present();

      this.http.get('assets/responses/SchichtplanSet.json', {})
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
