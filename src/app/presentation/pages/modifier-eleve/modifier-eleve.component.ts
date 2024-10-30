import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modifier-eleve',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,RouterModule],
  templateUrl: './modifier-eleve.component.html',
  styleUrl: './modifier-eleve.component.css'
})
export class ModifierEleveComponent implements OnInit{
  formModifierEleve!: FormGroup;
  ngOnInit(): void {
    this.formModifierEleve = new FormGroup ({
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
