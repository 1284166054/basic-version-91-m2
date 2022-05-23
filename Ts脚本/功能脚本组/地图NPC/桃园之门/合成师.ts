
export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
已经很多年没有人来过这里了,\\
今天就破例让你见识见识我的手艺吧!\\ \\
<合成/@makedrug>物品\\
<如何/@helpmakedrug>合成物品\\
<进行对话/@talkwith>\\
<关闭/@exit>
`
    Npc.Say(Player, S)
}



export function makedrug(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
请选择想合成的物品。\\
所需材料应该带来了吧？\\ \\
<返回/@main>
`
    Npc.Say(Player, S)
}

export function talkwith(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
冒险者，这里有着一道通往另一个神秘世界的大门，\\
但是如何穿过这道大门，我现在仍然没有参破，\\
希望你能够替我完成这个心愿。\\
<返回/@main>
`
    Npc.Say(Player, S)
}



export function helpmakedrug(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
我可以帮你合成下面的东西：\\
<赤血魔剑/@make(1)>\\
<魔血套装/@make(2)>\\
<虹魔套装/@make(3)>\\
<返回/@main>
`
    Npc.Say(Player, S)
}

export function make(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S1 = `
想合成赤血魔剑？\\
那你需要一把罗刹和六种特殊的药水\\
再交100元手工费就行了。\\
能不能弄到这些东西就看你自己的本事了\\
不过，得到赤血魔剑可不一定是好事啊...\\\\
<返回/@main>
`
    const S2 = `
想要魔血套装？太简单了！\\
只要你有相应的虹魔套装就行了。\\
不过，除了原有的100元手工费，\\
我要另收一根金条作为报酬。\\
<返回/@main>
`
    const S3 = `
想要虹魔套装？太简单了！\\
只要你有相应的魔血套装就行了。\\
不过，除了原有的100元手工费，\\
我要另收一根金条作为报酬。\\
<返回/@main>
`
    switch (Args.Int[0]) {
        case 1:
            Npc.Say(Player, S1)
            break;
        case 2:
            Npc.Say(Player, S2)
            break;
        case 3:
            Npc.Say(Player, S3)
            break;
        default:
            break;
    }
}
