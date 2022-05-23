"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s_repair = exports.repair = exports.sell = exports.buy = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
你竟然能跑到这里来？\\
看在你这么卖命的份上，我就帮助你一下。\\
顺便告诉你一下，一旦进入幻境迷宫，就再也不能回头了！\\\\
<买/@buy>\\
<卖/@sell>\\
<修理/@repair>\\
<特殊修理/@s_repair>\\
<退出/@exit>
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function buy(Npc, Player, Args) {
    const S = `
你需要哪种物品呢？\\\\\\
<返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.buy = buy;
function sell(Npc, Player, Args) {
    const S = `
选择你要出售的物品吧...\\
`;
    Npc.Say(Player, S);
}
exports.sell = sell;
function repair(Npc, Player, Args) {
    const S = `
您要修理吗?\\
我可是个万能工匠哦！\\\\
<返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.repair = repair;
function s_repair(Npc, Player, Args) {
    const S = `
你这个家伙太幸运了，我正好有材料可以做特种修理...\\\\\\
<返回/@main>
`;
    Npc.Say(Player, S);
}
exports.s_repair = s_repair;
//# sourceMappingURL=%E5%B9%BB%E5%A2%83%E5%B0%8F%E8%B4%A9.js.map