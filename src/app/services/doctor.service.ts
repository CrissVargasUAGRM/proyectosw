import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private url: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getDoctor(){
    return this.http.get(this.url + '/api/doctors');
  }
}
