import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DashboardComponent } from '../../../pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { EleveComponent } from '../../../pages/eleve/eleve.component';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [SidebarComponent,DashboardComponent,RouterModule, EleveComponent],
  templateUrl: './block.component.html',
  styleUrl: './block.component.css'
})
export class BlockComponent {

}
