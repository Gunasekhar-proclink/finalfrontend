import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PhotosComponent } from './photos/photos.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
      },

      {
        path: 'user/login',
        component: LoginComponent,
      },

      {
        path: 'user/signup' , 
        component : SignupComponent , 
      } ,
      {
        path: 'photos',
        component: PhotosComponent,
      },
      {
        path : "**" , 
        component : PagenotfoundComponent
      }
];
