export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S1 = `
我清楚你的能力,可是里面太恐怖了.. \\
你做好充分准备了吗?\\ \\
<进入未知世界/@exit1>\\
<回到盟重/@mwmove> \\
<继续留在这里/@exit>\\
`

    const S2 = `
里面是一个危险的未知世界， \\
最以你现在的实力还不能去那里， \\
等以后再来吧！ \\
我可以把你送回你原来的世界。\\ \\
<回到盟重/@mwmove> \\
<继续留在这里/@exit>
`
    if (Player.Level >= 40) {
        Npc.Say(Player, S1)
    } else {

        Npc.Say(Player, S2)

    }

}



export function exit1(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
非常抱歉,由于服务器资源原因,更多神秘未知地图\\
将在近期开放,请您时刻关注我们的官方网站的更新情况\\
`
    Npc.Say(Player, S)
}

export function mwmove(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    Player.MapMove("3", 330, 330)
}