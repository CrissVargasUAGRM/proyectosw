import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { clinic } from 'src/app/models/clinic.model';
import { CreateClinicService } from 'src/app/services/create-clinic.service';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})
export class ClinicsComponent implements OnInit, OnDestroy {

  clinicas: clinic[];
  tempSuscription: Subscription;

  constructor(private clinicServices: CreateClinicService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.getClinicas();
  }

  ngOnDestroy(): void {
    this.tempSuscription.unsubscribe();
    
  }

  getClinicas(){
    this.tempSuscription = this.clinicServices.getClinics().subscribe((res: any) => {
      this.clinicas = res;
      console.log(res);
    }, error => {
      this.toast.warning('Error');
    })
  }

}
