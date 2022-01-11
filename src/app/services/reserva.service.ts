import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private url: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  registerReserva(reserva: any){
    return this.http.post(this.url + "/api/regreserva", reserva);
  }
}
