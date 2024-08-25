import { Component } from '@angular/core';
import {Iphoto} from "../photos.service" ;
import { Router } from '@angular/router';
import {PhotosService} from "../photos.service" ; 
import { PhotoComponent } from '../photo/photo.component';

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
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [PhotoComponent , ReactiveFormsModule,MatIconModule,MatFormField , MatInputModule , MatFormFieldModule ],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.scss'
})
export class PhotoListComponent {
  searchForm!: FormGroup;
photoList: Array<Iphoto> = []; 
  isLoading: boolean = true;
  msg = '';
  photoName: Iphoto[] = [];


  constructor(private fb: FormBuilder, public photoService: PhotosService, private router: Router) {}

  addmovie() {
    this.router.navigate(['/photos/add'])
    }
    ngOnInit() {
      this.loadMovies();
      this.searchForm
      .get('search')
      ?.valueChanges.pipe(
        startWith(''),
        debounceTime(100),
        switchMap((searchTerm) =>
          this.photoService.searchUser(searchTerm).pipe(
            catchError((error) => {
              console.log(error);
              return of([]);
            })
          )
        )
      )
      .subscribe((data) => {
        console.log(data);
        this.isLoading = false;
        this.photoList = data;
        this.isLoading = false ; 
      });
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
      this.router.navigate(['photos', 'edit', photo.photoId]);

    }
}
