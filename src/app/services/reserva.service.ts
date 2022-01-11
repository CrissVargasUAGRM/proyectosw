import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private url: string = 'https://projectsw2.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  registerReserva(reserva: any){
    return this.http.post(this.url + "/api/regreservas", reserva);
  }

  getPayment(){
    return this.http.get(this.url + "/api/payment");
  }
}
