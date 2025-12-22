"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
// カードタイプの定義
const Creature = Symbol("Creature");
const Instant = Symbol("Instant");
const Sorcery = Symbol("Sorcery");
const Enchant = Symbol("Enchant");
const Artifact = Symbol("Artifact");
const Token = Symbol("Token");
const Crest = Symbol("Crest");
class Card {
    constructor(name, types, cost, text) {
        this.name = name;
        this.types = types;
        this.cost = cost;
        this.text = text;
    }
    getName() { return this.name; }
}
exports.Card = Card;
