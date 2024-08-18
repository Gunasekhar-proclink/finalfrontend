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

  constructor(private router: Router) { }


  async getAllMoviesP(): Promise<Iphoto[]> {
    const res = await fetch(`${API}/photos`);
    return await res.json();
  }

  // getMovieByIdP(id: string): Promise<Iphoto> {
  //   return fetch(`${API}/movies/${id}`, {
  //     method: 'GET',
  //     headers: {
  //       'x-auth-token': localStorage.getItem('token') as string,
  //     },
  //   }).then((res) => {
  //     if (res.status != 200) {
  //       this.router.navigate(['/login']);
  //       throw new Error('Not Authorized');
  //     }

  //     return res.json();
  //   });
  // }

}
