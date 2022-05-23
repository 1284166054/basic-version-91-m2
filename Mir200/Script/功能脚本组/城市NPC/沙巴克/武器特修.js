"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s_repair = exports.Main = void 0;
function Main(Npc, Player, Args) {
    let S;
    let CastleGuild = Npc.Castle.Guild;
    if (CastleGuild == undefined) {
        S = `
欢迎..  您想要修理那种装备?...\\
<特殊修理/@s_repair>\\
<离 开/@exit> \\
`;
    }
    else {
        S = `
欢迎..  您想要修理那种装备?...\\
根据这个城堡的主人${Npc.Castle.Guild.ChiefName}的命令, \\
我们特别对${Npc.Castle.Guild.Name}的成员提供20%的折扣\\\\
<特殊修理/@s_repair>\\
<离 开/@exit> \\
`;
    }
    Npc.Say(Player, S);
}
exports.Main = Main;
function s_repair(Npc, Player, Args) {
    const S = `
你这个家伙太幸运了，我正好有材料可以做特种修理...\\\\\\
<返回/@main>
`;
    Npc.Say(Player, S);
}
exports.s_repair = s_repair;
//# sourceMappingURL=%E6%AD%A6%E5%99%A8%E7%89%B9%E4%BF%AE.js.map