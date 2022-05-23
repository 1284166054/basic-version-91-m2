export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    let S: string
    let CastleGuild = Npc.Castle.Guild
    if (CastleGuild == undefined) {
        S = `
欢迎来商店. 我们专卖头盔.\\
你要购买哪种头盔.\\
<购买/@buy> 头盔 \\
<出售/@sell> 头盔\\
<修理/@repair> 头盔\\
<离 开/@exit>\\
`

    } else {

        S = `
欢迎来商店. 我们专卖头盔.\\
你要购买哪种头盔.\\
根据这个城堡的主人${Npc.Castle.Guild.ChiefName}的命令, \\
我们特别对${Npc.Castle.Guild.Name}的成员提供20%的折扣\\\\
<购买/@buy> 头盔 \\
<出售/@sell> 头盔\\
<修理/@repair> 头盔\\
<离 开/@exit>\\
`

    }
    Npc.Say(Player, S)

}

export function buy(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你要买头盔吗?\\\\\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}
export function sell(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你要出售头盔?\\\\\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}

export function repair(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
您要修理头盔?\\\\\
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