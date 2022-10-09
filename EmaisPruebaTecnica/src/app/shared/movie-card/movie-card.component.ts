import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FavoriteMovie } from 'src/app/models/favorites';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() title?: string;
  @Input() launchDate?: string;
  @Input() poster?: string = "https://static2.abc.es/media/play/2020/09/29/avatar-kE4H--1024x512@abc.jpeg";
  @Output() sendMovie: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  /**
   * Método para emitir la película hacia la página principal y guardarla en favoritos en el localStorage para posteriormente poder recuperarlas en la página de favoritos.
   */
  emitMovie(){
    this.sendMovie.emit({title: this.title, launchDate: this.launchDate, poster: this.poster})
  }

}
