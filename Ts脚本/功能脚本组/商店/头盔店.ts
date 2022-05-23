export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
请问什么事情需要我帮忙吗？\\\\
<买/@buy> 头盔\\
<卖/@sell> 头盔\\
<修复/@repair> 头盔\\
<关 闭/@exit>
`
    Npc.Say(Player, S)
}
export function buy(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你想买什么样的头盔？\\\\\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}
export function sell(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
把要卖的头盔和帽子放上去，给你估价。\\
最好一起卖了吧。\\\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}

export function repair(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
可以修复，头盔，帽子。\\\\\\
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