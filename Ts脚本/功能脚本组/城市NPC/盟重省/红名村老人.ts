
export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
欢迎, 我可以为你做什么吗?\\
不要想打折...\\
我认为你别无选择...\\\\
<购买/@buy> 物品\\
<出售/@sell> 物品\\\\
<离 开/@exit>\\
`
    Npc.Say(Player, S)
}
export function buy(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
虽然有点贵，但是趁现在有快买吧。\\\\\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}
export function sell(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
要卖什么? 收购衣服或武器.\\\\\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}