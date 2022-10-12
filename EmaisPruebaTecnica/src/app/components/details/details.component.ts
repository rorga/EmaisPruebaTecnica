import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FavoriteMovie } from 'src/app/models/favorites';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {title: string, launchDate: string, poster: string, overview: string, vote_average: number, original_language: string}) { }
  
  movies?: FavoriteMovie;

  ngOnInit(): void {
    this.movies = this.data;
  }

}
