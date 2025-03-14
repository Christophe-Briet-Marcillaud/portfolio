import { Component, OnInit } from '@angular/core';
import { Realisation, RealisationService } from './service/realisation.service';

@Component({
  selector: 'app-realisations',
  standalone: false,
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.scss']
})
export class RealisationsComponent implements OnInit {
  realisations: Realisation[] = [];

  constructor(private realisationService: RealisationService) { }

  ngOnInit(): void {
    this.realisations = this.realisationService.getAllRealisations();

  }

  getRealisationImageUrl(realisationId: number): string {
    return `assets/images/realisations/${realisationId}.png`;
  }
}
