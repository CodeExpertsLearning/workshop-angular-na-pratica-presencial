import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = 'http://192.168.0.10:8080/v1';

  constructor(private http: HttpClient) { }

  get(endpoint) {
    return this.http.get<any[]>(`${this.url}${endpoint}`);
  }

  post(endpoint, data) {
    return this.http.post<{msg}>(`${this.url}${endpoint}`, data);
  }

  put(endpoint, data) {
    return this.http.put<{msg}>(`${this.url}${endpoint}`, data);
  }

  delete(endpoint) {
    return this.http.delete<{msg}>(`${this.url}${endpoint}`);
  }
}
