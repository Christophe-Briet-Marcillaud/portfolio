import { Component, OnInit } from '@angular/core';
import {Experience, ExperienceService} from './service/experience.service';




@Component({
  selector: 'app-parcours',
  standalone: false,
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.scss']
})
export class ParcoursComponent {
  experiences: Experience[] = [];
  constructor(private experienceService: ExperienceService) {
    this.experiences = this.experienceService.getAllExperiences();
  }

}
