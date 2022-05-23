"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sell = exports.buy = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
欢迎, 我可以为你做什么吗?\\
不要想打折...\\
我认为你别无选择...\\\\
<购买/@buy> 物品\\
<出售/@sell> 物品\\\\
<离 开/@exit>\\
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function buy(Npc, Player, Args) {
    const S = `
虽然有点贵，但是趁现在有快买吧。\\\\\\
<返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.buy = buy;
function sell(Npc, Player, Args) {
    const S = `
要卖什么? 收购衣服或武器.\\\\\\
<返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.sell = sell;
//# sourceMappingURL=%E7%BA%A2%E5%90%8D%E6%9D%91%E8%80%81%E4%BA%BA.js.map