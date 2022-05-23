
export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
里面是连绵不断的群山，东面上无边无际的大海。\\
难免是辽阔的沃玛森林，埋伏着沃玛教主的迷宫。\\
还有北面是阴森的丛林迷宫，那里潜伏着许多巨大的变异生物，\\
据说恐怖的赤月恶魔就隐藏在其中。\\
<到别处去/@传送>\\
<确定/@exit>\\
`
    Npc.Say(Player, S)
}


export function 传送(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
白日门附近很危险，\\
如果你想回到安全的地方，\\
我可以帮你。\\
<返回比齐/@比奇>\\
<返回/@main>\\
`
    Npc.Say(Player, S)
}

export function 比奇(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
移动到比奇需要金币\\
不能让你免费使用\\
你必须支付2000金币你想花这笔钱吗？\\
<移动/@移动>\\
<返回/@main>\\
`
    Npc.Say(Player, S)
}

export function 移动(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
  if (Player.Gold >= 2000) {
      Player.MapMove("0",333,269)
      Player.Gold -= 2000
  }else{
      Player.MessageBox("你的金币不够")
  }
}

