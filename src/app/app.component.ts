import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  template: `<h1>Hello world from {{ city.toUpperCase() }}</h1>
  <app-user/>`,
  styles: ['']
})
export class AppComponent {
  city = 'Barcelona';
}
