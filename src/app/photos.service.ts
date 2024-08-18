import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API } from './global';

export interface Iphoto {
  photoId: string;
  url: string;
  description: string;
  createdAt: string;
  username: string;
  type: string;

}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
 
  async addMovie(newPhoto: Iphoto) {
    // this.movieList.push(newMovie);

    // Post
    // 1. method
    // 2. body - Data & JSON
    // 3. Header - JSON

    const res = await fetch(`${API}/movies`, {
      method: 'POST',
      body: JSON.stringify(newPhoto),
      headers: {
        'Content-type': 'application/json',
      },
    });
    return await res.json();
  }

  async editMovie(updatedPhoto: Iphoto) {
    // this.movieList.push(newMovie);

    // Put
    // 1. method
    // 2. body - Data & JSON
    // 3. Header - JSON

    const res = await fetch(`${API}/movies/${updatedPhoto.photoId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedPhoto),
      headers: {
        'Content-type': 'application/json',
      },
    });
    return await res.json();
  }


  constructor(private router: Router) { }


  async getAllMoviesP(): Promise<Iphoto[]> {
    const res = await fetch(`${API}/photos`);
    return await res.json();
  }

  async deleteMovie(photo: Iphoto) {
    const res = await fetch(`${API}/photos/${photo.photoId}`, { method: 'Delete' });
    return await res.json();
  }


  getMovieByIdP(id: string): Promise<Iphoto> {
    return fetch(`${API}/movies/${id}`, {
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
