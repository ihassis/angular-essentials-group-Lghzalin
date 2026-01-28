import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreConceptComponent } from './core-concept/core-concept.component';
import { HeaderComponent } from './header/header.component';
import { TabButtonComponent } from './tab-button/tab-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CoreConceptComponent,HeaderComponent,TabButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
