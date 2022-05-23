"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addbodyluck = void 0;
function addbodyluck(Player, n) {
    let bodyluck = Player.VarString("bodyluck").AsInteger + Math.trunc(n);
    let bodyluckLevel = Math.trunc(bodyluck / 5000);
    Player.VarString("bodyluck").AsInteger = bodyluck;
    Player.VarString("bodyluckLevel").AsInteger = bodyluckLevel;
    Player.VarString("bodyluck").Save();
    Player.VarString("bodyluckLevel").Save();
}
exports.addbodyluck = addbodyluck;
//# sourceMappingURL=%E5%A2%9E%E5%8A%A0%E9%9A%90%E8%97%8F%E5%B9%B8%E8%BF%90%E5%80%BC.js.map