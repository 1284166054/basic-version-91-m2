
export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
对，就要这样. 我要好好教训这些不懂事的家伙，\\
请施主避开一会儿。\\ \\
<关闭/@exit>
`
    Npc.Say(Player, S)
}