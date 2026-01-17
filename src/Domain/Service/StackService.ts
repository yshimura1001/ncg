import { Service } from "./Service.js";
import { Player } from "../Model/Player.js";
import { Card } from "../Model/Cards/Card.js";
import { Effect } from "../Model/Effects/Effect.js";

export class StackService extends Service {
  private effctStackService: EffectStackService = new EffectStackService();
  private spellStackService: SpellStackService = new SpellStackService();
  getEffectStackService() : EffectStackService {
    return this.effctStackService;
  }
  getSpellStackService() :SpellStackService {
    return this.spellStackService;
  }
}

class EffectStackService extends StackService {
  private effectStack: EffectStack;

  constructor() {
    super();
    this.effectStack = new EffectStack();
  }
}

class SpellStackService extends StackService {
  private spellStack: SpellStack;

  constructor() {
    super();
    this.spellStack = new SpellStack();
  }
}

class StackNode {
  constructor(
    private player: Player,
    private card: Card,
    private effect: Effect
  ) {}
  toString() :string {
    return `<${this.player.getOrder}, ${this.card.getName()}, ${this.effect}>`;
  }
}
// JavaScriptの配列を用いたStack簡易実装
// 問題が発生したら、本格的なものに書き直す。
class Stack {
  constructor(
    private nodes: StackNode[] = []
  ) {}
  makeStackNodeAndPush(player: Player, card: Card, effect: Effect) :void {
    this.nodes.push(this.makeStackNode(player, card, effect));
  }
  pop() :StackNode | undefined {
    let value = this.nodes.pop();
    if(undefined === value) {
      console.log('Stack Error!');
      return;
    }
    return value;
  }
  peek() :StackNode {
    return this.nodes[this.nodes.length - 1];
  }
  private makeStackNode(player: Player, card: Card, effect: Effect) :StackNode {
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