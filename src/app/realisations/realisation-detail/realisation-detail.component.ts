import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CompetenceService} from '../../competences/service/competence.service';
import {Realisation, RealisationService} from '../service/realisation.service';
import {Subscription} from 'rxjs';

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
    private competenceService: CompetenceService // Injection du service Competence
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

  private loadRealisation(id: string): void {
    this.realisation = this.realisationService.getRealisationById(id);
    if (!this.realisation) {
      console.error(`Réalisation avec l'ID ${id} non trouvée`);
      // Vous pouvez également rediriger l'utilisateur vers une page d'erreur ici
    }
  }

  replaceLineBreaks(text: string | undefined): string {
    return text ? text.replace(/\n/g, '<br>') : '';
  }

  getCompetenceName(competenceId: string): string {
    const competence = this.competenceService.getCompetenceById(competenceId);
    return competence ? competence.nom : 'Compétence inconnue';
  }
}
