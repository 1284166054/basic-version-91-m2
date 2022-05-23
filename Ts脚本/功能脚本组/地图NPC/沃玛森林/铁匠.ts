export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
欢迎光临，需要我帮什么忙吗？\\\\
<修理/@repair>\\
<退出/@exit>
`
    Npc.Say(Player, S)
}


export function repair(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
您要修理吗?\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}
