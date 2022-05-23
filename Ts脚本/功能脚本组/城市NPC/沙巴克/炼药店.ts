export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    let S: string
    let CastleGuild = Npc.Castle.Guild
    if (CastleGuild == undefined) {
        S = `
请问你要来炼什么药？\\\\
<炼/@makedrug>药\\
有关毒药<听说明/@helpmakedrug>\\\\
<关闭/@exit>

`

    } else {

        S = `
请问你要来炼什么药？\\\\
根据这个城堡的主人${Npc.Castle.Guild.ChiefName}的命令, \\
我们特别对${Npc.Castle.Guild.Name}的成员提供20%的折扣\\\\
<炼/@makedrug>药\\
有关毒药<听说明/@helpmakedrug>\\\\
<关闭/@exit>

`

    }
    Npc.Say(Player, S)

}


export function makedrug(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
请选择想炼什么药。\\
所需材料应该带来了吧？\\\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}

export function helpmakedrug(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
这里可以炼的药只有两种。\\\\
<灰色毒粉/@helpdrug1>的功能\\
<黄色毒粉/@helpdrug2>的功能\\
<灰色毒粉/@helpmakedrug1>的原料\\
<黄色毒粉/@helpmakedrug2>的原料\\\\
<返回/@Main>
`
    Npc.Say(Player, S)
}


export function helpdrug1(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
道士可以在使施毒术时，用灰色毒粉，\\
中毒会减掉体力。\\\\
<返回/@helpmakedrug>
`
    Npc.Say(Player, S)
}

export function helpdrug2(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
道士可以在使施毒术时，用黄色毒粉，\\
中毒会减掉防御能力。\\\\
<返回/@helpmakedrug>

`
    Npc.Say(Player, S)
}

export function helpmakedrug1(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
灰色毒粉的原料有<食人树果实/@helpitem_1>1个，<毒蜘蛛牙齿>2个，\\
<食人树叶>4个。\\\\
<返回/@helpmakedrug>
`
    Npc.Say(Player, S)
}

export function helpmakedrug2(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
黄色毒粉的原料有<蛆卵/@helpitem_2>1个，\\
<蝎子尾巴>1个，<食人树叶>4个。\\\\
<返回/@helpmakedrug>
`
    Npc.Say(Player, S)
}

export function helpitem_1(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
割食人花可以得到食人树的果子，\\
但是5个食人花中可以得到果实的只有1个。\\\\
<返回/@helpmakedrug1>
`
    Npc.Say(Player, S)
}

export function helpitem_2(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
抓到洞穴里的洞蛆，就可以得到蛆卵。\\
长得像圆圆的茧。\\\\
<返回/@helpmakedrug2>

`
    Npc.Say(Player, S)
}