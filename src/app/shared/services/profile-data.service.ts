import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";



@Injectable()
export class ProfileDataService {

  constructor(private http: Http) { }

  getLanguages (): Observable<Object> {
    return this.http.get("https://private-d8505-mdcuserregistration.apiary-mock.com/api/languages")
        .map(this.extractLanguagesData)
        .catch(this.handleError);
  }

  private extractLanguagesData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
