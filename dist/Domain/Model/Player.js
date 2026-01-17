export class Human {
    constructor(name) {
        this.name = name;
    }
}
export class Player extends Human {
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
