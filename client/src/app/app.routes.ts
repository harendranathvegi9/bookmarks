import { provideRouter, RouterConfig } from '@angular/router';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

export const routes: RouterConfig = [
  {path: '', redirectTo: 'list-bookmarks'},
  {path: 'add-bookmark', component: AddBookmarkComponent},
  {path: 'list-bookmarks', component: BookmarksComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
