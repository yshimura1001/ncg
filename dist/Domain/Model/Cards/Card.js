// カードタイプの定義
export class CardType {
    constructor(cardType) {
        this.cardType = cardType;
    }
}
CardType.CREATURE = Symbol("CREATURE");
CardType.INSTANT = Symbol("INSTANT");
CardType.SORCERY = Symbol("SORCERY");
CardType.ENCHANT = Symbol("ENCHANT");
CardType.ARTIFACT = Symbol("ARTIFACT");
CardType.TOKEN = Symbol("TOKEN");
CardType.CREST = Symbol("CREST");
export class Card {
    constructor(name, types, cost, text) {
        this.name = name;
        this.types = types;
        this.cost = cost;
        this.text = text;
    }
    getName() { return this.name; }
}
