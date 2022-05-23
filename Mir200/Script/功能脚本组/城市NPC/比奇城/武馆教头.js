"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevUnMaster = exports.RequestUnMaster = exports.fUnMaster = exports.unmaster = exports.ResposeMaster = exports.ResposeMasterFail = exports.agree = exports.master = exports.Main = void 0;
const ____1 = require("./../../../\u5168\u5C40\u811A\u672C[\u516C\u5171\u5355\u5143]/\u52A9\u624B\u51FD\u6570");
let masterLevel = 46;
let pupilLevel = 40;
function Main(Npc, Player, Args) {
    const S = `
<我想拜师/@master>\\
<我想出师/@unmaster>\\\\
<离开/@exit>
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function master(Npc, Player, Args) {
    const S = `
想拜师呀，你要拜的师父来了没有？\\
与你师父面对面站好，开始拜师。\\
<准备好了/@agree>\\
<我知道了/@exit>\\
<返回/@main>
`;
    Npc.Say(Player, S);
}
exports.master = master;
function agree(Npc, Player, Args) {
    const S = `
对方想拜你为师，你是否想收此人为徒？ \\
<同意/@ResposeMaster> \\
<不同意/@ResposeMasterFail>\\
`;
    if ((0, ____1.checkPose)(Player)) {
        let PosePlayer = Player.PoseCreate;
        if (Player.MasterName != "") {
            Player.MessageBox("你都都已经拜了别人为师，怎么还拜师！！！");
            return;
        }
        if (Player.Level > pupilLevel) {
            Player.MessageBox("你都" + pupilLevel + "多级了还要找师父？\\");
            return;
        }
        if (PosePlayer.Level < masterLevel) {
            Player.MessageBox("你找个什么师父呀，等级这么低？\\");
            return;
        }
        Npc.Say(PosePlayer, S);
        Npc.Say(Player, "你已向对方请求拜师，请耐心等待对方的答复。");
    }
    else {
        Player.MessageBox("你们二个面对面站好呀，不要乱动");
    }
}
exports.agree = agree;
function ResposeMasterFail(Npc, Player, Args) {
    Npc.CloseDialog(Player);
    Npc.Say(Player.PoseCreate, "对方拒绝你的请求");
}
exports.ResposeMasterFail = ResposeMasterFail;
function ResposeMaster(Npc, Player, Args) {
    if ((0, ____1.checkPose)(Player)) {
        let PosePlayer = Player.PoseCreate;
        if (PosePlayer.MasterName != "") {
            Player.MessageBox("对方已经有师傅了");
            return;
        }
        if (PosePlayer.Level > pupilLevel) {
            Player.MessageBox("对方都" + pupilLevel + "多级了还要找师父？\\");
            return;
        }
        if (Player.Level < masterLevel) {
            Player.MessageBox("你这个级别怎么能当师傅\\");
            return;
        }
        PosePlayer.SetMasterName(Player.Name);
        Npc.Say(Player, "你们二个已经是师徒关系了。\\");
        Npc.Say(PosePlayer, "你们二个已经是师徒关系了。\\");
    }
}
exports.ResposeMaster = ResposeMaster;
function unmaster(Npc, Player, Args) {
    const S = `
按正常出师步骤，必须二个人对面对站好位置，\\
如果人来不了你只能选择强行出师了。\\
<我要强行出师/@fUnMaster>\\
<返回/@main>
`;
    const S1 = `
出师仪式现在开始！！！\\
是否确定真的要脱离师徒关系？\\
<确定/@RequestUnMaster>\\
`;
    if (Player.MasterName == "") {
        Player.MessageBox("你都没师父，跑来做什么？？");
        return;
    }
    else {
        if ((0, ____1.checkPose)(Player)) {
            let PosePlayer = Player.PoseCreate;
            if (Player.MasterName != PosePlayer.Name) {
                Player.MessageBox("对方也不是你师傅啊");
            }
            else {
                Npc.Say(Player, S1);
            }
        }
        else {
            Npc.Say(Player, S);
        }
    }
}
exports.unmaster = unmaster;
function fUnMaster(Npc, Player, Args) {
    if (Player.GetItemCount("金条") != 0) {
        Player.SetMasterName("");
        Npc.Take(Player, "金条", 1);
        Npc.Say(Player, "呵呵，你已经脱离苦海");
    }
    else {
        Npc.Say(Player, "要收一根金条的手续费，你没有金条\\\\<确定/@exit>");
    }
}
exports.fUnMaster = fUnMaster;
function RequestUnMaster(Npc, Player, Args) {
    const S = `
对方向你请求，你是否答应？ \\
<我愿意/@RevUnMaster(1)>\\
<不愿意/@RevUnMaster(0)>\\
<返回/@main>
`;
    if ((0, ____1.checkPose)(Player)) {
        let PosePlayer = Player.PoseCreate;
        if (Player.MasterName != PosePlayer.Name) {
            Player.MessageBox("对方也不是你师傅啊");
        }
        else {
            Npc.Say(PosePlayer, S);
            Npc.Say(Player, "你已向对方发出请求，请耐心等待对方的答复。");
        }
    }
    else {
        Player.MessageBox("你们二个面对面站好呀，不要乱动");
    }
}
exports.RequestUnMaster = RequestUnMaster;
function RevUnMaster(Npc, Player, Args) {
    if ((0, ____1.checkPose)(Player)) {
        let PosePlayer = Player.PoseCreate;
        if (PosePlayer.MasterName != Player.Name) {
            Player.MessageBox("你也不是对方师傅啊");
        }
        else {
            if (Args.Int[0] == 0) {
                Npc.Say(PosePlayer, "对方拒绝了你的请求");
                Npc.CloseDialog(Player);
            }
            if (Args.Int[0] == 1) {
                PosePlayer.SetMasterName("");
                Npc.Say(PosePlayer, "呵呵，你已经脱离苦海");
                Npc.CloseDialog(Player);
            }
        }
    }
    else {
        Player.MessageBox("你们二个面对面站好呀，不要乱动");
    }
}
exports.RevUnMaster = RevUnMaster;
//# sourceMappingURL=%E6%AD%A6%E9%A6%86%E6%95%99%E5%A4%B4.js.map