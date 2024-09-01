import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from 'src/app/landing-page/interfaces/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _httpClint:HttpClient
  ) { }

  getBooks(limit:number,page:number,params?:string):Observable<Books>{
    return this._httpClint.get<Books>(`https://upskilling-egypt.com:3007/api/book?limit=${limit}&page=${page}${params}`)
  }


}
