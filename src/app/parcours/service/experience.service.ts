import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Experience {
  id: string;
  dateDebut: string;
  dateFin: string;
  titre: string;
  description: string;
  descriptionDetaillee: string; // NEW: More in-depth description
  type: 'entreprise' | 'formation';
  imageUrl: string;
  websiteUrl?: string; // NEW: Optional link to a website
  etablissementPresentation?: string; // Presentation of the establishment (for formations)
  travailEffectue?: string;         // Work done (for companies)
  placeEntreprise?: string;        // Place in the company (for companies)
  visionPedagogie?: string;         // Vision of the pedagogy (for formations)
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experiences: Experience[] = [
    {
      id:'alternance',
      dateDebut: 'Septembre 2023',
      dateFin: 'Août 2025',
      titre: 'Alternance en développement\ninformatique',
      description: 'Chez 2MoRO Sopra Steria Group à Bidart',
      descriptionDetaillee: '',
      type: 'entreprise',
      imageUrl: 'assets/images/twomoro.jpg',
      websiteUrl: 'https://2moro.fr'
    },
    {
      id:'stage',
      dateDebut: 'Mars 2023',
      dateFin: 'Août 2023',
      titre: 'Stage en développement informatique',
      description: 'Chez 2MoRO Sopra Steria Group à Bidart',
      descriptionDetaillee: '',
      type: 'entreprise',
      imageUrl: 'assets/images/twomoro.jpg',
      websiteUrl: 'https://2moro.fr'
    },
    {
      id:'master',
      dateDebut: 'Septembre 2020',
      dateFin: 'Août 2025',
      titre: 'Master en Ingénierie du Logiciel',
      description: 'Dans le Groupe ESIEA sur le campus de Dax',
      descriptionDetaillee: '',
      type: 'formation',
      imageUrl: 'assets/images/esiea.png',
      websiteUrl: 'https://www.esiea.fr',
      etablissementPresentation: 'L\'ESIEA est une école privée formant des ingénieurs. Elle propose différentes formations dont le cursus Master en Ingénierie du Logiciel que j\'ai intégré ' +
        'mais aussi un cursus de Master en Ingénierie des systèmes d\'information avec les deux dernières années en alternance.'
    },
    {
      id:'mise_a_niveau',
      dateDebut: 'Septembre 2019',
      dateFin: 'Juillet 2020',
      titre: 'Mise à niveau en hôtellerie-restauration',
      description: 'À l\'École hôtelière de Biarritz',
      descriptionDetaillee: '',
      type: 'formation',
      imageUrl: 'assets/images/lycee.png',
      websiteUrl: 'https://ecolehotelierebiarritz.fr'
    },
    {
      id:'baccalaureat',
      dateDebut: 'Septembre 2016',
      dateFin: 'Juillet 2019',
      titre: 'Baccalauréat Scientifique',
      description: 'Au Lycée Saint Joseph à Hasparren',
      descriptionDetaillee: '',
      type: 'formation',
      imageUrl: 'assets/images/lycee_bac.jpg',
      websiteUrl: 'https://st-joseph-hasparren.fr'
    },
  ];

  constructor() { }

  getExperienceById(id: string): Experience | undefined {
    return this.experiences.find(e => e.id === id);
  }

  getAllExperiences(): Experience[] {
    return this.experiences;
  }

}
