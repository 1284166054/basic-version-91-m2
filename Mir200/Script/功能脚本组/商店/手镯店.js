"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s_repair = exports.repair = exports.sell = exports.buy = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
请问我可以帮你什么吗?\\\\
<购买/@buy> 手镯\\
<出售/@sell> 手镯\\
<修理/@repair> 手镯\\
<离 开/@exit>
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function buy(Npc, Player, Args) {
    const S = `
请选择你要购买的物品.\\\\\\
<返 回/@Main>
   `;
    Npc.Say(Player, S);
}
exports.buy = buy;
function sell(Npc, Player, Args) {
    const S = `
您出售哪种手镯?\\
我们也回收手套.\\\\
<返 回/@Main>
   `;
    Npc.Say(Player, S);
}
exports.sell = sell;
function repair(Npc, Player, Args) {
    const S = `
你可以修理各种手镯,手套. \\\\\\
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
//# sourceMappingURL=%E6%89%8B%E9%95%AF%E5%BA%97.js.map