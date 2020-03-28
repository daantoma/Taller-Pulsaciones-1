import { Persona } from '../pulsacion/models/persona';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PersonaLService {
  constructor() { }
  get(): Persona[] {
    return JSON.parse(localStorage.getItem('datos'));
  }
  post(persona: Persona) {
    let personas: Persona[] = [];
    if (this.get() != null) {
      personas = this.get();
    }
    personas.push(persona);
    localStorage.setItem('datos', JSON.stringify(personas));
  }
}
