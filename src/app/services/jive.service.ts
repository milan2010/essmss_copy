import { Injectable, Inject } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JiveService {

  public static userCredentials: string;
  private apiUrl = "http://localhost:8080/";

  constructor( @Inject(Http) private http: Http) {
  }

  getDiscussions(): Observable<Discussion[]> {
    let headers = new Headers();
    headers.append("Authorization", JiveService.userCredentials);

    let retVal = this.http.get(this.apiUrl + "jive/places/464287/contents?filter=type(discussion)&abridged=true", { headers: headers })
      .map(x => x.json().list)
      .catch(this.handleError)
    retVal.subscribe(x => console.log(x));
    return retVal;  
  }

  getDiscussion(id): Observable<Discussion> {
    let headers = new Headers();
    headers.append("Authorization", JiveService.userCredentials);

    return this.http.get(this.apiUrl + "jive/places/464287/contents/" + id , { headers: headers })
      .map(x => x.json())
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
  public constructor(public viewCount: number, public published: Date, public likeCount: number, public replyCount: number, 
  public subject: String, public content: Content, public author: Author, public contentID: number,
  public hasRead: boolean, public isFavorite: boolean, public isDeleted: boolean, public imageURL: string,
  public articleImageURLs: string[], public comments: string[], public isNotImportant: boolean) {}
}

export class Content {
  constructor(public text: String) { }
}

export class Author {
  constructor(public displayName: String) { }
}
