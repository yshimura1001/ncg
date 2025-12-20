"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class StackNode {
    constructor(player, card, effect) {
        this.player = player;
        this.card = card;
        this.effect = effect;
    }
    toString() {
        return `<${this.player.getOrder}, ${this.card.getName()}, ${this.effect}>`;
    }
}
// JavaScriptの配列を用いたStack簡易実装
// 問題が発生したら、本格的なものに書き直す。
class Stack {
    constructor(nodes = []) {
        this.nodes = nodes;
    }
    makeStackNodeAndPush(player, card, effect) {
        this.nodes.push(this.makeStackNode(player, card, effect));
    }
    pop() {
        let value = this.nodes.pop();
        if (undefined === value) {
            console.log('Stack Error!');
            return;
        }
        return value;
    }
    peek() {
        return this.nodes[this.nodes.length - 1];
    }
    makeStackNode(player, card, effect) {
        return new StackNode(player, card, effect);
    }
}
exports.Stack = Stack;
