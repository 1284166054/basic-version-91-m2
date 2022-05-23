export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
请问你需要什么装饰品吗?\\\\
<购买/@buy> 首饰\\
<出售/@sell> 首饰\\
<修理/@repair> 首饰品\\
<关 闭/@exit>
`
    Npc.Say(Player, S)
}
export function buy(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
这里有戒指，手镯，项链，您需要什么? \\\\
<返 回/@main>\\
`
    Npc.Say(Player, S)
}
export function sell(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
为了防止万一，我要准备一些必要的首饰品做备用\\
如果您有多余的首饰品，可以卖给我 \\\\
<返 回/@main>\\
`
    Npc.Say(Player, S)
}
export function repair(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
我可以给您修理陈旧或损坏的首饰品. \\
您需要修理什么? \\\\ 
<返 回/@main>
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