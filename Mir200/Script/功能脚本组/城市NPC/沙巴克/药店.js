"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sell = exports.buy = exports.Main = void 0;
function Main(Npc, Player, Args) {
    let S;
    let CastleGuild = Npc.Castle.Guild;
    if (CastleGuild == undefined) {
        S = `
这里是卖药的... 什么？你已经知道了？\\
哼，好吧，那么买了东西赶紧走吧，能走多快就走多快\\
<买/@buy> 药品\\
<卖/@sell> 药品\\
<离 开/@exit>\\
`;
    }
    else {
        S = `
这里是卖药的... 什么？你已经知道了？\\
哼，好吧，那么买了东西赶紧走吧，能走多快就走多快\\
根据这个城堡的主人${Npc.Castle.Guild.ChiefName}的命令, \\
我们特别对${Npc.Castle.Guild.Name}的成员提供20%的折扣\\\\
<买/@buy> 药品\\
<卖/@sell> 药品\\
<离 开/@exit>\\
`;
    }
    Npc.Say(Player, S);
}
exports.Main = Main;
function buy(Npc, Player, Args) {
    const S = `
找到你想要的了吗？\\
怎么这么慢？请快点做出选择！\\\\\\
<返 回/@Main>\\
`;
    Npc.Say(Player, S);
}
exports.buy = buy;
function sell(Npc, Player, Args) {
    const S = `
你想卖东西？这太过分了，我的生意最近不大好...\\
卖了以后赶紧该干啥干啥去吧！\\\\
<返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.sell = sell;
//# sourceMappingURL=%E8%8D%AF%E5%BA%97.js.map