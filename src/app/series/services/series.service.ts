import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SerieResponse } from '../interfaces/serieInterface';

const url = 'https://apimocha.com/jjreina/characters';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  constructor(private http: HttpClient) { }

  public getDataSerie(): Observable<SerieResponse> {
    return this.http.get<SerieResponse>(url);
  }
}
