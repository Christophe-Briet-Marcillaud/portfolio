import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Experience {
  id: string;
  dateDebut: string;
  dateFin: string;
  titre: string;
  description: string;
  type: 'entreprise' | 'formation';
  imageUrl: string;
  websiteUrl?: string; // NEW: Optional link to a website
  realisationLink?:string
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
      type: 'entreprise',
      imageUrl: 'assets/images/twomoro.jpg',
      websiteUrl: 'https://2moro.fr',
      etablissementPresentation: '2MoRO est une entreprise éditrice de logiciel de maintenance pour l\'Aéronautique et la défense appartenant au Groupe Sopra Steria',
      travailEffectue: 'Lors de mon alternance, j\'ai continué le travail commencé durant mon stage comme la migration d\'hibernate HBM vers JPA en Java et j\'ai travaillé sur de nouveaux sujets comme la refonte du fonctionnement des exports de l\'application avec Spring Batch',
      placeEntreprise: 'Durant l\'alternance, j\'ai continué à travailler dans l\'équipe de la Direction Technique. Suite à une autre réorganisation dans l\'entreprise, j\'ai intégré mon équipe actuelle, Technical Roadmap composée de trois autres personnes'
    },
    {
      id:'stage',
      dateDebut: 'Mars 2023',
      dateFin: 'Août 2023',
      titre: 'Stage en développement informatique',
      description: 'Chez 2MoRO Sopra Steria Group à Bidart',
      type: 'entreprise',
      imageUrl: 'assets/images/twomoro.jpg',
      websiteUrl: 'https://2moro.fr',
      etablissementPresentation: '2MoRO est une entreprise éditrice de logiciel de maintenance pour l\'Aéronautique et la défense appartenant au Groupe Sopra Steria',
      travailEffectue: 'Lors de mon stage, j\'ai travaillé sur différents sujets comme le changement du type de données en base avec Postgresql ou la migration d\'hibernate HBM vers JPA en Java',
      placeEntreprise: 'Durant le stage, j\'ai intégré l\'équipe Backend composé de deux autres personnes puis après une réorganisation, je suis passé dans la direction technique'
    },
    {
      id:'master',
      dateDebut: 'Septembre 2020',
      dateFin: 'Août 2025',
      titre: 'Master en Ingénierie du Logiciel',
      description: 'Dans le Groupe ESIEA sur le campus de Dax',
      type: 'formation',
      imageUrl: 'assets/images/esiea.png',
      websiteUrl: 'https://www.esiea.fr',
      etablissementPresentation: 'L\'ESIEA est une école privée formant des ingénieurs. Elle propose différentes formations dont le cursus Master en Ingénierie du Logiciel que j\'ai intégré ' +
        'mais aussi un cursus de Master en Ingénierie des systèmes d\'information pour les personnes souhaitant travailler dans le domaine du réseau. Les deux dernières années de cette formation sont en alternance.'
    },
    {
      id:'mise_a_niveau',
      dateDebut: 'Septembre 2019',
      dateFin: 'Juillet 2020',
      titre: 'Mise à niveau en hôtellerie-restauration',
      description: 'À l\'École hôtelière de Biarritz',
      type: 'formation',
      imageUrl: 'assets/images/lycee.png',
      websiteUrl: 'https://ecolehotelierebiarritz.fr',
      etablissementPresentation: 'L\'école hôtelière de Biarritz est un lycée publique proposant diverses formations en rapport avec l\'hôtellerie, la restauration, le tourisme et la boulangerie/patisserie. Ces formations vont du bac pro au BTS.\nIl propose également une Mise à niveau en Hôtellerie-Restauration pour les personnes venant de Bac général et souhaitant réaliser un BTS.'
    },
    {
      id:'baccalaureat',
      dateDebut: 'Septembre 2016',
      dateFin: 'Juillet 2019',
      titre: 'Baccalauréat Scientifique',
      description: 'Au Lycée Saint Joseph à Hasparren',
      type: 'formation',
      imageUrl: 'assets/images/lycee_bac.jpg',
      websiteUrl: 'https://st-joseph-hasparren.fr',
      etablissementPresentation: 'Le Lycée Saint Joseph à Hasparren est un lycée privé. Il propose des baccalauréats scientifiques, technologiques et professionnels dans le domaine du numérique ainsi que des BTS. Il propose aussi des formations professionnelles spécifiques pour l\'agriculture.'
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
