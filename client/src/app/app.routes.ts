import { provideRouter, RouterConfig } from '@angular/router';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';

export const routes: RouterConfig = [
  {path: 'add-bookmark', component: AddBookmarkComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
