import { Component, EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-tab-button',
  standalone: true,
  imports: [],
  templateUrl: './tab-button.component.html',
  styleUrl: './tab-button.component.css'
})
export class TabButtonComponent {
  @Input() label: string = '';
  
  @Input() isSelected: boolean = false;
  
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }

}
