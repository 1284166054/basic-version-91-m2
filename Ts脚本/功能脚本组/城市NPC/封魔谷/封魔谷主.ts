
export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
哈哈,有人来了.\\
封魔堡属于我的主人"虹魔教主",\\
你们是来给他当早餐的吧,嘿嘿...... \\ \\
<打听消息/@info>\\
<确定/@exit>
`
    Npc.Say(Player, S)
}


export function info(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
前几天抓来一个疯疯癫癫的老头,\\
总说自己是什么掌管世人姻缘的神仙,\\
被我关到阁楼里去了.\\
你认识他吗?\\ \\
<返回/@main>
`
    Npc.Say(Player, S)
}