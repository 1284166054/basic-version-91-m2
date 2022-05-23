export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你知道我是谁吗？ 告诉你我是何等人物... \\
你要试一下吗..? 说说看需要我帮你做什么 \\\\
 <了解金条./@gold100> \\
 <了解金砖./@gold500> \\
 <关 闭/@exit>
`
    Npc.Say(Player,S)
}


export function gold100(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
关于金条，我所能做的事情是 \\
将金条换成金币或将金币换成金条 \\
一个金条的价值是100万金币\\
记住了. 你需要我为你做社么? \\ \\
<将金币换成金条./@Change100> \\
<将金条换成金币./@Reverse100>\\
<返 回/@main> \\
`
    Npc.Say(Player, S)
}

export function gold500(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
关于金砖，我所能做的是\\
将金砖换成金条或将金条换成金砖\\
一个金砖，其价值等于\\
5个金条. 你需要我为你做什么? \\ \\
<金条换成金砖./@Change500> \\
<金砖换成金条./@Reverse500> \\
<返 回/@main> \\
`
    Npc.Say(Player, S)
}

export function gold1000(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
关于金盒，我所能做的是\\
将金盒换成金砖或将金砖换成金盒\\
一个金盒，其价值等于\\
2个金砖， \\
你需要为你做什么? \\\\
<金砖换成金盒./@Change10Set> \\
<金盒换成金砖./@Reverse10Set> \\
<返 回/@main>
`
    Npc.Say(Player, S)
}

export function Change500(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你想用金条换金砖? \\
好，我可以帮你换\\
但是你要支付手续费 .. \\
手续费是12000金币，要换吗? \\\\
<交换./@Change500_1> \\
<关闭./@exit>
`
    Player.Say(S)
}

export function Change500_1(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S1 = `
你没有5个金条，\\
要我怎么帮你换?\\
等你有足够的金条，再来找我吧.. \\
<返 回/@main> \\
<关闭./@exit>\\
`

    const S2 = `
没有足够的手续费\\
重新确认一下吧..  \\\\
<返 回/@main> \\
<关闭./@exit>\\
`
    const S3 = `
金条已经换好金砖. \\
继续换吗? \\
<交换./@Change500> \\
<返 回/@main> \\
<关闭./@exit>\\
`
    if (Player.GetItemCount("金条") < 5) {
        Npc.Say(Player, S1)
        return
    }

    if (Player.Gold < 12000) {
        Npc.Say(Player, S2)
        return
    }

    Npc.Give(Player, "金砖", 1)
    Player.Gold -= 12000
    Npc.Take(Player, "金条", 5)
    Player.Say(S3)
}


export function Reverse500(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你要将金砖换成金条? \\
好，我可以帮你换\\
但是你要支付手续费 .. \\
手续费是12000金币，要换吗? \\\\
<交换./@Reverse500_1> \\
<关闭./@exit>
`
    Player.Say(S)
}

export function Reverse500_1(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S1 = `
你没有金砖\\
还要我换什么? 等准备好金砖之后 \\
再来找我吧..\\\\
<返 回/@main> \\
<关闭./@exit>\\
`
    const S2 = `
没有足够的手续费\\
重新确认一下吧..  \\\\
<返 回/@main> \\
<关闭./@exit>\\
`
    const S3 = `
没有足够的背包空间\\
重新确认一下吧..  \\\\
<返 回/@main> \\
<关闭./@exit>\\
`
    const S4 = `
金砖已经换好金条. \\
还要继续换吗? \\\\
<交换./@Reverse500> \\
<返 回/@main> \\
<关闭./@exit>\\
`


    if (Player.GetItemCount("金砖") < 1) {
        Npc.Say(Player, S1)
        return
    }

    if (Player.Gold < 12000) {
        Npc.Say(Player, S2)
        return
    }

    if ((Player.MaxBagSize - Player.ItemSize) < 5) {
        Npc.Say(Player, S3)
        return
    }


    Npc.Give(Player, "金条", 5)
    Player.Gold -= 12000
    Npc.Take(Player, "金砖", 1)
    Player.Say(S4)
}


export function Change100(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你想用金币换金条? \\
好，我可以帮你换\\
不过你要支付一定的手续费 \\
手续费是2000金币，你还换吗? \\\\
<交换./@Change100_1> \\
<关闭./@exit>
`
    Player.Say(S)
}

export function Change100_1(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S1 = `
你都没有钱，\\
还叫我换什么? 等有钱之后 \\
再来找我吧 \\\\
<返 回/@main>\\
<关闭./@exit>\\
`

    const S2 = `
没有足够的手续费\\
重新确认一下吧..  \\\\
<返 回/@main> \\
<关闭./@exit>\\
`
    const S3 = `
没有足够的背包空间\\
重新确认一下吧..  \\\\
<返 回/@main> \\
<关闭./@exit>\\
`
    const S4 = `
金币已经换好金条. \\
还继续换吗? \\\\
<交换./@Change100> \\
<返 回/@main> \\
<关闭./@exit>\\
`
    if (Player.Gold < 1000000) {
        Npc.Say(Player, S1)
        return
    }

    if (Player.Gold < 1002000) {
        Npc.Say(Player, S2)
        return
    }

    if ((Player.MaxBagSize - Player.ItemSize) < 1) {
        Npc.Say(Player, S3)
        return
    }

    Npc.Give(Player, "金条", 1)
    Player.Gold -= 1002000
    Player.Say(S4)
}

export function Reverse100(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你想用金条换金币? \\
好，我可以帮你换\\
不过你要支付一定的手续费\\
手续费是2000金币，要换吗? \\\\
<交换./@Reverse100_1> \\
<关闭./@exit>
`
    Player.Say(S)
}

export function Reverse100_1(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S1 = `
你没有金条\\
还要我换什么? 等准备好金条之后 \\
再来找我吧..\\\\
<返 回/@main> \\
<关闭./@exit>\\
`
    const S2 = `
没有足够的手续费\\
重新确认一下吧..  \\\\
<返 回/@main> \\
<关闭./@exit>\\
`
    const S3 = `
包裹里的金币太多了\\
没办法帮你换了..  \\\\
<返 回/@main> \\
<关闭./@exit>\\
`
    const S4 = `
金条已经换好金币. \\
还要继续换吗? \\\\
<交换./@Reverse100> \\
<返 回/@main> \\
<关闭./@exit>\\
`


    if (Player.GetItemCount("金条") < 1) {
        Npc.Say(Player, S1)
        return
    }

    if (Player.Gold > 15000000) {
        Npc.Say(Player, S3)
        return
    }

    Npc.Take(Player, "金条", 1)
    Player.Gold += 980000

    Player.Say(S4)
}


export function Change1000(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你想用金砖换金盒? \\
好，我可以帮你换\\
但是你要支付手续费 .. \\
手续费是24000金币，要换吗? \\\\
<交换./@Change1000_1> \\
<关闭./@exit>
`
    Player.Say(S)
}

export function Change1000_1(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S1 = `
你没有5个金砖，\\
要我怎么帮你换?\\
等你有足够的金砖，再来找我吧.. \\
<返 回/@main> \\
<关闭./@exit>\\
`

    const S2 = `
没有足够的手续费\\
重新确认一下吧..  \\\\
<返 回/@main> \\
<关闭./@exit>\\
`
    const S3 = `
金砖已经换好金盒. \\
继续换吗? \\
<交换./@Change1000> \\
<返 回/@main> \\
<关闭./@exit>\\
`
    if (Player.GetItemCount("金砖") < 5) {
        Npc.Say(Player, S1)
        return
    }

    if (Player.Gold < 24000) {
        Npc.Say(Player, S2)
        return
    }

    Npc.Give(Player, "金盒", 1)
    Player.Gold -= 24000
    Npc.Take(Player, "金砖", 5)
    Player.Say(S3)
}


export function Reverse1000(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你要将金盒换成金砖? \\
好，我可以帮你换\\
但是你要支付手续费 .. \\
手续费是24000金币，要换吗? \\\\
<交换./@Reverse1000_1> \\
<关闭./@exit>
`
    Player.Say(S)
}

export function Reverse1000_1(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S1 = `
你没有金盒\\
还要我换什么? 等准备好金盒之后 \\
再来找我吧..\\\\
<返 回/@main> \\
<关闭./@exit>\\
`
    const S2 = `
没有足够的手续费\\
重新确认一下吧..  \\\\
<返 回/@main> \\
<关闭./@exit>\\
`
    const S3 = `
没有足够的背包空间\\
重新确认一下吧..  \\\\
<返 回/@main> \\
<关闭./@exit>\\
`
    const S4 = `
金盒已经换好金砖. \\
还要继续换吗? \\\\
<交换./@Reverse1000> \\
<返 回/@main> \\
<关闭./@exit>\\
`


    if (Player.GetItemCount("金盒") < 1) {
        Npc.Say(Player, S1)
        return
    }

    if (Player.Gold < 24000) {
        Npc.Say(Player, S2)
        return
    }

    if (Player.ItemSize < 5) {
        Npc.Say(Player, S3)
        return
    }


    Npc.Give(Player, "金砖", 5)
    Player.Gold -= 24000
    Npc.Take(Player, "金盒", 1)
    Player.Say(S4)
}



