import { Component } from '@angular/core';

@Component({
  selector: 'pt-root',
  template: `
  <pt-data-binding></pt-data-binding>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
