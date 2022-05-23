"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputInteger2 = exports.InputInteger1 = exports.Main = void 0;
let Castle = GameLib.FindCastle("沙巴克");
let HireGuard = 300000; //雇佣护卫
let HireArcher = 300000; //雇佣弓箭手
let RepairDoor = 2000000; //修门
let RepairWall = 500000; //修墙
function Main(Npc, Player, Args) {
    if (!Player.ISCastleMaster) {
        Npc.MessageBox(Player, "你不是城堡管理者，无法进行操作");
        return;
    }
    let S = `
沙巴克是在 <$OWNERGUILD> 的管理下。并且受约束于 <$LORD>\\
城堡的总黄金是: ${Castle.TotalGold}\\
今天的收入是: ${Castle.TodayIncome}\\\\
<收回现金/@@InputInteger1(请输入:需要取出的数值)>        <控制城门/@treatdoor>        <聘用防御护卫/@guardcmd>\\
<贮藏现金/@@InputInteger2(请输入:需要储存的数值)>        <修理城堡/@repaircastle>        <护卫防御方式/@commandorder>\\
<关闭/@EXIT>
`;
    let OWNERGUILD = "GM";
    let LORD = "GM";
    if (Castle.Guild != undefined) {
        OWNERGUILD = Castle.Guild.Name;
        LORD = Castle.Guild.GetChiefName();
    }
    S = S.replace("<$OWNERGUILD>", OWNERGUILD);
    S = S.replace("<$LORD>", LORD);
    Npc.Say(Player, S);
}
exports.Main = Main;
function InputInteger1(Npc, Player, Args) {
    let gold = Args.Int[0];
    if (Castle.TotalGold == 0) {
        Player.MessageBox("城堡资金不足你取什么");
        return;
    }
    if (gold <= 0) {
        Player.MessageBox("请输入正确的金额");
        return;
    }
    Player.Gold += gold;
    Castle.TotalGold -= gold;
    Main(Npc, Player, Args);
    Player.MessageBox("取出城堡资金成功，当前城堡剩余资金:" + Castle.TotalGold);
}
exports.InputInteger1 = InputInteger1;
function InputInteger2(Npc, Player, Args) {
    let gold = Args.Int[0];
    if (gold <= 0) {
        Player.MessageBox("请输入正确的金额");
        return;
    }
    if (Player.Gold < gold) {
        Player.MessageBox("你的金币不够");
        return;
    }
    Player.Gold -= gold;
    Castle.TotalGold += gold;
    Main(Npc, Player, Args);
    Player.MessageBox("储存城堡资金成功，当前城堡剩余资金:" + Castle.TotalGold);
}
exports.InputInteger2 = InputInteger2;
//# sourceMappingURL=%E7%AE%A1%E7%90%86%E4%BA%BA%E5%91%98%20copy.js.map