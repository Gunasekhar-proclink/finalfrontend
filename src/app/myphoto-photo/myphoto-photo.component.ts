import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { EventEmitter, Input, Output } from '@angular/core'; 
import { MyphotoService } from '../myphoto.service';
import { Router, RouterLink } from '@angular/router';
import { Iphoto } from '../photos.service';
import { CommonModule, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-myphoto-photo',
  standalone: true,
  imports: [MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    RouterLink, CommonModule],
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

  canEditOrDelete(): boolean {
    const roleId = localStorage.getItem('roleId');
    const username = localStorage.getItem('userName')
    if (roleId ) { // Parse the stored JSON
      return roleId === '0' ||  (this.photo.userName === username) ; // Return true if roleId is '0'
    }
    return false; // Default to false if no authData
  }
}
