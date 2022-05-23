"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.j2 = exports.SY = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
嗯,消息挺灵的嘛，这么快就找我到这。\\
你想去挑战强大的怪物吗？不过你只有60分钟时间，\\
60分种你还会回来。而且这是要花费金钱的，\\
毕竟抓来他们也不荣誉，而且我也不能保障你们的安全。\\
那么还想试试吗？每进去一次收你一根金条。\\
<打听圣域的消息/@SY>\\
<去/@j2>\\
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function SY(Npc, Player, Args) {
    const S = `
荣誉勋章乃圣域至宝，\\
不过你会首先到达一个叫"圣域之门"的地方。\\
可别在这个空旷的房间里滞留太长时间哦，\\
迈出你的第一步，传说中的圣域异兽就会出现。\\
你可要小心应付啊!\\
<关闭/@exit>\\
`;
    Npc.Say(Player, S);
}
exports.SY = SY;
function j2(Npc, Player, Args) {
    if (Player.GetItemCount("金条") >= 1) {
        Npc.Take(Player, "金条", 1);
        Player.RandomMove("B101");
        Player.Give("回城卷");
        Player.SetTimeRecall(true, 60);
    }
    else {
        Player.MessageBox("你没有钱");
    }
}
exports.j2 = j2;
//# sourceMappingURL=%E6%B5%B7%E5%B2%9B%E8%80%81%E5%85%B5.js.map