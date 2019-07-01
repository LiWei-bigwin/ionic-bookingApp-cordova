import { Injectable } from '@angular/core';
import { CONFIG } from '../app-config/app-config';
import { Book, BookMark, BooksService, Highlight, LastLocation } from '../books-service/books-service';
import { Events } from 'ionic-angular';
import Parse from 'parse';
import { ParseDbBookProvider } from '../parse-db-book/parse-db-book';
import { BookmarksPage } from '../../pages/bookmarks/bookmarks';
import { DNS } from '@ionic-native/dns';
import { rejects } from 'assert';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


const win: any = window;

@Injectable()
export class DbServiceProvider {
  private db: SQLiteObject;
  constructor(public events: Events, private sqlite: SQLite) {
  }

  init() {
    this.sqlite.create({
      name: CONFIG.DB_NAME,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.db = db;
        this.initTables();
      }).catch((err) => {
        console.warn('Storage: SQLite plugin not installed, falling back to WebSQL. Make sure to install cordova-sqlite-storage in production!');
        this.db = win.openDatabase(CONFIG.DB_NAME, '1.0', 'database1', 5 * 1024 * 1024);
        this.initTables();
      });

  }

  private initTables() {
    this.createBooksTable().then(() => {
      switch (CONFIG.appMode) {
        case 'offline': {
          new BooksService().getAll().then((books) => {
            this.events.publish("booksRetrieved", books);
            books.forEach((book) => {
              this.populateBooks(book);
            });
          });
          break;
        }
        case 'online': {
          Parse.serverURL = CONFIG.PARSE_SERVER_URL;
          Parse.initialize(CONFIG.PARSE_APP_ID);
          ParseDbBookProvider.load().then((books) => {
            this.events.publish("booksRetrieved", books);
            books.forEach((book) => {
              this.populateBooks(book);
            })
          });
          break;
        }
      }
    });
    this.createKVTable();
    this.createBookmarkTable();
    this.createHighlightTable();
    this.createLastLocationTable();
  }

  createKVTable() {
    return new Promise((resolve, reject) => resolve(this.query(this.db, "CREATE TABLE 'kv' ('key'	TEXT, 'value' TEXT, PRIMARY KEY('key'))").then((data) => {
      console.log("kv table created");
    }, (error) => {
      console.log("Error: createdkvTable -> " + JSON.stringify(error));
    })));
  }
  createLastLocationTable() {
    return new Promise((resolve, reject) => resolve(this.query(this.db, "CREATE TABLE 'lastLocation' ('location'	Text, 'bookid' TEXT UNIQUE, FOREIGN KEY('bookid') REFERENCES 'books'('id'))").then((data) => {
      console.log("Location table created");
    }, (error) => {
      console.log("Error: createdBookmarksTable -> " + JSON.stringify(error));
    })));
  }

  addlastLocation(lastlocation: LastLocation) {
    let querys = "insert or replace into lastLocation(location,bookid) values (?,?) ";
    return new Promise((resolve, reject) => resolve(this.query(this.db, querys, [lastlocation.location, lastlocation.bookid]).then((data) => {
      console.log("Inserted:", data);
      querys = null;
    }, (error) => {
      console.log("ERROR: addLastlocation -> " + JSON.stringify(error.err));
    })));
  }


  getlastLocationByBookId(bookId): Promise<any> {
    let lastLocation: LastLocation;
    return new Promise((resolve, reject) => resolve(this.query(this.db, "SELECT location, bookid FROM lastLocation where bookid=?", [bookId]).then((data) => {
      for (var i = 0; i < data.res.rows.length; i++) {
        let ll = data.res.rows.item(i);
        lastLocation = ll;
      }
      return lastLocation;
    }, (error) => {
      console.log("ERROR: getAllBooks -> " + JSON.stringify(error));
    })));
  }

  createBooksTable() {
    return new Promise((resolve, reject) => resolve(this.query(this.db, "CREATE TABLE 'books' ( 'label' TEXT, 'metadata' TEXT, 'cover' TEXT, 'file' TEXT, opened_at DATETIME, 'id' TEXT, PRIMARY KEY('id'))").then((data) => {
      console.log("books table created");
    }, (error) => {
      console.log("ERROR: createBooksTable -> " + JSON.stringify(error));
    })));
  }

  populateBooks(book: Book) {
    let querys = "insert or replace into books(id,cover,label,file,metadata) values (?,?,?,?,?)";
    return new Promise((resolve, reject) => resolve(this.query(this.db, querys, [book.id, book.cover, book.label, book.file, book.metadata ? JSON.stringify(book.metadata) : ""]).then((data) => {
      console.log("Inserted:", data);
      querys = null;
    }, (error) => {
      console.log("ERROR: populateBooks -> " + JSON.stringify(error.err));
    })));
  }

  updateOpenedBook(id: string) {
    let querys = "UPDATE books SET opened_at = datetime() WHERE id = ?";
    return new Promise((resolve, reject) => resolve(this.query(this.db, querys, [id]).then((data) => {
      console.log("Updated:", data);
      querys = null;
    }, (error) => {
      console.log("ERROR: updateOpenedBook -> " + JSON.stringify(error.err));
    })));
  }

  getAllBooks(): Promise<any> {
    let books: Book[] = [];
    return new Promise((resolve, reject) => resolve(this.query(this.db, "SELECT * FROM books order by datetime(opened_at) DESC").then((data) => {
      for (var i = 0; i < data.res.rows.length; i++) {
        let book = data.res.rows.item(i);
        book.metadata = book.metadata ? JSON.parse(book.metadata) : "";
        books.push(book);
      }
      return books;
    }, (error) => {
      console.log("ERROR: getAllBooks -> " + JSON.stringify(error));
    })));
  }


  //bookmarkTable
  createBookmarkTable() {
    return new Promise((resolve, reject) => resolve(this.query(this.db, "CREATE TABLE 'bookmarks' ('excerpt'	Text, 'location'	Text, 'position' Text, 'id'	INTEGER PRIMARY KEY AUTOINCREMENT, 'bookid' 	TEXT, FOREIGN KEY('bookid') REFERENCES 'books'('id'))").then((data) => {
      console.log("bookmarks table created");
    }, (error) => {
      console.log("Error: createdBookmarksTable -> " + JSON.stringify(error));
    })));
  }

  addBookMark(bookmark: BookMark) {
    let querys = "insert or replace into bookmarks(excerpt,location,position,bookid) values (?,?,?,?)";
    return new Promise((resolve, reject) => resolve(this.query(this.db, querys, [bookmark.excerpt, bookmark.location, bookmark.position, bookmark.bookid]).then((data) => {
      console.log("Inserted:", data);
      querys = null;
    }, (error) => {
      console.log("ERROR: addBookMark -> " + JSON.stringify(error.err));
    })));
  }

  getBookmarksByBookId(bookId): Promise<any> {
    let bookmarks: BookMark[] = [];
    return new Promise((resolve, reject) => resolve(this.query(this.db, "SELECT * FROM bookmarks where bookid=?", [bookId]).then((data) => {
      for (var i = 0; i < data.res.rows.length; i++) {
        let bookmark = data.res.rows.item(i);
        bookmarks.push(bookmark);
      }
      return bookmarks;
    }, (error) => {
      console.log("ERROR: getAllBooks -> " + JSON.stringify(error));
    })));
  }

  deleteBookmark(bookmark: BookMark) {
    let querys = " delete  from bookmarks where location=? and bookid =? ";
    return new Promise((resolve, reject) => resolve(this.query(this.db, querys, [bookmark.location, bookmark.bookid]).then((data) => {
      querys = null;
      console.log("deleted:", data);
    }, (error) => {
      console.log("ERROR: deleteBookmark -> " + JSON.stringify(error.err));
    })));

  }

  createHighlightTable() {
    return new Promise((resolve, reject) => resolve(this.query(this.db, "CREATE TABLE 'highlights' ('text'	Text, 'location'	Text,'position'	Text,'cfiRange' Text UNIQUE, 'id'	INTEGER PRIMARY KEY AUTOINCREMENT, 'bookid' 	TEXT, FOREIGN KEY('bookid') REFERENCES 'books'('id'))").then((data) => {
      console.log("highlights table created");
    }, (error) => {
      console.log("Error: createdhighlightsTable -> " + JSON.stringify(error));
    })));
  }

  addHighlight(highlight: Highlight) {
    let querys = "insert or replace into highlights(text,location,position,cfiRange,bookid) values (?,?,?,?,?)";
    return new Promise((resolve, reject) => resolve(this.query(this.db, querys, [highlight.text, highlight.location, highlight.position, highlight.cfiRange, highlight.bookid]).then((data) => {
      console.log("Inserted Highlight:", data);
      querys = null;
    }, (error) => {
      console.log("ERROR: addHighlight -> " + JSON.stringify(error.err));
    })));
  }

  getHighlightsByBookId(bookId): Promise<any> {
    let highlights: BookMark[] = [];
    return new Promise((resolve, reject) => resolve(this.query(this.db, "SELECT * FROM highlights where bookid=?", [bookId]).then((data) => {
      for (var i = 0; i < data.res.rows.length; i++) {
        let highlight = data.res.rows.item(i);
        highlights.push(highlight);
      }
      return highlights;
    }, (error) => {
      console.log("ERROR: getHighlightsByBookId -> " + JSON.stringify(error));
    })));
  }

  deleteHighlight(highlight: Highlight) {
    let querys = " delete  from highlights where text=? and bookid =? ";
    return new Promise((resolve, reject) => resolve(this.query(this.db, querys, [highlight.text, highlight.bookid]).then((data) => {
      querys = null;
      console.log("deleted:", data);
    }, (error) => {
      console.log("ERROR: deleteHighlight -> " + JSON.stringify(error.err));
    })));
  }

  query(dbase: any, querys: string, params: any[] = []): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        dbase.transaction((tx: any) => {
          tx.executeSql(querys, params,
            (tx: any, res: any) => {
              resolve({ tx: tx, res: res })
            },
            (tx: any, err: any) => reject({ tx: tx, err: err }));
        },
          (err: any) => reject({ err: err }));
      } catch (err) {
        reject({ err: err });
      }
    });
  }

  get(key: string): Promise<any> {
    return this.query(this.db, 'select key, value from kv where key = ? limit 1', [key]).then(data => {
      if (data.res.rows.length) {
        return data.res.rows.item(0).value;
      }
    });
  }
  getAll(keys: string[]): Promise<any> {
    // return this.query(this.db, `select key, value from kv where key in ('${key.reduce((acc, cval,ci,arr,iv="") => acc + '\'' + cval + '\',').slice(0, -1)})`, [key]).then(data => {
    return this.query(this.db, `select key, value from kv where key in (${keys.map(_ => '?')})`, keys).then(data => {
      let kvs = {};
      if (data.res.rows.length > 0) {
        for (var i = 0; i < data.res.rows.length; i++) {
          let tkv = data.res.rows.item(i);
          kvs[tkv.key] = tkv.value;
        }
        return kvs
      }
    });
  }
  set(key: string, value: string): Promise<any> {
    return this.query(this.db, 'insert or replace into kv(key, value) values (?, ?)', [key, value]);
  }

  remove(key: string): Promise<any> {
    return this.query(this.db, 'delete from kv where key = ?', [key]);
  }

  clear(): Promise<any> {
    return this.query(this.db, 'delete from kv');
  }
}
