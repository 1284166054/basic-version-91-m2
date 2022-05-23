export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    let S: string
    let CastleGuild = Npc.Castle.Guild
    if (CastleGuild == undefined) {
        S = `
杂货店的定义是什么?它意味着什么东西都卖.\\
让我们按你的意愿给你必要的物品. \\
<购买/@buy> 物品\\
<出售/@sell> 物品\\
<离 开/@exit>\\
`

    } else {

        S = `
杂货店的定义是什么?它意味着什么东西都卖.\\
让我们按你的意愿给你必要的物品. \\
根据这个城堡的主人${Npc.Castle.Guild.ChiefName}的命令, \\
我们特别对${Npc.Castle.Guild.Name}的成员提供20%的折扣\\\\
<购买/@buy> 物品\\
<出售/@sell> 物品\\
<离 开/@exit>\\
`

    }
    Npc.Say(Player, S)

}
export function buy(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
我们出售蜡烛，护身符，卷轴，修理液等 .\\
另外，行会回城卷仅供行会成员使用.\\ \\
<返 回/@Main>
`
    Npc.Say(Player, S)
}
export function sell(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
人们出售各种物品...\\ \\
世道艰难啊, 唉，选择你要出售的物品吧...\\
`
    Npc.Say(Player, S)
}