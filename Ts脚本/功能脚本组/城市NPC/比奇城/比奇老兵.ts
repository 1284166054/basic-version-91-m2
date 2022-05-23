
export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
听说虹魔教主复活了!他的领地“封魔谷”也已重现大陆!\\
好象封魔谷的入口在沃玛森林附近\\
不过那么邪恶的地方,你真的打算去吗?\\\\
<坐标/@坐标> 询问\\
关于<PK/@pk>\\
<速度/@速度> 太慢？\\
<想瞬息移动/@瞬息移动>\\
<知道了/@exit>\\
`
    Npc.Say(Player, S)
}


export function 坐标(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
比奇最大的城市就是你所在的比奇城，坐标就不用我说了吧！\\
毒蛇山谷的小村很好找，你只要往500 500 的坐标走就能够\\
到了。不过，如果你要到盟重土城，就应该牢记300 300\\
这个数字, 他会指引你走到那里。离流放地很近的沙巴克，是\\
一个危险的区域，我记得以前在600 300找到它的。不过我要提\\
醒你，每个省份的坐标都是不同的，可别在比奇找沙巴克哦！\\
所以，要记住每个通往其他省的关口。\\
最后，要记得多跟朋友走走，你就会和我一样熟悉这个大陆。\\
<返 回/@Main>
`
    Npc.Say(Player, S)
}

export function pk(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
如果遇到PK的人，可要自己保重哦！虽然说PK的人\\
会受到流放的处罚，可这是在他们死亡以后进行的。\\
奉劝大家不要PK，流放到边疆以后的日子可不好过，\\
相信每一个在流放村里孤苦伶仃，没有装备，没有\\
补给的度过日子的人都会同意我这句话。\\
差点忘了告诉大家，沙巴克离流放地最近，是一个\\
流放犯出没的区域，千万小心财不露白哦！\\\\
<返回/@Main>
`
    Npc.Say(Player, S)
}

export function 速度(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
觉得速度慢，其实有很多原因，如果离我很远，那么最有可\\
能的就是因为跨地区，网络不够通畅。所以，你千万要得\\
在嘟嘟论坛的溶解专区填写速度测试报告？？这样才可以让溶解溶化\\
尽快在你的区域安装服务器呀。\\
最后提醒一句，这个网站有比我更详细的帮助可以看。\\\
<返回/@Main>
`
    Npc.Say(Player, S)
}

export function 瞬息移动(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
不要相信什么凌波微步,其实这个东西很\\
简单,只要你付钱,什么问题不能解决呢?\\
来吧,小伙子这个世界充满危险,让我送你一程吧!\\
<向商店移动/@商店>\\
<向白日门移动/@白日门> \\
<向毒蛇山谷移动/@毒蛇山谷> \\
<向封魔谷移动/@封魔谷> \\
<挑战幻境/@幻境传送.Main>\\
<返 回/@Main>

`
    Npc.Say(Player, S)
}

export function 商店(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
你要去哪个商店？这个是免费服务！ \\\\
<书店/@goShop(0104)>   <肉铺/@goShop(0102)>    <首饰店/@goShop(0105)>\\
<药店/@goShop(0108)>    <布料店/@goShop(0106)>    <武器店/@goShop(0103)>\\

`
    Npc.Say(Player, S)
}

export function goShop(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    Player.RandomMove(Args.Str[0])
}

export function 白日门(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
我不喜欢有句话说很多次,没有钱的话\\
你自己应该知道怎么做,去白日门是吧?\\
2000大洋,一分也不能少。\\
<移动/@mapMoveStart(11,177,324,2000)> \\
<不/@exit>
`
    Npc.Say(Player, S)
}

export function 毒蛇山谷(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
移动到毒蛇山谷当然也需要有钱\\
总不能免费把你移动到那儿吧?\\
一毒蛇山谷需要1000金币。\\
支付这些钱，移动吗？\\\\
<移动/@mapMoveStart(0,672,83,1000)> \\
<不/@exit>\\
`
    Npc.Say(Player, S)
}


export function 封魔谷(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
我不喜欢有句话说很多次,没有钱的话\\
你自己应该知道怎么做,去封魔谷是吧?\\
2000大洋,一分也不能少。\\
<移动/@mapMoveStart(4,240,200,2000)> \\
<不/@exit>
`
    Npc.Say(Player, S)
}

export function mapMoveStart(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {

    if (Player.Gold >= Args.Int[3]) {
        Player.Gold -=Args.Int[3]
        Player.MapMove(Args.Str[0],Args.Int[1],Args.Int[2])
    }else{
        Player.MessageBox("你没有足够的金币用来支付我们的服务费用!\\请努力赚钱哦:)\\")
    }
}