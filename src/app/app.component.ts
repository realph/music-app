import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService],
})
export class AppComponent {
  public artistId: string = '0L8ExT028jH3ddEcZwqJJ5';
  public artist = {};
  public albums = [];
  public count;

  constructor(private dataService: DataService) {
    this.getArtist();
    this.getAlbums();
  }

  getArtist() {
    this.dataService.getArtist(this.artistId)
      .subscribe(
        artist => this.artist = artist,
        err => {
          console.log(err);
        });
  }

  getAlbums() {
    this.dataService.getAlbums(this.artistId)
      .subscribe(
        albums => {
          this.albums = albums.items;
          this.count = albums.total;
        },
        err => {
          console.log(err);
        });
  }

  getSingles() {
    this.dataService.getSingles(this.artistId)
      .subscribe(
        albums => {
          this.albums = albums.items;
          this.count = albums.total;
        },
        err => {
          console.log(err);
        });
  }

}
