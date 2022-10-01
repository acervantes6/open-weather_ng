import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  weather: any;
  myForm: FormGroup = this.fb.group({
    cityName: [ 'london', [ Validators.required ] ]
  });

  constructor( 
    private fb: FormBuilder,
    private searchService: SearchService 
    ) { }

    fieldIsValid( field: string ){
      return this.myForm.controls[field].errors
        && this.myForm.controls[field].touched;
    }

  ngOnInit(): void {
  }

  getWeather(cityName: string) {
    this.searchService.getWeather( cityName )
    .subscribe( 
      resp => {
        console.log(resp)
        this.weather = resp 
      },
      err => console.log(err)
    )
  }

  submitCity() {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    // this.getWeather(this.myForm.value);
    console.log(this.myForm.value);
    this.myForm.reset();
  }

  // submitLocation(cityName: HTMLInputElement) {
  //   this.getWeather( cityName.value );

  //   cityName.value = '';
  //   cityName.focus();

  //   return false
  // }

}
