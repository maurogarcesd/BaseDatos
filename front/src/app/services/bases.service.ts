import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Base } from '../models/base';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getBases() {
    return this.http.get(`${this.API_URI}`);
  }

  getBasesArea(area: string) {
    return this.http.get(`${this.API_URI}/area/${area}`);
  }

  getBasesTipo(tipo: string) {
    return this.http.get(`${this.API_URI}/tipo/${tipo}`);
  }

  
}