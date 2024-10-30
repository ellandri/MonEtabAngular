import { Component } from '@angular/core';
import { WelcomeComponent } from '../../components/welcome/welcome.component';

@Component({
  selector: 'app-rapport',
  standalone: true,
  imports: [WelcomeComponent],
  templateUrl: './rapport.component.html',
  styleUrl: './rapport.component.css'
})
export class RapportComponent {

}
