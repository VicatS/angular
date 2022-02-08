import { DbzService } from './../services/dbz.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  constructor(private dbzService:DbzService) {}

  // @Input() personajes: Personaje[] = []
  get personajes() {
    return this.dbzService.personajes;
  }
}