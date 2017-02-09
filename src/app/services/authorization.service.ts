import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import { LoadingController } from "ionic-angular";

@Injectable()
export class AuthorizationService {

  private appAuthorizations: {id: string}[];

  constructor(public http: Http, @Inject(LoadingController) private loadingCtrl: LoadingController) {
    this.getAuthorizations();
  }

  private getAuthorizations() {
    let loading = this.loadingCtrl.create();
    loading.present();

    this.http.get('assets/responses/AuthorizationData.json').map(res => res.json()).subscribe(data => {
        this.appAuthorizations = data.d.results[0].authorizations;
        loading.dismiss();
    }, err => {
      loading.dismiss();
    });
  }

  isAuthorized(appId: string): boolean {
    return this.appAuthorizations.filter(auth => auth.id === appId).length > 0;
  }

  forceUpdate(){
    this.getAuthorizations();
  }
}
