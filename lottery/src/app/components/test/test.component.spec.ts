import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sum } from './test.component';

describe('sum function test', () => {
  it('3 + 5 sum must be 8', () => {
    const number1 = 3; 
    const number2 = 5;  

    const result = sum(number1, number2);

    expect(result).toEqual(8);
  });
});
