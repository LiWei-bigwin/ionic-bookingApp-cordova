import { Injectable } from '@angular/core';
import Parse from 'parse';
import { Book } from '../books-service/books-service';
import { ParseDbBookPage } from '../../pages/parse-db-book/parse-db-book';
@Injectable()
export class ParseDbBookProvider extends Parse.Object {

  constructor() {
    super('Book');
    console.log('Hello ParseDbBookProvider Provider');
  }
  static load(): Promise<Book[]> {
    return new Promise((resolve, reject) => {
      let query = new Parse.Query(this);
      query.find().then(data => {
        let formatedBooks = data.map((book)=>{
          let lBook=new Book();
          lBook.id=book.id;
          lBook.cover=book.cover;
          lBook.file=book.file;
          lBook.label=book.title;
          return lBook;
        })


        resolve(formatedBooks);
      }, error => {
        reject(error);
      });
    });
  }

  get authors(): string {
    return this.get('authors');
  }
  get title(): string {
    return this.get('title');
  }
  get ebookUrl(): string {
    return this.get('ebookUrl');
  }

  get description(): string {
    return this.get('description');
  }
  get image(): string {
    return this.get('image').url();
  }
  get file(): string {
    return this.get('ebook').url();
  }

  get cover() {
    return this.get('imageThumb').url();
  }

}

Parse.Object.registerSubclass('Book', ParseDbBookProvider);
