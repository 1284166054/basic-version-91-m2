
export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
请问你需要点什么吗？\\\\
<买/@buy> 药品\\
<卖/@sell> 药品\\
<离 开/@exit>

`
    Npc.Say(Player, S)
}

export function buy(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
需要什么物品呢？\\\\\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}
export function sell(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
让我看看你要卖什么东西.\\\\\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}