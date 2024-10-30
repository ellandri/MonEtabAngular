import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ajouter-utilisateur',
  standalone: true,
  imports: [NgIf,ReactiveFormsModule,RouterModule,WelcomeComponent],
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrl: './ajouter-utilisateur.component.css'
})
export class AjouterUtilisateurComponent implements OnInit{
  formAjouterUtilisateur!: FormGroup;
  ngOnInit(): void {
    this.formAjouterUtilisateur = new FormGroup ({
      Mot_de_passe: new FormControl('',[Validators.required,Validators.minLength(455)]),
      Pseudo: new FormControl('',[Validators.required,Validators.minLength(455)]),
      
    });
    // console.log(this.messageMessage.value)
  }
  isInvalidInput(field:AbstractControl){
    return field && field.invalid && (field.touched || field.dirty);
  }
}
