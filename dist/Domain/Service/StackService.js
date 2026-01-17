import { Service } from "./Service.js";
export class StackService extends Service {
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
ループ→同じ効果のスタックが20回以上続いた場合とスタックに乗った効果の解決数が連続20回以上になった場合は、負けにする。
*/
export class EffectStack extends Stack {
}
export class SpellStack extends Stack {
}
