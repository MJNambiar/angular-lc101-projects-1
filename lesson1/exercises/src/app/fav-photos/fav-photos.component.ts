import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://i.redd.it/shxfapp952e71.jpg';
  image2 = 'https://media.istockphoto.com/photos/perfect-sky-and-ocean-picture-id467367026?k=20&m=467367026&s=612x612&w=0&h=HBytXxkz31s-ZQrTwH3pbCy51Ep0SRScSXkChSUhYWk=';
  image3 = 'https://www.travelandleisure.com/thmb/XLF2sRvYM2Q3y6GzlFR90tcC3kM=/1800x1200/filters:fill(auto,1)/header-DOLOMITESTG0422-fbe3eee35f6347f895af184866d0523d.jpg';

  constructor() { }

  ngOnInit() {
  }

}