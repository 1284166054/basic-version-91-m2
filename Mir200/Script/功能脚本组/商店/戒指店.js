"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s_repair = exports.repair = exports.sell = exports.buy = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
请问我可以帮你什么吗?\\\\
<购买/@buy> 戒指\\
<出售/@sell> 戒指\\
<修理/@repair> 戒指\\
<离 开/@exit>
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function buy(Npc, Player, Args) {
    const S = `
您购买哪种戒指?\\\\\\
<返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.buy = buy;
function sell(Npc, Player, Args) {
    const S = `
您出售哪种戒指?\\\\\\
<返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.sell = sell;
function repair(Npc, Player, Args) {
    const S = `
您要修理戒指?\\\\\\
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
//# sourceMappingURL=%E6%88%92%E6%8C%87%E5%BA%97.js.map