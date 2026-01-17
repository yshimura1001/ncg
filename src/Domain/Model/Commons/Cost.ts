import { Color } from "./Color.js";

// コストの定義
export interface Cost {
  isEnabled: boolean;
  list: Array<[Color, number]>;
}
