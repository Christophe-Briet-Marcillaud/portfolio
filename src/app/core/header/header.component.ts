import { Component } from '@angular/core';
import {Competence, CompetenceService} from '../../competences/service/competence.service';
import {RealisationService} from '../../realisations/service/realisation.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  prenom = 'Christophe';
  nom = 'Briet-Marcillaud';
  photoUrl = 'assets/images/my-photo.jpg';

  competencesTechniques: Competence[] = [];
  competencesHumaines: Competence[] = [];

  showCompetencesSubmenu = false; // Ajout d'un booléen pour afficher/masquer le sous-menu des compétences
  showRealisationsSubmenu = false;

  toggleCompetencesSubmenu() {
    this.showCompetencesSubmenu = !this.showCompetencesSubmenu;
  }

  toggleRealisationsSubmenu() {
    this.showRealisationsSubmenu = !this.showRealisationsSubmenu;
  }
  constructor(public competenceService: CompetenceService, public realisationService : RealisationService) {}

  ngOnInit(): void {
    this.competencesTechniques = this.competenceService.getCompetencesByType('technique');
    this.competencesHumaines = this.competenceService.getCompetencesByType('humaine');
  }

}
