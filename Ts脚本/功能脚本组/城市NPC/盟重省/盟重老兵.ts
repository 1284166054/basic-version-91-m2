export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
听说虹魔教主复活了!他的领地“封魔谷”也已重现大陆!\\
好象封魔谷的入口在沃玛森林附近\\
不过那么邪恶的地方,你真的打算去吗?\\
<坐标/@talking(S1)> 询问\\
<去商店/@talking(S2)>\\
<去苍月岛/@talking(S3)>\\
<挑战幻境/@幻境传送.Main>\\
<打听苍月岛惊人内幕/@talking(S4)>\\
<打听幻境消息/@talking(S5)>\\
`
    Npc.Say(Player, S)
}
export function talking(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    let talk = Args.Str[0]
    const S1 = `
比奇最大的城市就是你所在的比奇城，坐标就不用我说了吧！\\
毒蛇山谷的小村很好找，你只要往500 500 的坐标走就能够\\
到了。不过，如果你要到盟重土城，就应该牢记300 300\\
这个数字, 他会指引你走到那里。离流放地很近的沙巴克，是\\
一个危险的区域，我记得以前在600 300找到它的。不过我要提\\
醒你，每个省份的坐标都是不同的，可别在比奇找沙巴克哦！\\
所以，要记住每个通往其他省的关口。\\
最后，要记得多跟朋友走走，你就会和我一样熟悉这个大陆。\\\\
 <返 回/@Main>
`
    const S2 = `
你要去哪个商店？这个是免费服务！ \\\\
<铁匠铺/@goShop(0159)>    <布料店/@goShop(0149)> \\
<首饰店/@goShop(0158)>    <客栈/@goShop(0145)> \\
<书店/@goShop(0161)> \
`
    const S3 = `
我不喜欢有句话说很多次,没有钱的话你自己应该知道怎么做,\\
去苍月岛是吧?2000大洋,一分也不能少。\\
<移动/@pay> \\
<不/@exit>
`
    const S4 = `
告诉你，其实苍月岛不只是那么简单的岛屿哦，\\
他是传说中打开玛法大陆某道封印之门的钥匙，苍月岛的出现\\
是新英雄时代来临的象征，封魔谷哪边的好象也发生了什么,\\
年轻人,有心的话多出去转转,其实最珍贵的东西通常都在自己身边!\\
<返回/@main>\\
`
    const S5 = `
嘘！ 昨天晚上我和我夫人做了同样奇怪的梦！\\
梦见宝藏显现在幻境！\\
而且我还知道幻境的方位，可以领您去！\\
进入幻境以后您可以得到丰富的宝藏！\\
<返回/@main>\\
`

    switch (talk) {
        case 'S1':
            Player.Say(S1)
            break;
        case 'S2':
            Player.Say(S2)
            break;
        case 'S3':
            Player.Say(S3)
            break;
        case 'S4':
            Player.Say(S4)
            break;
        case 'S5':
            Player.Say(S5)
            break;
        default:
            break;
    }
}


export function goShop(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    Player.RandomMove(Args.Str[0])
}

export function pay(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    if (Player.Gold >= 2000) {
        Player.Gold -= 2000
        Player.MapMove("5", 140, 330)
    } else {
        Player.Say("你没有足够的金币用来支付我们的服务费用!请努力赚钱哦:)")
    }
}