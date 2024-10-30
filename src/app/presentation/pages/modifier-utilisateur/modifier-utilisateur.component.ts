import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OnSameUrlNavigation, RouterModule } from '@angular/router';

@Component({
  selector: 'app-modifier-utilisateur',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,RouterModule],
  templateUrl: './modifier-utilisateur.component.html',
  styleUrl: './modifier-utilisateur.component.css'
})
export class ModifierUtilisateurComponent implements OnInit{
  formModifierUtilisateur!: FormGroup;
  ngOnInit(): void {
    this.formModifierUtilisateur = new FormGroup ({
      Mot_de_passe: new FormControl('',[Validators.required,Validators.minLength(455)]),
      Pseudo: new FormControl('',[Validators.required,Validators.minLength(455)]),
      
    });
    // console.log(this.messageMessage.value)
  }
  isInvalidInput(field:AbstractControl){
    return field && field.invalid && (field.touched || field.dirty);
  }
}
