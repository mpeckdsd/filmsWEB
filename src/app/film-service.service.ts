import { Injectable } from '@angular/core';
import { Film } from './models/film';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const url = 'http://127.0.0.1:8000/films/';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {

    private extractData(res: Response){
        let body = res;
        return body || {};
    }
    getAllFilms(): Observable<any> {
        console.log('Film Service Url: ' + url);
        return this.http.get(url).pipe(map(this.extractData));
    }

  constructor(private http: HttpClient) { }
}
