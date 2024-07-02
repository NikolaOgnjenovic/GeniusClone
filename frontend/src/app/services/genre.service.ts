import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre } from '../models/as-is/genre';
import { Observable } from 'rxjs';
import { UpdateGenreRequest } from '../models/genres/update-genre-request';
import { CreateGenreRequest } from '../models/genres/create-genre-request';
import { GetGenresReponse } from '../models/genres/get-genres-response';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  baseUrl: string = "http://localhost:8080/api/v1/genres";

  constructor(private http: HttpClient) { }

  getAll(): Observable<GetGenresReponse> {
    return this.http.get<GetGenresReponse>(this.baseUrl);
  }

  create(request: CreateGenreRequest): Observable<Genre> {
    return this.http.post<Genre>(this.baseUrl, request);
  }

  update(id: string, request: UpdateGenreRequest): Observable<Genre> {
    return this.http.put<Genre>(`${this.baseUrl}/${id}`, request);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
