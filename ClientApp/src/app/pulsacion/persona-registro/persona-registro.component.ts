import { Component, OnInit } from '@angular/core';
import { Persona } from './../models/persona';
import { PersonaLService } from './../../services/persona.service';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
  persona: Persona;
  constructor(private personaService: PersonaLService) { }

  ngOnInit() {
    this.persona = new Persona;
  }

  add(){
    alert('se agrego una nueva persona' + JSON.stringify(this.persona));
    this.personaService.post(this.persona);
  }

}
