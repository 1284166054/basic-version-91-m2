"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sell = exports.buy = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
请问你需要点什么吗？\\ \\
 <买/@buy> 药品\\
 <卖/@sell> 药品\\
 <离 开/@exit>

`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function buy(Npc, Player, Args) {
    const S = `
需要什么物品呢？\\ \\ \\
 <返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.buy = buy;
function sell(Npc, Player, Args) {
    const S = `
让我看看你要卖什么东西.\\ \\ \\
 <返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.sell = sell;
//# sourceMappingURL=%E8%8D%AF%E5%BA%97%20copy.js.map