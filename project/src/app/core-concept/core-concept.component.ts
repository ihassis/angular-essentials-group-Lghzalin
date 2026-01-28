import { Component,Input } from '@angular/core';
import { CORE_CONCEPTS } from '../../../data';

@Component({
  selector: 'app-core-concept',
  standalone: true,
  imports: [],
  templateUrl: './core-concept.component.html',
  styleUrl: './core-concept.component.css'
})
export class CoreConceptComponent {
  @Input() img!:string;
  @Input() title!:string;
  @Input() description!:string;
  
}
