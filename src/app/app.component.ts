import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<h1>Hello world from {{ city.toUpperCase() }}</h1>`,
  styles: ['']
})
export class AppComponent {
  city = 'Barcelona';
}
