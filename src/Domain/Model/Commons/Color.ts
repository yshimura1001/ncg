// 色の定義
export class Color {
  static WHITE = Symbol("WHITE");
  static BLUE = Symbol("BLUE");
  static BLACK = Symbol("BLACK");
  static RED = Symbol("RED");
  static GREEN = Symbol("GREEN");
  static COLORLESS = Symbol("COLORLESS");
  constructor(
    private color: symbol
  ) {}
}