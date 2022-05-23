
//玩家数据初始化完成触发，此时不可向角色发送消息(只初始化一次，离线挂机后重新上线不执行初始化)           
export function Playeroninitialization(Player: TPlayObject): void {
}
//玩家登陆触发 
export function Playeronlogin(Player: TPlayObject, OnlineAddExp: boolean): void {
    //新手登录
    if (Player.IsNewHuman) {
        //性别
        if (Player.Gender == 0) {
            GameLib.ManagerNpc.Give(Player,"布衣(男)")
        } else {
            GameLib.ManagerNpc.Give(Player,"布衣(女)")
        }
        GameLib.ManagerNpc.Give(Player,"木剑")
        GameLib.ManagerNpc.Give(Player,"蜡烛")
        GameLib.ManagerNpc.Give(Player,"魔法药(小量)")
        GameLib.ManagerNpc.Give(Player,"金创药(小量)")

        //职业
        switch (Player.Job) {
            case 0:

                break;
            case 1:

                break;
            case 2:

                break;
        }

        GameLib.Broadcast(`欢迎新玩家〖${Player.Name}〗来到了${GameLib.ServerName}!`)
    }

    //是否城主
    if (Player.ISCastleMaster) {
        GameLib.Broadcast(`号令天下的沙城主『${Player.Name}』来到了${GameLib.ServerName}!`)
    } 

}
//人物小退  OnlineAddExp:是否离线挂机 
export function Playerreconnection(Player: TPlayObject, OnlineAddExp: boolean): void {
}
//人物退出 
export function Playeroffline(Player: TPlayObject, OnlineAddExp: boolean): void {
}
//玩家提示信息处理 
export function Linenoticemessage(Player: TPlayObject, Message: string): string {
    return Message
}
//玩家输入命令 
export function Processcommand(Player: TPlayObject, Command: string, Params: string, Processed: boolean): boolean {
    //返回值 false 不阻止命令, true阻止命令
    return false
}
//打开会员功能 
export function Openmember(Player: TPlayObject): void {
}
//玩家打开帮助时内容 
export function Playerhelp(Player: TPlayObject): void {

}
//玩家点击热点后触发 
export function Playerhot(Player: TPlayObject): void {
}
//玩家点击商城在线充值时执行 
export function Playerpayhome(Player: TPlayObject): void {
}
//怪物复活时触发: Envir地图环境,Actor怪物信息,Tag为怪物标志 
export function Monitorrevival(Envir: TEnvirnoment, ActorObject: TActor, Tag: number): void {
}
//怪物死亡触发: Envir地图环境,Actor怪物信息,Killer击杀者,Tag为怪物标志    
export function Monitordie(Envir: TEnvirnoment, ActorObject: TActor, Killer: TActor, Tag: number): void {
}
//怪物杀人触发: Envir地图环境,Actor怪物信息,Player被杀的玩家,Tag为怪物标志 
export function Monitorkill(Envir: TEnvirnoment, ActorObject: TActor, Killer: TActor, Tag: number): void {
}
//怪物收到伤害触发: Actor怪物信息, ADamageSource造成目标掉血的对象,Tag为怪物标志,Value为掉血数量 该事件不区分物理攻击和魔法攻击   
export function Monitordamage(ActorObject: TActor, ADamageSource: TActor, Tag: number, Value: number): void {
}
//行会初始化 
export function Guildinitialize(Npc: TNormNpc, Guild: TGuild) {
}
//发现玩家游戏速度异常 
export function Playerspeedexception(Play: TPlayObject, Kick: boolean): boolean {
    return false
}

//改名成功。需要注意的是这个时候传递进来的PlayObject 可能为nil 。 
export function Onplayerrenamesucess(State: number, PlayObject: TPlayObject, OldName: string, Newname: string): void {
}
//改名失败。需要注意的是这个时候传递进来的PlayObject 可能为nil 。 
export function Onplayerrenamefail(State: number, PlayObject: TPlayObject, OldName: string, Newname: string): void {
}
//此触发函数 为 export function MonitorDamage 的增强版本 会优先于 MonitorDamage执行。
export function MonitorDamageEx(ActorObject: TActor, ADamageSource: TActor, Tag: number, SkillID: number, SkillLevel: number, Value: number): number {
    return 0
}
//当脚本引擎启动时 isReload  表示是否重载脚本
export function OnScriptEngineInit(isReload: Boolean) {

}
//当脚本引擎销毁时 isReload  表示是否重载脚本
export function OnScriptEngineFinal(isReload: Boolean) {
}
//自定义UI中脚本按钮触发函数， Flag参数 为 脚本按钮中 设置的 的标志字段
export function OnScriptButton(PlayObject: TPlayObject, Flag: string): void
//用于支持http提交json功能,结果触发函数,当成功或者失败会调用此函数。(异步模式 同步会导致引擎主线程逻辑卡)
{

}
export function OnAsyncHttpPostResult(Ident: string, URL: string, ResultText: string, ErrorStr: string): void {
}





