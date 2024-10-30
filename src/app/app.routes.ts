import { Routes } from '@angular/router';
import { BlockComponent } from './presentation/components/layout/block/block.component';
import { LoginComponent } from './presentation/pages/login/login.component';
import { DashboardComponent } from './presentation/pages/dashboard/dashboard.component';
import { RapportComponent } from './presentation/pages/rapport/rapport.component';
import { EleveComponent } from './presentation/pages/eleve/eleve.component';
import { AjouterEleveComponent } from './presentation/pages/ajouter-eleve/ajouter-eleve.component';
import { ModifierEleveComponent } from './presentation/pages/modifier-eleve/modifier-eleve.component';
import { ProfesseurComponent } from './presentation/pages/professeur/professeur.component';
import { ModifierProfesseurComponent } from './presentation/pages/modifier-professeur/modifier-professeur.component';
import { AjouterProfesseurComponent } from './presentation/pages/ajouter-professeur/ajouter-professeur.component';
import { UtilisateurComponent } from './presentation/pages/utilisateur/utilisateur.component';
import { AjouterUtilisateurComponent } from './presentation/pages/ajouter-utilisateur/ajouter-utilisateur.component';
import { ModifierUtilisateurComponent } from './presentation/pages/modifier-utilisateur/modifier-utilisateur.component';

export const routes: Routes = [
    { 
        path: '', component: LoginComponent
    },
    
    {
        path: '', component: BlockComponent,
        children: [
            {
                path: 'dashboard', component: DashboardComponent
            },

            {
                path: 'rapport', component: RapportComponent
            },

            {
                path: 'eleve', component: EleveComponent
            },

            {
                path: 'ajouter_eleve', component: AjouterEleveComponent
            },
            {
                path: 'modifier-eleve', component: ModifierEleveComponent
            },
            {
                path: 'professeur', component: ProfesseurComponent
            },
            {
                path: 'modifier-professeur', component: ModifierProfesseurComponent
            },

            {
                path: 'ajouter-professeur', component: AjouterProfesseurComponent
            },

            {
                path: 'utilisateur', component: UtilisateurComponent
            },

            {
                path: 'ajouter-utilisateur', component: AjouterUtilisateurComponent
            },

            {
                path: 'modifier-utilisateur', component: ModifierUtilisateurComponent
            },

        ]
    }
];
