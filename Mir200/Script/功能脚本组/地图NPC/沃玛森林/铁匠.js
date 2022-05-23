"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repair = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
欢迎光临，需要我帮什么忙吗？\\\\
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