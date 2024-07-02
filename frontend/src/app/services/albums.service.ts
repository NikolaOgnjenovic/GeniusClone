import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
  import {Album} from "../models/as-is/album";
import {AlbumCreateRequest} from "../models/albums/album-create-request";
import {AlbumUpdateRequest} from "../models/albums/album-update-request";
import {AlbumAddGenreRequest} from "../models/albums/album-add-genre-request";
import {AlbumAddPerformerRequest} from "../models/albums/album-add-performer-request";

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private baseUrl = 'http://localhost:8080/api/v1/albums';

  constructor(private http: HttpClient) {}

  create(album: AlbumCreateRequest): Observable<Album> {
    return this.http.post<Album>(`${this.baseUrl}`, album);
  }

  getAll(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}`);
  }

  getById(id: string): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/${id}`);
  }

  update(id: string, album: AlbumUpdateRequest): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/${id}`, album);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  addPerformerToAlbum(albumId: string, request: AlbumAddPerformerRequest): Observable<Album> {
    return this.http.post<Album>(`${this.baseUrl}/${albumId}/performers`, request);
  }

  removePerformerFromAlbum(albumId: string, performerId: string): Observable<Album> {
    return this.http.delete<Album>(`${this.baseUrl}/${albumId}/performers/${performerId}`);
  }

  addGenreToAlbum(albumId: string, request: AlbumAddGenreRequest): Observable<Album> {
    return this.http.post<Album>(`${this.baseUrl}/${albumId}/genres`, request);
  }

  removeGenreFromAlbum(albumId: string, genreId: string): Observable<Album> {
    return this.http.delete<Album>(`${this.baseUrl}/${albumId}/genres/${genreId}`);
  }
}
