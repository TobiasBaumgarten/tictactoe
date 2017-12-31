import { tictactoe } from "./tictactoe/tictactoe";

export function main(): void {
    let ele = document.createElement('div');
    const ttt = new tictactoe(ele);
    document.body.appendChild(ele);
}

main();