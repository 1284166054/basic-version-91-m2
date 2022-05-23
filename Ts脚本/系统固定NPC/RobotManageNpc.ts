export function morningMsg(Npc: TNormNpc, Player: TPlayObject, OnlineAddExp: Boolean) {

    GameLib.Broadcast("亲爱的玩家，现在已经是早上了")
    GameLib.Broadcast("游戏虽然好玩，可别忘了工作和学习的时间")

}


export function afternoonMsg(Npc: TNormNpc, Player: TPlayObject, OnlineAddExp: Boolean) {


    GameLib.Broadcast("亲爱的玩家，现在已经是中午了")
    GameLib.Broadcast("游戏虽然好玩，可别忘了多陪陪你的朋友和家人")
}



export function nightMsg(Npc: TNormNpc, Player: TPlayObject, OnlineAddExp: Boolean) {


    GameLib.Broadcast("亲爱的玩家，现在已经是晚上了")
    GameLib.Broadcast("游戏虽然好玩，也别忘了陪朋友和家人吃顿晚饭")
}



export function dawnMsg(Npc: TNormNpc, Player: TPlayObject, OnlineAddExp: Boolean) {


    GameLib.Broadcast("亲爱的玩家，现在已经是凌晨了")
    GameLib.Broadcast("游戏虽然好玩，也别忘了是不是该休息了")
}
