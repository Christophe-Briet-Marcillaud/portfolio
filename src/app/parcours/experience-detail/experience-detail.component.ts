import { Component } from '@angular/core';
import {Competence, CompetenceService} from '../../competences/service/competence.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Experience, ExperienceService} from '../service/experience.service';

@Component({
  selector: 'app-experience-detail',
  standalone: false,
  templateUrl: './experience-detail.component.html',
  styleUrl: './experience-detail.component.scss'
})
export class ExperienceDetailComponent {
  experience?: Experience;
  private routeSub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private experienceService: ExperienceService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const id: string = params['id'];
      this.loadCompetence(id);
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  private loadCompetence(id: string): void {
    this.experience = this.experienceService.getExperienceById(id);
    if (!this.experience) {
      console.error(`Compétence avec l'ID ${id} non trouvée`);
    }
  }
}
