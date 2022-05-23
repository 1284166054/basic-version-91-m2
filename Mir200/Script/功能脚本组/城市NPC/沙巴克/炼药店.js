"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpitem_2 = exports.helpitem_1 = exports.helpmakedrug2 = exports.helpmakedrug1 = exports.helpdrug2 = exports.helpdrug1 = exports.helpmakedrug = exports.makedrug = exports.Main = void 0;
function Main(Npc, Player, Args) {
    let S;
    let CastleGuild = Npc.Castle.Guild;
    if (CastleGuild == undefined) {
        S = `
请问你要来炼什么药？\\\\
<炼/@makedrug>药\\
有关毒药<听说明/@helpmakedrug>\\\\
<关闭/@exit>

`;
    }
    else {
        S = `
请问你要来炼什么药？\\\\
根据这个城堡的主人${Npc.Castle.Guild.ChiefName}的命令, \\
我们特别对${Npc.Castle.Guild.Name}的成员提供20%的折扣\\\\
<炼/@makedrug>药\\
有关毒药<听说明/@helpmakedrug>\\\\
<关闭/@exit>

`;
    }
    Npc.Say(Player, S);
}
exports.Main = Main;
function makedrug(Npc, Player, Args) {
    const S = `
请选择想炼什么药。\\
所需材料应该带来了吧？\\\\
<返 回/@Main>
`;
    Npc.Say(Player, S);
}
exports.makedrug = makedrug;
function helpmakedrug(Npc, Player, Args) {
    const S = `
这里可以炼的药只有两种。\\\\
<灰色毒粉/@helpdrug1>的功能\\
<黄色毒粉/@helpdrug2>的功能\\
<灰色毒粉/@helpmakedrug1>的原料\\
<黄色毒粉/@helpmakedrug2>的原料\\\\
<返回/@Main>
`;
    Npc.Say(Player, S);
}
exports.helpmakedrug = helpmakedrug;
function helpdrug1(Npc, Player, Args) {
    const S = `
道士可以在使施毒术时，用灰色毒粉，\\
中毒会减掉体力。\\\\
<返回/@helpmakedrug>
`;
    Npc.Say(Player, S);
}
exports.helpdrug1 = helpdrug1;
function helpdrug2(Npc, Player, Args) {
    const S = `
道士可以在使施毒术时，用黄色毒粉，\\
中毒会减掉防御能力。\\\\
<返回/@helpmakedrug>

`;
    Npc.Say(Player, S);
}
exports.helpdrug2 = helpdrug2;
function helpmakedrug1(Npc, Player, Args) {
    const S = `
灰色毒粉的原料有<食人树果实/@helpitem_1>1个，<毒蜘蛛牙齿>2个，\\
<食人树叶>4个。\\\\
<返回/@helpmakedrug>
`;
    Npc.Say(Player, S);
}
exports.helpmakedrug1 = helpmakedrug1;
function helpmakedrug2(Npc, Player, Args) {
    const S = `
黄色毒粉的原料有<蛆卵/@helpitem_2>1个，\\
<蝎子尾巴>1个，<食人树叶>4个。\\\\
<返回/@helpmakedrug>
`;
    Npc.Say(Player, S);
}
exports.helpmakedrug2 = helpmakedrug2;
function helpitem_1(Npc, Player, Args) {
    const S = `
割食人花可以得到食人树的果子，\\
但是5个食人花中可以得到果实的只有1个。\\\\
<返回/@helpmakedrug1>
`;
    Npc.Say(Player, S);
}
exports.helpitem_1 = helpitem_1;
function helpitem_2(Npc, Player, Args) {
    const S = `
抓到洞穴里的洞蛆，就可以得到蛆卵。\\
长得像圆圆的茧。\\\\
<返回/@helpmakedrug2>

`;
    Npc.Say(Player, S);
}
exports.helpitem_2 = helpitem_2;
//# sourceMappingURL=%E7%82%BC%E8%8D%AF%E5%BA%97.js.map