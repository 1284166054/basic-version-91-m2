//行会
export let WomaHorn = '沃玛号角';
export let CreateGuildGold = 1000000;	//创建行会费用
export let GuildWarPrice = 100000;	//行会战申请费用   

export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
这里是比奇城堡宫殿.我是管理各种事情的国王.你有什么事情吗？\\
请注意:您在填写行会名称时一定要慎重。如果包含不健康、\\
有悖于社会精神文明的字眼，我们可以在不通知的情况下\\
做删除处理。我们愿与您共建网络文明，谢谢您的配合！\\
<请求创建行会./@@InPutString01(请输入行会名称:)>\\
<申请行会战争./@guildwar>\\
<如何建立行会./@buildguildexp>\\
<有关行会战争./@guildwarexp>\\
<申请攻城战争./@requestcastlewar>\\
`
    Npc.Say(Player, S)
}


export function guildwar(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
填写与你交战的敌对行会的名字，申请行会战争必须支付${GuildWarPrice}{金币\\\\
<立即申请行会战争/@@InPutString02(请输入对方行会名称:)>\\
<返回/@main>\
`
    Npc.Say(Player, S)
}


export function InPutString01(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    let AGuildName = ''
    let AGuild: TGuild
    if (Player.Guild != null) {
        Npc.MessageBox(Player, '你已加入了行会！！！')
        return
    }
    AGuildName = Args.Str[Args.Count - 1].trim()

    if (AGuildName == '') {
        Npc.MessageBox(Player, '行会名称必须填写')
        return
    }
    if (Player.Gold < CreateGuildGold) {
        Npc.MessageBox(Player, `创建行会需要金币{S=${String(CreateGuildGold)};C=249}`)
        return
    }
    if (Player.GetItemCount(WomaHorn) == 0) {
        Npc.MessageBox(Player, `创建行会需要{S=${WomaHorn};C=249}`)
        return
    }
    if (GameLib.FindGuild(AGuildName)
        != null) {
        Npc.MessageBox(Player, `已经存在名为{S=${AGuildName};C=249}的行会`)
        return
    }
    AGuild = GameLib.CreateGuild(AGuildName, Player.Name)

    if (AGuild != null) {
        Npc.Take(Player, '金币', CreateGuildGold)

        Npc.Take(Player, WomaHorn, 1)

        AGuild.VarDateTime('创建日期').AsDateTime = DateUtils.Now()
        AGuild.VarDateTime('创建日期').Save()
        Main(Npc, Player, Args)

        Npc.MessageBox(Player, '行会创建完成！')
    } else {
        Npc.MessageBox(Player, '行会创建失败！')
    }
}

export function InPutString02(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    let AGuildName = ''
    if (Player.Guild == null) {
        return
    }
    if (!Player.IsGuildMaster) {
        Npc.MessageBox(Player, '只有行会掌门人才有权申请行会战！')
        return
    }
    AGuildName = Args.Str[Args.Count - 1].trim()

    if (AGuildName == '') {
        Npc.MessageBox(Player, '对方行会名称必须填写')
        return
    }
    if (Player.Gold < GuildWarPrice) {
        Npc.MessageBox(Player, `申请行会战需要金币{S=${String(GuildWarPrice)};C=249}`)
        return
    }
    if (GameLib.FindGuild(AGuildName) == null) {
        Npc.MessageBox(Player, `行会{S=${AGuildName};C=249}不存在`)
        return
    }
    if (GameLib.AddGuildWar(Player.Guild.Name, AGuildName)) {
        Npc.Take(Player, '金币', GuildWarPrice)
        Npc.MessageBox(Player, '行会战申请成功！')
        Npc.CloseDialog
    }
}

export function buildguildexp(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
建立行会你应该证明你有资格。必须支付100万金币作为基础\\
而且要取得位于沃玛寺庙底部深处的沃玛教主所拥有的号角!\\\\
<返回/@main>
`
    Npc.Say(Player, S)
}

export function guildwarexp(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
<行会战/@guildwar2>是一种合法的战争，因为目前有许多行会和\\
玩家都同意，这是<合法的/@warrule>的行会间战争。\\
你是否<请求/@guildwar>行会战争?战争将进行3小时,\\
你必须支付所规定的申请费用.\\\\
<返回/@main>
`
    Npc.Say(Player, S)
}

export function guildwar2(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
当你请求行会战争的时候,相同行会成员的名字将会出现在蓝色的。\\
在另一方面,敌人的行会成员名字将会变成橘色的.开战中的行会\\
成员在此期间登录,信息窗口会有[××在与你行会进行行会战]\\
的信息出现，在这个时候，如果你杀敌了人的行会某一个成员,\\
系统对你的行为将不会被视为 PK 。 \\\\
<返回/@guildwarexp>
`
    Npc.Say(Player, S)
}

export function warrule(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
行会战争在城市中不能发生,它在城市某范围外或内部竞赛区\\
域(一些建筑物之内)被启动.否则你 PK 你的身份将会是红色\\
的!甚至在战争期间。\\ \\
<返回/@guildwarexp>
`
    Npc.Say(Player, S)
}

export function requestcastlewar(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {
    const S = `
请求对沙巴克作战你应该有祖玛教主的头像,你有它吗?战争将会在\\
申请日期的第三天内开始。\\\\
<给祖玛头像/@requestcastlewarnow>\\
<返回./@main>\\\
`
    Npc.Say(Player, S)
}


export function requestcastlewarnow(Npc: TNormNpc, Player: TPlayObject, Args: TArgs): void {



    let Castle = GameLib.FindCastle("沙巴克")
    let guild = Player.Guild

    for (let index = 0; index < Castle.AttackWarCount; index++) {
        console.log(index)
        if (Castle.GetAttackWarGuild(index).Name == guild.Name) {
            Player.MessageBox(`当前行会已经在攻城列表中！\\攻城时间:${DateUtils.FormatDateTime("YYYY年MM月DD日20:00", Castle.GetAttackWarDate(index))}`)
            return
        }

    }

    if (!Player.IsGuildMaster) {
        Player.MessageBox("只有行会掌门人才有权申请攻城战！")
        return
    }

    if (Player.GetItemCount("祖玛头像") == 0) {
        Player.MessageBox("申请攻城战需要祖玛头像")
        return
    }


    let attacDate = DateUtils.IncDay(DateUtils.Now(), 3)
    Castle.AddAttackerByTime(guild, attacDate)
    Npc.Take(Player, "祖玛头像", 1)
    Player.MessageBox(`申请攻城战成功！\\攻城时间:${DateUtils.FormatDateTime("YYYY年MM月DD日20:00", attacDate)}`)

}