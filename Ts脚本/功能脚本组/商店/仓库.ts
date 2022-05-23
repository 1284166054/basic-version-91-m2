export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
您好。我是仓库保管员。为了您的仓库又<方便>又<安全>。\\
我为您提供以下仓库服务功能： \\
<保管/@storage> 物品\\
<找回/@getback> 物品\\
<捆/@mbind>各种卷书和药品\\
<退出/@exit>\\
`
    Npc.Say(Player, S)
}



export function storage(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
需要保管什么东西?\\\\
<返回/@Main>
`
    Npc.Say(Player, S)
}
export function getback(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
请看目录决定找什么东西.\\\\\\
<返回/@Main>
`
    Npc.Say(Player, S)
}

export function mbind(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你知道我是什么人吗？ \\
我做的是这样的事情... \\
你要试一下吗？有什么要拜托的就说吧 \\\\
用金币<交换/@changeGold>金条 \\
用金条<交换/@changeMoney>金币 \\
<捆/@bind> \\\\
<离 开/@exit>\\
`
    Npc.Say(Player, S)
}

export function changeGold(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你说你要用金币换成金条? \\
好的，我帮你换 \\
但是要支付手续费 \\
费用是2000金币，你还换吗？ \\\\
<交换/@changeGold_1> \\
<离 开/@exit>
 `
    const S1 = `
你连这点钱都没有，还换什么？ \\
等你有足够的钱，再来找我吧 \\\\
  `

    if (Player.Gold >= 1002000) {
        Npc.Say(Player, S)
    } else {
        Npc.Say(Player, S1)
    }

}

export function changeGold_1(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
金币已经换好金条了. \\
还换吗？ \\\\
<交换/@changeGold> \\
<离 开/@exit>
`
    if (Player.Gold >= 1002000) {

        if ((Player.MaxBagSize - Player.ItemSize) < 1) {
            Player.MessageBox("背包空间不足，至少保留一个空格")
            return
        }

        Player.Gold -= 1002000
        Player.Give("金条", 1)
        Npc.Say(Player,S)

    }else{
        Player.MessageBox("你没有足够的钱支付手续费\\你再确认一下吧 \\")
    }
}


export function changeMoney(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你要把金条换成金币? \\
好的，我给你换 \\
不过需要支付手续费\\
费用是2000金币，你还换吗？ \\\\
<交换/@changeMoney_1> \\
<离 开/@exit>
 `
    const S1 = `
 你都没有金条还换什么? \\
 想骗我?快滚! \\\\
<离 开/@exit>
  `

    if (Player.GetItemCount("金条") >= 1) {
        Npc.Say(Player, S)
    } else {
        Npc.Say(Player, S1)
    }

}

export function changeMoney_1(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
我也很想给你换， \\
但是你钱太多了，我没办法给你换. \\\\
 `
    const S1 = `
金条已经换好金币了. \\
还换吗？ \\\\
<交换/@changeMoney> \\
<离 开/@exit>
  `

    if (Player.GetItemCount("金条") >= 1 && Player.Gold > 15000000) {
        Npc.Say(Player, S)
        return
    }

    if (Player.GetItemCount("金条")) {
        Npc.Take(Player, "金条", 1)
        Player.Gold += 998000
        Npc.Say(Player, S1)
    }


}


export function bind(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
目前我能捆的只有卷书和药水 \\
你要捆吗？ \\
要捆东西需要100金币. \\\\
<捆/@P_bind>药水 \\
<捆/@Z_bind>卷书 \\
<返 回/@mbind>
 `
    Npc.Say(Player, S)
}

export function P_bind(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
<捆/@bind_start(强效金创药,超级金创药)>强效金创药 \\
<捆/@bind_start(强效魔法药,超级魔法药)>强效魔法药 \\
<捆/@bind_start(金创药[中量],金创药[中]包)>金创药(中量) \\
<捆/@bind_start(魔法药[中量],魔法药[中]包)>魔法药(中量)\\
<捆/@bind_start(金创药[小量],金创药[小]包)>金创药(小量)\\
<捆/@bind_start(魔法药[小量],魔法药[小]包)>魔法药(小量)\\
<返 回/@bind>
 `
    Npc.Say(Player, S)

}

export function Z_bind(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
<捆/@bind_start(地牢逃脱卷,地牢逃脱卷包)>地牢逃脱卷 \\
<捆/@bind_start(随机传送卷,随机传送卷包)>随机传送卷 \\
<捆/@bind_start(回城卷,回城卷包)>回城卷 \\
<捆/@bind_start(行会回城卷,行会回城卷包)>行会回城卷 \\
<返 回/@bind>
 `
    Npc.Say(Player, S)

}

export function bind_start(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {

    let item = Args.Str[0]
    let itemPack = Args.Str[1]
    item = item.replace("[", "(")
    item = item.replace("]", ")")

    itemPack = itemPack.replace("[", "(")
    itemPack = itemPack.replace("]", ")")

    if (Player.Gold < 100) {
        Player.MessageBox(`你都没有钱捆东西，\\还捆什么? \\快走吧.... \\`)
        return
    }


    if (Player.GetItemCount(item) < 6) {
        Player.MessageBox(`你没有足够的${item},需要6个${item}`)
        return
    }

    Player.Gold -= 100
    Player.Give(itemPack)
    Npc.Take(Player, item, 6)
    Player.MessageBox(`已经捆好了... 我的技术不错吧.. \\以后还有要捆的，就来找我吧.. \\`)
}




