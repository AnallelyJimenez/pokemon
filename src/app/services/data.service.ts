import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public api = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getData(offset: number, limit: number) {
    const url = `${this.api}?offset=${offset}&limit=${limit}`;
    
    return this.http.get(url);
  }

  getPokemon(link: string, id: number) {
    const url = link ? link : `${this.api}/${id}`;
    
    return this.http.get(url);
  }
}
