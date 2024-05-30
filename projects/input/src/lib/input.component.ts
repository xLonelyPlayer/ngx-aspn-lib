import { Component } from '@angular/core';

@Component({
  selector: 'lib-ngx-aspn-input',
  standalone: true,
  imports: [],
  template: `
    <p>input works!</p>
    <input type="text" (change)="handleOnChange($event)">
  `,
})
export class NgxAspnInputComponent {
  handleOnChange(e: Event): void {
    console.log('input Event', e);
  }
}
