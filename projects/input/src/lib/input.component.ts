import { Component } from '@angular/core';
import { NgxAspnCommonService } from 'common';

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

  constructor(private common: NgxAspnCommonService)  {}

  handleOnChange(e: Event): void {
    console.log('n', this.common.isNumber('n'));
    console.log('1', this.common.isNumber('1'));
    console.log('1a', this.common.isNumber('1a'));
    console.log('12', this.common.isNumber('12'));
    console.log('input Event', e);
  }
}
