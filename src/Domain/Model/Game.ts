import { Player } from "../Model/Player";

const PlayFirst = Symbol("PlayFirst");
const DrawFirst = Symbol("DrawFirst");
export type Order = typeof PlayFirst | typeof DrawFirst;

interface Game {
  players: Player[];
  order: Order;
}