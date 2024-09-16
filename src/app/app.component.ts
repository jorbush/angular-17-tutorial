import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<h1>Hello world from {{ city }}</h1>`,
  styles: ['h1 { color: red; }']
})
export class AppComponent {
  city = 'Barcelona';
}
