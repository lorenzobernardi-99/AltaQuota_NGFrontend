import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Baita } from './model/baita.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaitaService {
  
  // Costruiamo l'URL usando il file environment
  private apiUrl = `${environment.apiBaseUrl}/baite`;

  // Angular inietta HttpClient
  constructor(private http: HttpClient) { }

  // Metodo per ottenere tutte le baite
  // Restituisce un "Observable" (un flusso di dati)
  getBaite(): Observable<Baita[]> {
    return this.http.get<Baita[]>(this.apiUrl);
  }
}