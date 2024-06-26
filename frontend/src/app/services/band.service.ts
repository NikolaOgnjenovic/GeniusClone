import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Band} from "../models/as-is/band";
import {CreateBandRequest} from "../models/bands/create-band-request";
import {UpdateBandRequest} from "../models/bands/update-band-request";

@Injectable({
  providedIn: 'root',
})
export class BandService {
  private baseUrl = 'http://localhost:8080/api/v1/bands';

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Band[]> {
    return this.http.get<Band[]>(this.baseUrl);
  }

  create(request: CreateBandRequest): Observable<Band> {
    return this.http.post<Band>(this.baseUrl, request);
  }

  update(id: string, request: UpdateBandRequest): Observable<Band> {
    return this.http.put<Band>(`${this.baseUrl}/${id}`, request);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
