import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { EventEmitter, Input, Output } from '@angular/core'; 
import { MyPhotoService } from '../myphoto.service';
import { Router, RouterLink } from '@angular/router';
import { Iphoto } from '../photos.service';


@Component({
  selector: 'app-myphoto-photo',
  standalone: true,
  imports: [MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    RouterLink,],
  templateUrl: './myphoto-photo.component.html',
  styleUrl: './myphoto-photo.component.scss'
})
export class MyphotoPhotoComponent {
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
