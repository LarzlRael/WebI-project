import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_URI = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
    console.log('service is working');
  }
  getData() {
    return this.http.get(`${this.API_URI}`)
  }
}
