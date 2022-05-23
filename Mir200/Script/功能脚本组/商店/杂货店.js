"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s_repair = exports.repair = exports.sell = exports.buy = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
请问我可以为你做什么吗?\\\\
<购买/@buy> 物品\\
<出售/@sell> 物品\\
<特殊修复/@s_repair> 勋章\\
<离 开/@exit>
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
人们出售各种物品...\\ \\
世道艰难啊, 唉，选择你要出售的物品吧...\\
`;
    Npc.Say(Player, S);
}
exports.sell = sell;
function repair(Npc, Player, Args) {
    const S = `
可以修复勋章\\\\\\
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
//# sourceMappingURL=%E6%9D%82%E8%B4%A7%E5%BA%97.js.map