import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { CommonModule } from '@angular/common';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void { //lifecycle hook starting at initialisation
    this.getBooks();
  }

  getBooks() {
    //subcribe notifies the code when data is retrieved
    this.bookService.getBookList().subscribe((books) => (this.books = books));
  }
}
