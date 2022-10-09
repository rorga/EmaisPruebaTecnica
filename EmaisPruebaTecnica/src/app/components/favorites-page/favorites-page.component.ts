import { Component, OnInit } from '@angular/core';
import { FavoriteMovie } from '../../models/favorites';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  favoriteMovies: any;
  formatedFavoriteMovies: FavoriteMovie[] = [];

  constructor() { }

  ngOnInit(): void {
    this.favoriteMovies = localStorage.getItem('movies');
    this.formatedFavoriteMovies = JSON.parse(this.favoriteMovies);
  }

}
