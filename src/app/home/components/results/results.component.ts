import { Component, Input, OnInit } from '@angular/core';
import { City } from '../../interfaces/city.interface';
import { List } from '../../interfaces/forecast.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() weather!: City;
  BASE_URL = 'http://openweathermap.org/img/wn';


  constructor() { }

  ngOnInit(): void {
  }

}
