import { Component } from '@angular/core';
import { ShowcaseComponent } from './showcase.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShowcaseComponent],
  template: `<app-showcase></app-showcase>`,
})
export class AppComponent { }
