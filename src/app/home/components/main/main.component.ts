import { Component, OnInit } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { City } from '../../interfaces/city.interface';
import { List } from '../../interfaces/forecast.interface';
import { SearchService } from '../../services/search.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  weather$!: Observable<City>;
  days!: List[];
  BASE_URL = 'http://openweathermap.org/img/wn';


  constructor( private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onSearch( searchCity: City){
    this.weather$ = this.searchService.getWeather(searchCity);
    this.searchService.getWeather( searchCity )
    .pipe(
      switchMap( ({ id }) => this.searchService.daysWeather( id ) ), 
      tap(console.log)
    )
    .subscribe( ( days ) => {
      this.days = days.list
    }, ( err ) => {
      Swal.fire('No se encontró una ciudad con ese termino', '', 'error')
    });

    }

    onSelect(day: List ) {
      
      const utcSeconds = day.dt;
      const dayDate = new Date(0);
      dayDate.setUTCSeconds(utcSeconds);

    Swal.fire({
      html: `
        <div>
          <h4>${ dayDate.toUTCString() }</h4>
          <img src="${ this.BASE_URL }//${ day.weather[0].icon }@2x.png" ">
          <h5>${ day.weather[0].description }</h5>
          <p>${ day.main.temp } °C</p>
          <small>Humedad: ${ day.main.humidity } %</small> /
          <small>Viento:${ day.wind.speed } m/s</small> 
        </div>
      `
      })
    }
  
  }


