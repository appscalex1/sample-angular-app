import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private store: Map<string, string> = new Map();

  set(key: string, value: string): void {
    this.store.set(key, value);
  }

  get(key: string): string | null {
    return this.store.get(key) ?? null;
  }

  remove(key: string): void {
    this.store.delete(key);
  }

  clear(): void {
    this.store.clear();
  }

  has(key: string): boolean {
    return this.store.has(key);
  }
}
