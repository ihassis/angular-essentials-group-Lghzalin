import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-core-concept',
  standalone: true,
  imports: [],
  templateUrl: './core-concept.component.html',
  styleUrl: './core-concept.component.css'
})
export class CoreConceptComponent {
  @Input() coreConcepts: {id:number, title:string, description:string, img:string}[] = [];
  
}
