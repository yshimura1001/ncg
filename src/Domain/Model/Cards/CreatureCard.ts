import { Cost } from "../Commons/Cost.js";
import { Card, CardType } from "./Card.js";

export class CreatureCard extends Card {
  constructor(
    name: string,
    types: CardType[],
    cost: Cost,
    text: string,
    private power: number,
    private toughness: number) {
      super(name, types, cost, text);
    }
}