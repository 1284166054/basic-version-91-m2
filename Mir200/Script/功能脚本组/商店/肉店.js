"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meathelp = exports.sell = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
最近我这里可以卖肉.\\
我会出高价钱购买!\\\\
<卖/@sell>\\
<询问/@meathelp>\\
<离开/@exit>\\

`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function sell(Npc, Player, Args) {
    const S = `
<肉>在鸡，鹿身上暴!\\
<继续/@main>
`;
    Npc.Say(Player, S);
}
exports.sell = sell;
function meathelp(Npc, Player, Args) {
    const S = `
肉可以从鸡、鹿、羊身上割的，先打这些怪物，小心碰到\\
被比自己厉害的怪物打死，打死怪物之后，按alt键，把鼠标\\
放在怪物尸体上，您就会看到自己割肉的样子。过一会儿，\\
您的包里就会放着一个大肉块。对了，差一点忘了告诉你，\\
企图逃跑的怪物品质更好。用魔法打的怪物，其品质会变成0，\\
这一点千万记住。\\\\
<返回/@main>
`;
    Npc.Say(Player, S);
}
exports.meathelp = meathelp;
//# sourceMappingURL=%E8%82%89%E5%BA%97.js.map