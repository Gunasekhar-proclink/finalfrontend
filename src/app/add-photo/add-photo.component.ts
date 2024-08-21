import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Iphoto } from '../photos.service';
// import { PhotosService } from '../photos.service';
import { MyphotoService } from '../myphoto.service';
import { Router } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-add-photo',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    NgFor,],
  templateUrl: './add-photo.component.html',
  styleUrl: './add-photo.component.scss'
})
export class AddPhotoComponent {

  photoForm: FormGroup;


  constructor(
    public photoService: MyphotoService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // formGroup -> formControlName
    this.photoForm = this.fb.group({
      type: ['', [Validators.required, Validators.minLength(2)]],
      url: '',
      description: '',
      
    });
  }

 

  onSubmit() {
    console.log(this.photoForm.value);
  }

  addMovie() {
    console.log(this.photoForm.value);
    // Todo: Fix Add - Technical Debt

    this.onSubmit();

    if (this.photoForm.valid) {
      let newphoto: Iphoto = this.photoForm.value;
      
      this.photoService.addMovie(newphoto)
      .then(() => {
        // Move to movies page
        this.router.navigate(['photos']);
      });
    }
  }

  // getter
  get name() {
    return this.photoForm.get('userName');
  }

  get rating() {
    return this.photoForm.get('createdAt');
  }
}
