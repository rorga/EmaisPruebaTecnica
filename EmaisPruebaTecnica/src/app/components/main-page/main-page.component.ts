import { Poster } from './../../enums/general-enums';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies-service/movies.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private _moviesService: MoviesService) { }

  moviesFromSearch: any;
  totalRegisters?: number;

  ngOnInit(): void {
  }

  getMovies(value: string){
    this._moviesService.getMoviesByTitle(value).subscribe( data => {
      console.log(data);
      this.totalRegisters = data.total_results;
      this.moviesFromSearch = data;
      console.log(this.moviesFromSearch)
    });
  }
  
  getPoster(posterParam: string): string{
    if(posterParam !== null){
      return `${Poster.POSTER_STRING}${posterParam}`
    }else{
      return '/assets/img/imagen-no-encontrada.jpg'
    }
    
  }

}
