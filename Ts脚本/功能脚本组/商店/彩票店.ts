export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
欢迎光临，不想试一下你的运气吗？\\
就算没有中奖，我也不负责。\\
如果你同意，就请抽奖吧。\\
到了一定的限度，你的钱会掉到地上，\\
请注意啊!\\\\
<买/@buy>彩票\\
<了解/@Bingo>彩票\\
<关 闭/@exit>
`
    Npc.Say(Player, S)
}
export function buy(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
请挑选要购买的物品。\ \ \
 <返 回/@Main>
`
    Npc.Say(Player, S)
}
export function Bingo(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
  1等    1,000,000金币\\
  2等      200,000金币\\
  3等      100,000金币\\
  4等       10,000金币\\
  5等        1,000金币\\
  6等          500金币\\\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}
