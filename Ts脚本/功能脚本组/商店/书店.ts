export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
这里保存着学徒们需要练学的各种书籍. 你需要什么书? \\\\
<购买/@buy> 书籍\\
<出售/@sell> 书籍\\\\
<关 闭/@exit>
`
    Npc.Say(Player, S)
}
export function buy(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
请你自己选择你需要的书。\\
<返 回/@main>
`
    Npc.Say(Player, S)
}
export function sell(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
如果你有不错的书籍，我也可以购买. 请把要出售的书籍放入栏里 \\\\
<返 回/@main>
`
    Npc.Say(Player, S)
}