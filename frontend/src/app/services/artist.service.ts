import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateArtistRequest} from '../models/artists/create-artist-request';
import { GetArtistResponse } from '../models/artists/get-artist-response';
import { GetArtistsReponses } from '../models/artists/get-artists-response';
import { Observable } from 'rxjs';
import { Artist } from '../models/as-is/artist';
import { UpdateArtistRequst } from '../models/artists/update-artist-request';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  baseURL: string = 'http://localhost:8080/api/v1/artist'

  constructor(private http: HttpClient) { }

  getById(id: string): Observable<Artist> {
    return this.http.get<Artist>(`${this.baseURL}/${id}`)
  }

  getAll(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.baseURL)
  }

  create(request: CreateArtistRequest): Observable<Artist> {
    return this.http.post<Artist>(this.baseURL, request)
  }

  update(id: string, request: UpdateArtistRequst): Observable<Artist> {
    return this.http.put<Artist>(`${this.baseURL}/${id}`, request)
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
}
