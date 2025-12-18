import { Component } from '@angular/core';
import { Form } from '../core/models/form';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
  formList: Form[] = [];
  maxForm: number = 4;

  constructor() {
    for (let index = 0; index < this.maxForm; index++) {
      this.createForm();
    }
  }

  createForm() {
    const form = new Form();
    this.formList.push(form);
  }


  renderForm() {
    // Render form to game.html inside game-main-container with ngFor creating a new div for each form
    const gameMainContainer = document.getElementById('game-main-container');
    for (let index = 0; index < this.formList.length; index++) {
      const form = this.formList[index];
      const formDiv = document.createElement('div');
      formDiv.classList.add('form-container');
      formDiv.style.backgroundColor = form.backgroundColor;
      formDiv.style.shape = form.shape;
      formDiv.style.shapeColor = form.shapeColor;
      formDiv.style.number = form.number;
      formDiv.style.numberColor = form.numberColor;
      formDiv.style.text = form.text;
      formDiv.style.textColor = form.textColor;
      gameMainContainer.appendChild(formDiv);
    }

  }
}