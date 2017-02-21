import {Injectable, Inject} from "@angular/core";
import {Http, Response} from "@angular/http";

@Injectable()
export class HubService {

  private news:{uuid:string, author:string, title:string, description:string, url:string, urlToImage:string, publishedAt, liked:boolean, type:number}[] = null;
  private nrOfArticles:number = 3;

  constructor(@Inject(Http) private http: Http) {
  }

  // TODO: filter when real service is available
  // https://myhub.org/articles?filter[limit]=5&filter[skip]=10
  loadArticles(start:number):Promise<{uuid:string, author:string, title:string, description:string, url:string, urlToImage:string, publishedAt:string, liked:boolean, type:number}[]>{
    return new Promise(resolve => {
      this.http.get('assets/responses/Hub.json', {})
      .toPromise()
      .then(res => {
        let allArticles = res.json().articles;
        let articlesEnd = start + this.nrOfArticles;
        articlesEnd = (articlesEnd > allArticles.length) ? allArticles.length : articlesEnd;
        let limitedArticles = allArticles.slice(start, articlesEnd);

        resolve(limitedArticles);
      });
    });
  }
}
