import { Component } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core'; 
import { Iphoto } from "../photos.service";
import { Router, RouterLink } from '@angular/router';
import { PhotosService } from "../photos.service"; 
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {
  @Input() photo!: Iphoto;
  @Input() id!: string;
  @Output() deleteMovieEvent = new EventEmitter<Iphoto>();
  @Output() editMovieEvent = new EventEmitter<Iphoto>();

  show = true;

  constructor() {}

  toggleSummary() {
    this.show = !this.show;
  }

  deleteMovie() {
    console.log('Child ❌', this.photo);
    this.deleteMovieEvent.emit(this.photo);
  }

  editMovie() {
    console.log('Child ✏️', this.photo);
    this.editMovieEvent.emit(this.photo);
  }

  canEditOrDelete(): boolean {
    const roleId = localStorage.getItem('roleId');
    if (roleId) { // Parse the stored JSON
      return roleId === '0'; // Return true if roleId is '0'
    }
    return false; // Default to false if no authData
  }
}