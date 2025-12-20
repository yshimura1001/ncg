import { Player } from "../Model/Player";

/*
ターンの構成
開始フェイズ
  アンタップ・ステップ
  アップキープ・ステップ
  ドロー・ステップ
メイン・フェイズ
戦闘フェイズ
  戦闘開始ステップ
  攻撃クリーチャー指定ステップ
  ブロック・クリーチャー指定ステップ
  戦闘ダメージ・ステップ
  戦闘終了ステップ
終了フェイズ
  終了ステップ
  クリンナップ・ステップ
*/

// フェイズの定義
const DrawPhase    = Symbol("DrawPhase");
const UntapPhase   = Symbol();
const UpKeepPhase  = Symbol();
const MainPhase_1  = Symbol("MainPhase_1");
const CombatPahase = Symbol("CombatPhase");
const MainPhase_2  = Symbol("MainPhase_2");
const ExitPhase    = Symbol("ExitPhase");
export type Phase = typeof DrawPhase | typeof UntapPhase | typeof UpKeepPhase | typeof MainPhase_1 | typeof CombatPahase | typeof MainPhase_2 | typeof ExitPhase;

class Turn {
  nowPhase: Phase;
  constructor(
    private mainPlayer: Player,   // メインプレイヤー
    private opponent: Player, // 対戦相手
  ) {
    this.nowPhase = DrawPhase;
  }
  nextPhase() {
    switch(this.nowPhase) {
      case DrawPhase:
        this.nowPhase = UntapPhase;
      case UntapPhase:
        this.nowPhase = MainPhase_1;
      case MainPhase_1:
        this.nowPhase = CombatPahase;
      case CombatPahase:
        this.nowPhase = MainPhase_2;
      case MainPhase_2:
        this.nowPhase = ExitPhase;
      default:
        console.log("Invalid Phase!");
    }
  }
}