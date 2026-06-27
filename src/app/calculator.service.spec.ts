import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers correctly', () => {
    expect(service.add(3, 5)).toBe(8);
  });

  it('should subtract two numbers correctly', () => {
    expect(service.subtract(10, 4)).toBe(6);
  });

  it('should multiply two numbers correctly', () => {
    expect(service.multiply(3, 4)).toBe(12);
  });

  it('should divide two numbers correctly', () => {
    expect(service.divide(10, 2)).toBe(5);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => service.divide(10, 0)).toThrowError('Division by zero');
  });

  it('should return negative result for subtract when b > a', () => {
    expect(service.subtract(3, 10)).toBe(-7);
  });
});
