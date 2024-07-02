import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Song } from '../models/as-is/song';
import { SongCreateRequest } from '../models/songs/song-create-request';
import { SongUpdateRequest } from '../models/songs/song-update-request';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  baseUrl: string = 'http://localhost:8080/api/v1/songs';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Song[]> {
    return this.http.get<Song[]>(this.baseUrl);
  }

  create(request: SongCreateRequest): Observable<Song> {
    return this.http.post<Song>(this.baseUrl, request);
  }

  update(id: string, request: SongUpdateRequest): Observable<Song> {
    return this.http.put<Song>(`${this.baseUrl}/${id}`, request);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
