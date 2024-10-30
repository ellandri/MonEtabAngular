import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../../components/welcome/welcome.component';

@Component({
  selector: 'app-professeur',
  standalone: true,
  imports: [RouterModule,WelcomeComponent],
  templateUrl: './professeur.component.html',
  styleUrl: './professeur.component.css'
})
export class ProfesseurComponent {

}
