export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
欢迎光临.  感谢您到我们的铁匠铺.\\\\
<买/@buy> 武器\\
<卖/@sell> 武器\\
<修理/@repair> 武器\\
<离 开/@exit>
`
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