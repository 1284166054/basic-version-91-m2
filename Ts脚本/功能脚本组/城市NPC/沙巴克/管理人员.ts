
let HireGuard = 300000    //雇佣护卫
let HireArcher = 300000   //雇佣弓箭手
let RepairDoor = 2000000  //修门
let RepairWall = 500000  //修墙

export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs) {
    if (!Player.ISCastleMaster) {
        Npc.MessageBox(Player, "你不是城堡管理者，无法进行操作")
        return
    }


    let S = `
沙巴克是在 <$OWNERGUILD> 的管理下。并且受约束于 <$LORD>\\
城堡的总黄金是: ${Npc.Castle.TotalGold}\\
今天的收入是: ${Npc.Castle.TodayIncome}\\\\
<收回现金/@@InputInteger1(请输入:需要取出的数值)>        <控制城门/@treatdoor>        <聘用防御护卫/@guardcmd>\\
<贮藏现金/@@InputInteger2(请输入:需要储存的数值)>        <修理城堡/@repaircastle>        <护卫防御方式/@commandorder>\\
<关闭/@EXIT>
`

    let OWNERGUILD = "GM"
    let LORD = "GM"
    if (Npc.Castle.Guild != undefined) {
        OWNERGUILD = Npc.Castle.Guild.Name
        LORD = Npc.Castle.Guild.GetChiefName()
    }

    S = S.replace("<$OWNERGUILD>", OWNERGUILD)
    S = S.replace("<$LORD>", LORD)

    Npc.Say(Player, S)
}

export function InputInteger1(Npc: TNormNpc, Player: TPlayObject, Args: TArgs) {
    let gold = Args.Int[0]
    if (Npc.Castle.TotalGold == 0) {
        Player.MessageBox("城堡资金不足你取什么")
        return
    }
    if (gold <= 0) {
        Player.MessageBox("请输入正确的金额")
        return
    }

    if (Npc.Castle.TotalGold < gold) {
        Player.MessageBox("请输入正确的金额")
        return
    }

    Player.Gold += gold
    Npc.Castle.TotalGold -= gold
    Main(Npc, Player, Args)
    Player.MessageBox("取出城堡资金成功，当前城堡剩余资金:" + Npc.Castle.TotalGold)

}

export function InputInteger2(Npc: TNormNpc, Player: TPlayObject, Args: TArgs) {
    let gold = Args.Int[0]

    if (gold <= 0) {
        Player.MessageBox("请输入正确的金额")
        return
    }

    if (Player.Gold < gold) {
        Player.MessageBox("你的金币不够")
        return
    }


    Player.Gold -= gold
    Npc.Castle.TotalGold += gold
    Main(Npc, Player, Args)
    Player.MessageBox("储存城堡资金成功，当前城堡剩余资金:" + Npc.Castle.TotalGold)

}

export function treatdoor(Npc: TNormNpc, Player: TPlayObject, Args: TArgs) {
    let S = `
城堡的门现在是 ${Npc.Castle.MainDoorOpened ? "打开" : "关闭"} 的。\\\\
<关闭城门/@closemaindoor>\\
<打开城门/@openmaindoor>\\
<返回/@main>\
`
    Npc.Say(Player, S)
}

export function closemaindoor(Npc: TNormNpc, Player: TPlayObject, Args: TArgs) {
    Npc.Castle.CloseDoor()
    treatdoor(Npc, Player, Args)
    Npc.MessageBox(Player, `城门已关闭.\\\\`)
}

export function openmaindoor(Npc: TNormNpc, Player: TPlayObject, Args: TArgs) {
    Npc.Castle.OpenDoor()
    treatdoor(Npc, Player, Args)
    Npc.MessageBox(Player, `城门已打开.\\\\`)
}

export function repaircastle(Npc: TNormNpc, Player: TPlayObject, Args: TArgs) {
    let Mgold = Math.round(Math.floor((Npc.Castle.MainDoor.MaxHP - Npc.Castle.MainDoor.HP) / Npc.Castle.MainDoor.MaxHP) * RepairDoor)
    let Lgold = Math.round(Math.floor((Npc.Castle.LeftWall.MaxHP - Npc.Castle.LeftWall.HP) / Npc.Castle.LeftWall.MaxHP) * RepairWall)
    let Cgold = Math.round(Math.floor((Npc.Castle.CenterWall.MaxHP - Npc.Castle.CenterWall.HP) / Npc.Castle.CenterWall.MaxHP) * RepairWall)
    let Rgold = Math.round(Math.floor((Npc.Castle.RightWall.MaxHP - Npc.Castle.RightWall.HP) / Npc.Castle.RightWall.MaxHP) * RepairWall)

    let S = `
你想要修复什么?\\\\
城门             耐久:${Npc.Castle.MainDoor.HP}/${Npc.Castle.MainDoor.MaxHP}     <修复/@repairdoor(M,${Mgold})>      需要金币:${Mgold} \\
皇宫左墙         耐久:${Npc.Castle.LeftWall.HP}/${Npc.Castle.LeftWall.MaxHP}       <修复/@repairdoor(L,${Lgold})>      需要金币:${Lgold}\\
皇宫中墙         耐久:${Npc.Castle.CenterWall.HP}/${Npc.Castle.CenterWall.MaxHP}       <修复/@repairdoor(C,${Cgold})>      需要金币:${Cgold}\\
皇宫右墙         耐久:${Npc.Castle.RightWall.HP}/${Npc.Castle.RightWall.MaxHP}       <修复/@repairdoor(R,${Rgold})>      需要金币:${Rgold}\\ \\
<返回/@main>\
`
    Npc.Say(Player, S)
}

export function repairdoor(Npc: TNormNpc, Player: TPlayObject, Args: TArgs) {
    let rindex = Args.Str[0]
    let needGold = Args.Int[1]

    if (needGold == 0) {
        Npc.MessageBox(Player, `${rindex == "M" ? "城门" : "城墙"}完好无损，无需修复`)
        return
    }

    if (Npc.Castle.TotalGold < needGold) {
        Npc.MessageBox(Player, "城堡资金不够，无法修复")
        return
    }


    switch (rindex) {
        case "M":
            Npc.Castle.RepairDoor()
            break;
        case "L":
            Npc.Castle.RepairWall(0)
            break;
        case "C":
            Npc.Castle.RepairWall(1)
            break;
        case "R":
            Npc.Castle.RepairWall(2)
            break;
    }
    Npc.Castle.TotalGold -= needGold
    Npc.MessageBox(Player, `${rindex == "M" ? "城门" : "城墙"}城门修理好了`)

}


export function guardcmd(Npc: TNormNpc, Player: TPlayObject, Args: TArgs) {

    let S = `
你想你要聘用守卫吗?\\
<聘用流动护卫/@hireguards>\\
<聘用固定弓箭手/@hirearchers>\\
<返回/@main>
`
    Npc.Say(Player, S)

}

export function hireguards(Npc: TNormNpc, Player: TPlayObject, Args: TArgs) {
    let guards1 = Npc.Castle.GetGuard(0)
    let guards2 = Npc.Castle.GetGuard(1)
    let guards3 = Npc.Castle.GetGuard(2)
    let guards4 = Npc.Castle.GetGuard(3)

    let S = `
你想聘用流动护卫吗?\\
你要用${HireGuard}现金来支付他们的工作费用。\\\\
一号守卫     状态:${guards1 == undefined ? "空缺" : "满额"}    操作:${guards1 == undefined ? "<雇佣/@guardbuy(0)>" : "<解雇/@guardsell(0)>"}\\
二号守卫     状态:${guards2 == undefined ? "空缺" : "满额"}    操作:${guards2 == undefined ? "<雇佣/@guardbuy(1)>" : "<解雇/@guardsell(1)>"}\\
三号守卫     状态:${guards3 == undefined ? "空缺" : "满额"}    操作:${guards3 == undefined ? "<雇佣/@guardbuy(2)>" : "<解雇/@guardsell(2)>"}\\
四号守卫     状态:${guards4 == undefined ? "空缺" : "满额"}    操作:${guards4 == undefined ? "<雇佣/@guardbuy(3)>" : "<解雇/@guardsell(3)>"}\\\\
<返回/@guardcmd>\
`
    Npc.Say(Player, S)

}

export function guardbuy(Npc: TNormNpc, Player: TPlayObject, Args: TArgs) {
    let index = Args.Int[0]
    if (Npc.Castle.GetGuard(index) != undefined) {
        Npc.MessageBox(Player, "当前位置已经有守卫存在，请先解雇或者雇佣其他位置")
        return
    }

    if (Npc.Castle.TotalGold < HireGuard) {
        Npc.MessageBox(Player, "城堡资金不够，无法聘用守卫")
        return
    }
    Npc.Castle.TotalGold -= HireGuard
    Npc.Castle.HireGuard(index)
    Npc.MessageBox(Player, "护卫雇佣成功")
    hireguards(Npc, Player, Args)
}

export function guardsell(Npc: TNormNpc, Player: TPlayObject, Args: TArgs) {
    let index = Args.Int[0]
    if (Npc.Castle.GetGuard(index) == undefined) {
        Npc.MessageBox(Player, "这个位置没有守卫，没办法解雇")
        return
    }

    Npc.Castle.UnHireGuard(index)
    Npc.MessageBox(Player, "护卫解雇成功")

    hireguards(Npc, Player, Args)
}

export function hirearchers(Npc: TNormNpc, Player: TPlayObject, Args: TArgs) {

    let ArcherList: TActor[] = new Array(16)
    let S = "请选择你要操作的弓箭手位置          <返回/@guardcmd>\\\\"
    for (let index = 0; index < 12; index++) {

        //ArcherList.push(Npc.Castle.GetArcher(index))
        ArcherList[index] = Npc.Castle.GetArcher(index)
        S += `${fn(index + 1)}号弓箭手  ${ArcherList[index] == undefined ? `<雇佣/@archerbuy(${index})>  ` : `<解雇/@archersell(${index})>  `}`
        if (((index + 1) / 3).toString().indexOf(".") == -1) {
            S += "\\\\"
        }
    }

    Npc.Say(Player, S)

}

export function archerbuy(Npc: TNormNpc, Player: TPlayObject, Args: TArgs) {
    let index = Args.Int[0]
    if (Npc.Castle.GetArcher(index) != undefined) {
        Npc.MessageBox(Player, "当前位置已经有弓箭手存在，请先解雇或者雇佣其他位置")
        return
    }

    if (Npc.Castle.TotalGold < HireArcher) {
        Npc.MessageBox(Player, "城堡资金不够，无法聘用弓箭手")
        return
    }
    Npc.Castle.TotalGold -= HireArcher
    Npc.Castle.HireArcher(index)
    Npc.MessageBox(Player, "弓箭手雇佣成功")
    hirearchers(Npc, Player, Args)
}

export function archersell(Npc: TNormNpc, Player: TPlayObject, Args: TArgs) {
    let index = Args.Int[0]
    if (Npc.Castle.GetArcher(index) == undefined) {
        Npc.MessageBox(Player, "这个位置没有弓箭手，没办法解雇")
        return
    }

    Npc.Castle.UnHireArcher(index)
    Npc.MessageBox(Player, "弓箭手解雇成功")

    hirearchers(Npc, Player, Args)
}



function fn(num, length = 2) {
    return (Array(length).join('0') + num).slice(-length);
}

export function commandorder(Npc: TNormNpc, Player: TPlayObject, Args: TArgs) {

    Npc.MessageBox(Player, "暂不支持的功能")
}

