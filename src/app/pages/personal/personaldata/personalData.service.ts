import {Injectable, Inject} from "@angular/core";
import {Http, Response} from "@angular/http";

@Injectable()
export class PersonalDataService {
  private data: { firstname:string, lastname:string, street:string, number:string, postcode:string, city:string, email:string, mobile:string } = null;

  constructor(@Inject(Http) private http: Http) {
  }

  getData(isManager) {
    return new Promise<{ firstname:string, lastname:string, street:string, number:string, postcode:string, city:string, email:string, mobile:string }>((resolve, reject) => {
      this.http.get('assets/responses/PersonalData.json', {})
      .toPromise()
      .then(res => {
        this.data = isManager ? res.json().d.results[0].data : res.json().d.results[1].data;
        resolve(this.data);
      })
      .catch(function (error: Response) {
        reject(error);
      });
    });
  }

}
