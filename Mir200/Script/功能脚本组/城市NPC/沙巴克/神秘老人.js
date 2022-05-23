"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tongyi = exports.jinru = exports.shabake = exports.talk = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
这里只有沙巴克成员才能前往!\\
当然如果你不是沙巴克成员......\\\\
<从气势上压倒他/@talk(1)>\\
<用眼神威吓他/@talk(2)>\\
<用语言咒骂他/@talk(3)>\\
<我是沙巴克成员/@shabake>\\
<离开/@exit>\\
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function talk(Npc, Player, Args) {
    const S1 = `
我感到你体内蕴含着无比的力量\\
并且想发泄在我身上,罢了罢了\\
我放你进去还不成吗?\\\\
<算你识相/@jinru>\\
<我无语了/@exit>\\
`;
    const S2 = `
你完全不行啊，就算你是沙巴克成员\\
我都不会放你进去的，回家再练练吧\\\\
<灰溜溜的离开/@exit>\\
`;
    const S3 = `
好了好了，差不多了，我服了你了。\\\\
<看你还敢不敢/@jinru>\\
`;
    switch (Args.Int[0]) {
        case 1:
            Npc.Say(Player, S1);
            break;
        case 2:
            Npc.Say(Player, S2);
            break;
        case 3:
            Npc.Say(Player, S3);
            break;
        default:
            break;
    }
}
exports.talk = talk;
function shabake(Npc, Player, Args) {
    const S = `
你知道我是老糊涂了，现在身手不行了，\\
就算你不是沙巴克成员我也不敢赶你出去呀，\\
既然你已经到这里了，那就只好让你进去了!\\\\
<这就进去/@jinru>\\\\
`;
    Npc.Say(Player, S);
}
exports.shabake = shabake;
function jinru(Npc, Player, Args) {
    const S = `
里面便是沙巴克的幻境秘道，\\
多年来只有沙巴克的成员可以独享里面的宝藏。\\
但现在我那个孪生兄弟也知道了进入的方法。\\
要注意里面的收费是与幻境相同而有别于其他地方的\\
进入秘道，我需要收取10万金币作为费用\\
你只有同意以上收费标准,我才能送你进入沙巴克幻境秘道中。\\
<同意/@tongyi>\\
<不同意/@exit>\\
`;
    Npc.Say(Player, S);
}
exports.jinru = jinru;
function tongyi(Npc, Player, Args) {
    if (Player.Gold >= 100000) {
        Player.Gold -= 100000;
        Npc.Give(Player, "回城卷");
        Player.MapMove("h201", 13, 103);
    }
    else {
        Npc.Say(Player, `前往藏宝阁需要10万金币！\\\\<离开/@exit>`);
    }
}
exports.tongyi = tongyi;
//# sourceMappingURL=%E7%A5%9E%E7%A7%98%E8%80%81%E4%BA%BA.js.map