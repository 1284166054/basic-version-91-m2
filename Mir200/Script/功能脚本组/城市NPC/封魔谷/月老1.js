"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevUnmarry = exports.RequestUnmarry = exports.fUnmarry = exports.unmarry = exports.Resposemarry = exports.ResposemarryFail = exports.agree = exports.marry = exports.Main = void 0;
const ____1 = require("../../../\u5168\u5C40\u811A\u672C[\u516C\u5171\u5355\u5143]/\u52A9\u624B\u51FD\u6570");
let Man = 46;
let Wo = 40;
function Main(Npc, Player, Args) {
    const S = `
<我想结婚/@marry>\\
<我想离婚/@unmarry>\\\\
<离开/@exit>
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function marry(Npc, Player, Args) {
    const S = `
求婚者必须是男性且拥有求婚戒指，\\
你准备好求婚了吗？\\ \\
<准备好了/@agree>\\
<下次再来/@Exit>\\ \\ \\
<返回/@Main>
`;
    Npc.Say(Player, S);
}
exports.marry = marry;
function agree(Npc, Player, Args) {
    const S = `
对方想拜你为师，你是否想收此人为徒？ \\
<同意/@Resposemarry> \\
<不同意/@ResposemarryFail>\\
`;
    if ((0, ____1.checkPose)(Player)) {
        let PosePlayer = Player.PoseCreate;
        if (Player.DearName != "") {
            Player.MessageBox("你都都已经拜了别人为师，怎么还结婚！！！");
            return;
        }
        if (Player.Level > pupilLevel) {
            Player.MessageBox("你都" + pupilLevel + "多级了还要找师父？\\");
            return;
        }
        if (PosePlayer.Level < marryLevel) {
            Player.MessageBox("你找个什么师父呀，等级这么低？\\");
            return;
        }
        Npc.Say(PosePlayer, S);
        Npc.Say(Player, "你已向对方请求结婚，请耐心等待对方的答复。");
    }
    else {
        Player.MessageBox("你们二个面对面站好呀，不要乱动");
    }
}
exports.agree = agree;
function ResposemarryFail(Npc, Player, Args) {
    Npc.CloseDialog(Player);
    Npc.Say(Player.PoseCreate, "对方拒绝你的请求");
}
exports.ResposemarryFail = ResposemarryFail;
function Resposemarry(Npc, Player, Args) {
    if ((0, ____1.checkPose)(Player)) {
        let PosePlayer = Player.PoseCreate;
        if (PosePlayer.DearName != "") {
            Player.MessageBox("对方已经有师傅了");
            return;
        }
        if (PosePlayer.Level > pupilLevel) {
            Player.MessageBox("对方都" + pupilLevel + "多级了还要找师父？\\");
            return;
        }
        if (Player.Level < marryLevel) {
            Player.MessageBox("你这个级别怎么能当师傅\\");
            return;
        }
        PosePlayer.SetDearName(Player.Name);
        Npc.Say(Player, "你们二个已经是师徒关系了。\\");
        Npc.Say(PosePlayer, "你们二个已经是师徒关系了。\\");
    }
}
exports.Resposemarry = Resposemarry;
function unmarry(Npc, Player, Args) {
    const S = `
按正常离婚步骤，必须二个人对面对站好位置，\\
如果人来不了你只能选择强行离婚了。\\
<我要强行离婚/@fUnmarry>\\
<返回/@main>
`;
    const S1 = `
离婚仪式现在开始！！！\\
是否确定真的要脱离师徒关系？\\
<确定/@RequestUnmarry>\\
`;
    if (Player.DearName == "") {
        Player.MessageBox("你都没师父，跑来做什么？？");
        return;
    }
    else {
        if ((0, ____1.checkPose)(Player)) {
            let PosePlayer = Player.PoseCreate;
            if (Player.DearName != PosePlayer.Name) {
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
exports.unmarry = unmarry;
function fUnmarry(Npc, Player, Args) {
    if (Player.GetItemCount("金条") != 0) {
        Player.SetDearName("");
        Npc.Take(Player, "金条", 1);
        Npc.Say(Player, "呵呵，你已经脱离苦海");
    }
    else {
        Npc.Say(Player, "要收一根金条的手续费，你没有金条\\\\<确定/@exit>");
    }
}
exports.fUnmarry = fUnmarry;
function RequestUnmarry(Npc, Player, Args) {
    const S = `
对方向你请求，你是否答应？ \\
<我愿意/@RevUnmarry(1)>\\
<不愿意/@RevUnmarry(0)>\\
<返回/@main>
`;
    if ((0, ____1.checkPose)(Player)) {
        let PosePlayer = Player.PoseCreate;
        if (Player.DearName != PosePlayer.Name) {
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
exports.RequestUnmarry = RequestUnmarry;
function RevUnmarry(Npc, Player, Args) {
    if ((0, ____1.checkPose)(Player)) {
        let PosePlayer = Player.PoseCreate;
        if (PosePlayer.DearName != Player.Name) {
            Player.MessageBox("你也不是对方师傅啊");
        }
        else {
            if (Args.Int[0] == 0) {
                Npc.Say(PosePlayer, "对方拒绝了你的请求");
                Npc.CloseDialog(Player);
            }
            if (Args.Int[0] == 1) {
                PosePlayer.SetDearName("");
                Npc.Say(PosePlayer, "呵呵，你已经脱离苦海");
                Npc.CloseDialog(Player);
            }
        }
    }
    else {
        Player.MessageBox("你们二个面对面站好呀，不要乱动");
    }
}
exports.RevUnmarry = RevUnmarry;
//# sourceMappingURL=%E6%9C%88%E8%80%811.js.map