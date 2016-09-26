/* tslint:disable:no-unused-variable */

import { async, inject } from '@angular/core/testing';
import {Language} from './language';

describe('Language', () => {
  it('should create an instance', () => {
    expect(new Language("123", "es", "spanish")).toBeTruthy();
  });
});
