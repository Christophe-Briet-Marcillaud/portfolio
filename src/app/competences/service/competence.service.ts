import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface Competence {
  id: string;
  nom: string;
  apercu?: string
  type: 'technique' | 'humaine';
  niveau: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  definition: string;
  element_preuve: string;
  autocritique: string;
  evolution: string;
  realisations: string[];
  imageUrl?: string; // Ajout de la propriété imageUrl
}

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  private competences: Competence[] = [
    {
      id: 'spring',
      nom: 'Spring',
      type: 'technique',
      niveau: 'Expert',
      apercu: '',
      definition: 'Spring est un Framework (ensemble de fonctionnalités qui servent à simplifier la construction et définir une architecture de l’application) développé et utilisé avec le langage de programmation Java.\n' +
        'Ce Framework permet de définir et construire l’architecture d’une application Java. \n' +
        'Il facilite grandement le développement de l’application et la réalisation de tests unitaires.\n' +
        'Au sein de Spring, il existe beaucoup de librairies et Framework différents qui ont chacun leur spécificités et leur utilité ce qui rend ce dernier très polyvalent.\n' +
        'Cela fait de Spring le Framework Java le plus populaire dans le monde et celui qui est utilisé dans la majorité des entreprises de développement qui utilise ce langage de programmation.\n',
      element_preuve: 'J’ai débuté mon apprentissage de Spring en cours lors de mon semestre cinq avec le développement d’API mais j’ai pu approfondir mes compétences lors de mon arrivé chez 2MoRO.\n' +
        'J’ai premièrement utilisé Spring lors du développement d’une API pour une application Android lors de mon cinquième semestre. \n' +
        'Le projet de cette application se nomme GeoSavior, elle a pour but de permettre aux personnes rencontrant un animal marin en détresse de contacter les secours adaptés à l’animal en question rapidement et efficacement. \n' +
        'Durant ce projet, j’ai utilisé les annotations de Spring comme « @RestController » qui permet d’appeler la méthode (fonction Java réalisant une action) annotée en renseignant uniquement cette annotation, le chemin et le type de requête (exemple : Post, Get, …).\n' +
        'Cela m’a permis d’acquérir une base de connaissances sur le fonctionnement de Spring et de le mettre en pratique tout au long de ce projet. \n' +
        'Je continue actuellement à utiliser Spring et ses différentes librairies dans le développement du logiciel AeroWebb. \n' +
        'J’ai tout d’abord utilisé Spring Batch qui est une librairie de Spring qui permet de créer des jobs qui sont composés de différentes steps. \n' +
        'Chaque job représente une fonctionnalité voulue et les steps les différentes étapes nécessaire pour cette fonctionnalité. \n' +
        'Dans mon cas, j’ai implémenté un job qui permet d’exporter les données sous forme de fichier xml avec différents steps qui permettent d’appeler les données de manière paginée (un nombre défini de données).\n' +
        'J’ai ensuite utilisé les annotations Spring de profil pour conditionner l’appel de méthodes qui affichent les informations permettant d’analyser le déroulement du code et les chemins d’appel de ces dernières.\n' +
        'Réaliser ces travaux m’a permis de gagner beaucoup d’expériences sur Spring, de me rendre compte de sa polyvalence et du gain de temps qu’il apporte.\n' +
        'J’ai également réalisé des documentations internes à l’entreprise sur l’utilisation de Spring Batch et sur la manière d’utiliser les différents profils avec Spring pour aider mes collègues à réaliser des développements avec ces Framework.\n',
      autocritique: 'En tant que membre de l’équipe architecture, connaître l’utilisation du Framework qui définit la base de l’architecture de l’application est un point très important. \n' +
        'J’ai acquis une bonne maîtrise dans l’utilisation et la configuration de Spring principalement grâce aux travaux réalisés sur Aero-Webb qui m’ont permis de découvrir de nouvelles librairies en les implémentant mais également approfondir les parties que j’avais déjà apprises pendant les cours.\n' +
        'J’ai pu utiliser Spring dans des contextes simples comme la création de profil ou l’utilisation d’annotation permettant l’appel de méthodes. \n' +
        'J’ai également travaillé sur Spring dans des contextes plus compliqués comme la configuration de nouveaux modules d’un projet ou l’implémentation de job avec Spring batch qui m’ont apportés une polyvalence au niveau de son utilisation.\n' +
        'Ma première recommandation est de bien comprendre la structure d’une application Java et le fonctionnement de ce langage.\n' +
        'Ma deuxième recommandation aux personnes souhaitant apprendre à utiliser Spring est d’abord de lire la documentation présente sur le site officiel qui est très bien construite et complète. \n' +
        'Spring a une grande communauté ce qui permet de trouver des informations supplémentaires facilement.\n' +
        'Je préconiserai ensuite de se renseigner sur Spring Boot qui pourrait être plus simple à mettre en place que Spring et ainsi gagner du temps. \n' +
        'Mon dernier conseil est de bien réfléchir à la structure de l’application comme une application monolithe ou modulaire. \n',
      evolution: 'La prochaine étape dans mon utilisation de Spring est de passer à la version six qui est la version majeure la plus récente lors de la rédaction de ces lignes.\n' +
        'Le passage à cette version supérieure de Spring me permettra d’apprendre les nouveautés présentes dans cette dernière, d’acquérir davantage de connaissances dans cette technologie et ainsi continuer d’améliorer mon niveau et ma maîtrise de Spring.\n' +
        'Je souhaiterai également apprendre à utiliser Spring Boot qui est une version plus condensée avec des fonctionnalités supplémentaires de Spring. \n' +
        'Afin d’approfondir mes compétences en Spring et remplir mon objectif d’apprendre Spring Boot, j’aimerai suivre cette formation en ligne : https://openclassrooms.com/fr/courses/6900101-creez-une-application-java-avec-spring-boot\n',
      imageUrl: 'assets/images/spring.png',
      realisations: ['geosavior', 'aerowebb']
    },
    {
      id: 'hibernate',
      nom: 'Hibernate',
      type: 'technique',
      niveau: 'Expert',
      definition: 'Hibernate est un Framework (ensemble de fonctionnalités qui servent à simplifier la construction et définir une architecture de l’application) développé et utilisé avec le langage de programmation Java.\n' +
        'Ce Framework permet de simplifier la liaison entre l’applicatif en Java et la base de données en n’importe quel langage. \n' +
        'Il existe plusieurs façons de gérer l’accès à la base de données à travers le code comme l’utilisation de fichiers xml.\n' +
        'La plus populaire est l’utilisation des annotations JPA qui permet de définir les noms de nos colonnes en base et les différentes relations entre les entités.\n' +
        'Il est utilisé sur une multitude de projets incluant également le logiciel AeroWebb sur lequel j’ai travaillé durant mon stage et mon alternance.\n',
      element_preuve: 'Mon apprentissage d’Hibernate a débuté à l’école lors du semestre quatre avec l’apprentissage de Java mais j’ai pu approfondir mes compétences lors de mon arrivé chez 2MoRO.\n' +
        'J’ai premièrement utilisé Hibernate lors du développement d’une application de type Vinted lors de mon semestre quatre. \n' +
        'Ce projet se nomme Link & Trade et avait pour but d’appuyer le projet de lycéens du Lycée de Borda situé à Saint Paul les Dax . \n' +
        'Cela m’a permis d’acquérir une base de connaissances sur son fonctionnement et de la mettre en pratique tout au long de ce projet. \n' +
        'Par la suite, j’ai travaillé avec Hibernate dans le cadre de la réalisation d’une API pour l’application Android GeoSavior que j’ai réalisé lors de mon cinquième semestre. \n' +
        'Durant ce semestre, j’ai utilisé Hibernate avec l’aide de Spring ce qui m’a permis de le découvrir d’une manière différente et plus simplifiée. \n' +
        'Les requêtes de base de création, mise à jour et suppression, étaient utilisables directement en important une fonctionnalité. \n' +
        'Finalement, je continue actuellement à utiliser Hibernate dans AeroWebb. \n' +
        'Tout d’abord, je me suis occupé de la migration du fonctionnement d’Hibernate. \n' +
        'La méthode utilisée était celle des fichiers xml que j’ai remplacé par l’utilisation des annotations JPA en reproduisant la structure du contenu Hibernate de ces premiers dans les classes des entités de base de données de l’application. \n' +
        'Cela m’a amené à continuer sur la migration de fonctionnalités permettant de gérer les appels à la base de données nommé les Criteria Hibernate vers les Criteria JPA qui sont utilisés en tandem avec les annotations citées plus tôt. \n' +
        'Cette migration va permettre de passer à une version supérieur d’Hibernate et de résoudre plusieurs problèmes d’obsolescence. \n' +
        'Réaliser ces travaux m’a permis de gagner beaucoup d’expériences avec Hibernate. \n' +
        'J’ai également réalisé des documentations internes à l’entreprise sur l’utilisation des annotations et des Criteria JPA pour aider mes collègues à réaliser des développements avec ce Framework.\n',
      autocritique: 'En tant que membre de l’équipe architecture, connaître l’utilisation des bases de l’architecture de l’application est important. \n' +
        'Mes compétences en Hibernate le sont également dans ma situation actuelle. \n' +
        'J’ai acquis une bonne maîtrise dans l’utilisation et la configuration d’Hibernate principalement grâce aux travaux réalisés sur AeroWebb qui m’ont permis d’aller en profondeur dans son utilisation et sa configuration. \n' +
        'J’ai pu utiliser Hibernate dans différents contextes comme la création d’entité grâce aux codes Java, la création de requête à travers les Criteria et la création de requêtes native SQL qui m’ont apportées une polyvalence au niveau de son utilisation.\n' +
        'Ma première recommandation aux personnes souhaitant apprendre à utiliser Hibernate est d’abord de lire la documentation présente sur le site officiel qui est très bien construite et complète. \n' +
        'Je préconiserai ensuite de partir sur la solution utilisant les annotations JPA qui sont plus répandues. C’est la seule méthode supportée car Hibernate 6 a supprimé l’utilisation des fichiers XML. \n' +
        'Un troisième conseil est de bien construire sa structure de base de données et de bien la comprendre avant de commencer à implémenter Hibernate. \n' +
        'Finalement, je conseille de connaître et de savoir utiliser SQL dans son ensemble pour bien comprendre le fonctionnement derrière Hibernate.\n',
      evolution: 'La prochaine étape dans mon utilisation d’Hibernate est de passer à la version 6 qui est la version majeure la plus récente lors de la rédaction de ces lignes.\n' +
        'Le passage à cette version supérieure d’Hibernate me permettra d’apprendre les nouveautés présentes dans cette dernière, d’acquérir davantage de connaissances dans cette technologie et ainsi continuer d’améliorer mon niveau et ma maîtrise d’Hibernate.\n' +
        'Afin de pouvoir approfondir davantage mes compétences en Hibernate, j’aimerai suivre cette formation en ligne : https://www.orsys.fr/formation-hibernate-mise-en-oeuvre-avancee.html afin de bien assimiler les concepts les plus avancés de ce Framework.\n',
      imageUrl: 'assets/images/hibernate.png',
      realisations: ['link_n_trade','geosavior', 'aerowebb']
    },
    {
      id: 'angular',
      nom: 'Angular',
      type: 'technique',
      niveau: 'Intermédiaire',
      definition: 'Angular est un Framework (ensemble de fonctionnalités qui servent à simplifier la construction et définir une architecture de l’application) basé sur le langage TypeScript et utilisé pour la partie frontend d’une application.\n' +
        'Ce Framework permet de faciliter la création d’applications Web. Il offre une structure défini, une gestion des données et une navigation dans l’application. Il offre une solution rapide et solide à mettre en place.\n' +
        'Angular est un Framework très populaire dans le développement web cependant il nécessite un minimum d’apprentissage et des connaissances de base en HTML,  CSS et Javascript pour l’utiliser.\n',
      element_preuve: 'J’ai commencé mon apprentissage d’Angular lors de mon quatrième semestre. \n' +
        'Etant un Framework utilisé pour le Frontend, je l’ai utilisé en parallèle de Java qui s’occupait de récupérer les données côté serveur.\n' +
        'J’ai mis en pratique Angular pour la première fois lors du développement du projet Link & Trade durant mon quatrième semestre. \n' +
        'Le but était de reproduire un site de vente type Vinted réservé à des lycéens. \n' +
        'Durant ce projet, je me suis occupé de la partie affichage globale des annonces et le tri de ces dernières par catégorie (exemple : vêtements, livres, …). \n' +
        'Afin de mettre l’affichage global, j’ai utilisé une boucle spécifique à Angular nommé « *ngFor ». Concernant le tri, je l’ai mis en place dans la partie affichage une condition prenant en paramètre le type de la catégorie lors du choix de l’utilisateur à l’aide d’une balise unique à Angular « *ngIf ». Ces deux balises permettent de lier du code html gérant uniquement l’affichage et d’y ajouter une logique avec TypeScript. \n' +
        'J’ai également travaillé sur la page d’administration des annonces qui comportait différents onglets comme la validation des annonces, les annonces validées et les annonces refusées sur lesquels j’ai géré l’affichage de la même manière que cité au-dessus.\n' +
        'Ensuite, lors de mon cinquième semestre, j’ai continué à travailler avec Angular sur le projet GeoSavior. Il avait pour but de réaliser une application mobile de sauvetage d’animaux marins. \n' +
        'Cette application nécessitait un panel d’administration accessible sur le web par notre commanditaire. \n' +
        'Mes camarades et moi avons décidé de réaliser ce panel administrateur avec Angular. \n' +
        'M’étant occupé de la partie concernant les centres médicaux spécialisés dans les animaux marins, j’ai réalisé la page d’ajouts, suppression et mise à jour des informations de ces derniers. \n' +
        'Dans la page d’ajouts et de mise à jour, j’ai réalisé un fichier service qui permettait de réaliser des appels aux différentes API que j’avais développé en Java pour permettre d’envoyer les données du formulaires au serveur. Ces formulaires contenaient une validation vérifiant la non-nullité des champs obligatoires et affichait une notification confirmant l’ajout ou la mise à jour. En ce qui concerne la suppression, j’ai ajouté une pop-up de confirmation qui demande si l’administrateur veut réellement supprimer ce centre médical. \n' +
        'Pour réaliser cette pop-up et cette notification, j’ai crée un fichier Angular implémentant une librairie externe qui permettait de simplifier la création de ces dernières pour en faire un modèle que j’ai ensuite personnalisé dans chacun des cas dont j’ai parlé.\n' +
        'Lors de mon stage et mon alternance chez 2MoRO, j’ai travaillé sur le logiciel Aero-Webb. \n' +
        'J’ai développé un écran intermédiaire servant d’onglet à d’autres parties de la page qui permet de lancer un test de qualité de données. Lors de l’appui sur le bouton, un appel est lancé vers le serveur qui va lancer l’analyse de la base et renvoyer des informations ainsi qu’un PDF que j’ai rendu téléchargeable grâce à l’implémentation d’un attribut en Angular nommé « download ». \n' +
        'J’ai ajouté plusieurs éléments améliorant l’ergonomie de la page comme un affichage de couleurs différentes selon le résultat du test, la désactivation des boutons lors du lancement du test et une icône indiquant le chargement pour que l’utilisateur ait une indication visuelle de l’action qu’il vient de lancer.\n' +
        'Réaliser ces différents travaux m’a permis de gagner de l’expérience sur l’utilisation et la mise en place d’Angular et de me rendre compte qu’une fois que l’on sait l’utiliser c’est un Framework très puissant.\n',
      autocritique: 'En tant que membre de l’équipe architecture, connaître le fonctionnement du Framework utilisé pour le Frontend de l’application est nécessaire à la compréhension des différentes missions que je peux être amené à réaliser. \n' +
        'J’ai acquis une bonne maîtrise dans l’utilisation et la mise en place d’Angular grâce aux travaux variés que j’ai réalisé sur les différents projets. \n' +
        'Link & Trade ainsi que GeoSavior m’ont permis de voir comment développer une application en partant de zéro et Aero-Webb m’a permis de découvrir de nouveaux composants en les implémentant et approfondir les parties que j’avais déjà apprises.\n' +
        'J’ai pu utiliser Angular dans des projets de petite ou moyenne taille réalisés à l’école et sur une application plus complexe comme Aero-Webb. \n' +
        'Cela m’a permis de voir qu’Angular étant du Frontend, il faut maîtriser le sens du design et comprendre comment rendre un site ergonomique. \n' +
        'Etant plus habitué à travailler sur du Backend, Angular est une technologie que je maîtrise moins par rapport à d’autres comme Hibernate ou Spring. \n' +
        'Cependant je suis capable de réaliser des applications de taille moyenne en autonomie. \n' +
        'Ma première recommandation aux personnes souhaitant apprendre à utiliser Angular est d’abord de bien maîtriser les bases du javascript pour bien comprendre l’utilisation du TypeScript. \n' +
        'Ensuite je conseille de lire la documentation présente sur le site officiel qui est complète et permet de mettre en place facilement l’environnement et de réaliser des tests avec des mini applications déjà prêtes. \n' +
        'Mon dernier conseil est de bien réfléchir à la structure de l’application, des différentes pages composant le site web et de trouver les composants internes à Angular qui peuvent être implémentés pour faciliter le développement. \n',
      evolution: 'La prochaine étape dans mon utilisation d’Angular sera de réaliser l’extension d’une page ou d’ajouter des fonctionnalités dans des parties déjà existantes. \n' +
        'Etant développeur côté Backend, je n’ai aucune mission précise et régulière sur Angular dans mon travail. \n' +
        'Il est prévu qu’Aero-Webb passe sous Angular 17 ce qui me permettra de découvrir de nouvelles fonctionnalités et de gérer le code différemment de celui que j’ai appris à l’école et également lors de mon arrivée chez 2MoRO.\n' +
        'Afin d’approfondir mes compétences en Angular, je souhaiterai suivre cette formation en ligne : https://www.orsys.fr/formation-angular-developpement-avance.html\n',
      imageUrl: 'assets/images/angular.png',
      realisations: ['link_n_trade', 'geoSavior', 'aeroWebb']
    },
    {
      id: 'sql',
      nom: 'SQL',
      type: 'technique',
      niveau: 'Avancé',
      definition: 'SQL (Structured Query Language) est un langage utilisé dans l’informatique pour réaliser des requêtes en base de données afin de récupérer des informations de cette dernière et les faire parvenir à notre application par le biais d’autres langages tels que Java ou C#.\n' +
        'Des technologies comme PostgreSQL existent également, cette dernière ajoute de nouvelles possibilités à SQL comme des mises à jour automatique de certaines parties de la base de données et des transactions plus rapides et durables.\n' +
        'SQL est un des langages le plus populaire pour gérer les bases de données en entreprise et le plus reconnu par les systèmes de gestion de bases de données qui peuvent également varier selon les entreprises.\n',
      element_preuve: 'Mon apprentissage de SQL a débuté lors de mon deuxième semestre à l’école avec le développement d’un site web dynamique en PHP que j’ai pu approfondir lors de tous les semestres suivants ainsi qu’en entreprise lors de mon arrivé chez 2MoRO.\n' +
        'J’ai premièrement utilisé le langage SQL pour stocker des formulaires d’audit d’entreprises selon deux types différents : les ressources humaines et la sécurité. Je l’ai aussi utilisé pour récupérer, mettre à jour et supprimer ces derniers selon leur catégorie. \n' +
        'Lors du quatrième semestre, j’ai travaillé sur l’application web Link & Trade qui permettait de réaliser des ventes du style Vinted au sein d’un lycée. \n' +
        'Durant ce semestre, j’ai approfondi mes compétences en SQL en réalisant des requêtes plus poussées dû à la complexité de la structure de notre base contenant des sous-catégories comme Pull ou T-shirt pour la catégorie principale « Vêtements ».\n' +
        'Lors du cinquième semestre, j’ai continué à utiliser le langage SQL. \n' +
        'Je me suis occupé de la partie concernant la gestion des centres médicaux animaliers en classant ces derniers par les animaux marins qu’ils prennent en charge.\n' +
        'J’ai réalisé des connexions entre plusieurs parties de la base de données en utilisant la fonction « JOIN » afin de récupérer uniquement les informations nécessaires. \n' +
        'Cette récupération triée va permettre d’améliorer l’efficacité et la pertinence de l’appel des utilisateurs rencontrant un animal marin en difficulté sur la plage et de pouvoir le secourir efficacement.\n' +
        'En arrivant chez 2MoRO ma première mission fut de modifier les types des identifiants de la base de données, qui était une tâche démarrée par un de mes collègues. \n' +
        'J’ai optimisé sa manière de faire qui consistait à supprimer les liaisons, changer le type des données puis récréer cette dernière. \n' +
        'J’ai remplacé cette méthode en gérant les liaisons bloquantes par ordre de dépendances ce qui a simplifié la requête. \n' +
        'J’ai ensuite découvert l’utilisation des triggers qui sont des fonctions se déclenchant sous certaines conditions et qui vont exécuter une requête défini. \n' +
        'J’ai appris à utiliser les index qui permettent de réduire le temps de recherche d’une donnée lors d’une requête en sélectionnant les champs dans le bon ordre. \n' +
        'Je m’occupe également de mettre à jour les scripts de création de base de données et de mises à jour ainsi que la création de colonnes de base de données créées avec des valeurs générées directement par la requête.\n',
      autocritique: 'En tant que membre de l’équipe architecture et développeur, connaître l’utilisation du langage SQL est un impératif car il fait partie de la base du développement. \n' +
        'Il définit aussi la base de l’architecture de l’application qui est un point très important.\n' +
        'J’ai acquis une bonne maîtrise dans l’utilisation et la compréhension du SQL grâce aux nombres et la variété des travaux réalisés tout au long de mon parcours scolaire qui m’ont permis de découvrir les différentes possibilités de ce langage. \n' +
        'J’ai pu approfondir davantage mes compétences en SQL grâce à mon travail en entreprise.\n' +
        'J’ai pu utiliser SQL dans des contextes simples comme la récupération de données ou dans des contextes plus compliqués comme l’historisation de données à l’aide de trigger.\n' +
        'Ma première recommandation aux personnes souhaitant apprendre à utiliser SQL est d’abord de comprendre le fonctionnement d’une base de données \n' +
        'Je préconiserai ensuite de lire la documentation qui présente les différents types de requêtes possibles comme « ADD » pour l’ajout de données ou bien « SELECT » pour la sélection afin de connaître les options proposées par ce langage. \n' +
        'Ensuite je conseillerai d’apprendre des langages qui étendent les possibilités offertes par SQL comme PostgreSQL ou PL-SQL afin d’avoir plus de solutions disponibles.\n' +
        'Mon dernier conseil est de bien réfléchir à la structure de la base de données afin de ne pas devoir utiliser des requêtes complexes inutilement. \n',
      evolution: 'La prochaine étape dans mon utilisation de SQL est de continuer à travailler sur les différentes mises à jour de la base de données d’Aero-Webb en PostgreSQL. \n' +
        'Je souhaiterai apprendre à gérer les triggers et les index plus efficacement et apprendre à faire des requêtes plus complexes que celle dont je suis capable actuellement afin de maîtriser encore davantage SQL. \n' +
        'Je voudrais également approfondir mes connaissances dans cette compétence pour être administrateur de base de données. \n' +
        'Afin d’approfondir mes compétences en SQL et remplir mon objectif, j’aimerai suivre cette formation en ligne : https://grafikart.fr/formations/apprendre-sql\n',
      imageUrl: 'assets/images/sql.png',
      realisations: ['link_n_trade', 'geosavior', 'aerowebb']
    },
    {
      id: 'git',
      nom: 'Git',
      type: 'technique',
      niveau: 'Avancé',
      definition: 'GIT est un logiciel de gestion de versions principalement utilisé dans le monde du développement.\n' +
        'Il permet de stocker des fichiers sur un dépôt en ligne lié à un compte utilisateur. Sur ce dépôt, il existe un système de « branche » qui permettent de travailler à plusieurs sur un même projet en évitant les conflits de modification. \n' +
        'Lors de la création d’un projet sur GIT, une branche principale souvent nommée « main » ou « master » va être créée automatiquement. \n' +
        'Il est possible de créer des branches intermédiaires qui serviront aux personnes travaillant sur le projet afin d’ajouter des changements qui rejoindront la branche principale suite à une validation d’une personne propriétaire du dépôt. \n' +
        'L’avantage de GIT est de pouvoir garder un historique des changements effectués et d’y revenir si besoin.\n' +
        'GIT fonctionne principalement à l’aide de lignes de commandes même si des interfaces utilisateurs existent aussi comme GitHub Desktop et GitLab.\n' +
        'Les deux principales plateformes utilisées par les développeurs sont GitLab et GitHub.\n' +
        'Si un projet est public, il est possible pour tout le monde de le récupérer et de participer à son développement si la personne propriétaire l’autorise.\n' +
        'La possibilité de versionner une application et les branches qui permettent de travailler à plusieurs sur un même projet et de sécuriser celui-ci font de GIT le logiciel de version le plus populaire dans le monde.\n',
      element_preuve: 'J’ai débuté mon apprentissage de GIT lors de mon premier semestre en cours puis j’ai travaillé avec cette technologie durant tous les semestres suivants et également maintenant lors de mon travail chez 2MoRO.\n' +
        'J’ai premièrement utilisé GIT lors du développement d’une application web statique en HTML, CSS et Javascript. \n' +
        'L’école a créé un dépôt pour que mes camarades et moi puissions déposer nos différents fichiers de développement de l’application. \n' +
        'J’ai appris à utiliser les commandes de base comme git commit -m pour ajouter mes changements et par la même occasion ajouter un message décrivant ces derniers puis git push qui permet d’envoyer en ligne les changements effectués sur le ou les fichiers.\n' +
        'Lors de mon deuxième semestre, j’ai approfondi mes compétences en créant de nouvelles branches de développement pour permettre de mieux découper les développements des différentes fonctionnalités.\n' +
        'Au troisième semestre, lors de la livraison de l’application j’ai créé avec mes camarades et le commanditaire un dépôt GIT ouvert à tous pour permettre de continuer à travailler et améliorer le projet que nous avions réalisé.\n' +
        'Lors du quatrième et cinquième semestre, j’ai continué mon utilisation de GIT en utilisant la plateforme GitLab pour gérer plus simplement mes branches et le versioning. \n' +
        'A mon arrivée chez 2MoRO, j’ai découvert une partie du métier de DevOps qui consiste à créer des « pipelines » permettant de vérifier la compilation de l’application, la validité des tests unitaires développés et à déployer l’application à travers GIT. \n' +
        'Grâce à cette découverte et à la mise à l’épreuve de la création d’un environnement de développement à l’aide de GIT, j’ai pu gagner de l’expérience supplémentaire sur l’utilisation de GIT et sur les possibilités qu’il offre.\n',
      autocritique: 'En tant que membre de l’équipe architecture et tout simplement en tant que développeur, savoir utiliser GIT est essentiel. GIT est l’outil utilisé par l’ensemble du monde du développement et donc une compétence indispensable.\n' +
        'J’ai acquis une bonne maîtrise dans l’utilisation de GIT lors des différents projets sur lesquels j’ai travaillé durant les cours cependant j’ai appris à l’utiliser de manière plus poussée et régulière depuis mon arrivée chez 2MoRO ce qui m’a permis de m’améliorer davantage.\n' +
        'J’ai pu utiliser GIT dans des contextes simples comme la création de branche ou la fusion entre la branche principale et une branche intermédiaire pour rapatrier les changements. \n' +
        'J’ai également travaillé avec GIT dans des contextes plus compliqués comme la gestion de conflits entre plusieurs branches ou la migration de tout un projet depuis SVN (ancêtre de GIT) vers GIT tout en gardant l’historique des modifications.\n' +
        'Ma première recommandation pour apprendre à utiliser GIT est de trouver la documentation en ligne et de lire les différentes parties expliquant le principe et son utilisation.\n' +
        'Ma deuxième recommandation est de créer un dépôt à vide servant de modèle pour s’entraîner aux différentes commandes et à la gestion des branches.\n' +
        'Mon dernier conseil est de se renseigner sur le fonctionnement de la partie DevOps comme la gestion des pipelines, le déploiement automatique et tout ce qui concerne l’automatisation car c’est un gain de temps non négligeable offert par GIT.\n',
      evolution: 'La prochaine étape dans mon utilisation de GIT est de l’utiliser quotidiennement lors de mon travail chez 2MoRO.\n' +
        'Je souhaiterai approfondir mes connaissances sur la partie DevOps de GIT afin d’apprendre à automatiser davantage de développement et être plus polyvalent dans mon domaine. \n' +
        'Afin d’approfondir mes compétences en GIT et remplir mon objectif, j’aimerai suivre cette formation en ligne : https://www.learnthings.fr/meilleures-formations-sur-git/\n',
      imageUrl: 'assets/images/git.png',
      realisations: ['link_n_trade', 'geosavior', 'aerowebb']
    },
    {
      id: 'marketing',
      nom: 'Marketing',
      type: 'humaine',
      niveau: 'Intermédiaire',
      definition: 'Le marketing est un concept commercial qui a pour but d’améliorer la vision de son entreprise ou commerce et d’attirer de nouveaux clients potentiels.\n' +
        'Le marketing existe sous de multiples formes comme la communication sur Internet à travers les réseaux sociaux, le sponsoring à l’aide de dossiers de sponsoring, le démarchage téléphonique et les publicités qu’elle soit en ligne ou à la télévision.\n' +
        'Il est utilisé dans tout type d’entreprise car il est nécessaire à leur développement afin d’avoir de nouveaux clients.\n',
      element_preuve: 'Mon apprentissage du marketing professionnel a débuté à l’école lors du semestre deux avec l’aide apporté à une vendeuse par correspondance de l’entreprise « Secrets de Miel » pour sa communication sur les réseaux sociaux.\n' +
        'J’ai réalisé des visuels reprenant la charte graphique de l’entreprise que notre commanditaire a publié de manière régulière avec pour but de promouvoir un week-end porte ouverte durant laquelle des tests de produits et une vente étaient proposés.\n' +
        'Cela m’a permis de découvrir les bases du marketing professionnel et prendre conscience de l’impact qu’il permet d’avoir sur le succès d’une entreprise. \n' +
        'Par la suite, j’ai travaillé sur le projet SpeedClean dont le but était de réaliser un aller-retour de soixante kilomètres en vélo afin de nettoyer une plage. \n' +
        'Pour mener à bien ce projet j’ai rédigé plusieurs dossiers de sponsoring pour que notre groupe soit aider et disposer d’avantages comme des réductions de prix sur les vélos ou sur la nuitée au camping dans lequel nous allions séjourner. \n' +
        'Grâce à ces dossiers de sponsoring, mon groupe et moi avons eu la location des vélos gratuite auprès de « Giant Dax » et la nuitée au Camping de Vielles-Saint-Girons gratuite également. \n' +
        'Lors de ce semestre, j’ai de nouveau réalisé des communications sur les réseaux sociaux afin de promouvoir mon projet. \n' +
        'En échange de leur sponsoring, j’ai ajouté dans le visuel et le texte de mes communications leur logo et leur nom afin de leur ramener une potentielle clientèle. \n' +
        'Pour financer le reste du projet, j’ai réalisé une vente de gâteaux à des particuliers. \n' +
        'Pour cela j’ai démarché des personnes dans l’école, dans mon voisinage et dans mes connaissances afin de leur présenter l’intérêt de notre projet. \n' +
        'Vendre mes gâteaux et promouvoir les publications que j’ai réalisé sur les réseaux sociaux m’a permis d’améliorer l’engouement autour du projet et de le mener à bien.\n' +
        'J’ai réalisé des dossiers de sponsoring pour le compte du bureau des étudiants pour obtenir des promotions lors de soirées ou lors d’achats en masse pour réapprovisionner l’épicerie du BDE. \n' +
        'Pour finir, j’ai dessiné plusieurs logos qui ont servi durant les premiers temps à l’identité visuelle du BDE auprès de l’extérieur de l’école.\n',
      autocritique: 'En tant que développeur, le marketing n’est pas le domaine premier dans lequel je vais travailler. \n' +
        'Cependant, lors d’un entretien connaitre les bases du marketing apporte un certain avantage. \n' +
        'Il est également utile de savoir promouvoir son entreprise pour pouvoir amener de nouvelles personnes à la rejoindre ou amener de nouveaux clients ce qui permet un plus gros chiffre d’affaires. Il est également utile de connaître le marketing si on souhaite se lancer dans l’auto-entreprenariat car il faut savoir montrer ses compétences afin de trouver des clients.\n' +
        'En ce qui concerne ma maîtrise du marketing, mes différentes expériences m’ont permis d’effectuer la promotion d’une grande diversité de sujet, savoir gérer différents publiques et répondre à différents besoins. \n' +
        'J’ai donc une bonne maîtrise du marketing.\n' +
        'Ma première recommandation aux personnes souhaitant faire du marketing est d’abord de définir l’objectif qu’il souhaite atteindre et ses besoins pour choisir le bon support. \n' +
        'Je préconiserai ensuite de définir une identité graphique et commerciale claire et identifiable afin de se démarquer et être visible facilement dans le monde de l’entreprenariat. \n' +
        'Finalement, si l’entreprise a une personne en charge du marketing, il peut être bon de lui demander des conseils et des retours sur son expérience pour approfondir ses connaissances.\n',
      evolution: 'La prochaine étape dans mon utilisation du marketing est de promouvoir l’entreprise dans laquelle je travaille. Je serai amené à discuter de l’entreprise avec d’autres personnes.\n' +
        'Afin de pouvoir approfondir mes connaissances en marketing, j’observe les différentes publications sur LinkedIn réalisées par la chargée de communication de mon entreprise, pour trouver le type le plus populaire.\n' +
        'Je n’ai pas de formation particulière pour approfondir mes compétences en marketing hormis suivre les tendances de communications des entreprises sur les réseaux sociaux professionnels ou la communication avec les clients.\n',
      imageUrl: 'assets/images/marketing.png',
      realisations: ['speedclean', 'gestion_presidence_bde']
    },
    {
      id: 'redaction_documentation',
      nom: 'Rédaction de documentation',
      type: 'technique',
      niveau: 'Avancé',
      definition: 'La rédaction de documentation technique représente l’écriture d’un fichier où va être décrit une fonctionnalité de l’application ou l’utilisation d’une librairie.\n' +
        'C’est une pratique nécessaire au bon fonctionnement d’une entreprise. \n' +
        'La documentation sert aux personnes déjà présentes dans l’entreprise, à la formation et à l’intégration plus rapide de nouveaux arrivants.\n',
      element_preuve:'Pendant mon deuxième semestre, j’ai fait l’expérience de la rédaction de documentation. J’ai pu rédiger une documentation technique pour documenter le code PHP de l’application sur laquelle j’ai travaillé durant ce semestre. Cela a permis aux personnes qui reprennent le projet d’avoir une base et une explication de ce qui a été fait. \n' +
        'J’ai ensuite fourni cette documentation à notre commanditaire.\n' +
        'Lors de mes troisième, quatrième et cinquième semestres, j’ai également rédigé des documentations techniques que j’ai fourni aux commanditaires. \n' +
        'Cependant, lors de ces deux derniers semestres, j’ai rédigé une documentation supplémentaire spécifique aux API contenant leur fonction principale et leur chemin d’appel.\n' +
        'Ces quatre semestres durant lesquels j’ai rédigé des documentations m’ont permis de comprendre la structure que doit avoir une documentation technique et l’importance de sa clarté.\n' +
        'Une fois arrivé en stage, j’ai aidé à compléter la documentation de mise en place d’un environnement de travail sous WSL (Windows Subsystem for Linux) qui était en cours de réécriture. \n' +
        'Cela m’a permis de prendre conscience de l’importance d’une documentation technique complète car une fois terminée, cette même documentation a permis à d’autres personnes de mettre en place WSL beaucoup plus rapidement.\n' +
        'J’ai ensuite réalisé de nombreuses documentations sur les différents sujets. \n' +
        'J’ai travaillé sur l’utilisation des annotations et Criteria JPA, l’utilisation de la librairie Spring Batch et des profils Spring permettant d’améliorer les performances de l’application Aero-Webb. \n' +
        'Ensuite j’ai documenté mes travaux sur la configuration et l’utilisation de JMeter avec Apache2 pour permettre l’analyse de performances d’une application en Java, la mise en place de l’outil de monitoring Grafana, du monitoring d’un serveur Tomcat et d’une base de données.\n' +
        'La rédaction de toutes ces documentations m’a permis d’acquérir beaucoup d’expériences en rédaction de documentation et de renforcer ma conviction de l’importance de cette dernière dans une entreprise travaillant dans l’informatique.\n',
      autocritique: 'En tant que membre de l’équipe architecture dans mon cas ou même en tant que développeur, rédiger une documentation sur le développement effectué ou les technologies utilisées est indispensable pour le bon fonctionnement de l’application et de l’entreprise. \n' +
        'J’ai acquis une bonne maîtrise dans la rédaction de documentations grâce aux nombres que j’ai écrite durant mon parcours scolaire et mon travail en entreprise mais également grâce à la diversité des sujets sur lesquels je les ai rédigés et aux différentes formes que j’ai dû leur donné.\n' +
        'Ma première recommandation aux personnes souhaitant rédiger des documentations est de bien comprendre le sujet sur lequel il travaille. Effectivement, il est plus difficile de documenter un travail que l’on ne maîtrise pas complétement. \n' +
        'Mon deuxième conseil est de se baser sur la documentation déjà existante dans l’entreprise. Si aucune documentation n’est présente, prendre des exemples en ligne pour acquérir des idées.\n' +
        'Finalement, je conseille d’utiliser le langage Markdown pour écrire la documentation et de mettre en place l’outil mkdocs dans l’entreprise car ces deux outils permettent d’avoir une documentation bien mise en forme, accessible et navigable facilement par tout le monde.\n',
      evolution: 'La prochaine étape dans ma rédaction de documentation sera d’apprendre à mettre en place un environnement « Mkdocs » moi-même puis de continuer à rédiger de nouvelles documentations afin d’approfondir mes compétences en rédaction.\n' +
        'Afin d’apprendre à mettre en place Mkdocs, j’aimerai suivre cette formation en ligne : https://blog.stephane-robert.info/docs/documenter/mkdocs/\n',
      imageUrl: 'assets/images/documentation.png',
      realisations: ['link_n_trade', 'geosavior', 'aerowebb']
    },
    {
      id: 'vulgarisation',
      nom: 'Vulgarisation',
      type: 'humaine',
      niveau: 'Avancé',
      definition: 'La vulgarisation est le fait de simplifier un terme, un concept, une idée ou dans mon cas une technologie pour que tout le monde y compris des personnes totalement novices comprennent l’explication qui leur est présentée.\n' +
        'C’est un concept important dans le domaine de l’informatique car beaucoup de termes sont techniques et peuvent être complexes à comprendre pour des personnes non-initiées. \n' +
        'De plus, en tant que développeur, nous sommes souvent amenés à travailler avec des profils moins voire non technique tel que les chefs de projet, managers ou commerciaux. \n' +
        'Il est donc important de savoir expliquer les termes techniques et les rendre compréhensible pour tout le monde.\n',
      element_preuve:'J’ai commencé à utiliser la vulgarisation lors de mon premier semestre à l’ESIEA. \n' +
        'En effet dès mon arrivée, j’ai commencé à apprendre la base de la programmation avec HTML, CSS et Javascript pour réaliser un projet informatique pour un auteur nommé Raphaël Paquereau.\n' +
        'J’ai dû avec mes camarades lui expliquer les différents points que nous allions développer afin qu’il comprenne ce qui est possible et ce qui ne l’est pas avec les technologies que nous avons utilisées.\n' +
        'Ensuite lors de chaque jalon de présentation que j’ai eu durant mes différents semestres, j’ai dû vulgariser tous les termes techniques que j’utilisais et également les concepts supplémentaires que nous avons vu comme la méthode agile, sa méthode scrum et le concept de product backlog que j’ai souvent mis en place et donc vulgariser pour notre jury et l’audience qui nous écoutait.\n' +
        'J’ai vulgarisé davantage ma présentation de termes et concepts techniques lors des événements nommé TechDay qui ont lieu à chaque fin de semestre où nous présentions à des personnes extérieures à l’école le projet que nous avions réalisé en groupe. \n' +
        'J’ai simplifié les termes complexes afin de mettre en avant la compétence de vulgarisation auprès des personnes techniques travaillant dans l’informatique tout en permettant aux personnes non techniques venant de l’extérieur tel que les parents d’élèves de comprendre le fonctionnement des technologies utilisées.\n' +
        'Depuis mon arrivée dans le monde de l’entreprise durant mon stage et mon alternance, j’ai continué à vulgariser mes travaux lors de présentation à mes différents chefs de projet afin qu’ils comprennent le besoin de réaliser un changement.\n' +
        'J’ai également vulgarisé mon travail lors de présentation à d’autres personnes devant reprendre le projet n’ayant jamais travaillé avec ce développement. \n' +
        'Des exemples peuvent être la migration des Criteria Hibernate vers les Criteria JPA ou bien l’utilisation de la librairie Spring Batch qui sont tous deux des sujets que j’ai présenté à d’autres équipes de manière simplifiée afin qu’ils comprennent l’intérêt et le fonctionnement.\n',
      autocritique: 'En tant que membre de l’équipe architecture, être capable de vulgariser et donc d’expliquer les différents choix et implémentations techniques choisies est un point important pour la bonne réalisation du projet. \n' +
        'Il est également important de savoir expliquer ce qui a été réalisé techniquement de manière vulgarisé à d’autres équipes qui n’ont pas suivi le développement mais qui sont amenés à travailler dessus.\n' +
        'Lors de mon arrivée à l’ESIEA, durant mon premier semestre, la vulgarisation était un point légèrement complexe lors des présentations cependant au fur et à mesure de ces dernières et de mon gain d’expérience dans les différentes technologies sur lesquelles je travaillais, je me suis amélioré.\n' +
        'Grâce à ces multiples présentations que j’ai réalisé durant mes semestres d’école ainsi que celles dans mon travail en entreprise, j’ai acquis une bonne maîtrise de la vulgarisation de termes techniques et je suis capable de présenter un sujet complexe à une personne non-technique afin qu’elle comprenne son fonctionnement et ses enjeux.\n' +
        'Ma première recommandation aux personnes souhaitant apprendre à vulgariser des termes techniques est tout d’abord de bien connaître son sujet car il est indispensable de comprendre exactement ce que l’on va présenter pour pouvoir le simplifier pour d’autres personnes. \n' +
        'Deuxièmement, je conseille de s’entraîner à voix haute que ce soit seul ou avec une autre personne pour être à l’aise lors de la présentation réelle.\n' +
        'Troisièmement, un bon moyen de vulgariser quelque chose de technique et complexe est de le ramener à un concept similaire de la vie quotidienne ou d’un concept moins technique comme par exemple comparer le backend et le frontend à la préparation et la vente du pain d’une boulangerie.\n' +
        'Mon dernier conseil est de préparer un support de présentation qui servira de soutien visuel à la vulgarisation.\n',
      evolution: 'La prochaine étape dans la vulgarisation de termes techniques est de continuer à réaliser des présentations sur des sujets techniques à mon chef de projet ou bien à d’autres équipes.\n' +
        'Afin d’approfondir mes compétences en vulgarisation, je me fait aider par mes collègues plus expérimentés qui me font part de leur manière de vulgariser des termes techniques.\n',
      imageUrl: 'assets/images/vulgarisation.png',
      realisations: ['link_n_trade', 'geosavior', 'aerowebb']
    },
    {
      id: 'methode_agile',
      nom: 'Méthode agile',
      type: 'humaine',
      niveau: 'Intermédiaire',
      definition: 'La méthode agile est une des nombreuses méthodes de gestion de projet existante. \n' +
        'Elle va dicter la manière de diriger un projet et l’approche avec le client.\n' +
        'La méthode agile consiste à travailler dans de courtes à moyennes périodes d’une à quatre semaines que l’on nomme des « Sprints ». \n' +
        'Durant ces sprints, l’objectif est de remplir un certain nombre d’objectifs définis en début de sprint avec le client et de livrer une version contenant ces modifications à la fin de ce dernier. \n' +
        'Il existe plusieurs méthodes construites sur la philosophie agile comme la méthodologie scrum, Kanban, XP ou FDD. \n' +
        'Des réunions d’avant et d’après sprints sont effectuées avec le client ce qui renforce l’interaction et permet de modifier certains éléments du cahier des charges entre chaque sprint.\n' +
        'Cela fait de la méthode agile un choix très populaire au sein des entreprises en informatique de par sa flexibilité et son intégration possible dans d’autres méthodes de gestion de projet comme le cycle en V.\n',
      element_preuve: 'J’ai débuté mon apprentissage de la méthode agile et plus particulièrement de la méthodologie scrum en cours lors de mon semestre trois avec la mise en place de cette dernière pour la réalisation de notre projet. \n' +
        'J’ai ensuite continué son utilisation lors de mon quatrième et cinquième semestre puis une utilisation un peu modifiée de la méthode agile lors de mon arrivée chez 2MoRO.\n' +
        'J’ai premièrement utilisé la méthode Agile lors du développement d’une application de virtualisation de machine virtuelle. \n' +
        'J’ai mis en place avec mes camarades un product backlog qui est un carnet de toutes les fonctionnalités voulu par le commanditaire qui sont décrites sous la forme « d’User Story ». \n' +
        'Ces users story suivent la forme suivante : « En tant que rôle de la personne » « Je souhaite faire quelque chose/ remplir une fonction » « Afin d’atteindre un objectif ». \n' +
        'Elles sont regroupées par thème. Chaque user story que j’ai réalisé ont été choisi en début de sprint après une réunion entre mon groupe et le commanditaire.\n' +
        'Lors du quatrième et cinquième semestre, j’ai continué à travailler avec la méthode agile pour piloter nos projets et j’ai pu voir comment réaliser le rôle de scrum master. \n' +
        'Le scrum master est la personne en charge de la bonne mise en place et exécution de la méthode agile, il est différent du chef de projet qui dirige l’équipe car avec la méthode scrum, toute l’équipe est au même niveau pour les décisions.\n' +
        'L’application de la méthode agile durant ces trois semestre m’a permis d’acquérir une base de connaissances sur le fonctionnement de cette méthode, de la mettre en pratique tout au long de plusieurs projets et de voir l’avantage de pouvoir avoir un contact régulier avec le client pour corriger de potentiels problèmes ou approuver les développements déjà effectués. \n' +
        'Chez 2MoRO, j’ai retrouvé une partie de la philosophie de la méthode agile avec une livraison intermédiaire après une certaine période de temps ce qui est compatible avec une application en constante évolution comme Aero-Webb.\n',
      autocritique: 'En tant que membre de l’équipe architecture, connaître les différentes manières de piloter un projet n’est pas essentiel. \n' +
        'Cependant des connaissances supplémentaires sont toujours un avantage et cela permet de mieux comprendre les choix faits par les chef de projet ou plus particulièrement des scrum master dans mon cas. \n' +
        'J’ai acquis une bonne maîtrise dans l’utilisation et la mise en place de la méthode agile grâce aux projets réalisés en cours et les différentes présentations où j’ai dû présenter ce qu’était la méthode agile et expliqué notre product backlog. \n' +
        'J’ai aussi pu voir et approfondir ma maîtrise de la méthode agile liée à une autre méthode de pilotage de projet en travaillant sur Aero-Webb.\n' +
        'Ma première recommandation pour piloter un projet avec la méthode agile est d’en parler avec le commanditaire afin de savoir si cela lui convient de réaliser des réunions à intervalles réguliers et de recevoir des versions intermédiaires.\n' +
        'Ma deuxième recommandation est de bien chiffrer chaque fonctionnalité pour les répartir de manière optimale entre les différents sprints et ainsi éviter de prendre du retard sur ce qui est fourni au client.  \n' +
        'Mon dernier conseil est de faire valider au client de manière écrite et officielle les fonctionnalités déjà développées afin d’éviter des retours non prévus qui pourrait amener à des retards du côté des développeurs. \n',
      evolution: 'La prochaine étape dans mon utilisation de la méthode agile est de continuer à travailler avec cette méthode de pilotage lors de mes travaux sur Aero-Webb. \n' +
        'Afin d’approfondir mes compétences en pilotage de projet avec la méthode agile et être capable de diriger une équipe, j’aimerais suivre cette formation : https://www.orsys.fr/formations-methodes-agiles-scrum-agilepm-safe.html\n',
      imageUrl: 'assets/images/agile.png',
      realisations: ['speedclean', 'gestion_presidence_bde']
    },
    {
      id: 'gestion_budget',
      nom: 'Gestion de budget',
      type: 'humaine',
      niveau: 'Avancé',
      definition: 'La gestion de budget est un concept général qui concerne la gestion de la dépense et du gain d’argent dans le but de réaliser différents projets ou actions.\n' +
        'Elle est présente dans la vie de tous les jours lors de nos courses, déplacements et autres commodités mais également en entreprise.\n' +
        'La gestion de budget en entreprise se présente sous différentes formes comme la gestion des salariés et le benchmark des différentes technologies ou besoins afin de prévoir un budget à accorder aux formations ou aux recrutements.\n',
      element_preuve: 'Mon apprentissage de la gestion de budget a débuté lors de ma formation précédent l’ESIEA au lycée hôtelier de Biarritz en tant que cuisinier. \n' +
        'Dans mes cours théoriques, j’ai suivi des cours d’économie.\n' +
        'Durant la partie pratique en cuisine, le chef de cuisine nous a imposé un thème qui consistait à organiser un repas ne devant pas dépasser 20 € par personne. \n' +
        'J’ai dû m’organiser judicieusement pour ne pas dépasser ce budget.\n' +
        'En cherchant sur internet, j’ai cherché le prix des différents produits en les comparant pour le moins onéreux pour chacun.\n' +
        'Par cette recherche, j’ai pu trouver les ingrédients les plus adaptés ce qui m’a permis de réaliser un repas sans dépasser mon budget de 20 € par personne.\n' +
        '\n' +
        'J’ai pu approfondir et consolider cette compétence lors du semestre quatre à l’ESIEA avec la création d’un projet de mon choix qui devait contenir de la gestion de budget.\n' +
        'J’ai travaillé sur la gestion de budget concernant le projet SpeedClean qui avait pour but de réaliser un trajet de trente kilomètres en vélo depuis Taller jusqu’à Vielles-Saint-Giron afin de nettoyer sa plage.\n' +
        'J’ai pu approfondir mes connaissances et pratiquer de la gestion de budget en réalisant un benchmark pour une vente de gâteaux pour le financement du projet.\n' +
        'Ce benchmark contient la liste des gâteaux proposés, les ingrédients nécessaires à leur réalisation et leur prix moyen ce qui m’a permis de fixer un prix.\n' +
        'J’ai également réalisé le budget prévisionnel contenant les différentes charges et produits du projet et je l’ai complété avec les nombres réels une fois les ventes terminées et le projet réalisé.\n' +
        'Pendant le semestre quatre, j’ai pris la présidence du bureau des étudiants général et participer dans la gestion de la trésorerie du bureau des étudiants de Dax.\n' +
        '\n' +
        'Je me suis occupé de la vente de nourriture et de boissons auprès des étudiants de l’école ce qui m’a amené à gérer les stocks et le budget utilisés pour le réapprovisionnement lorsqu’il était nécessaire et permettre de réaliser différents événements ou achats de matériel. \n' +
        'Je réalisais une liste des différents achats par les étudiants et tenait un compte de l’argent présent dans la caisse ainsi que les dépenses effectuées.\n',
      autocritique: 'En tant que développeur, la gestion de budget n’est pas essentielle mais avoir des connaissances sur ce sujet est une plus-value de par son utilisation dans la vie en général et une potentielle participation dans la vie en entreprise.\n' +
        'Grâce aux différents exercices lors de ma formation de cuisinier et aux différentes situations auxquelles j’ai été confronté entre SpeedClean et la gestion de la présidence du bureau des étudiants, j’ai acquis une bonne maîtrise de la gestion de budget.\n' +
        'J’ai pu réaliser des benchmarks, un budget prévisionnel et gérer en continu le budget du bureau des étudiants ce qui a été très formateur et m’a offert une polyvalence dans les différentes possibilités d’une gestion de budget. \n' +
        'Ma formation d’hôtellerie restauration m’a aidé à avoir de bonnes bases et permis d’aider mes camarades à acquérir plus facilement la compétence de gestion de budget.\n' +
        'Ma première recommandation aux personnes souhaitant réaliser une gestion de budget est d’abord d’apprendre comment réaliser un budget prévisionnel et bien comprendre la balance nécessaire entre les charges (coût) et le produit (revenus).\n' +
        'Je préconiserai ensuite de réaliser des petits projets avec une mini gestion de budget afin de s’accommoder aux différents aléas que l’on peut rencontrer. \n' +
        'Finalement, je conseille de ne pas se contenter d’une seule source lors des estimations de budget mais de se renseigner auprès de plusieurs sources pour trouver le plus avantageux et gérer au mieux le budget.\n',
      evolution: 'Ma prochaine étape dans la gestion de budget est de continuer à pratiquer dans la vie courante afin d’approfondir mes connaissances et ma maîtrise de cette compétence en gérant au mieux mes achats.\n' +
        'Afin de pouvoir approfondir davantage mes compétences, je participe à des TeamStarter dans l’entreprise afin de gérer plusieurs projets proposés où la gestion de budget est nécessaire afin de calculer le montant nécessaire à sa réalisation.\n' +
        'Son utilisation dans la vie quotidienne est une formation complète et autonome.\n',
      imageUrl: 'assets/images/budget.png',
      realisations: ['speedclean', 'gestion_presidence_bde']
    },
  ];

  getCompetenceById(id: string): Competence | undefined {
    return this.competences.find(c => c.id === id);
  }

  getAllCompetences(): Competence[] {
    return this.competences;
  }

  getCompetencesByType(type: 'technique' | 'humaine'): Competence[] {
    return this.competences.filter(c => c.type === type);
  }

}
