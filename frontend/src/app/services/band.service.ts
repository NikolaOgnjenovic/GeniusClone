import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Band} from "../models/as-is/band";

@Injectable({
  providedIn: 'root',
})
export class BandService {
  private baseUrl = 'http://localhost:8080/api/v1/bands';

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Band[]> {
    return this.http.get<Band[]>(this.baseUrl);
  }
}
