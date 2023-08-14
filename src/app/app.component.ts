import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'do-something';

  inpt: FormControl = new FormControl();

  constructor(public http: HttpClient){

  }
  ngOnInit(): void {
    
    // this.list.merge(this.inpt.valueChanges)
    // .filter((v: string) => v.length > 2)
    // .debounceTime(300)
    // .map((v: string) => `https://swapi.dev/api/people/?search=${v}`)
    // .switchMap((url: any) => this.http.get(url))
    // .map((json: any) => json['results'])
    // .retry(3);

  }
}
