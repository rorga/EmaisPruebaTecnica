import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    AppModule
  ],
  exports: [
    MovieCardComponent
  ]
})
export class SharedModule { }
