import { Component } from '@angular/core';import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from '../login.service';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signUpForm!: FormGroup;
  constructor(private fb: FormBuilder, private signupService: SignupService, private router:Router) {
    this.signUpForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: '',
    });
  }

  get userName() {
    return this.signUpForm.get('userName');
  }

  signup() {
    console.log(this.signUpForm.value);
    this.signupService.signup(this.signUpForm.value);
    this.router.navigate(['/user/login'])
  }
}
