export class Field {
    public element: HTMLElement;
    
    private _index : number;
    public get index() : number {
        return this._index;
    }
    
    public color: string = 'gray';
    public size: number = 200;
    public onClick = () => console.log('clicked ' + this.index);

    constructor(index: number) {
        this._index = index;
        this.element = document.createElement('div');
        this.element.onclick = this.onClick;
        this.styling();
    }

    private styling() {
        this.element.style.cursor = 'pointer';
        this.element.style.backgroundColor = this.color;
        this.element.style.width = this.size + 'px';
        this.element.style.height = this.size + 'px';
    }

    public set innerHTML(v : string) {
        this.element.innerHTML = v;
    }

    public set addClass(v : string) {
        this.element.classList.add(v);
    }
    
    
}