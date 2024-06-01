import { Component } from '@angular/core';

@Component({
  selector: 'ngx-aspn-button',
  standalone: true,
  imports: [],
  template: `
    <button (click)="handleOnClick($event)">Click ddddd me</button>
  `,
})
export class NgxAspnButtonComponent {
  handleOnClick(e: Event): void {
    console.log('button Event', e);
  }
}
