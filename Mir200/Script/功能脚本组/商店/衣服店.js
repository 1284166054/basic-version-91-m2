"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s_repair = exports.repair = exports.sell = exports.buy = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
请问什么事情需要我帮忙吗？\ \
 <买/@buy> 衣服\
 <卖/@sell> 衣服\
 <修复/@repair> 衣服\
 <关 闭/@exit>
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function buy(Npc, Player, Args) {
    const S = `
你想买什么样的衣服？\ \ \
<返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.buy = buy;
function sell(Npc, Player, Args) {
    const S = `
把要卖的衣服放上去，给你估价。\
头盔和帽子也收购，\
最好一起卖了吧。\ \
 <返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.sell = sell;
function repair(Npc, Player, Args) {
    const S = `
可以修复衣服，头盔，帽子。\ \ \
 <返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.repair = repair;
function s_repair(Npc, Player, Args) {
    const S = `
你这个家伙太幸运了，我正好有材料可以做特种修理...\\ \\ \\ 
<返回/@main>
`;
    Npc.Say(Player, S);
}
exports.s_repair = s_repair;
//# sourceMappingURL=%E8%A1%A3%E6%9C%8D%E5%BA%97.js.map