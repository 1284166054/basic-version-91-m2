"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reverse1000_1 = exports.Reverse1000 = exports.Change1000_1 = exports.Change1000 = exports.Reverse100_1 = exports.Reverse100 = exports.Change100_1 = exports.Change100 = exports.Reverse500_1 = exports.Reverse500 = exports.Change500_1 = exports.Change500 = exports.gold1000 = exports.gold500 = exports.gold100 = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
你知道我是谁吗？ 告诉你我是何等人物... \\
你要试一下吗..? 说说看需要我帮你做什么 \\\\
 <了解金条./@gold100> \\
 <了解金砖./@gold500> \\
 <关 闭/@exit>
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function gold100(Npc, Player, Args) {
    const S = `
关于金条，我所能做的事情是 \\
将金条换成金币或将金币换成金条 \\
一个金条的价值是100万金币\\
记住了. 你需要我为你做社么? \\ \\
<将金币换成金条./@Change100> \\
<将金条换成金币./@Reverse100>\\
<返 回/@main> \\
`;
    Npc.Say(Player, S);
}
exports.gold100 = gold100;
function gold500(Npc, Player, Args) {
    const S = `
关于金砖，我所能做的是\\
将金砖换成金条或将金条换成金砖\\
一个金砖，其价值等于\\
5个金条. 你需要我为你做什么? \\ \\
<金条换成金砖./@Change500> \\
<金砖换成金条./@Reverse500> \\
<返 回/@main> \\
`;
    Npc.Say(Player, S);
}
exports.gold500 = gold500;
function gold1000(Npc, Player, Args) {
    const S = `
关于金盒，我所能做的是\\
将金盒换成金砖或将金砖换成金盒\\
一个金盒，其价值等于\\
2个金砖， \\
你需要为你做什么? \\\\
<金砖换成金盒./@Change10Set> \\
<金盒换成金砖./@Reverse10Set> \\
<返 回/@main>
`;
    Npc.Say(Player, S);
}
exports.gold1000 = gold1000;
function Change500(Npc, Player, Args) {
    const S = `
你想用金条换金砖? \\
好，我可以帮你换\\
但是你要支付手续费 .. \\
手续费是12000金币，要换吗? \\\\
<交换./@Change500_1> \\
<关闭./@exit>
`;
    Player.Say(S);
}
exports.Change500 = Change500;
function Change500_1(Npc, Player, Args) {
    const S1 = `
你没有5个金条，\\
要我怎么帮你换?\\
等你有足够的金条，再来找我吧.. \\
<返 回/@main> \\
<关闭./@exit>\\
`;
    const S2 = `
没有足够的手续费\\
重新确认一下吧..  \\\\
<返 回/@main> \\
<关闭./@exit>\\
`;
    const S3 = `
金条已经换好金砖. \\
继续换吗? \\
<交换./@Change500> \\
<返 回/@main> \\
<关闭./@exit>\\
`;
    if (Player.GetItemCount("金条") < 5) {
        Npc.Say(Player, S1);
        return;
    }
    if (Player.Gold < 12000) {
        Npc.Say(Player, S2);
        return;
    }
    Npc.Give(Player, "金砖", 1);
    Player.Gold -= 12000;
    Npc.Take(Player, "金条", 5);
    Player.Say(S3);
}
exports.Change500_1 = Change500_1;
function Reverse500(Npc, Player, Args) {
    const S = `
你要将金砖换成金条? \\
好，我可以帮你换\\
但是你要支付手续费 .. \\
手续费是12000金币，要换吗? \\\\
<交换./@Reverse500_1> \\
<关闭./@exit>
`;
    Player.Say(S);
}
exports.Reverse500 = Reverse500;
function Reverse500_1(Npc, Player, Args) {
    const S1 = `
你没有金砖\\
还要我换什么? 等准备好金砖之后 \\
再来找我吧..\\\\
<返 回/@main> \\
<关闭./@exit>\\
`;
    const S2 = `
没有足够的手续费\\
重新确认一下吧..  \\\\
<返 回/@main> \\
<关闭./@exit>\\
`;
    const S3 = `
没有足够的背包空间\\
重新确认一下吧..  \\\\
<返 回/@main> \\
<关闭./@exit>\\
`;
    const S4 = `
金砖已经换好金条. \\
还要继续换吗? \\\\
<交换./@Reverse500> \\
<返 回/@main> \\
<关闭./@exit>\\
`;
    if (Player.GetItemCount("金砖") < 1) {
        Npc.Say(Player, S1);
        return;
    }
    if (Player.Gold < 12000) {
        Npc.Say(Player, S2);
        return;
    }
    if ((Player.MaxBagSize - Player.ItemSize) < 5) {
        Npc.Say(Player, S3);
        return;
    }
    Npc.Give(Player, "金条", 5);
    Player.Gold -= 12000;
    Npc.Take(Player, "金砖", 1);
    Player.Say(S4);
}
exports.Reverse500_1 = Reverse500_1;
function Change100(Npc, Player, Args) {
    const S = `
你想用金币换金条? \\
好，我可以帮你换\\
不过你要支付一定的手续费 \\
手续费是2000金币，你还换吗? \\\\
<交换./@Change100_1> \\
<关闭./@exit>
`;
    Player.Say(S);
}
exports.Change100 = Change100;
function Change100_1(Npc, Player, Args) {
    const S1 = `
你都没有钱，\\
还叫我换什么? 等有钱之后 \\
再来找我吧 \\\\
<返 回/@main>\\
<关闭./@exit>\\
`;
    const S2 = `
没有足够的手续费\\
重新确认一下吧..  \\\\
<返 回/@main> \\
<关闭./@exit>\\
`;
    const S3 = `
没有足够的背包空间\\
重新确认一下吧..  \\\\
<返 回/@main> \\
<关闭./@exit>\\
`;
    const S4 = `
金币已经换好金条. \\
还继续换吗? \\\\
<交换./@Change100> \\
<返 回/@main> \\
<关闭./@exit>\\
`;
    if (Player.Gold < 1000000) {
        Npc.Say(Player, S1);
        return;
    }
    if (Player.Gold < 1002000) {
        Npc.Say(Player, S2);
        return;
    }
    if ((Player.MaxBagSize - Player.ItemSize) < 1) {
        Npc.Say(Player, S3);
        return;
    }
    Npc.Give(Player, "金条", 1);
    Player.Gold -= 1002000;
    Player.Say(S4);
}
exports.Change100_1 = Change100_1;
function Reverse100(Npc, Player, Args) {
    const S = `
你想用金条换金币? \\
好，我可以帮你换\\
不过你要支付一定的手续费\\
手续费是2000金币，要换吗? \\\\
<交换./@Reverse100_1> \\
<关闭./@exit>
`;
    Player.Say(S);
}
exports.Reverse100 = Reverse100;
function Reverse100_1(Npc, Player, Args) {
    const S1 = `
你没有金条\\
还要我换什么? 等准备好金条之后 \\
再来找我吧..\\\\
<返 回/@main> \\
<关闭./@exit>\\
`;
    const S2 = `
没有足够的手续费\\
重新确认一下吧..  \\\\
<返 回/@main> \\
<关闭./@exit>\\
`;
    const S3 = `
包裹里的金币太多了\\
没办法帮你换了..  \\\\
<返 回/@main> \\
<关闭./@exit>\\
`;
    const S4 = `
金条已经换好金币. \\
还要继续换吗? \\\\
<交换./@Reverse100> \\
<返 回/@main> \\
<关闭./@exit>\\
`;
    if (Player.GetItemCount("金条") < 1) {
        Npc.Say(Player, S1);
        return;
    }
    if (Player.Gold > 15000000) {
        Npc.Say(Player, S3);
        return;
    }
    Npc.Take(Player, "金条", 1);
    Player.Gold += 980000;
    Player.Say(S4);
}
exports.Reverse100_1 = Reverse100_1;
function Change1000(Npc, Player, Args) {
    const S = `
你想用金砖换金盒? \\
好，我可以帮你换\\
但是你要支付手续费 .. \\
手续费是24000金币，要换吗? \\\\
<交换./@Change1000_1> \\
<关闭./@exit>
`;
    Player.Say(S);
}
exports.Change1000 = Change1000;
function Change1000_1(Npc, Player, Args) {
    const S1 = `
你没有5个金砖，\\
要我怎么帮你换?\\
等你有足够的金砖，再来找我吧.. \\
<返 回/@main> \\
<关闭./@exit>\\
`;
    const S2 = `
没有足够的手续费\\
重新确认一下吧..  \\\\
<返 回/@main> \\
<关闭./@exit>\\
`;
    const S3 = `
金砖已经换好金盒. \\
继续换吗? \\
<交换./@Change1000> \\
<返 回/@main> \\
<关闭./@exit>\\
`;
    if (Player.GetItemCount("金砖") < 5) {
        Npc.Say(Player, S1);
        return;
    }
    if (Player.Gold < 24000) {
        Npc.Say(Player, S2);
        return;
    }
    Npc.Give(Player, "金盒", 1);
    Player.Gold -= 24000;
    Npc.Take(Player, "金砖", 5);
    Player.Say(S3);
}
exports.Change1000_1 = Change1000_1;
function Reverse1000(Npc, Player, Args) {
    const S = `
你要将金盒换成金砖? \\
好，我可以帮你换\\
但是你要支付手续费 .. \\
手续费是24000金币，要换吗? \\\\
<交换./@Reverse1000_1> \\
<关闭./@exit>
`;
    Player.Say(S);
}
exports.Reverse1000 = Reverse1000;
function Reverse1000_1(Npc, Player, Args) {
    const S1 = `
你没有金盒\\
还要我换什么? 等准备好金盒之后 \\
再来找我吧..\\\\
<返 回/@main> \\
<关闭./@exit>\\
`;
    const S2 = `
没有足够的手续费\\
重新确认一下吧..  \\\\
<返 回/@main> \\
<关闭./@exit>\\
`;
    const S3 = `
没有足够的背包空间\\
重新确认一下吧..  \\\\
<返 回/@main> \\
<关闭./@exit>\\
`;
    const S4 = `
金盒已经换好金砖. \\
还要继续换吗? \\\\
<交换./@Reverse1000> \\
<返 回/@main> \\
<关闭./@exit>\\
`;
    if (Player.GetItemCount("金盒") < 1) {
        Npc.Say(Player, S1);
        return;
    }
    if (Player.Gold < 24000) {
        Npc.Say(Player, S2);
        return;
    }
    if (Player.ItemSize < 5) {
        Npc.Say(Player, S3);
        return;
    }
    Npc.Give(Player, "金砖", 5);
    Player.Gold -= 24000;
    Npc.Take(Player, "金盒", 1);
    Player.Say(S4);
}
exports.Reverse1000_1 = Reverse1000_1;
//# sourceMappingURL=%E5%95%86%E4%BA%BA.js.map