import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {Iphoto} from "../photos.service" ;
import { Router } from '@angular/router';
import {PhotosService} from "../photos.service" ; 

@Component({
  selector: 'app-photo-details',
  standalone: true,
  imports: [],
  templateUrl: './photo-details.component.html',
  styleUrl: './photo-details.component.scss'
})
export class PhotoDetailsComponent {
  photo!: Iphoto;
  trustedUrl!: SafeUrl;
  isLoading: boolean = true;
  msg = '';

  constructor(
    private photoService: PhotosService,
    private route: ActivatedRoute, // DI
    private sanitizer: DomSanitizer
  ) {}

  // After Initialization of the component
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string; // From URL

    this.photoService
      .getMovieByIdP(id)
      .then((data) => {
        console.log(data);
        this.photo = data; // Model
        this.isLoading = false;
        this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.photo.url
        );
      })
      .catch((err) => {
        this.isLoading = false;
        this.msg = err || 'Something went wrong 🥲';
      });
  }
}
