import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent implements OnInit{
  FormLoginComponent!: FormGroup;
form: any;
  ngOnInit(): void {
    this.FormLoginComponent = new FormGroup ({
      Mot_de_passe: new FormControl('',[Validators.required,Validators.minLength(455)]),
      Pseudo: new FormControl('',[Validators.required,Validators.minLength(455)]),
    });
    // console.log(this.messageMessage.value)
  }
  isInvalidInput(field:AbstractControl){
    return field && field.invalid && (field.touched || field.dirty);
  }
}