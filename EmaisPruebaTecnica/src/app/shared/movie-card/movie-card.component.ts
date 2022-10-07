import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() title?: string;
  @Input() launchDate?: string;
  @Input() poster?: string = "https://static2.abc.es/media/play/2020/09/29/avatar-kE4H--1024x512@abc.jpeg";

  constructor() { }

  ngOnInit(): void {
  }

}
