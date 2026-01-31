import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private elements = ['Fundamental', 'Core', 'Crucial'];
  public element = this.getRandomElement();
  getRandomElement():String {
    const randomIndex = Math.floor(Math.random() * this.elements.length);
    return this.elements[randomIndex];
  }

}
