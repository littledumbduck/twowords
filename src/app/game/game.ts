import { Component } from '@angular/core';
import { Form } from '../core/models/form';

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

  renderForm() {
  }
