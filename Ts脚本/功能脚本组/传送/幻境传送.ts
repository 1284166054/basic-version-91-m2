
export function Main(Npc: TNormNpc, Player: TPlayObject, Args: TArgs) {
    const S = ` 
移动到幻境必须具备下列两个条件！\\
①：需要30万金币 ②：需要幻境凭证\\
支付这些钱，移动吗？\\ \\
<移动/@幻境传送.moveHuan> \\
<不/@exit> \\
<返 回/@Main>\\
`
    Npc.Say(Player, S)
}

export function moveHuan(Npc: TNormNpc, Player: TPlayObject, Args: TArgs) {
    const S = ` 
${Player.Name}你是否具备下列条件就想使用我们的服务!\\
①：你有30万金币吗？②：你有幻境凭证吗？\\
幻境凭证？我从来没听说过呀？\\
请去那些极品怪兽身上寻找凭证吧\\
找到凭证之后，我会为你打开传送之门。\\ \\
<离开/@exit>\\
`
    if (Player.GetItemCount("幻境凭证") < 1) {
        Npc.Say(Player, S)
        return
    }

    if (!(Player.Gold >= 300000)) {
        Npc.Say(Player, S)
        return
    }

    Npc.Take(Player, "幻境凭证", 1)
    Player.Gold -= 300000
    Player.Give("回城卷")
    Player.MapMove("H001", 73, 67)

}
