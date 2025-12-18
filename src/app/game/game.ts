import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
  constructor() {
    this.render();
  }

  render() {
    this.makeForm();
  }

  makeForm() {

  }
}
