
export function main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
???怎么，看见我很奇怪么？我生前可是个大慈善家。\\
要什么东西，自己看吧！也可以把你的东西卖给我！ \\
我会尽我的全力去帮助你的！\\
<买/@buy> 东西\\
<卖/@sell> 东西\\
<特殊修理/@s_repair>\\
<离 开/@exit>\\
`
    Npc.Say(Player, S)
}
export function buy(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你需要什么物品？\\ \\ \\
 <返 回/@Main>
   `
    Npc.Say(Player, S)
}
export function sell(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
给我看看你的东西，我会给你一个估价……\\
所以如果你不是急需的话在这里卖掉算了。\\ \\
 <返 回/@Main>
   `
    Npc.Say(Player, S)
}
export function repair(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
这里你可以修补衣服、头盔和帽子、武器、首饰，甚至是护身\\
符之类的东西也可以.\\ \\ \\
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
