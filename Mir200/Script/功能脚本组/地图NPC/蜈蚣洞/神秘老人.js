"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ad = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
我可以让你进去,但只能在里面待3个小时 \\
自己小心..  \\ \\
<进入山洞/@ad>\\
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function ad(Npc, Player, Args) {
    Player.RandomMove("M001");
    Player.SetTimeRecall(true, 180);
}
exports.ad = ad;
//# sourceMappingURL=%E7%A5%9E%E7%A7%98%E8%80%81%E4%BA%BA.js.map