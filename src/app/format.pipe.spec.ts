import { FormatPipe } from './format.pipe';

describe('FormatPipe', () => {
  let pipe: FormatPipe;

  beforeEach(() => {
    pipe = new FormatPipe();
  });

  it('should create the pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('should convert to uppercase', () => {
    expect(pipe.transform('hello world', 'upper')).toBe('HELLO WORLD');
  });

  it('should convert to lowercase', () => {
    expect(pipe.transform('HELLO WORLD', 'lower')).toBe('hello world');
  });

  it('should convert to title case by default', () => {
    expect(pipe.transform('hello world')).toBe('Hello World');
  });

  it('should convert to title case explicitly', () => {
    expect(pipe.transform('angular testing guide', 'title')).toBe('Angular Testing Guide');
  });

  it('should return empty string for empty input', () => {
    expect(pipe.transform('')).toBe('');
  });
});
