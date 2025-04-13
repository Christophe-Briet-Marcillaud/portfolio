import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Competence, CompetenceService } from '../service/competence.service';
import { Subscription } from 'rxjs';
import {RealisationService} from '../../realisations/service/realisation.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-competence-detail',
  standalone: false,
  templateUrl: './competence-detail.component.html',
  styleUrls: ['./competence-detail.component.scss']
})
export class CompetenceDetailComponent implements OnInit, OnDestroy {
  competence?: Competence;
  private routeSub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private competenceService: CompetenceService,
    private realisationService: RealisationService,
    private sanitizer: DomSanitizer
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
  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  getCompetenceDefinition(competence: Competence): SafeHtml {
    return this.getSafeHtml(competence.definition);
  }

  getCompetenceProof(competence: Competence): SafeHtml {
    return this.getSafeHtml(competence.element_preuve);
  }

  getCompetenceAutoCritic(competence: Competence): SafeHtml {
    return this.getSafeHtml(competence.autocritique);
  }

  getCompetenceEvolution(competence: Competence): SafeHtml {
    return this.getSafeHtml(competence.evolution);
  }

  private loadCompetence(id: string): void {
    this.competence = this.competenceService.getCompetenceById(id);
    if (!this.competence) {
      console.error(`Compétence avec l'ID ${id} non trouvée`);
      // Vous pouvez également rediriger l'utilisateur vers une page d'erreur ici
    }
  }

  getRealisationName(realisationId: string): string {
    const realisation = this.realisationService.getRealisationById(realisationId);
    return realisation ? realisation.titre : 'Réalisation inconnue';
  }
}
