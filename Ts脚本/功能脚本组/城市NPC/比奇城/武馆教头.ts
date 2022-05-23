import { checkPose } from "./../../../全局脚本[公共单元]/助手函数"
let masterLevel = 46
let pupilLevel = 40

export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
<我想拜师/@master>\\
<我想出师/@unmaster>\\\\
<离开/@exit>
`
    Npc.Say(Player, S)
}

export function master(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
想拜师呀，你要拜的师父来了没有？\\
与你师父面对面站好，开始拜师。\\
<准备好了/@agree>\\
<我知道了/@exit>\\
<返回/@main>
`
    Npc.Say(Player, S)
}

export function agree(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S =
        `
对方想拜你为师，你是否想收此人为徒？ \\
<同意/@ResposeMaster> \\
<不同意/@ResposeMasterFail>\\
`

    if (checkPose(Player)) {
        let PosePlayer = Player.PoseCreate as TPlayObject
        if (Player.MasterName != "") {
            Player.MessageBox("你都都已经拜了别人为师，怎么还拜师！！！")
            return
        }


        if (Player.Level > pupilLevel) {
            Player.MessageBox("你都" + pupilLevel + "多级了还要找师父？\\")
            return
        }


        if (PosePlayer.Level < masterLevel) {
            Player.MessageBox("你找个什么师父呀，等级这么低？\\")
            return
        }

        Npc.Say(PosePlayer, S)
        Npc.Say(Player, "你已向对方请求拜师，请耐心等待对方的答复。")

    } else {
        Player.MessageBox("你们二个面对面站好呀，不要乱动")
    }

}

export function ResposeMasterFail(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    Npc.CloseDialog(Player)
    Npc.Say(Player.PoseCreate as TPlayObject, "对方拒绝你的请求")

}

export function ResposeMaster(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {


    if (checkPose(Player)) {
        let PosePlayer = Player.PoseCreate as TPlayObject
        if (PosePlayer.MasterName != "") {
            Player.MessageBox("对方已经有师傅了")
            return
        }


        if (PosePlayer.Level > pupilLevel) {
            Player.MessageBox("对方都" + pupilLevel + "多级了还要找师父？\\")
            return
        }


        if (Player.Level < masterLevel) {
            Player.MessageBox("你这个级别怎么能当师傅\\")
            return
        }

        PosePlayer.SetMasterName(Player.Name)
        Npc.Say(Player, "你们二个已经是师徒关系了。\\")
        Npc.Say(PosePlayer, "你们二个已经是师徒关系了。\\")
    }


}

export function unmaster(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {

    const S = `
按正常出师步骤，必须二个人对面对站好位置，\\
如果人来不了你只能选择强行出师了。\\
<我要强行出师/@fUnMaster>\\
<返回/@main>
`

    const S1 = `
出师仪式现在开始！！！\\
是否确定真的要脱离师徒关系？\\
<确定/@RequestUnMaster>\\
`


    if (Player.MasterName == "") {
        Player.MessageBox("你都没师父，跑来做什么？？")
        return
    } else {

        if (checkPose(Player)) {
            let PosePlayer = Player.PoseCreate as TPlayObject

            if (Player.MasterName != PosePlayer.Name) {
                Player.MessageBox("对方也不是你师傅啊")
            } else {

                Npc.Say(Player, S1)
            }

        } else {
            Npc.Say(Player, S)
        }

    }

}


export function fUnMaster(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {


    if (Player.GetItemCount("金条") != 0) {
        Player.SetMasterName("")
        Npc.Take(Player, "金条", 1)
        Npc.Say(Player, "呵呵，你已经脱离苦海")
    } else {
        Npc.Say(Player, "要收一根金条的手续费，你没有金条\\\\<确定/@exit>")
    }

}


export function RequestUnMaster(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {

    const S = `
对方向你请求，你是否答应？ \\
<我愿意/@RevUnMaster(1)>\\
<不愿意/@RevUnMaster(0)>\\
<返回/@main>
`

    if (checkPose(Player)) {
        let PosePlayer = Player.PoseCreate as TPlayObject
        if (Player.MasterName != PosePlayer.Name) {
            Player.MessageBox("对方也不是你师傅啊")
        } else {
            Npc.Say(PosePlayer, S)
            Npc.Say(Player, "你已向对方发出请求，请耐心等待对方的答复。")
        }

    } else {
        Player.MessageBox("你们二个面对面站好呀，不要乱动")
    }

}

export function RevUnMaster(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {

    if (checkPose(Player)) {
        let PosePlayer = Player.PoseCreate as TPlayObject
        if (PosePlayer.MasterName != Player.Name) {
            Player.MessageBox("你也不是对方师傅啊")
        } else {
            if (Args.Int[0] == 0) {
                Npc.Say(PosePlayer, "对方拒绝了你的请求")
                Npc.CloseDialog(Player)
            }

            if (Args.Int[0] == 1) {
                PosePlayer.SetMasterName("")
                Npc.Say(PosePlayer, "呵呵，你已经脱离苦海")
                Npc.CloseDialog(Player)
            }

        }

    } else {
        Player.MessageBox("你们二个面对面站好呀，不要乱动")
    }

}
