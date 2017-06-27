import { Injectable, Inject } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JiveService {

  userCredentials: string;
  private apiUrl = "https://soco.volkswagen.com/sbc/api/core/v3/";

  constructor( @Inject(Http) private http: Http) {
  }

  getDiscussions(): Observable<Discussion[]> {
    let headers = new Headers();
    headers.append("Authorization", this.userCredentials);

    return this.http.get(this.apiUrl + "places/464287/contents?filter=type(discussion)&abridged=true", { headers: headers })
      .map(x => x.json().list)
      .catch(this.handleError)
  }

  // contents/464418?abridged=true
  // contents/464418/editable
  // contents/464418/previewImage
  // POST/DELETE /contents/{contentID}/read
  // GET /contents/{contentID}/comments
  // GET /images/contents/{contentID}

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
  public constructor(viewCount: number, published: Date, likeCount: number, replyCount: number, subject: String, content: Content, author: Author, contentID: number) {
  }
}

export class Content {
  public constructor(text: String) { }
}

export class Author {
  public constructor(displayName: String) { }
}