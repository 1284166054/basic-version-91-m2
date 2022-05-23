"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mwmove = exports.exit1 = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S1 = `
我清楚你的能力,可是里面太恐怖了.. \\
你做好充分准备了吗?\\ \\
<进入未知世界/@exit1>\\
<回到盟重/@mwmove> \\
<继续留在这里/@exit>\\
`;
    const S2 = `
里面是一个危险的未知世界， \\
最以你现在的实力还不能去那里， \\
等以后再来吧！ \\
我可以把你送回你原来的世界。\\ \\
<回到盟重/@mwmove> \\
<继续留在这里/@exit>
`;
    if (Player.Level >= 40) {
        Npc.Say(Player, S1);
    }
    else {
        Npc.Say(Player, S2);
    }
}
exports.Main = Main;
function exit1(Npc, Player, Args) {
    const S = `
非常抱歉,由于服务器资源原因,更多神秘未知地图\\
将在近期开放,请您时刻关注我们的官方网站的更新情况\\
`;
    Npc.Say(Player, S);
}
exports.exit1 = exit1;
function mwmove(Npc, Player, Args) {
    Player.MapMove("3", 330, 330);
}
exports.mwmove = mwmove;
//# sourceMappingURL=%E7%A5%9E%E7%A7%98%E8%80%81%E4%BA%BA.js.map