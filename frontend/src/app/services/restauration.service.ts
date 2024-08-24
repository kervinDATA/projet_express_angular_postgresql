import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurationService {
  private apiUrl = 'http://localhost:3000/restauration';  // URL de l'API backend

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer toutes les données
  getRestaurations(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Méthode pour récupérer les restaurants filtrés par département
  getRestaurationsByDepartement(departement: string): Observable<any> {
    const url = `${this.apiUrl}?departement=${departement}`;
    return this.http.get<any>(url);
  }
}
