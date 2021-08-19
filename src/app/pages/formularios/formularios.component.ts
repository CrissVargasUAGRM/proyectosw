import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterDoctorService } from 'src/app/services/register-doctor.service';
import { ToastrService } from 'ngx-toastr';
import { clinic } from '../../models/clinic.model';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  name: string;
  code: string;
  specialty: string;
  id_clinic: number;
  cellphone: number;
  clinics: clinic[];
  clinica: string;

  constructor(
    public doctor_service: RegisterDoctorService,
    private router: Router,
    private toast: ToastrService
    ) { }

  ngOnInit(): void {
    this.getClinics();
  }
  post_doctor(){
    let doctor = {
      nombre: this.name,
      matricula: this.code,
      especialidad: this.specialty,
      idclinic: this.clinica,
      telefono: this.cellphone
    };
    console.log(this.clinica);
    return this.doctor_service.register_doctor(doctor).subscribe(
      (res: any) => {
        console.log(res);
        this.toast.success(res.message);
        this.router.navigate(['/client/home']);
      },
      (error: any) => {
        console.log(error.error);
      }
    )
  }

  getClinics(){
    return this.doctor_service.getClinic().subscribe((res: any) => {
      this.clinics = res;
      console.log(this.clinics);
    });
  }

}
