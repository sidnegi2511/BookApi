import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs'; //for async request

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'https://localhost:44326';
  constructor(private http: HttpClient) {
    this.getBookList();
  }

  getBookList(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
}
