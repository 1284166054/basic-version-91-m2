export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
能来到这里，说明你有足够的实力进入下一层。\\
你现在就去吗？\\\\
<去/@a1>\\
<不去/@exit>\\
`
    Npc.Say(Player, S)
}


export function a1(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    Player.MapMove("H004",12,27)
}
