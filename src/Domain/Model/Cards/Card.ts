import { Cost } from "../Commons/Cost";

// カードタイプの定義
export class CardType {
  static CREATURE = Symbol("CREATURE");
  static INSTANT  = Symbol("INSTANT");
  static SORCERY  = Symbol("SORCERY");
  static ENCHANT  = Symbol("ENCHANT");
  static ARTIFACT = Symbol("ARTIFACT");
  static TOKEN    = Symbol("TOKEN");
  static CREST    = Symbol("CREST");
  constructor(
    private cardType: symbol
  ) {}
}

export class Card {
  constructor(
    private name: string,
    private types: CardType[],
    private cost: Cost,
    private text: string
  ) {}
  getName() :string { return this.name; }
}