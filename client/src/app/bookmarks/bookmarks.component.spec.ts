/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BookmarksComponent } from './bookmarks.component';

describe('Component: Bookmarks', () => {
  it('should create an instance', () => {
    let component = new BookmarksComponent();
    expect(component).toBeTruthy();
  });
});
