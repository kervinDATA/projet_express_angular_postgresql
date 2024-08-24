import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurationService {
  private apiUrl = 'http://localhost:3000/restauration';

  constructor(private http: HttpClient) { }

  getRestaurations(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
