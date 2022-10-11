import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../../components/details/details.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() title?: string;
  @Input() launchDate?: string;
  @Input() poster?: string;
  @Input() overview?: string;
  @Input() vote_average?: number;
  @Input() isFavorite?: boolean = false;
  
  
  @Output() sendMovie: EventEmitter<any> = new EventEmitter();

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  /**
   * Método para emitir la película hacia la página principal y guardarla en favoritos en el localStorage para posteriormente poder recuperarlas en la página de favoritos.
   */
  emitMovie(){
    this.sendMovie.emit({title: this.title, launchDate: this.launchDate, poster: this.poster, overview: this.overview, vote_average: this.vote_average, isFavorite: this.isFavorite});
  }

  seeMovieDetails() {
    let dialogRef = this.dialog.open(DetailsComponent, {
      data: {title: this.title, launchDate: this.launchDate, poster: this.poster, overview: this.overview, vote_average: this.vote_average},
    });
  }

}
