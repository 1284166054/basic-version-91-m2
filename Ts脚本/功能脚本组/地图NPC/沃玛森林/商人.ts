export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
欢迎，我能为你做点什么？\\
<买/@buy> 物品\\
<卖/@sell> 物品\\
<离 开/@exit>\\
我是哈韩族哦..我最喜欢HOT..嘿嘿.. \\
<离 开/@exit>
`
    Npc.Say(Player, S)
}

export function buy(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
需要什么物品吗?\\\\
我这里有瞬间传送咒书，买几本吧.\\\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}
export function sell(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
把要卖的东西给我，我会给你好价钱的.\\
我们还收购各种药和蜡烛.\\\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}