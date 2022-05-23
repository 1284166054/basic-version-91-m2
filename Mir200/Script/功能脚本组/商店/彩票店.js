"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bingo = exports.buy = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
欢迎光临，不想试一下你的运气吗？\\
就算没有中奖，我也不负责。\\
如果你同意，就请抽奖吧。\\
到了一定的限度，你的钱会掉到地上，\\
请注意啊!\\\\
<买/@buy>彩票\\
<了解/@Bingo>彩票\\
<关 闭/@exit>
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function buy(Npc, Player, Args) {
    const S = `
请挑选要购买的物品。\ \ \
 <返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.buy = buy;
function Bingo(Npc, Player, Args) {
    const S = `
  1等    1,000,000金币\\
  2等      200,000金币\\
  3等      100,000金币\\
  4等       10,000金币\\
  5等        1,000金币\\
  6等          500金币\\\\
<返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.Bingo = Bingo;
//# sourceMappingURL=%E5%BD%A9%E7%A5%A8%E5%BA%97.js.map