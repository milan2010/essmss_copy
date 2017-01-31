import {Injectable, Inject} from "@angular/core";
import {Http, Response} from "@angular/http";
import {LoadingController} from "ionic-angular";

@Injectable()
export class WorkingtimeTypesService {
  private data: Array<String> = null;

  constructor(@Inject(Http) private http: Http, @Inject(LoadingController) private loadingCtrl: LoadingController) {
  }

  getData() {
    return new Promise<Array<String>>((resolve, reject) => {
      let loading = this.loadingCtrl.create();
      // loading.present();

      if (this.data != null) {
        loading.dismiss();
        return this.data;
      }

      this.http.get('assets/responses/CalendarTypes.json', {})
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
