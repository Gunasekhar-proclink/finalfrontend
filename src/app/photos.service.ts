import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API } from './global';
import { HttpClient } from '@angular/common/http';

export interface Iphoto {
  photoId: string;
  url: string;
  description: string;
  createdAt: string;
  userName: string;
  type: string;
}


@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  
  constructor(private router: Router , private http: HttpClient) { }


  searchUser(searchTerm: string) {
    return this.http.get<Iphoto[]>(
      `https://6402db84f61d96ac487212a6.mockapi.io/users?search=${searchTerm}`
    );
  }
 
  async addMovie(newPhoto: Iphoto) {    // working 
    const res = await fetch(`${API}/photos`, {
      method: 'POST',
      body: JSON.stringify(newPhoto),
      headers: {
        'x-auth-token': localStorage.getItem('token') as string ,
      },
    });
    console.log(res)
    return await res.json();
  }

  async editMovie(updatedPhoto: Iphoto) { // working 
    const res = await fetch(`${API}/photos/${updatedPhoto.photoId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedPhoto),
      headers: {
        'x-auth-token': localStorage.getItem('token') as string ,
      },
    });
    return await res.json();
  }


  async getAllMoviesP(): Promise<Iphoto[]> {      // Working 
    const res = await fetch(`${API}/photos`);
    return await res.json();
  }

  async deleteMovie(photo: Iphoto) { // working 

    const res = await fetch(`${API}/photos/${photo.photoId}`, { method: 'Delete'  , 
      headers : {
        'x-auth-token' : localStorage.getItem('token') as string , 
      }
    } );
    console.log(res)
    return await res.json();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('roleId');
  }

  async getMovieByIdP(id: string): Promise<Iphoto> { // working 
    const res = await fetch(`${API}/photos/${id}`, {
      method: 'GET',
      headers: {
        'x-auth-token': localStorage.getItem('token') as string,
      },
    });
    if (res.status != 200) {
      // this.router.navigate(['/login']);
      throw new Error('Not Authorized');
    }
    return await res.json();
  }

}
