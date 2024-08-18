import { Component } from '@angular/core';
import {Iphoto} from "../photos.service" ;
import { Router } from '@angular/router';
import {PhotosService} from "../photos.service" ; 
import { PhotoComponent } from '../photo/photo.component';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [PhotoComponent],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.scss'
})
export class PhotoListComponent {
photoList: Array<Iphoto> = []; 
  isLoading: boolean = true;
  msg = '';


  constructor(public photoService: PhotosService, private router: Router) {}

    // After Initialization of the component
    ngOnInit() {
      this.loadMovies();
    }
  
    loadMovies() {
      this.photoService
        .getAllMoviesP()
        .then((data) => {
          this.photoList = data;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          this.msg = 'Something went wrong 🥲';
        });
    }

    deleteMovieP(photo: Iphoto) {
      this.photoService.deleteMovie(photo ).then(() => this.loadMovies());
    }
  
    editMovieP(photo: Iphoto) {
      // /movies/edit/99
      this.router.navigate(['photos', 'edit', photo.photoId]);


      // this.movieService.editMovie(movie).then(() => this.loadMovies());
    }
}
