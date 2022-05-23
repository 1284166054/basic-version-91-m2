export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
真没有想到,除我之外居然还有人发现这里,\\
我一生都在追寻那把上古神兵"霸者之刃"的踪迹,\\
最终的线索停留在了这里!此地边式玛法的王者禁地,\\
蛋以你一人之力根本无法抗衡这些霸王级的异兽们,\\
更不用说常在这里出没的那6个身怀重装的暗之猛兽,\\
虽然这里拥有无尽的宝藏,还有绝世的"霸者之刃",\\
唉,我还是送你去幻境七层吧，不必在此送了姓名!\\
<去幻境七层/@scxs_h007>\\
<留在此地/@exit>
`
    Npc.Say(Player, S)
}


export function scxs_h007(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    Player.RandomMove("H007")
}
