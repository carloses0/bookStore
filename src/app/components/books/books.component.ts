import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { bookService } from 'src/app/services/bookService.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit{


  private subjectKeyUp = new Subject<any>();
  books$: any;

  constructor(private bookService: bookService) {}

  ngOnInit(): void {
    this.subjectKeyUp
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((d) => {
        this.getBooks(d);
      });
  }
  
  onSearch($event: any) {
    const value = $event.target.value;
    this.subjectKeyUp.next(value);
  }

  getBooks(value: string) {
    this.books$ = this.bookService.getBooks(value);
  }

}
