export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
<我想结婚/@marry>\\
<我想离婚/@unmarry>\\ \\
<离开/@Exit>\\ \\
`
    Npc.Say(Player, S)


}

export function marry(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
求婚者必须是男性且拥有求婚戒指，\\
你准备好求婚了吗？\\ \\
<准备好了/@agree>\\
<下次再来/@Exit>\\ \\ \\
<返回/@Main>
`
    Npc.Say(Player, S)
}


export function agree(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {

    const S =
        `
婚礼现在正式开始。\\
你愿意娶对方为妻，并照顾她一生一世吗？\\ \\
<我愿意/@RequestMarry>
`
    const S1 =
        `
婚礼现在正式开始。\\ \\
请耐心等待你心爱的人向你求婚\\ \\
`

    if (CheckPoseCreateCanMarry(Npc, Player)) {

        let PosePlayer = Player.PoseCreate as TPlayObject
        Player.Say(S);
        PosePlayer.Say(S1)

    }


}


export function RequestMarry(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S =
        `
对方向你求婚，你是否答应嫁给他？ \\ \\
<我愿意/@ResposeMarry> \\
<我不愿意/@ResposeMarryFail>
`
    if (CheckPoseCreateCanMarry(Npc, Player)) {
        let PosePlayer = Player.PoseCreate as TPlayObject
        Player.Say("你已向对方求婚，请耐心等待对方的答复。")
        PosePlayer.Say(S)

    }
}


export function ResposeMarryFail(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    let PosePlayer = Player.PoseCreate as TPlayObject

    if (PosePlayer == null) {
        Npc.Say(Player, `你们二个面对面站好呀，不要乱动。\\\\<返回/@Main>`)
        return
    }

    if (CheckPoseCreateCanMarry(Npc, PosePlayer)) {
        let PosePlayer = Player.PoseCreate as TPlayObject
        PosePlayer.SendMessage("[提示]:对方拒绝了你的求婚", 0)
        Npc.CloseDialog(PosePlayer)
        Npc.CloseDialog(Player)
    }


}


export function ResposeMarry(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    let PosePlayer = Player.PoseCreate as TPlayObject

    if (PosePlayer == null) {
        Npc.Say(Player, `你们二个面对面站好呀，不要乱动。\\\\<返回/@Main>`)
        return
    }


    if (CheckPoseCreateCanMarry(Npc, PosePlayer)) {
        GameLib.Broadcast(`恭喜玩家${PosePlayer.Name} 与 玩家${Player.Name}结为合法夫妻`)
        PosePlayer.Say("你们二个已经成为了一对合法夫妻了。")
        Npc.Take(PosePlayer, "求婚戒指", 1)
        Player.Say("你们二个已经成为了一对全法夫妻了。")
        Player.DearName = PosePlayer.Name
        PosePlayer.DearName = Player.Name
    }

}


export function CheckPoseCreateCanMarry(Npc: TNormNpc, Player: TPlayObject): boolean {

    let APoseCreate = Player.PoseCreate

    if (APoseCreate == null) {
        Npc.Say(Player, `你们二个面对面站好呀，不要乱动。\\\\<返回/@Main>`)
        return false
    }

    if (APoseCreate.PoseCreate == null) {
        Npc.Say(Player, `你们二个面对面站好呀，不要乱动。\\\\<返回/@Main>`)
        return false
    }


    if (!APoseCreate.IsPlayer()) {
        Npc.Say(Player, `至少你也的找个人吧\\\\<返回/@Main>`)
        return false
    }

    let PosePlayer = Player.PoseCreate as TPlayObject


    if (Player.Gender == 1) {
        Npc.Say(Player, `只有男的向女的求婚，还没见过大姑娘向小伙子求婚的。\\\\<返回/@Main>`)
        return false
    }


    if (PosePlayer.Gender == 0) {
        Npc.Say(Player, `你变态呀！！！想搞同性恋！！！ \\\\<返回/@Main>`)
        return false
    }


    if (Player.Married) {
        Npc.Say(Player, `你都结过婚了，还来注册结婚，想犯重婚罪呀！！！\\\\<返回/@Main>`)
        return false
    }

    if (PosePlayer.Married) {
        Npc.Say(Player, `对方已经结过婚了，是不是想犯重婚罪呀！！！\\\\<返回/@Main>`)
        return false
    }

    if (Player.Level < 40) {
        Npc.Say(Player, `结婚要求你的等级必须40级或以上，小伙子努力练好级再来找我。\\\\<返回/@Main>`)
        return false
    }


    if (PosePlayer.Level < 34) {
        Npc.Say(Player, `你的对象还没成年，等她长大点再来吧！小伙子不要心急嘛\\\\<返回/@Main>`)
        return false
    }


    if (Player.GetItemCount("求婚戒指") == 0) {
        Npc.Say(Player, `你没求婚戒指，弄到求婚戒指再来找我吧！！！\\\\<返回/@Main>`)
        return false
    }
    return true

}

export function unmarry(Npc: TNormNpc, Player: TPlayObject) {
    const S =
        `
要离婚是吧？离婚是二个人的事，必须二个人对面对站好位置，\\
如果人来不了你只能选择强行离婚姻了。\\ \\
<我要强行离婚/@fUnMarry>\\
<返回/@Main>
`
    if (!Player.Married) {
        Npc.Say(Player, `你都没结婚离什么婚？？\\\\<返回/@Main>`)
        return
    }

    let APoseCreate = Player.PoseCreate

    if (APoseCreate == null) {
        Npc.Say(Player, S)
        return
    }


    if (!APoseCreate.IsPlayer()) {
        Npc.Say(Player, `你对面站了个什么东西，怎么不太象人来的。\\\\<返回/@Main>`)
        return
    }

    let PosePlayer = Player.PoseCreate as TPlayObject

    if (Player.DearName != PosePlayer.Name) {
        if (Player.Gender == 0) {
            Player.Say("对面站着的不是你的妻子啊")
        } else {
            Player.Say("对面站着的不是你的老公啊")
        }
        return
    }

    if (Player.Gender == 0) {
        Player.Say(`是否确定真的要与你共事多年的妻子离婚吗？\\\\<确定/@RequestUnMarry>\\<返回/@main>`)
    } else {
        Player.Say(`是否确定真的要与你共事多年的老公离婚吗？\\\\<确定/@RequestUnMarry>\\<返回/@main>`)
    }



}

export function RequestUnMarry(Npc: TNormNpc, Player: TPlayObject) {
    if (!Player.Married) {
        Npc.Say(Player, `你都没结婚离什么婚？？\\\\<返回/@Main>`)
        return
    }

    let APoseCreate = Player.PoseCreate

    if (APoseCreate == null) {
        Npc.Say(Player, `你们二个面对面站好呀，不要乱动。\\\\<返回/@Main>`)
        return
    }


    if (!APoseCreate.IsPlayer()) {
        Npc.Say(Player, `你对面站了个什么东西，怎么不太象人来的。\\\\<返回/@Main>`)
        return
    }

    let PosePlayer = Player.PoseCreate as TPlayObject

    if (Player.DearName != PosePlayer.Name) {
        if (Player.Gender == 0) {
            Player.Say("对面站着的不是你的妻子啊")
        } else {
            Player.Say("对面站着的不是你的老公啊")
        }
        return
    }

    Player.Say('你已向对方发出离婚请求，请耐心等待对方的答复。')
    if (Player.Gender == 0) {
        PosePlayer.Say(`你的老公现在向我请求离婚，是不是愿意协议离婚？ \\ \\<确定/@RevUnMarry>\\<返回/@main>`)
    } else {
        PosePlayer.Say(`你的妻子现在向我请求离婚，是不是愿意协议离婚？ \\ \\<确定/@RevUnMarry>\\<返回/@main>`)
    }


}

export function RevUnMarry(Npc: TNormNpc, Player: TPlayObject) {
    if (!Player.Married) {
        Npc.Say(Player, `你都没结婚离什么婚？？\\\\<返回/@Main>`)
        return
    }

    let APoseCreate = Player.PoseCreate

    if (APoseCreate == null) {
        Npc.Say(Player, `你们二个面对面站好呀，不要乱动。\\\\<返回/@Main>`)
        return
    }


    if (!APoseCreate.IsPlayer()) {
        Npc.Say(Player, `你对面站了个什么东西，怎么不太象人来的。\\\\<返回/@Main>`)
        return
    }

    let PosePlayer = Player.PoseCreate as TPlayObject
    if (Player.DearName != PosePlayer.Name) {
        if (Player.Gender == 0) {
            Player.Say("对面站着的不是你的妻子啊")
        } else {
            Player.Say("对面站着的不是你的老公啊")
        }
        return
    }
    Player.DearName = ""
    PosePlayer.DearName = ""
    Player.Say("呵呵，你已经脱离苦海了！！！")
    PosePlayer.Say("呵呵，你已经脱离苦海了！！！")
}


export function fUnMarry(Npc: TNormNpc, Player: TPlayObject) {
    const S =
        `
要收一根金条的手续费，你没有金条，\\
我不能让你离婚。\\
<确定/@Exit>
`
    if (Player.GetItemCount("金条") > 0) {
        Npc.Take(Player, "金条", 1)
        let PPlayer = GameLib.FindPlayer(Player.DearName);
        Player.DearName = ""
        PPlayer.DearName = ""
        Player.Say("呵呵，你已经脱离苦海了！！！")
    } else {
        Player.Say(S)
    }

}