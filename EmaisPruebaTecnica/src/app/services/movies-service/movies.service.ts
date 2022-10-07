import { environment } from './../../../environments/environment';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movies } from '../../models/movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _http: HttpClient) { }


  getMoviesByTitle(movieTitle: string):Observable<Movies>{
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${environment.apiKey}&language=es-ES&query=${movieTitle}`;
    return this._http.get<Movies>(url)
  }


}
