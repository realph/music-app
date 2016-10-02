import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getArtist(artistId: string) {
    const artistUrl = `https://api.spotify.com/v1/artists/${artistId}`;

    return this.http.get(artistUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getAlbums(artistId: string) {
    const albumsUrl = `https://api.spotify.com/v1/artists/${artistId}/albums?market=GB&album_type=album`;

    return this.http.get(albumsUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getSingles(artistId: string) {
    const albumsUrl = `https://api.spotify.com/v1/artists/${artistId}/albums?market=GB&album_type=single`;

    return this.http.get(albumsUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  
}
