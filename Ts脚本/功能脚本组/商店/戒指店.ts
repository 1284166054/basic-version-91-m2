export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
请问我可以帮你什么吗?\\\\
<购买/@buy> 戒指\\
<出售/@sell> 戒指\\
<修理/@repair> 戒指\\
<离 开/@exit>
`
    Npc.Say(Player, S)
}

export function buy(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
您购买哪种戒指?\\\\\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}
export function sell(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
您出售哪种戒指?\\\\\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}
export function repair(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
您要修理戒指?\\\\\\
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
