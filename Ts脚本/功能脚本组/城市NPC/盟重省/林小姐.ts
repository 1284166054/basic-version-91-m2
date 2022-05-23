export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
我还想多赚点钱呢~!\\
<取消/@exit>
`
    Npc.Say(Player, S)
}