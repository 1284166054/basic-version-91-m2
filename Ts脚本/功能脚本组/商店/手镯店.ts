export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
请问我可以帮你什么吗?\\\\
<购买/@buy> 手镯\\
<出售/@sell> 手镯\\
<修理/@repair> 手镯\\
<离 开/@exit>
`
    Npc.Say(Player, S)
}
export function buy(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
请选择你要购买的物品.\\\\\\
<返 回/@Main>
   `
    Npc.Say(Player, S)
}
export function sell(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
您出售哪种手镯?\\
我们也回收手套.\\\\
<返 回/@Main>
   `
    Npc.Say(Player, S)
}
export function repair(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你可以修理各种手镯,手套. \\\\\\
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
