import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { DoctorService } from '../../services/doctor.service';
import { doctor } from '../../models/doctor.model';
import { ToastrService } from 'ngx-toastr';
import { ReservaService } from '../../services/reserva.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit, OnDestroy {
  userData: any = {};

  fecha: string;
  client: string;
  email: string;
  telefono: string;
  username: string;

  doctors: doctor[];
  tempSubscripcion: Subscription;
  doctor :string;

  model: NgbDateStruct;

  constructor(
    private doctorServices: DoctorService,
    private toast: ToastrService,
    private reservaService: ReservaService,
    private router: Router
  ) {
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
   }

  ngOnInit(): void {
    this.getDoctors();
  }

  ngOnDestroy(): void {
    this.tempSubscripcion.unsubscribe();
  }

  getDoctors(){
    this.tempSubscripcion = this.doctorServices.getDoctor().subscribe((res: any) => {
      this.doctors = res;
    }, error => {
      this.toast.warning('Error');
    });
  }

  registerReserva(){
    const reserva = {
      fecha: this.fecha,
      iddoctor: Number.parseInt(this.doctor),
      client: this.client,
      email: this.email,
      telefono: Number.parseInt(this.telefono),
      username: this.userData.username
    };
    console.log(reserva);
    return this.reservaService.registerReserva(reserva).subscribe(
      (res: any) => {
        this.toast.success(res.message);
        this.router.navigate(['/client/home']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
