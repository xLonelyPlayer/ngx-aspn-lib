import { Component } from '@angular/core';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [],
  template: `
    <p>button works!</p>
    <button (click)="handleOnClick($event)">Click me</button>
  `,
})
export class ButtonComponent {
  handleOnClick(e: Event): void {
    console.log('button Event', e);
  }
}
