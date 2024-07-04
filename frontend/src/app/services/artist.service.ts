import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArtistCreateRequest} from '../models/artists/artist-create-request';
import { Observable } from 'rxjs';
import { Artist } from '../models/as-is/artist';
import {ArtistUpdateRequest} from "../models/artists/artist-update-request";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  baseURL: string = 'http://localhost:8080/api/v1/artists'

  constructor(private http: HttpClient) { }

  getById(id: string): Observable<Artist> {
    return this.http.get<Artist>(`${this.baseURL}/${id}`)
  }

  getAll(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.baseURL)
  }

  create(request: ArtistCreateRequest): Observable<Artist> {
    return this.http.post<Artist>(this.baseURL, request)
  }

  update(id: string, request: ArtistUpdateRequest): Observable<Artist> {
    return this.http.put<Artist>(`${this.baseURL}/${id}`, request)
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
}
