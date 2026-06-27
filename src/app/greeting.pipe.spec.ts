import { GreetingPipe } from './greeting.pipe';

describe('GreetingPipe', () => {
  let pipe: GreetingPipe;

  beforeEach(() => {
    pipe = new GreetingPipe();
  });

  it('should create the pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('should greet with default prefix "Hello"', () => {
    expect(pipe.transform('Alice')).toBe('Hello, Alice!');
  });

  it('should greet with a custom prefix', () => {
    expect(pipe.transform('Bob', 'Hi')).toBe('Hi, Bob!');
  });

  it('should return empty string for empty input', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should trim whitespace from the name', () => {
    expect(pipe.transform('  Alice  ')).toBe('Hello, Alice!');
  });
});
