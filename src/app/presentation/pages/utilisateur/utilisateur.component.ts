import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../../components/welcome/welcome.component';

@Component({
  selector: 'app-utilisateur',
  standalone: true,
  imports: [RouterModule,WelcomeComponent],
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})
export class UtilisateurComponent {

}
