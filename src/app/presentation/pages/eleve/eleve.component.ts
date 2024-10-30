import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../../components/welcome/welcome.component';

@Component({
  selector: 'app-eleve',
  standalone: true,
  imports: [RouterModule,WelcomeComponent],
  templateUrl: './eleve.component.html',
  styleUrl: './eleve.component.css'
})
export class EleveComponent {

}
