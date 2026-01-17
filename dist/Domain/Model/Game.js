export class Order {
    constructor(order) {
        this.order = order;
    }
}
Order.PLAY_FIRST = Symbol("PLAY_FIRST");
Order.DRAW_FIRST = Symbol("DRAW_FIRST");
