import './style.css';
import { Field } from './field'

export class tictactoe {
    constructor(private element: HTMLElement) {
        //this.element.innerHTML= "Geil tic tac toe";
        this.setElementStyle();
        this.setUpfields();
    }

    private setElementStyle() {
        this.element.classList.add('container');
    }

    private setUpfields() {
        for (let i = 0; i < 9; i++) {
            const ele = new Field(i);
            ele.innerHTML = i.toString();
            ele.addClass = 'box-' + i;
            this.element.appendChild(ele.element);
        }
    }


}