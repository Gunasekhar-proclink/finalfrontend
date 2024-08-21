import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor( private router: Router) {}
  // signup() {
  //   this.router.navigate(['user/signup'])
  //   }
  // login() {
  //   console.log('Login clicked');
  //   this.router.navigate(['user/login']) ;
    
  // }

  redirectToPhotos() {
    this.router.navigate(['/photos']);
  }

}
