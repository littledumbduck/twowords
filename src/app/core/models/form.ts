export class Form {
    backgroundColor: string = '';
    shape: string = '';
    shapeColor: string = '';
    number: number = 0;
    numberColor: string = '';
    text: string = '';
    textColor: string = '';

    constructor() {
        this.makeForm();
    }

    makeForm() {
        const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'black', 'white'];
        const shapes = ['circle', 'square', 'triangle', 'rectangle'];

        this.backgroundColor = this.getRandomElement(colors);
        this.shape = this.getRandomElement(shapes);
        this.shapeColor = this.getRandomElement(colors);
        this.number = Math.floor(Math.random() * 10);
        this.numberColor = this.getRandomElement(colors);
        this.text = this.getRandomElement(shapes);
        this.textColor = this.getRandomElement(colors);
    }

    private getRandomElement(array: any[]): any {
        return array[Math.floor(Math.random() * array.length)];
    }
}