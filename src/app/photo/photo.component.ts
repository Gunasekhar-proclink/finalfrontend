import { Component } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core'; 
import {Iphoto} from "../photos.service" ;
import { Router, RouterLink } from '@angular/router';
import {PhotosService} from "../photos.service" ; 
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    RouterLink,],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss'
})
export class PhotoComponent {
  @Input() photo!: Iphoto;

  @Input() id!: string;
  @Output() deleteMovieEvent = new EventEmitter<Iphoto>();
  @Output() editMovieEvent = new EventEmitter<Iphoto>();

  show = true;

  toggleSummary() {
    this.show = !this.show;
  }

  deleteMovie() {
    console.log('Child ❌', this.photo);
    this.deleteMovieEvent.emit(this.photo);
  }

  editMovie() {
    console.log('Child ❌', this.photo);
    this.editMovieEvent.emit(this.photo);
  }
}
