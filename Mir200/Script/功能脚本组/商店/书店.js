"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sell = exports.buy = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
这里保存着学徒们需要练学的各种书籍. 你需要什么书? \\\\
<购买/@buy> 书籍\\
<出售/@sell> 书籍\\\\
<关 闭/@exit>
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function buy(Npc, Player, Args) {
    const S = `
请你自己选择你需要的书。\\
<返 回/@main>
`;
    Npc.Say(Player, S);
}
exports.buy = buy;
function sell(Npc, Player, Args) {
    const S = `
如果你有不错的书籍，我也可以购买. 请把要出售的书籍放入栏里 \\\\
<返 回/@main>
`;
    Npc.Say(Player, S);
}
exports.sell = sell;
//# sourceMappingURL=%E4%B9%A6%E5%BA%97.js.map