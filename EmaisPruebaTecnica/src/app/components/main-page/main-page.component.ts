import { Poster } from './../../enums/general-enums';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies-service/movies.service';
import { FavoriteMovie } from '../../models/favorites';
import { Movies, Result } from '../../models/movies';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private _moviesService: MoviesService,) { }

  moviesFromSearch?: Movies;
  totalRegisters?: number;

  movies: any;

  ngOnInit(): void {
    this.movies = localStorage.getItem('movies');
  }

  /**
   * Método para recibir las películas llamando a la API en el moviesService según los parámetros de busqueda que hemos establecido.
   * @param movieToSearch Recibimos lo que hemos escrito en el Input de la barra de búsqueda.
   */
  getMovies(movieToSearch: string){
    if(movieToSearch){
      this._moviesService.getMoviesByTitle(movieToSearch).subscribe( (data: Movies) => {
        this.totalRegisters = data.total_results;
        this.moviesFromSearch = data;
        this.moviesFromSearch.results = this.moviesFromSearch.results.map( result => ({...result, isFavorite: this._moviesService.isFavoriteMovie(result)}))
      });
    }
  }
  
  /**
   * Método para recibir el poster de la película si lo hay y en su defecto, mostrar la imagen de "imagen no encontrada".
   * @param posterParam Recibimos por parámetro el link en string de la película.
   * @returns 
   */
  getPoster(posterParam: string): string{
    if(posterParam !== null){
      return `${Poster.POSTER_STRING}${posterParam}`
    }else{
      return '/assets/img/imagen-no-encontrada.jpg'
    }
  }

  /**
   * Método para añadir o eliminar peliculas
   * @param event Pelicula
   */
  favoriteClick(event: Result){
    const movie = this.moviesFromSearch?.results.find( movie => movie.title === event.title)!;
    if(event.isFavorite){
      movie.isFavorite = false;
      this._moviesService.deleteFromFavorites(event as any);
    }else{
      movie.isFavorite = true;
      this._moviesService.addToFavorites(event as any);
    }
  }





}
