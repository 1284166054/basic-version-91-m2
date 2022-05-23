export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    let S: string
    let CastleGuild = Npc.Castle.Guild
    if (CastleGuild == undefined) {
        S = `
欢迎来商店. 我们专卖衣服.\\
你要购买哪种衣服.\\
<购买/@buy> 衣服 \\
<出售/@sell> 衣服\\
<修理/@repair> 衣服\\
<离 开/@exit>\\
`

    } else {

        S = `
欢迎来商店. 我们专卖衣服.\\
你要购买哪种衣服.\\
根据这个城堡的主人${Npc.Castle.Guild.ChiefName}的命令, \\
我们特别对${Npc.Castle.Guild.Name}的成员提供20%的折扣\\\\
<购买/@buy> 衣服 \\
<出售/@sell> 衣服\\
<修理/@repair> 衣服\\
<离 开/@exit>\\
`

    }
    Npc.Say(Player, S)

}

export function buy(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你想买什么样的衣服？\\\\\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}
export function sell(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
把你要卖的给我看看，我会给你一个估价.\\
头盔或帽子在旁边商店， \\
您可以到那里去看看.\\ \\
<返 回/@Main>
`
    Npc.Say(Player, S)
}

export function repair(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你的衣服看上去很旧了，在这里修补一下？\\ \\ \\
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