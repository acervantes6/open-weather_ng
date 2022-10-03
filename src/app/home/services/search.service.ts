import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from '../interfaces/city.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl: string = environment.baseUrl;
  private apiKey: string = environment.apiKey;
  
  constructor( private http: HttpClient ) { }

  getWeather( name: City ): Observable<City> {
    const url = `${ this.baseUrl }/weather?appid=${ this.apiKey }&lang=es&units=metric&q=`;
    
    return this.http.get<City>(`${ url }${ name }`)
  }
  
  daysWeather( id: number ): Observable<City[]>{
    const url = `${ this.baseUrl }/forecast/?appid=${ this.apiKey }&lang=es&units=metric&cnt=7&id=`;

    return this.http.get<City[]>(`${ url }${ id }`)
  }

}

