import {Injectable, Inject} from "@angular/core";
import {LoadingController} from "ionic-angular";
import {Http, Response} from "@angular/http";

@Injectable()
export class HubService {

  private news: Object = null;

  constructor(@Inject(Http) private http: Http, @Inject(LoadingController) private loadingCtrl: LoadingController) {

  }

  getNews() {
    return new Promise<Object>((resolve, reject) => {
      let loading = this.loadingCtrl.create();
      loading.present();

      this.http.get('https://newsapi.org/v1/articles?source=der-tagesspiegel&sortBy=latest&apiKey=4478789a687642268603344083123786', {})
        .toPromise()
        .then(res => {
          loading.dismiss();
          this.news = res.json();
          resolve(this.news);
        })
        .catch((error: Response) => {
          loading.dismiss();
          reject(error);
        });
    });
  }
}