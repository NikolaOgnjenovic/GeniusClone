import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Playlist } from '../models/as-is/playlist';
import { Observable } from 'rxjs';
import { PlaylistUpdateRequest } from '../models/playlists/playlist-update-request';
import { PlaylistCreateRequest } from '../models/playlists/palylist-create-request';
import { PlaylistSongsUpdateRequest } from '../models/playlists/playlist-songs-request';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/api/v1/playlists';

  getAll(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.baseUrl);
  }

  getByUserId(userId: string): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(`${this.baseUrl}/users/${userId}/playlists`);
  }

  create(request: PlaylistCreateRequest): Observable<Playlist> {
    return this.http.post<Playlist>(this.baseUrl, request);
  }

  update(id: string, request: PlaylistUpdateRequest): Observable<Playlist> {
    return this.http.put<Playlist>(`${this.baseUrl}/${id}`, request);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  addSongs(id: string, request: PlaylistSongsUpdateRequest): Observable<Playlist> {
    return this.http.post<Playlist>(`${this.baseUrl}/${id}/AddSongs`, request);
  }
}
