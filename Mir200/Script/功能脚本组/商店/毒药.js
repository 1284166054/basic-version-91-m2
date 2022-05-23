"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sell = exports.buy = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
请问你要来炼什么药？\\ \\
 <炼/@makedrug>药\\
 有关毒药<听说明/@helpmakedrug>\\ \\
 <关闭/@exit>

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
//# sourceMappingURL=%E6%AF%92%E8%8D%AF.js.map