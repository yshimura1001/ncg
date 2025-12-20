import { Color } from "./Color";

// コストの定義
export interface Cost {
  isEnabled: boolean;
  list: Array<[Color, number]>;
}
