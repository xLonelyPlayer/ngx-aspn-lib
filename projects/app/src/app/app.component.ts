import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DemoComponent } from './components/demo/demo.component';

import { NgxAspnButtonComponent } from 'button';
import { NgxAspnInputComponent } from 'input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgxAspnButtonComponent,
    NgxAspnInputComponent,
    DemoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
