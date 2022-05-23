import * as UpgradeWeapon from "../../../全局脚本[公共单元]/沙巴克武器升级设置";
export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
没有一个人来光顾，顾客，请进。\\
我的自尊使我不允许对这个物品的价格再要求打折。\\\\
<开始武器升级/@upgrade>\\
<返回武器升级/@getbackupgnow>\\
<听更多的歌/@heardsing>\\ \\
<离开/@tuichu>
`
    UpgradeWeapon.UpgradeInit(Player)
    Npc.Say(Player, S)
}

export function upgrade(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你像是想要升级你的武器。给我看你的武器，\\
升级价格是${UpgradeWeapon.getSetting().升级价格}金币。修炼这个武器需要原料\\
<${UpgradeWeapon.getSetting().矿石名称}/@Biron>，<饰品/@Etc>，<武器/@Weapon>和<金币/@Gold>。\\
别的原料你可以使用你包内的物品。\\
你想委托你的武器进入修炼系统吗？\\
<确认修炼/@confirmupgrade>\\
<取消/@main>\\
`
    Npc.Say(Player, S)
}

export function Biron(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {

    const S = `
你可以在矿山里采到${UpgradeWeapon.getSetting().矿石名称}。如果你想修炼过程得到\\
一个好得结果你最好拿给我更高纯度的黑铁矿。\\
顺便请记得，在修炼期间如果没有足够数量的黑色铁矿，\\
那怕你的矿石纯度再高修练的结果也可能不好。\\\\
<返回/@upgrade>
`
    Npc.Say(Player, S)
}

export function Etc(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {

    const S = `
装饰品，项链，手镯当你的特殊技能融入了这种装饰物的时候，\\
能够加强你的武器。如果你给我好原料我能给你好结果。\\
如果你给我糟糕的装饰品那可能会失败，除非你有很好的运气。\\ \\
<返回/@upgrade>
`
    Npc.Say(Player, S)
}

export function Weapon(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {

    const S = `
只能对武器进行炼制。\\
如果你想要升级武器请给我你携带的武器...\\ \\
<返回/@upgrade>
`
    Npc.Say(Player, S)
}

export function Gold(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {

    const S = `
修练武器的金子太少...\\
你真的认为我的技术的价值就这么点数量的程度？\\
这个价格我不能做这个工作。\\ \\
`
    Npc.Say(Player, S)
}

export function confirmupgrade(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S1 = `
材料不够。请你下次来的时候，\\\
准备好所有的矿石，武器和饰品。\\
当然，我的工作才是最基本的... \\\\
<返回/@Main>
        `
    if (Player.Weapon == undefined) {
        Npc.Say(Player, S1)
        return
    }


    const S2 = `
给我看你给我的原料，修炼你的${Player.Weapon.Name}，我的视力不好，\\
我想从你的包里取得更多的饰品和${UpgradeWeapon.getSetting().矿石名称}。\\
如果你有重要的物品，在你寄存在仓库后请回来。\\ \\
<请求修炼/@upgradenow>\\ \\
<在安排好以后再回来/@exit>
`



    if (Player.GetItemCount(UpgradeWeapon.getSetting().矿石名称) == 0) {
        Npc.Say(Player, S1)
        return
    }


    if (Player.Gold < UpgradeWeapon.getSetting().升级价格) {
        Npc.Say(Player, S1)
        return
    }

    if (Player.Weapon == undefined) {
        Npc.Say(Player, S1)
        return
    }


    Npc.Say(Player, S2)


}


export function upgradenow(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
我会把它弄得像新的一样，\\
所以请${UpgradeWeapon.getSetting().升级时间}分钟后再回来。\\
<返回/@Main>\\
<在安排好以后再回来/@exit>
`

    const S1 = `
我们工作的规则是一个人只能进行一个项目。\\
请下次再来...\\\\
<返回/@Main>\\
<在安排好以后再回来/@exit>
`
    if (UpgradeWeapon.getUpgradeInfo(Npc, Player, Args, "IsOnWeepon")) {
        Npc.Say(Player, S1)
        return
    }

    Player.Gold -= UpgradeWeapon.getSetting().升级价格
    UpgradeWeapon.UpgradeNow(Npc, Player, Args)
    Player.Say(S)
}

export function getbackupgnow(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S1 = `
就这样了，我尽我最大努力精炼了你的武器， 
结果是否<成功/@Success>\\
只有在你使用过一次后才知道，出去试试吧。\\\\
<退出/@exit>
 `
    const S2 = `
以前你是不是寄存了很多东西？\\
如果你找我是为了取回你很久前寄存在这里的物品，\\
那你还是回去吧，我可记不起来了。\\
这也过去太长时间了...\\ \\
<返回/@Main>
 `
    const S3 = `
这个工作正忙着呢，请稍等片刻...\\\
<返回/@Main>
  `
    if (UpgradeWeapon.getUpgradeInfo(Npc, Player, Args, "IsOnWeepon")) {

        if (Date.now() < UpgradeWeapon.getUpgradeInfo(Npc, Player, Args, "BackupTime")) {
            Player.Say(S3)
        } else {
            UpgradeWeapon.GetBackupgWeapon(Npc, Player, Args)
            Player.Say(S1)
        }


    } else {
        Player.Say(S2)
    }



}

export function Success(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S2 = `
通过使用它，你可以体会到它精炼的好处。\\
无论你的战斗对象是其他玩家还是怪物...\\
你都会发现这个成果...\\ \\
<退出/@exit>
 `
    Player.Say(S2)
}



export function heardsing(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S2 = `
如果你给我3万金子我会再考虑一下...\\
<支付3万金币/@paythree>\\
<退出/@main>
 `
    Player.Say(S2)
}

export function paythree(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S2 = `
不知名的杂草...\\\\
<退出/@exit>
 `
    Player.Say(S2)
}

