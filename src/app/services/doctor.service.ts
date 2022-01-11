import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private url: string = 'https://projectsw2.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  getDoctor(){
    return this.http.get(this.url + '/api/doctors');
  }
}
