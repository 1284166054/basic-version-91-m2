export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    let S: string
    let CastleGuild = Npc.Castle.Guild
    if (CastleGuild == undefined) {
        S = `
欢迎, 您想要些什么? \\
我们这里有许多便宜锋利的剑.  请您挑选.\\
我旁边的师哥可以特修任何装备,如果你有装备需要修理,找他吧!\\
<买/@buy>  武器 \\
<卖/@sell>  武器\\
<离 开/@exit>\\
`

    } else {

        S = `
欢迎, 您想要些什么? \\
我们这里有许多便宜锋利的剑.  请您挑选.\\
根据这个城堡的主人${Npc.Castle.Guild.ChiefName}的命令, \\
我们特别对${Npc.Castle.Guild.Name}的成员提供20%的折扣\\
我旁边的师哥可以特修任何装备,如果你有装备需要修理,找他吧!\\
<买/@buy>  武器 \\
<卖/@sell>  武器\\
<离 开/@exit>\\
`



    }
    Npc.Say(Player, S)

}
export function buy(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
您想买些什么武器?\\\\\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}
export function sell(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
给我您要卖的武器.\\\\\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}

export function repair(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
您要修理武器吗?\\
给我您要修理的武器.\\\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}
export function s_repair(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你这个家伙太幸运了，我正好有材料可以做特种修理...\\\\\\
<返回/@main>
`
    Npc.Say(Player, S)
}