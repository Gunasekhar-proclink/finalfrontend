import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PhotosComponent } from './photos/photos.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { MyphotoAddComponent } from './myphoto-add/myphoto-add.component';
import { MyphotoEditComponent } from './myphoto-edit/myphoto-edit.component';
import { LogoutComponent } from './logout/logout.component';

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
        children: [
         
          {
            path: '',
            loadComponent: () =>
              import('./photo-list/photo-list.component').then(
                (c) => c.PhotoListComponent
              ),
          }, // lazy load
          {
            path: 'myphotos',
            loadComponent: () =>
              import('./myphotos/myphotos.component').then(
                (c) => c.MyphotosComponent
              ),
          },
          { path: 'add', component: AddPhotoComponent },
          { path: 'edit/:id', component: EditPhotoComponent },
          { path: ':id', component: PhotoDetailsComponent },
        ],
      },
      // {
      //   path: 'photos',
      //   children: [
         
      //     {
      //       path: 'user/:username',
      //       loadComponent: () =>
      //         import('./myphotos/myphotos.component').then(
      //           (c) => c.MyphotosComponent
      //         ),
      //     }, // lazy load
      //     { path: 'add', component: MyphotoAddComponent },
      //     { path: 'edit/:id', component: MyphotoEditComponent },
      //   ],
      // },

      {
        path : "user/logout" , 
        component : LogoutComponent
      } , 
      {
        path : "**" , 
        component : PagenotfoundComponent
      }
];
