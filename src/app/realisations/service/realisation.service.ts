import { Injectable } from '@angular/core';

export interface Realisation {
  id: string;
  titre: string;
  apercu?: string
  presentation: string;
  objectifs: string;
  etapes: string;
  acteurs: string;
  resultats: string;
  lendemains: string;
  regardCritique: string;
  competences: string[]; // IDs des compétences liées
  imageUrl?: string; // Ajout de la propriété imageUrl
}

@Injectable({
  providedIn: 'root'
})
export class RealisationService {

  private realisations: Realisation[] = [
    {
      id: 'geosavior',
      titre: 'GeoSavior',
      presentation: '       GeoSavior est une application mobile de secours des animaux marins en détresse réalisée pour l’association Sibylline Océans suite à une demande de Frédérique Cheyenne, directrice de cette association.\n' +
        'Cette application contient une partie formation où est expliqué le fonctionnement de l’application, ainsi que sa fonctionnalité principale : un questionnaire permettant de connaître l’urgence ou non de la situation et de lancer un appel au centre adapté ou au SDIS. \n' +
        'L’application contient également une partie statistiques sur les animaux sauvés ainsi qu’un panel administrateur réalisé en Angular afin de permettre à Mme Cheyenne de gérer le contenu de l’application.\n',
      objectifs: 'L’objectif principal du projet est de permettre le sauvetage efficace et régulier des animaux marins échoués sur les plages françaises et dans le futur les plages d’autres pays en permettant des interventions rapides et adaptées à l’animal rencontré en appelant un centre vétérinaire capable de s’occuper de ce dernier.\n' +
        'Un point important concernant le développement de cette application mobile est qu’elle soit claire et intuitive pour les utilisateurs car elle sera utilisée dans des cas spécifiques où l’animal devra être pris en charge rapidement afin de simplifier son sauvetage. \n' +
        'Un second point est qu’il est nécessaire d’avoir un mode hors ligne qui retient la dernière position géographique de l’utilisateur avant la perte de la connexion et ses réponses aux questions posés sur l’état de l’animal afin qu’il puisse appeler le centre médical adapté le plus proche lorsqu’il retrouve sa connexion.\n' +
        'Les enjeux de ce projet sont les suivants :\n' +
        'Pour Sibylline Océans, médiatiser davantage l’association afin que plus de personnes prennent conscience du nombre d’animaux marins en danger sur nos plages et ainsi permettre d’en sauver davantage.\n' +
        'Pour mon groupe et moi, de monter en compétence sur la gestion de projet avec des commanditaires grâce aux différentes réunions avec Mme Cheyenne et en technique avec le développement en Java avec les Framework Spring et Hibernate pour la partie serveur et le développement Java du côté Android, en Angular pour le panel administrateur et en développement d’interface Android.\n' +
        'Le risque principal était la difficulté de gérer le mode hors ligne de l’application. \n' +
        'C’était un point important du projet car les plages n’ont pas toujours une couverture réseau suffisante pour utiliser la géolocalisation de l’application et la fonctionnalité d’appel.\n' +
        'Les disponibilités limitées de notre commanditaire dû à son emploi du temps très chargé de présidente de l’association comportait des risques sur la validation des différentes avancées du projet car son avis était nécessaire pour la continuité du projet.\n' +
        'Le dernier risque étant la non-technicité de Mme Cheyenne qui avait certaines demandes non réalisables, ce qui nous a poussé à vulgariser les termes techniques, refuser certaines implémentations comme une détection par IA et mettre plus en avant nos propositions pour proposer des alternatives plus réalisables.\n',
      etapes: 'J’ai tout d’abord réalisé une maquette des différentes parties de l’application mobile en parallèle de celle de mes camarades afin de proposer différentes possibilités aux commanditaires.\n' +
        'Une fois qu’une de nos maquettes a été validé, j’ai commencé la réalisation de cette dernière.\n' +
        'Lors de ce projet, j’ai principalement travaillé sur la partie backend (côté serveur) de l’application développée en Java Android avec l’aide d’Hibernate pour le traitement côté base de données et de Spring pour les requêtes allant vers le serveur.\n' +
        'Dans cette partie backend, j’ai développé des API avec l’aide de Spring qui permettent de réaliser différentes actions comme la sauvegarde de données en base, de la récupération de données, des mises à jour de ces mêmes données et la suppression de ces dernières. \n' +
        'Ces APIs sont des fonctions appelables par l’application mobile et le panel administrateur afin de réaliser les actions pour lesquelles ont été développées ces dernières.\n' +
        'Afin de réaliser ce backend, j’ai découpé la structure du projet en différents dossiers :\n' +
        '-\tLes model qui contiennent les classes représentant les objets en base de données comme les centres, les animaux ou les questions liées aux animaux à l’aide d’Hibernate.\n' +
        '\n' +
        '-\tLes DAO qui contiennent les fonctions pour accéder et modifier la base de données. \n' +
        '\n' +
        '-\tLes services qui utilisent les DAO retournant les données pour pouvoir l’envoyer aux Controller.\n' +
        '\n' +
        '-\tLes Controller qui envoient les données à l’utilisateur afin qu’elles puissent être traitées ou affichées.\n' +
        'J’ai également travaillé sur la partie frontend (côté client) et plus particulièrement sur la partie tutoriel de l’application qui n’a pas nécessité de backend.\n' +
        'La première étape sur laquelle j’ai travaillé est l’explication du but de l’application, l’explication du fonctionnement des questionnaires, de la géolocalisation et de l’appel final suite aux réponses ainsi que celui du mode hors ligne.\n' +
        'J’ai ensuite travaillé sur la fonctionnalité d’appel des centres et du SDIS suite aux réponses du questionnaire. \n' +
        'J’ai réalisé une API contenant une condition qui vérifie si la réponse ou l’enchaînement de réponse donné par l’utilisateur correspond à un état d’urgence pour l’animal en question. \n' +
        'Si l’état d’urgence est repéré, une notification prévient l’utilisateur qu’un appel au SDIS va être lancé pour permettre le sauvetage de l’animal. \n' +
        'Cette notification a pour but d’informer l’utilisateur afin qu’il sache ce qu’il va se passer et permettre une réaction claire de sa part. \n' +
        'Cependant, si l’état d’urgence n’a pas été détecté, l’application va afficher un bouton d’appel à l’utilisateur pour qu’il puisse déclencher un appel vers le centre vétérinaire prenant en charge l’animal reporté le plus proche géographiquement de l’utilisateur en prenant en compte les horaires d’ouvertures du centre. \n' +
        'Si aucun centre capable d’accueillir l’animal assez proche n’est ouvert, un appel vers le SDIS est automatiquement lancé à la place.\n' +
        'Cette API va être appelé côté frontend de l’application mobile, lors du questionnaire. \n' +
        'Si l’utilisateur est hors ligne, l’application ayant stocké les déclencheurs du mode urgence va agir comme présenté précédemment cependant le message affiché sera différent, il précisera que l’appel au SDIS ou au centre vétérinaire sera lancé lorsqu’une connexion internet sera disponible.\n' +
        'J’ai ensuite travaillé sur la partie d’administration des centres vétérinaires. \n' +
        'J’ai commencé par créer une API de récupération des centres dans la base de données afin de pouvoir lister les centres existants sur la page web Angular que j’ai développé en parallèle. \n' +
        'J’ai ensuite créé une page contenant un formulaire de création avec différentes informations comme le nom du centre, les coordonnées géographiques du centre stockées sous forme de latitude et longitude afin de permettre la liaison avec la position géographique de l’utilisateur lors des réponses au questionnaire, les animaux pris en charge par le centre et les heures d’ouvertures de ce dernier. \n' +
        'J’ai terminé la partie d’administration des centres en ajoutant une page de mise à jour et un bouton de suppression avec une pop-up de confirmation afin d’éviter à notre commanditaire de supprimer par inadvertance un centre. \n' +
        'Afin de mettre en place toutes ces API, j’ai utilisé Spring avec ses annotations permettant de préciser directement le type de requête et le chemin d’appel, ce qui a permis de gagner du temps de développement et de rendre le code plus clair.\n' +
        'La dernière étape sur laquelle j’ai travaillé est celle de la page statistiques. \n' +
        'J’ai ajouté dans la base de données un statut « reporté » qui représente le nombre d’animaux marins d’un certain type qui a été reporté et sauvé au travers de l’application afin de pouvoir ressortir des statistiques de sauvetages et permettre de voir les animaux marins les plus rencontrés par les utilisateurs de l’application. \n' +
        'J’ai développé une API qui récupère le nombre total d’animaux sauvés, le type d’animal marin le plus rencontré et réalisé un calcul de pourcentages affiché sur une page de l’application pour que les utilisateurs se rendent compte de l’importance de leur participation au sauvetage de la faune marine grâce à l’application.\n',
      acteurs: 'L’équipe de développement était composée de quatre de mes camarades et moi-même qui représentions l’équipe GeoSavior.\n' +
        'La commanditaire du projet, Mme Cheyenne, présidente de l’association Sibylline Océans fut accompagnée par Mr Cédric Leroy travaillant chez Gandi (une plateforme d’hébergement en ligne). Nous avions des rendez-vous avec eux à la fin de chaque phase de développement lorsque Mme Cheyenne était disponible ce qui s’avérait assez difficile au vu de son emploi du temps chargé. L’objectif de ces créneaux était de présenter l’avancement de l’application, recueillir leurs avis et permettre de modifier l’application selon leurs besoins.\n',
      resultats: 'Le projet a été mené à bien et livré à la commanditaire. \n' +
        'Elle a décidé de médiatiser l’application pour permettre le sauvetage simplifié des animaux marins.\n' +
        'Le projet m’a permis de monter en compétence sur les Framework Hibernate et Spring de Java en travaillant sur le backend de l’application, en Java Android en travaillant sur les fonctionnalités de l’application mobile et en Angular lors de ma participation sur le panel administrateur.\n' +
        'Cela a également conforté mon attirance dans le développement pour le backend plutôt que le frontend que ce soit mobile ou web. \n' +
        'J’ai pu aussi améliorer mon aisance à l’oral et mieux vulgariser les termes les plus techniques afin de me faire comprendre grâce aux explications détaillées et simplifiées ce qui a aidé à la compréhension de Mme Cheyenne qui n’avait aucune compétence dans le domaine de l’informatique.\n' +
        'Si je devais refaire ce projet différemment, je commencerais par réfléchir au mode hors ligne plus rapidement dans le projet car il représente un point très important sur lequel j’ai dû adapter certaines parties du développement qui auraient pu être gérées dès le début.\n' +
        'J’améliorerais également la partie statistique pour permettre de la personnaliser selon plusieurs critères ce qui permettrait un engouement supplémentaire auprès des utilisateurs.\n',
      lendemains: 'Lors de la finalisation du projet et son rendu aux commanditaires, nous avons discuté de la mise en place de l’application sur les serveurs de « Gandi » et sa disponibilité sur le Play store Android afin qu’elle soit accessible auprès du grand public sur tous les téléphones Android.\n' +
        'Mme Cheyenne et Mr Leroy devaient s’occuper de cette partie et souhaitaient également potentiellement réaliser une version IOS (Apple) de l’application pour qu’elle soit utilisable par un plus grand nombre de personnes.\n',
      regardCritique: 'Etant intéressé par le traitement côté serveur (backend), j’ai pris en charge une partie de celui-ci avec deux autres de mes camarades. \n' +
        'J’ai pu découvrir le Framework Spring et ainsi expliquer à mes autres camarades qui se sont principalement occupés de l’affichage, le fonctionnement de ce Framework et l’efficacité qu’il apporte.\n' +
        'J’ai également pu implémenter la partie de sauvegarde de la géolocalisation hors ligne de l’application et ainsi les aider à monter en compétences sur le développement d’un mode sans connexion.\n' +
        'Je retiens de ce projet une bonne expérience de développement, une continuation de l’apprentissage du langage Java et du Framework Hibernate ainsi que la découverte du Framework Spring très utilisé en entreprise mais aussi la compréhension de la différence entre la logique d’un développement web et celle d’un développement mobile. \n',
      competences: ['spring', 'hibernate', 'angular', 'sql', 'vulgarisation'],
      imageUrl: 'assets/images/geosavior.png'
    },
    {
      id: 'link_n_trade',
      titre: 'Link & Trade',
      presentation: 'Link & Trade est un site web de type Vinted réalisé pour des lycéens en bac pro vente du Lycée de Borda à Saint Paul les Dax. \n' +
        'Il s’agit d’un site de mise en vente de produits avec un système de compte réservé aux lycéens, les professeurs pouvant être des modérateurs. L’application contient également une phase de validation des produits par ces derniers.\n',
      objectifs: 'L’un des objectifs du projet est de permettre aux quatre lycéens qui sont nos commanditaires d’appuyer leur projet pour le bac qui est un vide grenier en ligne grâce à une application web. \n' +
        'Le second objectif est de mettre en place cette dernière dans le lycée. Un point important concernant le développement de cette application web est qu’elle soit responsive (adaptée à toutes tailles d’écran). Elle sera principalement utilisée sur le téléphone des élèves.\n' +
        'Les enjeux de ce projet sont les suivants :\n' +
        'Pour les quatre lycéens, avoir une base personnalisée et leur permettre d’appuyer leur présentation finale pour l’épreuve du bac à l’aide du projet. \n' +
        'Pour mon groupe et moi, de monter en compétence sur la gestion de projet avec des commanditaires et en technique avec le développement en Java et en Angular.\n' +
        'Les risques concernant ce projet étaient principalement la difficulté d’implémentation de la messagerie en temps réel. C’était un point important du projet permettant de réaliser plus facilement les échanges/ventes. \n' +
        'Un autre risque étant les disponibilités limitées des commanditaires dû à leur emploi du temps qui devaient correspondre au nôtre. \n' +
        'Le dernier risque étant la non-technicité des lycéens qui ont des besoins précis pour leur application sans savoir ce qui est réalisable ou non, ce qui nous a poussé à vulgariser les termes techniques et mettre plus en avant nos propositions pour répondre à leurs nécessités.\n',
      etapes: 'J’ai tout d’abord réalisé une maquette d’application web en plus de celle de mes camarades afin de proposer différentes possibilités aux commanditaires.\n' +
        'Une fois qu’une maquette a été validé, j’ai commencé la réalisation de cette dernière.\n' +
        'Lors de ce projet, j’ai principalement travaillé sur la partie backend (côté serveur) de l’application développée en Java avec l’aide d’Hibernate pour le traitement côté base de données. \n' +
        'Dans cette partie backend, j’ai développé des API qui permettent de réaliser différentes actions comme la sauvegarde de données en base, de la récupération de données et des mises à jour de ces mêmes données. Ces API sont des fonctions appelables par le client afin de réaliser les actions pour lesquelles ont été développé ces dernières. \n' +
        'Afin de réaliser ce backend, j’ai découpé la structure du projet en différents dossiers : \n' +
        '-\tLes model qui contiennent les classes représentant les objets en base de données comme les utilisateurs ou les annonces à l’aide d’Hibernate.\n' +
        '-\tLes DAO qui contiennent les fonctions pour accéder et modifier la base de données.\n' +
        '-\tLes services qui utilisent les DAO retournant les données pour pouvoir l’envoyer aux utilisateurs.\n' +
        'La première étape sur laquelle j’ai travaillé est la récupération des différents articles. \n' +
        'J’ai développé une API côté serveur qui parcourt la base de données, exécute une vérification sur l’état des annonces en base avant de renvoyer toutes celles qui ont un état validé.\n' +
        'Cette API va être appelé côté frontend, ce qui permet d’afficher toutes les annonces retournées par l’API avec leur prix, leur état, leur nom et une image fournie par l’utilisateur. \n' +
        'Elles sont disponibles sous forme de cartes cliquables qui emmènent l’utilisateur vers la page de détail de l’article grâce au routage disponible avec Angular. \n' +
        'J’ai ensuite travaillé sur l’affichage conditionné des annonces grâce à un tri par catégorie puis sur un tri par sous-catégories.\n' +
        'En exemple, un vêtement étant la catégorie principale et un pantalon une sous-catégorie. \n' +
        'Afin de mener à bien cette fonctionnalité, j’ai réfléchi à une structure en base qui permettait de gérer les différentes catégories en intégrant un champ optionnel dans l’objet catégorie qui va utiliser l’identifiant de la catégorie parent. \n' +
        'Si ce champ contient une valeur, cette dernière sera considérée comme une sous-catégorie. \n' +
        'Une fois la structure de la base mise en place, j’ai intégré le traitement côté Java qui va récupérer les catégories et sous-catégories puis j’ai réalisé l’affichage de ces catégories sous forme de liste déroulante avec des sous choix. J’ai terminé avec le conditionnement de l’affichage des annonces une fois la catégorie ou sous-catégorie choisie avec Angular. \n' +
        'Suite à cela, j’ai continué mon travail avec la validation des annonces par des modérateurs. \n' +
        'Ces annonces étaient visibles uniquement par ces derniers et n’apparaissaient pour les autres élèves que si elles étaient validées. Cette condition est gérée du côté client en récupérant l’état que renvoie le backend. \n' +
        'J’ai aussi ajouté un état en attente de modification que les modérateurs peuvent choisir pour demander une modification de l’annonce ou tout simplement un dernier état qui est le refus de l’annonce auquel cas une justification est demandée au modérateur. \n' +
        'Cette mise à jour appelle une autre API que j’ai développé qui va mettre à jour l’annonce en base, changer son état et sa place dans l’application lors de la récupération.  \n' +
        '\n' +
        'La dernière étape sur laquelle j’ai travaillé était la plus compliquée : \n' +
        'Le chat en temps réel entre un acheteur et un vendeur sur un produit en particulier. \n' +
        'Il permet les échanges concernant le lieu, les négociations de prix et autres informations nécessaires au bon déroulement de la vente. Les discussions ainsi crées sont visibles sur l’écran de chaque produit par utilisateur et sont également accessible par les modérateurs afin de pouvoir vérifier qu’aucun problème n’est rencontré. \n' +
        'Le Java permet de récupérer et stocker les messages envoyés par les utilisateurs puis de renvoyer les messages au front afin qu’il les affiche avec un appel à intervalle régulier pour permettre la mise à jour du chat. \n' +
        'Chaque message est lié à une discussion qui est elle-même lié à un produit ce qui simplifie la structure et la gestion lors de l’appel de l’API.\n',
      acteurs: 'L’équipe de développement était composée de trois de mes camarades et moi-même qui représentions l’équipe Link & Trade. \n' +
        'Les commanditaire étant un groupe de 4 lycéens et leur professeure principale, nous avions des rendez-vous avec eux tous les mois lorsque nos créneaux de projet et les leur coïncidaient afin de leur présenter l’avancement, recueillir leurs avis et leurs potentiels besoins.\n',
      resultats: 'Le projet a été mené à bien et livré aux commanditaires qui vont l’utiliser afin de pouvoir mettre en avant leur projet pour le bac.\n' +
        'Le projet m’a permis de monter en compétence sur Java en travaillant sur le backend de l’application, Angular lors de ma participation sur le front et également SQL durant la structuration de la base de données. \n' +
        'Cela a également conforté mon attirance dans le développement pour le backend plutôt que le frontend. \n' +
        'J’ai pu aussi améliorer mon aisance à l’oral et mieux vulgariser les termes les plus techniques afin de me faire comprendre par tout le monde grâce aux explications détaillés et simplifiées nécessaires à la compréhension des lycéens.\n' +
        'Si je devais refaire ce projet différemment, je passerais plus de temps sur la définition de la structure de base de données au début du projet afin de faciliter le développement du reste du projet. J’ajouterai également un système d’envoi de notification par mail pour permettre aux élèves de suivre leurs annonces plus simplement.\n',
      lendemains: 'Lors de la finalisation du projet et son rendu aux commanditaires, nous avons discuté de la mise en place de l’application au sein du lycée et rendre son accès possible sur les téléphones des étudiants. Afin de pouvoir le faire, il est nécessaire d’avoir l’approbation du ministère de l’éducation car l’application serait interne au lycée et accessible uniquement aux élèves et professeurs.\n' +
        'Malheureusement, jusqu’à présent, le lycée de Borda n’a pas eu de réponse de la part du ministère de l’éducation. Cependant l’espoir que le projet soit approuvé est toujours présent.\n',
      regardCritique: 'Etant intéressé par le traitement côté serveur (backend), j’ai pris en charge une partie importante de celui-ci. Mes camarades étant plus attirés par le frontend (côté client), cela leur a permis de se concentrer sur celui-ci. \n' +
        'J’ai également pu les aider à monter en compétences en leur expliquant la manière dont j’ai développé les différentes fonctionnalités sur lesquelles j’ai travaillé. \n' +
        'Je retiens de ce projet une bonne expérience et une entrée en matière pour le langage Java et le Framework Hibernate mais aussi sur l’importance de partir sur une base de données bien structurée afin de mener à bien un projet.\n',
      competences: ['hibernate', 'angular', 'vulgarisation'],
      imageUrl: 'assets/images/linkntrade.png'
    },
    {
      id: 'aerowebb',
      titre: 'Aero-Webb',
      presentation: 'Aero-Webb est un logiciel de système de gestion de maintenance dans le domaine de l’aviation.\n' +
        'Ce logiciel contient différents écrans regroupés par domaine de l’aéronautique comme la maintenance, la logistique et les vols. \n' +
        'Il contient également une partie gestion des ressources humaines qui est beaucoup moins importante en taille que le reste de l’application. Une gestion des droits est également implémentée.\n',
      objectifs: 'L’objectif principal du produit est de permettre la maintenance des avions, le suivi des vols et la planification des ressources.\n' +
        'Un point important concernant le développement de cette application est qu’elle contienne plusieurs niveaux de droits pour les techniciens, pilote ou administrateur qui n’auront pas accès aux même écrans. \n' +
        'Un second point nécessite d’avoir une performance optimale afin de permettre une gestion en temps réel la plus rapide possible.\n' +
        'Les enjeux de ce projet sont les suivants :\n' +
        'Pour 2MoRO, produire des revenus et potentiellement vendre le projet à d’autres clients pour faire de nouveaux bénéfices.\n' +
        'Pour moi, de monter en compétence sur la technique avec le développement en Java, sur l’utilisation des Framework Spring et Hibernate dans un contexte professionnel pour la partie serveur et un développement technique plus léger sur Angular lors du travail sur des écrans déjà existants.\n' +
        'Les risques concernant ce projet sont principalement la difficulté d’assurer les performances d’une application aussi grande avec autant de fonctionnalités.\n' +
        'Un autre risque est l’obsolescence des librairies et Framework utilisés sur l’application dû au potentiel retard pris sur les montées en niveaux de ces dernières.\n' +
        'Le dernier risque étant la dépendance entre les différentes parties du code qui peuvent entrainer des régressions de performances ou de fonctionnalités lorsqu’on modifie une partie liée directement à une autre.\n',
      etapes: 'Lors de mon arrivée chez 2MoRO, j’ai commencé par reprendre un script de base de données modifiant le type de données des identifiants de NUMERIC(31) vers BIGINT dans les tables en base. L’objectif de ce changement est un gain de consommation mémoire et une optimisation de l’espace disque utilisé par la base. \n' +
        'J’ai ensuite travaillé sur la création d’un nouveau générateur d’ID avec pour but d’éviter les collisions entre différents identifiants lors de leur génération. \n' +
        'Pour ce faire, j’ai utilisé une librairie appelée TSID qui permet de générer une valeur sur 64 bits dont 42 alloués au composant temporel et 22 générés aléatoirement.\n' +
        'Suite à la création du générateur d’ID, j’ai réalisé une vérification et une amélioration de la sécurité applicative d’Aero-Webb en retravaillant les droits de modification sur différentes variables lors des échanges entre le Frontend et le Backend.\n' +
        'Une fois tous ces travaux terminés, j’ai commencé le plus gros chantier sur lequel j’ai travaillé depuis mon arrivée chez 2MoRO.\n' +
        'La migration de Hibernate natif vers JPA qui a pour but de permettre la montée en niveau de Hibernate et Spring 5 vers Hibernate et Spring 6.\n' +
        'La migration a commencé par le passage de fichier « hbm.xml » qui représente la structure de la table en base et s’ils sont présents les liens avec d’autres tables vers des annotations Hibernate JPA comme : \n' +
        '-\t@Table qui indique que l’objet représente une table dans la base de données.\n' +
        '-\t@Entity qui permet aux requêtes faites par JPA de reconnaître cette classe.\n' +
        '-\t@Id qui indique que la variable annotée est l’identifiant de la table.\n' +
        '-\t@Column qui indique que la variable annotée est une colonne de la table mais pas un identifiant.\n' +
        '-\t@ManyToOne/@OneToMany qui indiquent la liaison entre différentes tables/classes.\n' +
        'Après avoir migré les fichiers vers des annotations, j’ai commencé la migration des méthodes Hibernate interne vers les méthodes Hibernate JPA car les premières ne sont plus supportées dans la version 6 d’Hibernate. Cette migration comporte plusieurs étapes :\n' +
        '-\tMigrer le code de natif vers JPA en passant de Criteria vers CriteriaBuilder, CriteriaQuery et Root ce qui rend le code plus long à écrire mais également plus compréhensible.\n' +
        '-\tLancer les test unitaires s’ils existent et vérifier qu’ils passent.\n' +
        '-\tRécupérer les deux requêtes SQL générées ensuite vérifier que la logique est la même.\n' +
        'Une fois les méthodes migrées, une Merge Request est créée sur GitLab afin d’être relue par un autre développeur qui valide les changements ou remonte les potentiels problèmes à corriger avant de faire passer ces changements sur la version principale de l’application. \n' +
        'J’ai migré une partie des méthodes JPA moi-même avant de passer sur d’autres sujets. \n' +
        'Cependant, afin que d’autres développeurs puissent travailler sur cette migration, j’ai rédigé une documentation complète sur la migration d’Hibernate natif vers JPA. \n' +
        'Cette documentation comporte une explication du fonctionnement des méthodes JPA, un exemple d’avant et après migration pour chaque cas pouvant être rencontré sur Aero-Webb ainsi que différents cas particuliers rencontrés lors de mes migrations.\n' +
        'J’ai travaillé avec Spring sur des sujets assez rapides comme la mise en place de « Spring Profile » qui permet de conditionner le passage dans une partie du code en activant ou non un profile dans le paramétrage du serveur Tomcat. Dans mon cas, la partie conditionnée est un code d’analyse des performances qui consommait de la mémoire inutilement. \n' +
        'Mais aussi sur des sujets plus imposants comme la refonte des exports de données d’Aero-Webb avec Spring Batch afin d’améliorer les performances et la stabilité des exports qui parfois n’arrivaient pas à termes. \n' +
        'J’ai créé trois types de classes, les Reader qui vont lire les données en base, les Processor qui vont transformer les données Java en objet exportable en xml et le Writer qui va écrire les données transformées dans un fichier. \n' +
        'Grâce à ces trois classes et une implémentation particulière, Spring Batch permet de travailler par lot de données définies dans la configuration d’un Job représentant le traitement complet que Spring Batch va effectuer. \n' +
        'Chaque lot est géré dans des steps qui sont les traitements intermédiaires du Job permettant d’atteindre le résultat final. \n' +
        'Finalement, j’ai travaillé sur la refonte d’un générateur permettant de générer les fichiers nécessaires aux appels envoyés au serveur par le Frontend en partant des fichiers présents dans le Backend. L’ancien générateur comportait un seul énorme fichier qui a été copié avec certaines différences dans plusieurs composants d’Aero-Webb. \n' +
        'Le générateur retravaillé ne contient qu’un fichier final associé à un fichier de configuration pour chaque composant et de différentes classes d’analyse et de plusieurs classes responsables des différentes parties du fichier final créé dynamiquement lors de l’appel pour éviter les erreurs de frappes potentielles des développeurs.\n',
      acteurs: 'L’équipe dans laquelle je travaille est nommée Technical Roadmap. \n' +
        'Elle est composée d’un chef de projet, d’un TechLead (développeur expérimenté qui encadre les autres développeurs) et trois développeurs dont moi-même.\n' +
        'Nous sommes en contact avec la direction technique qui réalise les études sur les sujets que mon équipe et moi-même intégrons ensuite à l’application.\n' +
        'Nous travaillons aussi avec l’équipe performance de l’application afin de nous partager certains sujets qui rentrent dans nos deux domaines.\n' +
        'Pour finir, le dernier acteur avec lequel j’échange est l’équipe Offre qui définit les besoins fonctionnels du logiciel.\n',
      resultats: 'Le projet est en constante évolution grâce aux différents développeurs qui travaillent sur le logiciel et aux chefs de projet qui cadrent les travaux.\n' +
        'J’ai permis à l’entreprise de mettre à niveau une importante partie des librairies et de l’implémentation du Framework Hibernate ce qui a amélioré les performances.\n' +
        'Travailler sur Aero-Webb me permet de monter en compétences en Java, sur l’utilisation de Spring et Hibernate et de découvrir de nouvelles possibilités dans ces deux Framework. \n' +
        'Cela me permet également de monter en compétences en DevOps en participant ponctuellement à des développements de pipeline (outils permettant d’automatiser des lancement d’application) ou bien en utilisation de l’OS Linux grâce à l’environnement de travail utilisant un outil nommé WSL qui simule Linux sous Windows. \n' +
        'J’ai également pu m’améliorer dans l’utilisation du SQL en travaillant sur la mise à jour du modèle de données d’Aero-Webb et en réalisant des scripts de mise à jour ou de création de fonctions.\n' +
        'Tous ces travaux confortent mon attirance dans le développement pour le backend et également pour la gestion et les traitements de base de données.\n',
      lendemains: 'Aero-Webb est un logiciel qui évolue régulièrement avec une fréquence de une sortie de version tous les deux mois environ. Dans un avenir proche, la version 7.8.15 va être livré à nos clients afin qu’ils puissent réaliser des tests et nous remonter les différents points d’amélioration pour la version suivante. \n' +
        'Le but final est de partir en production chez le client avec une version finale sur laquelle une maintenance sera proposée. \n' +
        'Une version 8 du logiciel Aero-Webb devrait sortir une fois la mise en production terminée cependant son contenu n’a pas encore été décidé.\n',
      regardCritique: 'Etant intéressé par le traitement côté serveur, j’ai tout d’abord rejoint l’équipe Backend qui était composée de deux autres personnes, un architecte et un TechLead que j’ai pu assister dans différentes tâches et ainsi leur fournir un gain de temps tout en gagnant en compétences.\n' +
        'J’ai ensuite aider à différentes études et mise en place de mesures de performance lors de mon passage dans la direction technique.\n' +
        'Finalement, je vais participer à la montée en version des Framework Hibernate et Spring sur Aero-Webb dans l’équipe Technical Roadmap.\n' +
        'Je retiens d’Aero-Webb un bon exemple de bonnes pratiques, un logiciel complexe sur lequel travailler est enrichissant au niveau technique mais également au niveau organisationnel.\n',
      competences: ['spring', 'hibernate'],
      imageUrl: 'assets/images/aerowebb.jpg'
    },
    {
      id: 'speedclean',
      titre: 'SpeedClean',
      presentation: 'SpeedClean est un projet humanitaire dont le but est de réaliser un défi sportif de soixante kilomètres aller-retour en vélo depuis Taller vers la plage de Vielles-Saint-Giron où nous resterons pour la nuit dans un camping afin de nettoyer la plage de ses déchets et réaliser une action écologique.',
      objectifs: 'L’objectif principal du projet est le nettoyage de la plage de Vielles-Saint-Giron et la mise en place d’une gestion de budget qui permet à mon groupe et moi-même de réaliser le projet.\n' +
        'Un point important concernant le projet est la recherche du sponsor nous permettant de simplifier notre gestion de budget et de réaliser le projet dans son entièreté tout en apprenant à travailler avec des sponsors.\n' +
        'Les enjeux de ce projet sont les suivants :\n' +
        'Pour la mairie de Vielles-Saint-Giron, avoir leur plage nettoyée gratuitement et renvoyer une image de mairie dynamique qui aide les projets de jeunes étudiants.\n' +
        'Pour les entreprises nous sponsorisant, avoir une communication supplémentaire sur les réseaux sociaux et attirer de nouveaux clients grâce à ce partenariat.\n' +
        'Pour mon groupe et moi, de monter en compétence sur la gestion de budget grâce aux différentes ventes, achats et réalisation de budget prévisionnel puis le budget réel. \n' +
        'Également de monter en compétence sur la communication avec les différentes publications réalisées pour promouvoir le projet et la rédaction de dossiers de sponsoring.\n' +
        'Le risque principal concernant ce projet était la difficulté de trouver un début d’investissement pour financer notre projet et pouvoir effectuer nos achats. \n' +
        'Le financement cité plus haut était le point le plus important du projet car la compétence évaluée lors du semestre était la gestion de budget.\n' +
        'Un autre risque était la possibilité de n’avoir aucun sponsor et ainsi manquer de budget pour réaliser notre projet que ce soit par manque de vélo ou de nuitée au camping.\n' +
        'Le dernier risque étant la blessure d’un des membres de l’équipe avant la réalisation du projet ou d’abîmer les vélos lors de notre parcours aller ou retour.\n',
      etapes: 'J’ai tout d’abord réalisé une version de la charte graphique de notre projet que j’ai mis en commun avec mes camarades afin de fusionner nos différentes propositions et arriver au résultat final que nous avons utilisé lors de toute la réalisation.\n' +
        'Ayant le rôle de trésorier du groupe, une fois la charte graphique terminée j’ai travaillé sur la réalisation du budget prévisionnel de notre projet.\n' +
        'Je me suis occupé de calculer les charges prévisionnelles pour l’achat des matières premières, des achats d’autres types comme une trousse de secours et des sacs poubelles pour la plage. \n' +
        'Je me suis également renseigné sur le prix de la location des vélos, des déplacements en voiture ou en train pour se rendre à Taller, les prix des repas du soir et de la nuitée au camping.\n' +
        'Un budget devant être équilibré et les deux totaux égaux, j’ai calculé les produits prévisionnels que mon groupe allait produire avec la vente de produits, les subventions potentielles et le sponsoring.\n' +
        'Les idées prévisionnelles pour produire des revenus étaient des subventions de la mairie pour le nettoyage de la plage, des ventes de gâteaux et crêpes auprès de personnes de l’école ou de notre entourage et des réductions sur la location des vélos ainsi que sur le prix du camping. \n' +
        'Lorsque j’ai terminé de travailler sur le budget prévisionnel, j’ai participé à la rédaction de dossier de sponsoring pour différentes entreprises comme Décathlon ou Intersport pour la location des vélos et un dossier de sponsoring pour le camping Eurosol à Vielles Saint Giron. \n' +
        'Nous avons reçu une réponse négative de la part de Décathlon et Intersport mais une réponse positive du camping Eurosol. \n' +
        'Après le refus concernant la location des vélos, j’ai choisi avec mon équipe de nous tourner vers Giant Dax, un magasin de vente et location de vélos situé à Dax non loin du campus. \n' +
        'Après la rédaction d’un autre dossier de sponsoring, mes camarades et moi avons été discuter avec le propriétaire du magasin qui a accepté de nous louer gratuitement les vélos et le reste de l’équipement en échange de son intégration dans nos publications.\n' +
        'J’ai donc réalisé quelques publications pour les publier sur Instagram afin de mettre en avant notre projet tout en intégrant dans mon design et mon texte les éléments de Giant Dax et du camping Eurosol.\n' +
        'En parallèle de la rédaction de dossiers de sponsoring, j’ai également réalisé une vente de gâteaux fait maison par mes soins pour financer le projet. \n' +
        'Afin de présenter les gâteaux disponibles et leur prix j’ai réalisé une affiche reprenant la charte graphique de notre projet que je fournissais à chaque personne souhaitant acheter un gâteau. \n' +
        'J’ai aussi réalisé un tableau imprimé sous forme de fiche où chaque personne écrivait son nom, le gâteau choisi, l’argent donné pour le gâteau et une signature pour officialiser la procédure. \n' +
        'Pour décider du prix de chaque gâteaux, j’ai réalisé un benchmark des coûts moyen des ingrédients ce qui m’a amené à un prix de de six euros lors du début du projet. \n' +
        'Les personnes achetant les gâteaux nous ayant tous payé plus, le prix final est monté à huit euros. \n' +
        'J’ai vendu un total de quarante-cinq gâteaux pour un bénéfice de 308,34 euros.\n' +
        'Pour finir, je me suis occupé de réaliser le budget réel en renseignant les différentes dépenses effectuées, les différents produits reçus ou gagnés, les prestations offertes grâce au sponsoring et en calculant les écarts finaux entre le budget prévu et le budget réel.\n',
      acteurs: 'L’équipe du projet était composée de quatre de mes camarades et moi-même qui représentions l’équipe SpeedClean.\n' +
        'Nous étions les commanditaires de notre projet, nous avions des rendez-vous fixes à chaque créneaux de projet afin de faire le point sur notre avancée au niveau du budget, du sponsoring et des communications sur les réseaux sociaux.\n' +
        'Nous avons également eu des échanges par mail et des rendez-vous en présentiel avec notre premier sponsor « Giant Dax » qui nous a loué les vélos et des rendez-vous téléphoniques avec notre deuxième sponsor le camping de Vielles-Saint-Giron : « Eurosol ».\n',
      resultats: 'Le projet a été mené à bien malgré une chute à vélo lors du début du parcours. \n' +
        'Grâce à notre prévoyance avec l’achat d’une trousse de secours, nous avons pu soigner notre camarade sur place et reprendre notre parcours. \n' +
        'Nous avons réalisé le défi sportif en deux heures et dix-neuf minutes. Le nettoyage de la plage s’est également déroulé sans accroc.\n' +
        'Ce projet m’a permis d’approfondir mes compétences en gestion de budget ce qui a rendu la gestion d’un budget prévisionnel et réel d’autant plus enrichissante. \n' +
        'Cela m’a également permis de continuer à mettre en pratique les différentes compétences apprises lors des semestres précédents comme la communication vu lors du deuxième semestre et la rédaction lors du premier semestre. \n' +
        'Cela m’a également aidé à améliorer mon aisance à l’oral grâce aux différents rendez-vous avec les sponsors et la vente de gâteaux que j’ai organisé.\n' +
        'Si je devais refaire ce projet différemment, j’élargirais le choix des plages, je contacterais plus de mairies dans le cas où elles refuseraient le nettoyage de la plage.\n',
      lendemains: 'Lors de la finalisation du projet et de la présentation finale, nous avons décidé de verser l’argent restant au bureau des étudiants de Dax afin de permettre à ce dernier de proposer de nouvelles activités et dynamiser davantage la vie des étudiants sur le campus.',
      regardCritique: 'Ayant déjà travaillé sur la gestion de budget lors de mon année dans l’hôtellerie-restauration, j’ai aidé mes camarades à comprendre la réalisation d’un budget prévisionnel et comment le suivre assidument pour éviter de larges écarts avec le budget réel.\n' +
        'Je retiens de ce projet une bonne expérience et une occasion d’approfondir les différentes compétences acquises lors des semestres précédents mais aussi de gérer un projet fait par nous-même de sa création à sa réalisation. \n',
      competences: ['gestion_budget', 'marketing'],
      imageUrl: 'assets/images/speedclean.png'
    },
    {
      id: 'gestion_presidence_bde',
      titre: 'Gestion de la présidence du BDE',
      presentation: '       Le Bureau des étudiants (BDE) est une association à but non lucratif gérée par des étudiants dans les ' +
        'écoles d’études supérieures. \n' +  'Il est composé d’un poste de président, d’un poste de trésorier et d’un poste de secrétaire. ' +
        'Le bureau des étudiants du Groupe AEN (avant son rachat par l’ESIEA) était composé d’un bureau ' +
        'général qui s’occupait de gérer la partie financière et administrative globale pour les bureaux ' +
        'respectifs à chaque campus : Agen, Dax et les Sables d’Olonne.\n' +
        'Il est aussi responsable de la supervision et du bon fonctionnement de chacun de ces bureaux.',
      objectifs: '        L’objectif principal du projet est de permettre aux étudiants de l’école d’avoir un environnement ' +
        'scolaire vivant et accueillant à travers l’organisation de différentes activités en dehors des horaires de ' +
        'cours au sein de l’école mais également à l’extérieur.\n' +
        'Un point important du BDE est l’image qu’il a l’extérieur de l’école. ' +
        'Cette image permet de la promouvoir car le BDE représente une partie de l’école et permet ' +
        'potentiellement d’attirer de nouveaux étudiants au sein de cette dernière. ' +
        'L’image que renvoie le BDE doit être bonne et ne pas porter préjudice à l’école.\n\n' +
        'Les enjeux de ce projet sont les suivants :\n' +
        'Pour les étudiants, avoir un environnement scolaire proposant des activités supplémentaires et ' +
        'dynamiser leur temps passé à l’école.\n\n' +
        'Pour moi, de monter en compétence sur la gestion d’un projet car gérer une association représente ' +
        'un travail administratif conséquent et un travail constant. ' +
        'Également en marketing en promouvant le BDE auprès des entreprises proches pour négocier des ' +
        'avantages contre la promesse d’une clientèle régulière. ' +
        'Finalement, améliorer mes compétences en gestion de budget en aidant à gérer la trésorerie du BDE.\n\n' +
        'Le premier risque concernant ce projet était principalement le risque d’amener une mauvaise image ' +
        'à l’école en organisant des événements de manière chaotique et dégradant du matériel public. ' +
        '\nL’autre risque important était de mal gérer le budget en dépensant trop et ainsi nous retrouver en ' +
        'déficit et ne plus pouvoir organiser d’événements ou autres activités.',
      etapes: '       J’ai commencé par réaliser une réunion avec Cédric Philippot qui avais pris la relève du BDE lors de ' +
        'son abandon par les étudiants précédents afin que je puisse reprendre son poste de président du BDE ' +
        'général. ' +
        'Une fois cette réunion faite et les papiers officiels envoyés par Cédric, j’ai pu commencer mon travail ' +
        'de président du BDE général.\n\n' +
        'J’ai commencé par mettre à jour la situation avec la banque en indiquant que j’étais le nouveau ' +
        'président de l’association à notre responsable banquière.\n' +
        'J’ai eu plusieurs appels avec la personne en charge du compte afin de réinitialiser les différents accès ' +
        'et de relancer le compte général ce qui m’a permis de redistribuer l’argent restant entre les différents ' +
        'campus pour qu’ils aient une base financière pour leurs activités.\n\n' +
        'J’ai ensuite réalisé les papiers nécessaires à la reconnaissance du BDE général comme une association ' +
        'officielle avec l’aide du trésorier et du secrétaire du BDE général qui étaient également des étudiants ' +
        'du campus de Dax. ' +
        'Une fois toute la partie administrative extérieur du BDE général gérée, j’ai organisé une assemblée ' +
        'générale pour décider de la gestion interne de chaque BDE sur les différents campus et sur la' +
        'procédure d’adhésion à ces derniers. ' +
        '\nJ’ai décidé avec les différents membres gérant les BDE des différents campus de fixer le prix de ' +
        'l’adhésion pour une année (2 semestres) à dix euros, ces dix euros sont directement versés au BDE du ' +
        'campus sur lequel la personne s’inscrit.\n' +
        'Cette adhésion permet différents avantages qui varient selon le campus où l’étudiant se situe.\n' +
        'Il a été décidé que chaque campus se gérait lui-même mis à part sur l’organisation des événements ' +
        'qui doivent passer par une validation par moi-même et le reste du bureau général à travers un ' +
        'document que j’ai réalisé.\n\n' +
        'J’ai également participer à la création d’une épicerie gérée par le BDE sur le campus de Dax. ' +
        'Cette épicerie proposait des sucreries telles que des Kinder Bueno, Kinder Délice, snickers, etc… mais ' +
        'aussi des boissons en canette comme des sodas ou des boissons énergisantes comme les Monster.\n' +
        'J’ai mis en place avec le président et le trésorier du BDE de Dax une grille de prix auquel vendre ' +
        'chaque produit afin de nous faire une marge sans pour autant faire payer des prix exorbitants aux ' +
        'étudiants.\n' +
        'J’ai également instauré un système de fidélité unique aux étudiants membre du BDE qui ont payé ' +
        'l’adhésion, pour trois produits achetés, un produit du même prix est offert.\n' +
        'L’argent récolté par l’épicerie était utilisé pour refaire les courses dont je m’occupais avec le président ' +
        'du BDE de Dax lors des heures de pause entre midi et deux pour que les rayons soient toujours ' +
        'remplis.\n' +
        'J’ai aussi utilisé l’argent récolté pour acheter une télévision que nous avons installé avec un ' +
        'canapé dans une des parties communes afin de créer un coin détente utilisable par tous lors des ' +
        'pauses.\n' +
        'J’ai ensuite fait des recherches avec mes camarades pour acheter un babyfoot qui nous a permis ' +
        'de varier les activités à disposition des étudiants.\n' +
        '\nPour ce qui est des activités et évènements, j’ai organisé différents tournois de jeux vidéo et babyfoot ' +
        'avec un prix d’entrée et une récompense pour les gagnants. ' +
        '\nCes récompenses variaient entre un certain nombre de produits gratuits ou un montant d’argent ' +
        'donné, les prix pour les gagnants dépendaient du nombre de participants.\n' +
        '\nJ’ai participé à la création de l’identité visuelle du BDE général et également du BDE de Dax en ' +
        'proposant différents logos et idées.\n' +
        'Lorsque l’identité visuelle du BDE de Dax a été décidé, j’ai aidé à la création d’un compte Instagram et ' +
        'de différentes publications pour ce dernier afin de promouvoir nos différents événements et ' +
        'permettre aux personnes extérieures de voir notre implication pour améliorer la vie étudiante.\n' +
        '\nJ’ai également organisé avec mes camarades du BDE de Dax la soirée d’intégration des premières ' +
        'années et par la même occasion la soirée de départ de ma promotion car nous partions en stage à la ' +
        'fin du semestre.\n' +
        'J’ai donc réalisé quelques dossiers de sponsoring pour permettre de faire des économies sur nos ' +
        'achats et chercher un local où la soirée pourrait se dérouler.\n' +
        'J’ai fini par trouver un bar que nous avons loué à un des étudiants de première année situé juste à ' +
        'côté de l’école.\n' +
        '\nLa dernière étape que j’ai réalisée en tant que président du BDE général a été d’organiser les élections ' +
        'du nouveau bureau sur les différents campus et pour finir pour celui du BDE général car partant en ' +
        'stage puis en alternance, je ne pouvais plus m’occuper du BDE.',
      acteurs: 'La gestion de la présidence du BDE général était géré par moi-même, de plus j’aidais également à la ' +
        'présidence et à la gestion des activités du BDE sur le campus de Dax.\n' +
        'Les commanditaires étaient les étudiants qui proposait des événements, des activités ou me faisaient ' +
        'parvenir des demandes de matériel.\n' +
        'J’organisais également des assemblées générales régulièrement pour discuter de différents sujets et ' +
        'des réélections lorsqu’elles devaient avoir lieu.',
      resultats: 'Le bureau des étudiants a atteint son objectif en organisant de multiples activités, à dynamiser la vie ' +
        'étudiante grâce à la mise en place de l’épicerie et de différentes activités durant les pauses.\n' +
        'Le projet m’a permis d’apprendre à gérer une association, monter en compétence sur le marketing ' +
        'grâce aux différentes publications et promotions publiées sur les réseaux et les dossiers de ' +
        'sponsoring, réalisés et envoyés aux entreprises.\n' +
        'J’ai également pu approfondir mes compétences en gestion de budget avec l’aide apporté à la gestion ' +
        'de la trésorerie sur Dax.\n' +
        'Si je devais reprendre la présidence du BDE différemment, je commencerais par m’occuper de la ' +
        'partie administrative plus rapidement et m’impliquerai davantage dans le suivi des activités des ' +
        'autres campus en organisant des points réguliers avec chaque président de campus.',
      lendemains: 'Lors de mon départ en stage, j’ai organisé de nouvelles élections afin que le BDE puisse continuer ' +
        'd’exister, c’est la promotion suivant la nôtre qui a été élue pour continuer à présider le BDE général.\n' +
        'Depuis mon départ, le BDE a continué ses activités comme à son habitude et à continuer à apporter ' +
        'une bonne image à l’école tout en apportant des avantages aux étudiants. \n' +
        'Lors du rachat par l’ESIEA, le BDE général ainsi que les BDE des campus ont été intégrés au BDE de ' +
        'l’ESIEA.',
      regardCritique: 'Etant motivé pour apprendre à gérer une association et pour permettre aux autres étudiants et à ' +
        'moi-même d’accéder à des activités supplémentaires durant mon parcours d’études, j’ai pu motiver ' +
        'd’autres personnes à m’accompagner dans la gestion du BDE et apporter mon expertise en gestion de ' +
        'budget que j’ai acquise lors de mon année de mise à niveau en Hôtellerie-restauration.\n\n' +
        'Je retiens une bonne expérience de la présidence du BDE, ça a été pour moi un bon moyen ' +
        'd’améliorer ma prise de parole en animant les assemblées générales et en m’occupant de la ' +
        'présentation du BDE aux nouveaux arrivants, de plus, cela m’a permis d’améliorer la vie étudiante sur ' +
        'les différents campus et la cohésion entre les différentes promotions.',
      competences: ['gestion_budget', 'marketing'],
      imageUrl: 'assets/images/bde.png'
    },
  ];

  getRealisationById(id: string): Realisation | undefined {
    return this.realisations.find(r => r.id === id);
  }

  getAllRealisations(): Realisation[] {
    return this.realisations;
  }
}
