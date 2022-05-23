export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
前面就是通向白日门的不归路.\\
你真的要过去吗?\\\\
<关 闭/@exit>\\
`
    Npc.Say(Player, S)
}