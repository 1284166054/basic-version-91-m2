export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
我可以让你进去,但只能在里面待3个小时 \\
自己小心..  \\ \\
<进入山洞/@ad>\\
`
    Npc.Say(Player, S)
}
export function ad(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    Player.RandomMove("M001")
    Player.SetTimeRecall(true,180)
}