import { Component } from '@angular/core';
import {Competence, CompetenceService} from './service/competence.service';

@Component({
  selector: 'app-competences',
  standalone: false,
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.scss'
})
export class CompetencesComponent {

  competences: Competence[] = [];
  competencesTechniques: Competence[] = [];
  competencesHumaines: Competence[] = [];
  constructor(private competenceService: CompetenceService) {
    this.competences = this.competenceService.getAllCompetences();
    this.competencesTechniques = this.competenceService.getCompetencesByType('technique');
    this.competencesHumaines = this.competenceService.getCompetencesByType('humaine');
  }


}
