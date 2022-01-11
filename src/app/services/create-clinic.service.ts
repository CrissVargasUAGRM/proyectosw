import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateClinicService {

  private url: string = 'https://projectsw2.herokuapp.com';
  constructor( private http:HttpClient) {

  }

  register_clinic(clinic: any){
    return this.http.post(this.url + "/api/registerClinic", clinic);
  }

  getClinics(){
    return this.http.get(this.url + "/api/getClinics");
  }
}
