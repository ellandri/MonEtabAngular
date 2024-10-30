import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ajouter-eleve',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,RouterModule,WelcomeComponent],
  templateUrl: './ajouter-eleve.component.html',
  styleUrl: './ajouter-eleve.component.css'
})
export class AjouterEleveComponent implements OnInit{
  formAjouterEleve!: FormGroup;
  ngOnInit(): void {
    this.formAjouterEleve = new FormGroup ({
      first_name: new FormControl('',[Validators.required,Validators.minLength(455)]),
      last_name: new FormControl('',[Validators.required,Validators.minLength(455)]),
      birthday: new FormControl('',[Validators.required,Validators.minLength(455)]),
      number: new FormControl('',[Validators.required,Validators.minLength(455)]),
      Registration: new FormControl('',[Validators.required,Validators.minLength(455)]),
      gender: new FormControl('',[Validators.required,Validators.minLength(455)]),
      Class: new FormControl('',[Validators.required,Validators.minLength(455)]),
      City: new FormControl('',[Validators.required,Validators.minLength(455)]),
      
    });
    // console.log(this.messageMessage.value)
  }
  isInvalidInput(field:AbstractControl){
    return field && field.invalid && (field.touched || field.dirty);
  }
}
