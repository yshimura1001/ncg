import { Player } from "../Model/Player.js";

export class Order {
  static PLAY_FIRST = Symbol("PLAY_FIRST");
  static DRAW_FIRST = Symbol("DRAW_FIRST");
  constructor(
    private order: symbol
  ) {}
}
export interface Game {
  players: Player[];
  order: Order;
}