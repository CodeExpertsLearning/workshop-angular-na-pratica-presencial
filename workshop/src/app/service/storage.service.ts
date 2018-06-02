import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {}

  get(key) {
    return localStorage.getItem(key);
  }

  set(key, value) {
    return localStorage.setItem(key, value);
  }

  remove(key) {
    return localStorage.removeItem(key);
  }
}
