"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = exports.Human = void 0;
class Human {
    constructor(name) {
        this.name = name;
    }
}
exports.Human = Human;
class Player extends Human {
    constructor(name, order, hasRight, // 優先権
    life = 20, deck, hand = [], tempHand = [], // 一時的な手札。大量ドローなどで利用する。
    cemetery = [], // 墓地
    outerGame = []) {
        super(name);
        this.order = order;
        this.hasRight = hasRight;
        this.life = life;
        this.deck = deck;
        this.hand = hand;
        this.tempHand = tempHand;
        this.cemetery = cemetery;
        this.outerGame = outerGame;
    }
    getOrder() { return this.order; }
}
exports.Player = Player;
