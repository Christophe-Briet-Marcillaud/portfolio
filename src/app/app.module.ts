import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CompetencesComponent } from './competences/competences.component';
import { ParcoursComponent } from './parcours/parcours.component';
import { ContactComponent } from './contact/contact.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { CompetenceDetailComponent } from './competences/competence-detail/competence-detail.component';
import { RealisationDetailComponent } from './realisations/realisation-detail/realisation-detail.component';
import {MatDivider} from '@angular/material/divider';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import { ExperienceDetailComponent } from './parcours/experience-detail/experience-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    CompetencesComponent,
    CompetenceDetailComponent,
    ParcoursComponent,
    ContactComponent,
    RealisationsComponent,
    CompetenceDetailComponent,
    RealisationDetailComponent,
    ExperienceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatDivider,
    MatIcon,
    MatIconButton,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
