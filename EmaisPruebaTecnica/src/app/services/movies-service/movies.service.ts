import { environment } from './../../../environments/environment';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movies, Result } from '../../models/movies';
import { Observable } from 'rxjs';
import { FavoriteMovie } from '../../models/favorites';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _http: HttpClient) { }


  getMoviesByTitle(movieTitle: string):Observable<Movies>{
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${environment.apiKey}&language=es-ES&query=${movieTitle}`;
    return this._http.get<Movies>(url)
  }


   /**
   * Método para añadir en el localStorage las películas que queramos añadir a la página de Favoritos.
   * @param receivedMovie Película recibida de la emision de la CARD.
   */
     addToFavorites(receivedMovie: FavoriteMovie){
      let temporalReceiveMovies: any;
      let temporalFormatedMovies: FavoriteMovie[] = [];
      if(localStorage.getItem('movies')){
        temporalReceiveMovies =  localStorage.getItem('movies');
        temporalFormatedMovies = JSON.parse(temporalReceiveMovies);
      }else{
        temporalReceiveMovies = [];
      }
      temporalFormatedMovies.push({title: receivedMovie.title, launchDate: receivedMovie.launchDate, poster: receivedMovie.poster, overview: receivedMovie.overview, vote_average: receivedMovie.vote_average});
      localStorage.setItem('movies', JSON.stringify(temporalFormatedMovies));
    }

    /**
     * Método para borrar películas
     * @param receivedMovie Película recibida
     * @returns 
     */
    deleteFromFavorites(receivedMovie: FavoriteMovie){
      const actualMovies: FavoriteMovie[] = JSON.parse(localStorage.getItem('movies')!);
      const newMovies = actualMovies.filter(movie => movie.title !== receivedMovie.title);
      localStorage.setItem('movies', JSON.stringify(newMovies));
      return newMovies;
    }

    /**
     * Método para saber si está la película en favoritos o no.
     * @param movie Película recibida
     * @returns 
     */
    isFavoriteMovie(movie: Result){
      let movieFound: FavoriteMovie | undefined;
      const actualMovies: FavoriteMovie[] = JSON.parse(localStorage.getItem('movies')!);
      if(actualMovies){
        movieFound = actualMovies.find( actualMovie => actualMovie.title === movie.title);
      }
      return Boolean (movieFound);
    }


}
