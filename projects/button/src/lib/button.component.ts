import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-aspn-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: '../../assets/_index.scss'
})
export class NgxAspnButtonComponent {

  @ViewChild('iconLeft') iconLeft!: ElementRef<HTMLSpanElement>;
  @ViewChild('iconRight') iconRight!: ElementRef<HTMLSpanElement>;
  @ViewChild('btnLabel') btnLabel!: ElementRef<HTMLSpanElement>;

}
