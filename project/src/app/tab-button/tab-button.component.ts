import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-tab-button',
  standalone: true,
  imports: [],
  templateUrl: './tab-button.component.html',
  styleUrl: './tab-button.component.css'
})
export class TabButtonComponent {
  @Output () tabSelected = new EventEmitter<string>();
  selectTab(tabName: string) {
    this.tabSelected.emit(tabName);
  }

}
