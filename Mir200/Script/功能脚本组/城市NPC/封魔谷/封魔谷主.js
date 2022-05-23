"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
哈哈,有人来了.\\
封魔堡属于我的主人"虹魔教主",\\
你们是来给他当早餐的吧,嘿嘿...... \\ \\
<打听消息/@info>\\
<确定/@exit>
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function info(Npc, Player, Args) {
    const S = `
前几天抓来一个疯疯癫癫的老头,\\
总说自己是什么掌管世人姻缘的神仙,\\
被我关到阁楼里去了.\\
你认识他吗?\\ \\
<返回/@main>
`;
    Npc.Say(Player, S);
}
exports.info = info;
//# sourceMappingURL=%E5%B0%81%E9%AD%94%E8%B0%B7%E4%B8%BB.js.map