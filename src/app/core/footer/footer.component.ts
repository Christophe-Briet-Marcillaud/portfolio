import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  email = 'brietmarcillau@et.esiea.fr'; // Remplacez par votre adresse email
  linkedin = 'https://www.linkedin.com/in/christophe-briet-marcillaud-b9a9171b8/'; // Remplacez par votre profil LinkedIn
}
