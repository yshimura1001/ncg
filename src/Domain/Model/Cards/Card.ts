import { Cost } from "../Commons/Cost";


// カードタイプの定義
const Creature = Symbol("Creature");
const Instant  = Symbol("Instant");
const Sorcery  = Symbol("Sorcery");
const Enchant  = Symbol("Enchant");
const Artifact = Symbol("Artifact");
const Token    = Symbol("Token");
const Crest    = Symbol("Crest");
export type CardType = typeof Creature | typeof Instant | typeof Sorcery | typeof Enchant | typeof Artifact | typeof Token | typeof Crest;

export class Card {
  constructor(
    private name: string,
    private types: CardType[],
    private cost: Cost,
    private text: string
  ) {}
  getName() :string { return this.name; }
}