"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatureCard = void 0;
const Card_1 = require("../baseClasses/Card");
class CreatureCard extends Card_1.Card {
    constructor(name, types, cost, text, power, toughness) {
        super(name, types, cost, text);
        this.power = power;
        this.toughness = toughness;
    }
}
exports.CreatureCard = CreatureCard;
