import {Http, Headers} from '@angular/http';
import {Injectable} from "@angular/core";

@Injectable()
export class PaystubService {
  data = null;

  constructor(private http:Http) {
    this.http = http;
  }

  createAuthorizationHeader(headers: Headers) {
    //TODO: get data from local storage
    headers.append('Authorization', 'Basic ' +
      btoa('Bernd:Bratwurst#1999'));
  }

  retrieveData() {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    //TODO: put url to a global provider?
    //like:
    //this.http.get(`/009_ESS_ENTGELTNACHWEIS_SRV/EntgeltSet?$format=json&$skip=0&$top=10`)

    this.http.get(`http://ipe.wob.vw.vwg:5000/sap/opu/odata/VWK/009_ESS_ENTGELTNACHWEIS_SRV/EntgeltSet?$format=json&$skip=0&$top=10`)
      .subscribe(response => {
        console.log(response);
        this.data = response;
      });

    //TODO: Check this idea
    //When error response, then catch with another local try
    //.catch(()=> {
    //       this.http.get('assets/responses/EmployeeDataSet.json', {})
    // } )


  }

  getData() {
    return this.data;
  }




}
