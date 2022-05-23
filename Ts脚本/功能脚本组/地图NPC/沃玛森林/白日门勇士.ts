export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
这是一个极度危险的地方，请你三思！\\
现在后悔还老的及！\\
<我不怕/@exit>\\     
`
    Npc.Say(Player, S)
}
