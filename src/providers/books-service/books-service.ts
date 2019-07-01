declare var ePub: any;
export class Book {
  id: string;
  cover: string;
  label: string;
  file: string;
  metadata?: object;
}
export class LastLocation {
  bookid: string;
  location: string;
}


export class BookMark {
  id?: string;
  bookid: string;
  excerpt: string;
  location: string;
  position: string;
}
export class Highlight {
  id?: string;
  bookid: string;
  text: string;
  location: string;
  position: string;
  cfiRange: string;
}
export class BooksService {

  private offlineBooks: Book[] = [
    {
      id: "1",
      cover: "assets/imgs/cover.png",

      label: "Moby Dick (unpacked)",
      file: "assets/Jars-of-Clay.epub"
    },
  
  ];

  public getAll(): Promise<Book[]> {
    const promises = this.offlineBooks.map(book => {
      return book;
    });
    return Promise.all(promises);
  }
}
