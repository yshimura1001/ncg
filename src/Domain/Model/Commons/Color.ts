// 色の定義
const White     = Symbol();
const Blue      = Symbol();
const Black     = Symbol();
const Red       = Symbol();
const Green     = Symbol();
const ColorLess = Symbol();
export type Color = typeof White | typeof Blue | typeof Black | typeof Red | typeof Green | typeof ColorLess;