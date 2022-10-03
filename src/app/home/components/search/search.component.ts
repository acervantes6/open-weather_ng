import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, filter, map, tap } from 'rxjs/operators';
import { City } from '../../interfaces/city.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    cityName: [ '', [ Validators.required ] ]
  });
  loading: boolean = false;
  @Output() submitted = new EventEmitter<City>();

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.onFormSubmit();
  }

  fieldIsValid( field: string ){
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  onFormSubmit(){
    this.myForm.get('cityName')?.valueChanges
      .pipe(
        tap( search => {
          this.loading = true;
        }),
        map( (search) => search.trim()),
        debounceTime(2500), 
        filter( (search) => search !== '' ),
        tap( (search) => {
          this.submitted.emit( search )
          this.loading = false;
        }),
      )
      .subscribe()
    }

}
