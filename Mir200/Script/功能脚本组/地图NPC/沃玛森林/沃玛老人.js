"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FM = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
这里是一直被封锁的古城！\\
你确定要进去吗？\\\\
<进入/@FM>\\
<不去/@exit>\\     
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function FM(Npc, Player, Args) {
    Player.RandomMove("4");
}
exports.FM = FM;
//# sourceMappingURL=%E6%B2%83%E7%8E%9B%E8%80%81%E4%BA%BA.js.map