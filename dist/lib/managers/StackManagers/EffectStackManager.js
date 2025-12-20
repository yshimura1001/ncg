"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffectStackManager = void 0;
const StackManager_1 = require("./StackManager");
const EffectStack_1 = require("../../stacks/EffectStack");
class EffectStackManager extends StackManager_1.StackManager {
    constructor() {
        super();
        this.effectStack = new EffectStack_1.EffectStack();
    }
}
exports.EffectStackManager = EffectStackManager;
