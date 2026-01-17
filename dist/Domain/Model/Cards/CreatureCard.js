import { Card } from "./Card.js";
export class CreatureCard extends Card {
    constructor(name, types, cost, text, power, toughness) {
        super(name, types, cost, text);
        this.power = power;
        this.toughness = toughness;
    }
}
