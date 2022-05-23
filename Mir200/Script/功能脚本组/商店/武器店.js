"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s_repair = exports.repair = exports.sell = exports.buy = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
欢迎光临.  感谢您到我们的铁匠铺.\\\\
<买/@buy> 武器\\
<卖/@sell> 武器\\
<修理/@repair> 武器\\
<离 开/@exit>
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function buy(Npc, Player, Args) {
    const S = `
您想买些什么武器?\\\\\\
<返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.buy = buy;
function sell(Npc, Player, Args) {
    const S = `
给我您要卖的武器.\\\\\\
<返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.sell = sell;
function repair(Npc, Player, Args) {
    const S = `
您要修理武器吗?\\
给我您要修理的武器.\\\\
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
//# sourceMappingURL=%E6%AD%A6%E5%99%A8%E5%BA%97.js.map