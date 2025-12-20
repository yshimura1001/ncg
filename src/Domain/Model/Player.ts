import { Card } from "./Cards/Card";
import { Order } from "./Game";

export class Human {
  constructor(
    private name: string
  ) {}
}
export class Player extends Human {
  constructor(
    name: string,
    private order: Order,
    private hasRight: boolean, // 優先権
    private life: number = 20,
    private deck: Card[],
    private hand: Card[] = [],
    private tempHand: Card[] = [], // 一時的な手札。大量ドローなどで利用する。
    private cemetery: Card[] = [], // 墓地
    private outerGame: Card[] = [],  // 追放領域
  ) {
      super(name);
    }
    getOrder() :Order { return this.order }
}