import { Player } from "../Model/Player.js";

/* ターンの構成
ターン→フェイズ→ステップ
*/

/* フェイズとステップの構成
開始フェイズ
  アップキープ・ステップ
  ドロー・ステップ
メイン・フェイズ1
戦闘フェイズ
　攻撃クリーチャー指定ステップ
　ブロッククリーチャー指定ステップ
  戦闘ダメージステップ
メイン・フェイズ2
終了フェイズ
  終了ステップ
  クリンナップ・ステップ
*/

// フェイズの定義
class Phase {
  static OPENING = Symbol("OPENING");
  static DrawPhase    = Symbol("DrawPhase");
  static MAIN_1  = Symbol("MAIN_1");
  static COMBAT = Symbol("COMBAT");
  static MAIN_2  = Symbol("MAIN_2");
  static CLOSING = Symbol("CLOSING");
}

class Turn {
  nowPhase: Phase;
  constructor(
    private mainPlayer: Player,   // メインプレイヤー
    private opponent: Player, // 対戦相手
  ) {
    this.nowPhase = Phase.OPENING;
  }
  nextPhase() :Phase {
    switch(this.nowPhase) {
      case Phase.OPENING:
        this.nowPhase = Phase.MAIN_1;
      case Phase.MAIN_1:
        this.nowPhase = Phase.COMBAT;
      case Phase.COMBAT:
        this.nowPhase = Phase.MAIN_2;
      case Phase.MAIN_2:
        this.nowPhase = Phase.CLOSING;
      default:
        console.log("Invalid Phase!");
    }
    return this.nowPhase;
  }
}