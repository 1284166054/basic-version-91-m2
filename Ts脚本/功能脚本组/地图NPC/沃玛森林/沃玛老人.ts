export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
这里是一直被封锁的古城！\\
你确定要进去吗？\\\\
<进入/@FM>\\
<不去/@exit>\\     
`
    Npc.Say(Player, S)
}


export function FM(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    Player.RandomMove("4")
}
