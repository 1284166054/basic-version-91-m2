export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你竟然能跑到这里来？\\
看在你这么卖命的份上，我就帮助你一下。\\
<买/@buy>\\
<卖/@sell>\\
<修理/@repair>\\
<特殊修理/@s_repair>\\
<退出/@exit>
`
    Npc.Say(Player, S)
}

export function buy(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你需要哪种物品呢？\\\\\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}
export function sell(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
选择你要出售的物品吧...\\
`
    Npc.Say(Player, S)
}

export function repair(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
您要修理吗?\\
我可是个万能工匠哦！\\\\
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
