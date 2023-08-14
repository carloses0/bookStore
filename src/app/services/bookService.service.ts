import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class bookService {

  constructor(private httpClient: HttpClient) {}

  getBooks(value: any): Observable<any> {
    return this.httpClient
      .get(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
      .pipe(map((d: any) => d.items));
  }
}
