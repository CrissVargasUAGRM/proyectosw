import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateClinicService } from 'src/app/services/create-clinic.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-clinic',
  templateUrl: './register-clinic.component.html',
  styleUrls: ['./register-clinic.component.css']
})
export class RegisterClinicComponent implements OnInit {

  name: string;
  address: string;

  constructor(
    public clini_service:CreateClinicService,
    private router:Router,
    private toast: ToastrService
    ) { }

  ngOnInit(): void {
  }
  post_clinic(){
    let clinic = {
      nombre: this.name,
      direccion: this.address
    };
    this.clini_service.register_clinic(clinic).subscribe(
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

}
