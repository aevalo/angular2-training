import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class SearchService {
  constructor(private http: Http) {}
  search(term): Observable<any[]> {
    return this.http.get(`https://api.github.com/search/repositories?q=${term}`)
      .map(res => res.json().items)
      .catch((error) => Observable.of([]));
  }
}
