import { Component, OnInit } from '@angular/core';
import { BookmarkService } from './bookmark.service';

@Component({
  moduleId: module.id,
  selector: 'app-bookmarks',
  templateUrl: 'bookmarks.component.html',
  styleUrls: ['bookmarks.component.css'],
  providers: [ BookmarkService ]
})
export class BookmarksComponent implements OnInit {
  private bookmarks

  constructor(private bookmarkService: BookmarkService) {
    this.bookmarks = bookmarkService.getBookmarks()
  }

  ngOnInit() {
  }

}
