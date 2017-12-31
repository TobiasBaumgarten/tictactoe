import './style.css';
import { Field } from './field'

export class tictactoe {
    private toggle = true;
    private fields: Field[] = [];

    constructor(private element: HTMLElement) {
        //this.element.innerHTML= "Geil tic tac toe";
        this.setElementStyle();
        this.setUpfields();
        this.setUpResetButton();
    }

    private setElementStyle() {
        this.element.classList.add('container');
    }

    private setUpfields() {
        for (let i = 0; i < 9; i++) {
            const ele = new Field(i);
            ele.addClass = 'box-' + i;
            ele.onClick = (res) => this.setPlayer(res);
            this.fields.push(ele);
            this.element.appendChild(ele.element);
        }
    }

    setUpResetButton() {
        const btn = document.createElement('button');
        btn.onclick = () => {
            for(let i= 0; i < this.fields.length; i++)
                this.fields[i].reset();
                // TODO: Logic reset
        }
        btn.textContent = 'Reset';
        this.element.appendChild(btn);
    }

    private setPlayer(index:number) {
        let field = this.fields.filter(ele => ele.index === index)[0];
        console.log(field, this.toggle);
        field.player = this.toggle? 'x': 'o';
        this.toggle = !this.toggle;
    }

}