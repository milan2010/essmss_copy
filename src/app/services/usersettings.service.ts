import {Injectable, Inject} from "@angular/core";
import {Http, Response} from "@angular/http";

@Injectable()
export class UserSettingsService {
  private data: { feed:{ calendar:boolean, news:boolean, expense:boolean, message:boolean } } = null;

  constructor(@Inject(Http) private http: Http) {
  }


  getData() {
    return new Promise<{ feed:{ calendar:boolean, news:boolean, expense:boolean, message:boolean } }>((resolve, reject) => {

      if (localStorage.getItem("usersettings") === null) {
        this.http.get('assets/responses/UserSettings.json', {})
        .toPromise()
        .then(res => {
          this.data = res.json().d.results[0];
          localStorage.setItem('usersettings', JSON.stringify(this.data));
          resolve(this.data);
        })
        .catch(function (error: Response) {
          reject(error);
        });
      } else {
        this.data = JSON.parse(localStorage.getItem("usersettings"));
        resolve(this.data);
      }
    });
  }

  setData(settings) {
    this.data = settings;
    localStorage.setItem('usersettings', JSON.stringify(this.data));
  }
}
