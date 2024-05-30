import { Component } from '@angular/core';

@Component({
  selector: 'lib-ngx-aspn-button',
  standalone: true,
  imports: [],
  template: `
    <p>button works!</p>
    <button (click)="handleOnClick($event)">Click me</button>
  `,
})
export class NgxAspnButtonComponent {
  handleOnClick(e: Event): void {
    console.log('button Event', e);
  }
}
