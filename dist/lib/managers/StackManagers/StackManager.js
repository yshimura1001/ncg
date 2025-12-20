"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackManager = void 0;
const Manager_1 = require("../../baseClasses/Manager");
const SpellStackManager_1 = require("./SpellStackManager");
const EffectStackManager_1 = require("./EffectStackManager");
class StackManager extends Manager_1.Manager {
    constructor() {
        super(...arguments);
        this.spellStackManager = new SpellStackManager_1.SpellStackManager();
        this.effctStackManager = new EffectStackManager_1.EffectStackManager();
    }
}
exports.StackManager = StackManager;
