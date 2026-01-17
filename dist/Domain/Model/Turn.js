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
}
Phase.OPENING = Symbol("OPENING");
Phase.DrawPhase = Symbol("DrawPhase");
Phase.MAIN_1 = Symbol("MAIN_1");
Phase.COMBAT = Symbol("COMBAT");
Phase.MAIN_2 = Symbol("MAIN_2");
Phase.CLOSING = Symbol("CLOSING");
class Turn {
    constructor(mainPlayer, // メインプレイヤー
    opponent) {
        this.mainPlayer = mainPlayer;
        this.opponent = opponent;
        this.nowPhase = Phase.OPENING;
    }
    nextPhase() {
        switch (this.nowPhase) {
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
export {};
