/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AddBookmarkComponent } from './add-bookmark.component';

describe('Component: AddBookmark', () => {
  it('should create an instance', () => {
    let component = new AddBookmarkComponent();
    expect(component).toBeTruthy();
  });
});
