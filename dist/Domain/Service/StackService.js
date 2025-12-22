"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpellStack = exports.EffectStack = exports.StackService = void 0;
const Service_1 = require("./Service");
class StackService extends Service_1.Service {
    constructor() {
        super(...arguments);
        this.effctStackService = new EffectStackService();
        this.spellStackService = new SpellStackService();
    }
    getEffectStackService() {
        return this.effctStackService;
    }
    getSpellStackService() {
        return this.spellStackService;
    }
}
exports.StackService = StackService;
class EffectStackService extends StackService {
    constructor() {
        super();
        this.effectStack = new EffectStack();
    }
}
class SpellStackService extends StackService {
    constructor() {
        super();
        this.spellStack = new SpellStack();
    }
}
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
/*
100(20*5)個以上、スタックに乗せたら、負けにする。
ループはどうするか検討する。
*/
class EffectStack extends Stack {
}
exports.EffectStack = EffectStack;
class SpellStack extends Stack {
}
exports.SpellStack = SpellStack;
