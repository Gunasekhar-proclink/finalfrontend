import { Component } from '@angular/core';
import {Iphoto} from "../photos.service" ;
import { Router } from '@angular/router';
import { MyPhotoService } from '../myphoto.service';
import { MyphotoPhotoComponent } from '../myphoto-photo/myphoto-photo.component';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, switchMap, catchError, of, startWith } from 'rxjs';
import { PhotoComponent } from "../photo/photo.component";

@Component({
  selector: 'app-myphotos',
  standalone: true,
  imports: [MyphotoPhotoComponent, ReactiveFormsModule, PhotoComponent],
  templateUrl: './myphotos.component.html',
  styleUrl: './myphotos.component.scss'
})
export class MyphotosComponent {
  photoList: Array<Iphoto> = []; 
    isLoading: boolean = true;
    msg = '';
    photoName: Iphoto[] = [];
  
  
    constructor(private fb: FormBuilder, public myphotoService: MyPhotoService, private router: Router) {}
  
    addmovie() {
      this.router.navigate(['/photos/add'])
      }
      ngOnInit() {
        this.loadMovies();
      }
    
      loadMovies() {
        this.myphotoService
          .getAllPhotosByUserNameP()
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
        this.myphotoService.deleteMovie(photo ).then(() => this.loadMovies());
      }
    
      editMovieP(photo: Iphoto) {
        this.router.navigate(['photos', 'edit', photo.photoId]);
  
      }
}
