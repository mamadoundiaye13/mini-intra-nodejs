import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(
    protected http: HttpClient,
  ) {}

  get(url: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(url, { params });
  }

  put(url: string, item: object = {}): Observable<any> {
    return this.http.put(
      url,
      item,
    );
  }

  post(url: string, body: object = {}): Observable<any> {
    return this.http.post(
      url,
      body,
    );
  }

  delete(url: string): Observable<any> {
    return this.http.delete(
      url,
    );
  }
}
