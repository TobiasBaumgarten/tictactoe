export class Field {
    public element: HTMLElement;
  
    private _index : number;
    /** The index of the specific field */
    public get index() : number {
        return this._index;
    }

    
    private _player : 'x' | 'o' | undefined = undefined;
    public get player() : 'x' | 'o' | undefined {
        return this._player;
    }
    public set player(v : 'x' | 'o' | undefined) {
        console.log(this._player,v);
        if(this._player) {
            return;
        }
        this._player = v;
        this.setStylePlayer();
    }
    
    
    /** The Color of the field */
    public color: string = 'gray';
    /** The size of the Field */
    public size: number = 200;
    public onClick: (index: number) => any;

    constructor(index: number) {
        this._index = index;
        this.element = document.createElement('div');
        this.element.onclick = (res) => {
            this.onClick(this.index);
        } 
        this.stylingMain();
    }


    public reset() {
        this._player = undefined;
        for (let i = 0; i < this.element.children.length; i++) {
            let ele = this.element.children[i];
            ele.remove();      
        }
    }

    public set innerHTML(v : string) {
        this.element.innerHTML = v;
    }

    public set addClass(v : string) {
        this.element.classList.add(v);
    }

    private setStylePlayer() {
        if(this.player === 'x')
            this.styleCross();
        else 
            this.styleCircle();
    }

    /** Set the field to cross */
    private styleCross() {
        // for (let i = 0; i < 2; i++) {
            const line =  document.createElement('div');
            line.classList.add('cross');
            //line.style.backgroundColor = 'red';
            console.log('hello');
            this.element.appendChild(line);
       // }
    }

    /** Sets the field style to circle */
    private styleCircle() {
        const cir = document.createElement('div');
        cir.classList.add('circle');
        this.element.appendChild(cir);
    }

    private stylingMain() {
        this.element.style.cursor = 'pointer';
        this.element.style.backgroundColor = this.color;
        this.element.style.width = this.size + 'px';
        this.element.style.height = this.size + 'px';

        this.element.onmouseenter = () => this.element.style.backgroundColor = 'lightgray';
        this.element.onmouseleave = () => this.element.style.backgroundColor = this.color;
    }  
    
}