"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s_repair = exports.repair = exports.sell = exports.buy = exports.Main = void 0;
function Main(Npc, Player, Args) {
    let S;
    let CastleGuild = Npc.Castle.Guild;
    if (CastleGuild == undefined) {
        S = `
欢迎来商店. 我们专卖头盔.\\
你要购买哪种头盔.\\
<购买/@buy> 头盔 \\
<出售/@sell> 头盔\\
<修理/@repair> 头盔\\
<离 开/@exit>\\
`;
    }
    else {
        S = `
欢迎来商店. 我们专卖头盔.\\
你要购买哪种头盔.\\
根据这个城堡的主人${Npc.Castle.Guild.ChiefName}的命令, \\
我们特别对${Npc.Castle.Guild.Name}的成员提供20%的折扣\\\\
<购买/@buy> 头盔 \\
<出售/@sell> 头盔\\
<修理/@repair> 头盔\\
<离 开/@exit>\\
`;
    }
    Npc.Say(Player, S);
}
exports.Main = Main;
function buy(Npc, Player, Args) {
    const S = `
你要买头盔吗?\\\\\\
<返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.buy = buy;
function sell(Npc, Player, Args) {
    const S = `
你要出售头盔?\\\\\\
<返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.sell = sell;
function repair(Npc, Player, Args) {
    const S = `
您要修理头盔?\\\\\
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
//# sourceMappingURL=%E5%A4%B4%E7%9B%94%E5%BA%97.js.map