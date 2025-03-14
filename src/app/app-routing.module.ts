import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {CompetencesComponent} from './competences/competences.component';
import {RealisationDetailComponent} from './realisations/realisation-detail/realisation-detail.component';
import {CompetenceDetailComponent} from './competences/competence-detail/competence-detail.component';
import {ContactComponent} from './contact/contact.component';
import {ParcoursComponent} from './parcours/parcours.component';
import {RealisationsComponent} from './realisations/realisations.component';
import {ExperienceDetailComponent} from './parcours/experience-detail/experience-detail.component';

const routes: Routes = [
  { path: '', component: AccueilComponent, pathMatch: 'full' }, // Redirection par défaut
  { path: 'accueil', component: AccueilComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'competences/:id', component: CompetenceDetailComponent },
  { path: 'realisations', component: RealisationsComponent },
  { path: 'realisations/:id', component: RealisationDetailComponent },
  { path: 'parcours', component: ParcoursComponent },
  { path: 'experience/:id', component: ExperienceDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } // Redirection si la route n'existe pas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
