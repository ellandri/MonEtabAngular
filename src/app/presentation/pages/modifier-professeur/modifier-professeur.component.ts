import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modifier-professeur',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,RouterModule],
  templateUrl: './modifier-professeur.component.html',
  styleUrl: './modifier-professeur.component.css'
})
export class ModifierProfesseurComponent implements OnInit{
  formModifierProfesseur!: FormGroup;
  ngOnInit(): void {
    this.formModifierProfesseur = new FormGroup ({
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
