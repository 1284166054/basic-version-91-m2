"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s_repair = exports.repair = exports.sell = exports.buy = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
一路上还好吧？要买什么?\\
但是别想讲价钱。\\
不知道今天能不能回到家。\\
<买./@buy>东西\\
<卖./@sell>东西\\
<修理./@repair>东西\\
<关 闭/@exit>\\
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function buy(Npc, Player, Args) {
    const S = `
虽然有点贵，但是趁现在有快买吧。\\\\\\
 <返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.buy = buy;
function sell(Npc, Player, Args) {
    const S = `
要卖什么东西？\\\\\\
 <返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.sell = sell;
function repair(Npc, Player, Args) {
    const S = `
这里可以修理的品种有衣服，武器。\\\\\\
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
//# sourceMappingURL=%E5%8F%A4%E5%A2%93%E5%95%86%E8%B4%A9.js.map