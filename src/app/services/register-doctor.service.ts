import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterDoctorService {

  private url: string = 'https://projectsw2.herokuapp.com';
  constructor(private http: HttpClient) {

  }
  register_doctor(doctor: any){
    return this.http.post(this.url + "/api/registerDoctor", doctor);
  }

  getClinic(){
    return this.http.get(`${this.url}/api/getClinics`);
  }
}
