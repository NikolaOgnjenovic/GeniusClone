import { Injectable } from '@angular/core';
import { AdCreateRequest } from '../models/ads/ad-create-request';
import { Ad } from '../models/as-is/ad';
import { Observable } from 'rxjs';
import { AdUpdateRequest } from '../models/ads/ad-update-request';
import { AdsGetResponse } from '../models/ads/ads-get-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  baseUrl: string = "http://localhost:8080/api/v1/ads";

  constructor(private http: HttpClient) { }

  getAll(): Observable<AdsGetResponse> {
    return this.http.get<AdsGetResponse>(this.baseUrl);
  }

  create(request: AdCreateRequest): Observable<Ad> {
    return this.http.post<Ad>(this.baseUrl, request);
  }

  update(id: string, request: AdUpdateRequest): Observable<Ad> {
    return this.http.put<Ad>(`${this.baseUrl}/${id}`, request);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
