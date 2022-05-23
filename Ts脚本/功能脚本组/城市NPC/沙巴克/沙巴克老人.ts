export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你想知道最近沙吧克的攻城战役吗?\\\\
<查看./@aboutwar>\\\                                                      
`

    Npc.Say(Player, S)
}


export function aboutwar(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {

    let Castle = GameLib.FindCastle("沙巴克")
    if (Castle.AttackWarCount != 0) {
        const S = `
察看关于最近的攻城战役纪录\\
战役开始时间：${DateUtils.FormatDateTime("YYYY年MM月DD日", Castle.GetAttackWarDate(Castle.AttackWarCount - 1))} , 晚上8:00开始。\\\\
<详细情况：/@listwar>\\
<关闭./@exit>\\
`

        Npc.Say(Player, S)
    } else {
        const S = `
察看关于最近的攻城战役纪录\\
最近没有攻城战！
<详细情况：/@listwar>\\
<关闭./@exit>\\
`
    }


}

export function listwar(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    let S = ""
    let Castle = GameLib.FindCastle("沙巴克")
    for (let index = 0; index < Castle.AttackWarCount; index++) {
        S += Castle.GetAttackWarGuild(index).Name + " \t \t " + DateUtils.FormatDateTime("YYYY年MM月DD日", Castle.GetAttackWarDate(index)) + "\n"
    }

    Npc.Say(Player, S)
}



