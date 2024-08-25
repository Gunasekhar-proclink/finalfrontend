import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { Iphoto } from '../photos.service';
import { MyphotoService } from '../myphoto.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-myphoto-edit',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,UpperCasePipe,],
  templateUrl: './myphoto-edit.component.html',
  styleUrl: './myphoto-edit.component.scss'
})
export class MyphotoEditComponent {

  photoForm: FormGroup;

  constructor(
    public photoService: MyphotoService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    // formGroup -> formControlName
    this.photoForm = this.fb.group({
      photoId: "",
      type : ['', [Validators.required, Validators.minLength(2)]],
      url: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern(/^https:.*/),
        ],
      ],
      description: '',
    });
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string; // From URL

    this.photoService.getMovieByIdP(id).then((data) => {
      console.log(data);
      // this.movieForm.setValue vs this.movieForm.patchValue
      this.photoForm.patchValue(data);
    });
  }

  editMovie() {
    console.log(this.photoForm.value);
    // Todo: Fix Add - Technical Debt

    if (this.photoForm.valid) {
      let updatedMovie: Iphoto = this.photoForm.value;
      console.log(this.photoForm.value);

      this.photoService.editMovie(updatedMovie).then(() => {
        // Move to movies page
        this.router.navigate(['movies']);
      });
    }
  }

  // getter
  get name() {
    return this.photoForm.get('userName');
  }

  get poster() {
    return this.photoForm.get('url');
  }

  get rating() {
    return this.photoForm.get('createdAt');
  }
}
