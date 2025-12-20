import { Cost } from "../Commons/Cost";
import { Card, CardType } from "./Card";

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