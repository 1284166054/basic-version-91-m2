"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a1 = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
没想到你真能来到这里，作为对你非凡勇气的奖励，\\
我可以送你去圣域，不必付出金钱！\\
而且你想在那里停留多久都可以！\\
但是我的法力目前还没有达到随心如意的阶段\\
可能会传送失败哦~~\\
所以你要考虑清楚哦，想去吗？\\ \\
<想去/@a1>\\
<不想去/@exit>
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function a1(Npc, Player, Args) {
    let n = random(2);
    switch (n) {
        case 0:
            Player.RandomMove("0");
            break;
        case 1:
            Player.RandomMove("B101");
            break;
        case 2:
            Player.RandomMove("B102");
            break;
        default:
            break;
    }
}
exports.a1 = a1;
//# sourceMappingURL=%E5%8D%81%E5%B1%82%E5%90%91%E5%AF%BC.js.map