import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CvService {
  private http = inject(HttpClient);

  getCv() {
    return this.http.get<any>('data/cv.json');
  }
}
