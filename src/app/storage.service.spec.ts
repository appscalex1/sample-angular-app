import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store and retrieve a value', () => {
    service.set('token', 'abc123');
    expect(service.get('token')).toBe('abc123');
  });

  it('should return null for a missing key', () => {
    expect(service.get('nonexistent')).toBeNull();
  });

  it('should correctly report if a key exists', () => {
    service.set('user', 'Alice');
    expect(service.has('user')).toBeTrue();
    expect(service.has('other')).toBeFalse();
  });

  it('should remove a key', () => {
    service.set('temp', 'value');
    service.remove('temp');
    expect(service.has('temp')).toBeFalse();
  });

  it('should clear all stored values', () => {
    service.set('a', '1');
    service.set('b', '2');
    service.clear();
    expect(service.has('a')).toBeFalse();
    expect(service.has('b')).toBeFalse();
  });
});
