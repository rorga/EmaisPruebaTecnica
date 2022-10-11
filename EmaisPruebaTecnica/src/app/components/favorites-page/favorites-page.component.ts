import { Component, OnInit } from '@angular/core';
import { FavoriteMovie } from '../../models/favorites';
import { MoviesService } from '../../services/movies-service/movies.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  favoriteMovies: any;
  formatedFavoriteMovies: FavoriteMovie[] = [];

  constructor(private _moviesService: MoviesService) { }

  ngOnInit(): void {
    this.favoriteMovies = localStorage.getItem('movies');
    this.formatedFavoriteMovies = JSON.parse(this.favoriteMovies);
  }

  deleteMovie(receivedMovie: FavoriteMovie){
    this.formatedFavoriteMovies = this._moviesService.deleteFromFavorites(receivedMovie);
  }

}
