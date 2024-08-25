import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PhotosService } from './photos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, MatButtonModule, MatMenuModule, MatIconModule, CommonModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  isLoggedIn: boolean;

  constructor(private router: Router, private photosService: PhotosService) {
    this.isLoggedIn = this.checkToken();
  }
  // ngOn

  checkToken(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    this.photosService.logout();
    localStorage.removeItem('token'); // Remove token on logout
    this.router.navigate(['/']);
  }
}