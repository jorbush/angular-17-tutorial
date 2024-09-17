import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h3>Favorite games of {{ username }}</h3>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)" style="cursor: pointer;">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavorite = new EventEmitter<string>();
  games = [
    {
      id: 1,
      name: 'Pokémon Emerald'
    },
    {
      id: 2,
      name: 'Bloodborne'
    },
    {
      id: 3,
      name: 'The Legend of Zelda: Tears of the Kingdom'
    }
  ]

  fav(gameName: string) {
    this.addFavorite.emit(gameName);
  }
}
