import { Book } from './../../interfaces/books';
import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books/books.service';
import { Books } from '../../interfaces/books';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  pageLimit: number = 6;
  page: number = 1;
  numOfPages?: number;
  pagesArr: number[] = [];
  allBooks?: Books;
  totalBooks: number = 0;
  filterForm!:FormGroup
  filterParams:string=''
  constructor(private _formBuilder:FormBuilder,private _booksService: BooksService) {}
  ngOnInit(): void {
    this.initFilterForm()
    this.getBooks();
  }
  getBooks() {
    this._booksService.getBooks(this.pageLimit, this.page, this.filterParams).subscribe({
      next: (res) => {
        console.log(res);
        this.allBooks = res;
        this.totalBooks = res.total;
        this.numOfPages = Math.ceil(res.total / this.pageLimit);
        console.log(this.numOfPages);
        this.pagesArr = [];
        for (let index = 1; index <= this.numOfPages; index++) {
          this.pagesArr.push(index);
        }
        console.log(this.pagesArr);
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
  setPage(pageNum: number) {
    this.page = pageNum;
    this.getBooks();
  }
  toNextPage() {
    this.page++;
    this.getBooks();
  }
  toPrevPage() {
    this.page--;
    this.getBooks();
  }
  setPagesLimt(pagelimit: string) {
    debugger;
    this.pageLimit = Number(pagelimit);
    if (this.allBooks)
      this.numOfPages = Math.ceil(this.allBooks.total / this.pageLimit);
    console.log(this.numOfPages);
    this.pagesArr = [];
    if (this.numOfPages)
      for (let index = 1; index <= this.numOfPages; index++) {
        this.pagesArr.push(index);
      }
      if (this.numOfPages)
      if(this.page>this.numOfPages)
        this.page=this.numOfPages
      this.getBooks();
  }
  initFilterForm() {
    this.filterForm = this._formBuilder.group({
      price: [''],
      author: [''],
      book: ['']
    });
  }

  submitFilter(){
    this.filterParams=''
    if(this.filterForm.value.price){
      console.log(this.filterForm.value.price);
      this.filterParams=this.filterParams+`&price=${this.filterForm.value.price}`
    }
    if(this.filterForm.value.author){
      console.log(this.filterForm.value.author);
      this.filterParams=this.filterParams+`&author=${this.filterForm.value.author}`
    }
    if(this.filterForm.value.book){
      console.log(this.filterForm.value.book);
      this.filterParams=this.filterParams+`&name=${this.filterForm.value.book}`
    }
      
    this.getBooks();

  }
}
