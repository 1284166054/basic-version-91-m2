"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listwar = exports.aboutwar = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
你想知道最近沙吧克的攻城战役吗?\\\\
<查看./@aboutwar>\\\                                                      
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function aboutwar(Npc, Player, Args) {
    let Castle = GameLib.FindCastle("沙巴克");
    if (Castle.AttackWarCount != 0) {
        const S = `
察看关于最近的攻城战役纪录\\
战役开始时间：${DateUtils.FormatDateTime("YYYY年MM月DD日", Castle.GetAttackWarDate(Castle.AttackWarCount - 1))} , 晚上8:00开始。\\\\
<详细情况：/@listwar>\\
<关闭./@exit>\\
`;
        Npc.Say(Player, S);
    }
    else {
        const S = `
察看关于最近的攻城战役纪录\\
最近没有攻城战！
<详细情况：/@listwar>\\
<关闭./@exit>\\
`;
    }
}
exports.aboutwar = aboutwar;
function listwar(Npc, Player, Args) {
    let S = "";
    let Castle = GameLib.FindCastle("沙巴克");
    for (let index = 0; index < Castle.AttackWarCount; index++) {
        S += Castle.GetAttackWarGuild(index).Name + " \t \t " + DateUtils.FormatDateTime("YYYY年MM月DD日", Castle.GetAttackWarDate(index)) + "\n";
    }
    Npc.Say(Player, S);
}
exports.listwar = listwar;
//# sourceMappingURL=%E6%B2%99%E5%B7%B4%E5%85%8B%E8%80%81%E4%BA%BA.js.map