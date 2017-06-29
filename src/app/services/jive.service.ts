import { Injectable, Inject } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { AllHtmlEntities } from 'html-entities';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

@Injectable()
export class JiveService {

  private entities = new AllHtmlEntities();
  public static userCredentials: string;
  private apiUrl = "https://my-komponenten-app-rest.cfapps.io/";

  constructor( @Inject(Http) private http: Http) {
  }

  getDiscussions(): Observable<Discussion[]> {
    let headers = new Headers();
    headers.append("Authorization", JiveService.userCredentials);


    let retVal = this.http.get(this.apiUrl + "jive/places/464287/contents?filter=type(discussion)", { headers: headers })
      .map(x => x.json().list.map(x => {
        x.published = moment(x.published).toDate();
        x.isDeleted = false; 
        x.isFavorite = false; 
        x.hasRead = false; 
        x.isNotImportant = true; 
        x.imageURL = this.apiUrl + "images/" + x.imageURL;
        x.articleImageURLs = x.articleImageURLs.map(y => this.apiUrl + "images/" + y);
        x.subject = this.entities.decode(x.subject);
        x.content.summary = this.entities.decode(x.content.summary);
        x.publishedDiff = moment.duration(moment().diff(x.published)).humanize();
        return x;
      }))
      .catch(this.handleError)
    //retVal.subscribe(x => console.log(x));
    return retVal;
  }

  getDiscussion(id): Observable<Discussion> {
    let headers = new Headers();
    headers.append("Authorization", JiveService.userCredentials);

    return this.http.get(this.apiUrl + "jive/contents/" + id, { headers: headers })
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
    public articleImageURLs: string[], public comments: string[], public isNotImportant: boolean, public publishedDiff: string) { }
}

export class Content {
  constructor(public text: String, public summary: String) { }
}

export class Author {
  constructor(public displayName: String) { }
}
