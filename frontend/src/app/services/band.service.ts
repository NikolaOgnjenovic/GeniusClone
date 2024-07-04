import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Band} from "../models/as-is/band";
import {BandCreateRequest} from "../models/bands/band-create-request";
import {BandUpdateRequest} from "../models/bands/band-update-request";

@Injectable({
  providedIn: 'root',
})
export class BandService {
  private baseUrl = 'http://localhost:8080/api/v1/bands';

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Band[]> {
    return this.http.get<Band[]>(this.baseUrl);
  }

  create(request: BandCreateRequest): Observable<Band> {
    return this.http.post<Band>(this.baseUrl, request);
  }

  update(id: string, request: BandUpdateRequest): Observable<Band> {
    return this.http.put<Band>(`${this.baseUrl}/${id}`, request);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
