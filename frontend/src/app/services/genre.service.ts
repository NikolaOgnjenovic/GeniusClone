import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre } from '../models/as-is/genre';
import { Observable } from 'rxjs';
import { GenreUpdateRequest } from '../models/genres/genre-update-request';
import { GenreCreateRequest } from '../models/genres/genre-create-request';
import { GetGenresReponse } from '../models/genres/genre-get-all-response';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  baseUrl: string = "http://localhost:8080/api/v1/genres";

  constructor(private http: HttpClient) { }

  getAll(): Observable<GetGenresReponse> {
    return this.http.get<GetGenresReponse>(this.baseUrl);
  }

  create(request: GenreCreateRequest): Observable<Genre> {
    return this.http.post<Genre>(this.baseUrl, request);
  }

  update(id: string, request: GenreUpdateRequest): Observable<Genre> {
    return this.http.put<Genre>(`${this.baseUrl}/${id}`, request);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
