import { Injectable, Inject } from "@angular/core";
import { LoadingController } from "ionic-angular";
import { Http, Response, Headers } from "@angular/http";
import { UserService } from "./user.service";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { StorageService } from "./storage.service";

@Injectable()
export class JiveService {

  private apiUrl = "https://soco.volkswagen.com/sbc/api/core/v3/";

  constructor( @Inject(Http) private http: Http, @Inject(LoadingController) private loadingCtrl: LoadingController,
    @Inject(UserService) private userService: UserService, private storageService: StorageService) {
  }

  getDiscussions(): Observable<Discussion[]> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic ZGF6cms4Nzp3ZzI0NjVFLiwuQUE=");
    let requestOptions = { headers: new Headers({ "Authorization": this.storageService.get(StorageService.USER_CREDENTIALS)})}
    return this.http.get(this.apiUrl + "places/464287/contents?filter=type(discussion)", {headers: headers})
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response): Discussion[] {
    let body = res.json();
    return body.list || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

export class Discussion {
  constructor(viewCount: number, published: Date, likeCount: number, replyCount: number, subject: String, content: String) {
  }
}

export class Content {
  constructor(text: String) { }
}

export class Author {
  constructor(displayName: String) { }
}