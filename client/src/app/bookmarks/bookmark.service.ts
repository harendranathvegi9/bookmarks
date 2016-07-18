import { Injectable } from '@angular/core';

@Injectable()
export class BookmarkService {
  public bookmarks

  constructor() {
    this.bookmarks = [
      {id: 1, title: 'Angular2 official website', link: 'https://angular.io/', status: 1},
      {id: 2, title: 'My own website', link: 'http://amitavroy.com', status: 1},
      {id: 3, title: 'My Github page', link: 'https://github.com/amitavroy', status: 0}
    ];
  }

  getBookmarks() {
    return this.bookmarks
  }
}
