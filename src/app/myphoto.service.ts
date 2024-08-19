import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API } from './global';
import { HttpClient } from '@angular/common/http';
import {Iphoto} from "./photos.service"


@Injectable({
  providedIn: 'root'
})
export class MyPhotoService {
  
  constructor(private router: Router , private http: HttpClient) { }


  async addMovie(newPhoto: Iphoto) {    // working 
    const res = await fetch(`${API}/movies`, {
      method: 'POST',
      body: JSON.stringify(newPhoto),
      headers: {
        'Content-type': 'application/json',
      },
    });
    return await res.json();
  }

  async editMovie(updatedPhoto: Iphoto) { // working 
    const res = await fetch(`${API}/movies/${updatedPhoto.photoId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedPhoto),
      headers: {
        'Content-type': 'application/json',
      },
    });
    return await res.json();
  }


  async getAllPhotosByUserNameP(): Promise<Iphoto[]> {      // Working 
    const res = await fetch(`${API}/photos/user/`);
    return await res.json();
  }

  async deleteMovie(photo: Iphoto) {     // working 
    const res = await fetch(`${API}/photos/${photo.photoId}`, { method: 'Delete' });
    return await res.json();
  }

  getMovieByIdP(id: string): Promise<Iphoto> { // working 
    return fetch(`${API}/photos/${id}`, {
      method: 'GET',
      headers: {
        'x-auth-token': localStorage.getItem('token') as string,
      },
    }).then((res) => {
      if (res.status != 200) {
        this.router.navigate(['/login']);
        throw new Error('Not Authorized');
      }
      return res.json();
    });
  }

}
