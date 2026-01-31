import { Component, Input } from '@angular/core';
import { CoreConcept } from '../data';  

@Component({
  selector: 'app-core-concept',
  standalone: true,
  imports: [],
  templateUrl: './core-concept.component.html',
  styleUrl: './core-concept.component.css'
})
export class CoreConceptComponent {
  @Input({ required: true }) concept!: CoreConcept;
}