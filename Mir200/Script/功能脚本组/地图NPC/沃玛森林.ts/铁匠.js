"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repair = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
你竟然能跑到这里来？\\
看在你这么卖命的份上，我就帮助你一下。\\
<修理/@repair>\\
<退出/@exit>
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function repair(Npc, Player, Args) {
    const S = `
您要修理吗?\\
<返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.repair = repair;
//# sourceMappingURL=%E9%93%81%E5%8C%A0.js.map