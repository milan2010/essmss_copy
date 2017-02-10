import {Injectable, Inject} from "@angular/core";
import {LoadingController} from "ionic-angular";
import {Http, Response} from "@angular/http";
import {UserService} from "./user.service";

@Injectable()
export class PersonService {
    
  private team: Object = null;
  userData: Object = null;

  constructor(@Inject(Http) private http: Http, @Inject(LoadingController) private loadingCtrl: LoadingController,
          @Inject(UserService) private userService: UserService) {
  }
  
  getContacts() {
      return new Promise<Object>((resolve, reject) => {
          let loading = this.loadingCtrl.create();
          loading.present();
    
          this.http.get('assets/responses/ContactPersons.json', {})
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
  
  getTeam() {
      return new Promise<Object>((resolve, reject) => {
        let loading = this.loadingCtrl.create();
        loading.present();

        let teamJsonFile = 'Team';
        if(this.userService.isEmployee()) {
            teamJsonFile += '-Employee';
        }

        this.http.get('assets/responses/'+teamJsonFile+'.json', {})
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
