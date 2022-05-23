export function checkPose(Player: TPlayObject): boolean {

    let PoseTActor = Player.PoseCreate
    let PosePlayer: TPlayObject


    //检测对面是否有对象
    if (PoseTActor == undefined) {
        //Player.MessageBox("你们二个面对面站好呀，不要乱动")
        return false
    }


    //检测对面对象是不是玩家
    if (!PoseTActor.IsPlayer()) {
        // Player.MessageBox("你对面不是个人啊")
        return false
    } else {
        PosePlayer = PoseTActor as TPlayObject
    }



    //检测对面对象是否面空
    if (PosePlayer.PoseCreate == undefined) {
        //Player.MessageBox("你们二个面对面站好呀，不要乱动")
        return false
    }


    //检测对面对象是否面对你
    if (PosePlayer.PoseCreate.Name != Player.Name) {
        //Player.MessageBox("你们二个面对面站好呀，不要乱动")
        return false
    }

    return true
}