"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const DrawPhase = Symbol("DrawPhase");
const UntapPhase = Symbol();
const UpKeepPhase = Symbol();
const MainPhase_1 = Symbol("MainPhase_1");
const CombatPahase = Symbol("CombatPhase");
const MainPhase_2 = Symbol("MainPhase_2");
const ExitPhase = Symbol("ExitPhase");
class Turn {
    constructor(mainPlayer, // メインプレイヤー
    opponent) {
        this.mainPlayer = mainPlayer;
        this.opponent = opponent;
        this.nowPhase = DrawPhase;
    }
    nextPhase() {
        switch (this.nowPhase) {
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
