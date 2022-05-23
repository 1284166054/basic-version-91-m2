
export function main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
不要说我没提醒你, \\
这座烽火魔城很可能成为你的一场恶梦,\\
你真的还打算进去吗? \\ \\
<确定/@exit>
`
    Npc.Say(Player, S)
}
