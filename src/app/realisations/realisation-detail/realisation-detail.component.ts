import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Competence, CompetenceService} from '../../competences/service/competence.service';
import {Realisation, RealisationService} from '../service/realisation.service';
import {Subscription} from 'rxjs';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {getXHRResponse} from 'rxjs/internal/ajax/getXHRResponse';

@Component({
  selector: 'app-realisation-detail',
  standalone: false,
  templateUrl: './realisation-detail.component.html',
  styleUrls: ['./realisation-detail.component.scss']
})
export class RealisationDetailComponent implements OnInit {
  realisation?: Realisation;
  private routeSub?: Subscription;
  constructor(
    private route: ActivatedRoute,
    private realisationService: RealisationService,
    private competenceService: CompetenceService, // Injection du service Competence
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const id : string = params['id'];
      this.loadRealisation(id);
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
  getRealisationPresentation(realisation: Realisation): SafeHtml {
    return this.getSafeHtml(realisation.presentation);
  }

  getRealisationObjectives(realisation: Realisation): SafeHtml {
    return this.getSafeHtml(realisation.objectifs);
  }

  getRealisationSteps(realisation: Realisation): SafeHtml {
    return this.getSafeHtml(realisation.etapes);
  }

  getRealisationActors(realisation: Realisation): SafeHtml {
    return this.getSafeHtml(realisation.acteurs);
  }

  getRealisationResults(realisation: Realisation): SafeHtml {
    return this.getSafeHtml(realisation.resultats);
  }
  getRealisationTomorrows(realisation: Realisation): SafeHtml {
    return this.getSafeHtml(realisation.lendemains);
  }
  getRealisationCritic(realisation: Realisation): SafeHtml {
    return this.getSafeHtml(realisation.regardCritique);
  }
  private loadRealisation(id: string): void {
    this.realisation = this.realisationService.getRealisationById(id);
    if (!this.realisation) {
      console.error(`Réalisation avec l'ID ${id} non trouvée`);
      // Vous pouvez également rediriger l'utilisateur vers une page d'erreur ici
    }
  }

  getCompetenceName(competenceId: string): string {
    const competence = this.competenceService.getCompetenceById(competenceId);
    return competence ? competence.nom : 'Compétence inconnue';
  }

  protected readonly getXHRResponse = getXHRResponse;
}
