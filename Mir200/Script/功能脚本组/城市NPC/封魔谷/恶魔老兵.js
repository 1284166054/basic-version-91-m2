"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapMoveStart = exports.移动 = exports.比奇 = exports.goShop = exports.商店 = exports.hj = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
"虹魔教主"有时懒得杀你们,就让我把你们放走,\\
拿钱来,我把你们扔回去!\\\\
<打听幻境消息/@hj>\\
<去比奇/@比奇>\\
<想去商店/@商店>\\
<挑战幻境/@幻境传送.Main>\\\\
<返回/@exit>\\
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function hj(Npc, Player, Args) {
    const S = `
嘘！ 昨天晚上我和我夫人做了同样奇怪的梦！\\
梦见宝藏显现在幻境！\\
而且我还知道幻境的方位，可以领您去！\\
进入幻境以后您可以得到丰富的宝藏！\\
`;
    Npc.Say(Player, S);
}
exports.hj = hj;
function 商店(Npc, Player, Args) {
    const S = `
你想到哪个商店?这可是免费体验服务阿\\\\
<服装店/@goShop(b345)>\\
<武器店/@goShop(b342)>\\
<首饰店/@goShop(b344)>\\
<药书店/@goShop(b343)>\\
<返回/@main>
`;
    Npc.Say(Player, S);
}
exports.商店 = 商店;
function goShop(Npc, Player, Args) {
    Player.RandomMove(Args.Str[0]);
}
exports.goShop = goShop;
function 比奇(Npc, Player, Args) {
    const S = `
移动到比奇需要金币\\
不能让你免费使用\\
你必须支付2000金币你想花这笔钱吗?\\ \\
<移动/@移动> \\
<返回/@main>
`;
    Npc.Say(Player, S);
}
exports.比奇 = 比奇;
function 移动(Npc, Player, Args) {
    if (Player.Gold >= 2000) {
        Player.Gold -= 2000;
        Player.MapMove("0", 333, 268);
    }
    else {
        Npc.Say(Player, `你开玩笑吗？你没钱还想移动？\\我再也不想见到你。\\`);
    }
}
exports.移动 = 移动;
function mapMoveStart(Npc, Player, Args) {
    if (Player.Gold >= Args.Int[3]) {
        Player.Gold -= Args.Int[3];
        Player.MapMove(Args.Str[0], Args.Int[1], Args.Int[2]);
    }
    else {
        Player.MessageBox("你没有足够的金币用来支付我们的服务费用!\\请努力赚钱哦:)\\");
    }
}
exports.mapMoveStart = mapMoveStart;
//# sourceMappingURL=%E6%81%B6%E9%AD%94%E8%80%81%E5%85%B5.js.map