"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpellStackManager = void 0;
const StackManager_1 = require("./StackManager");
const SpellStack_1 = require("../../stacks/SpellStack");
class SpellStackManager extends StackManager_1.StackManager {
    constructor() {
        super();
        this.spellStack = new SpellStack_1.SpellStack();
    }
}
exports.SpellStackManager = SpellStackManager;
