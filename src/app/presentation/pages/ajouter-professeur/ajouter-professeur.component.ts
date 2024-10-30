import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ajouter-professeur',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,WelcomeComponent,NgIf],
  templateUrl: './ajouter-professeur.component.html',
  styleUrl: './ajouter-professeur.component.css'
})
export class AjouterProfesseurComponent implements OnInit{
  formAjouterProfesseur!: FormGroup;
form: any;
  ngOnInit(): void {
    this.formAjouterProfesseur = new FormGroup ({
      first_name: new FormControl('',[Validators.required,Validators.minLength(455)]),
      last_name: new FormControl('',[Validators.required,Validators.minLength(455)]),
      birthday: new FormControl('',[Validators.required,Validators.minLength(455)]),
      phone_number: new FormControl('',[Validators.required,Validators.minLength(455)]),
      url_picture: new FormControl('',[Validators.required,Validators.minLength(455)]),
      gender: new FormControl('',[Validators.required,Validators.minLength(455)]),
      specialty: new FormControl('',[Validators.required,Validators.minLength(455)]),
      address: new FormControl('',[Validators.required,Validators.minLength(455)]),
      
    });
    // console.log(this.messageMessage.value)
  }
  isInvalidInput(field:AbstractControl){
    return field && field.invalid && (field.touched || field.dirty);
  }
}
