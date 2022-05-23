"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnAsyncHttpPostResult = exports.OnScriptButton = exports.OnScriptEngineFinal = exports.OnScriptEngineInit = exports.MonitorDamageEx = exports.Onplayerrenamefail = exports.Onplayerrenamesucess = exports.Playerspeedexception = exports.Guildinitialize = exports.Monitordamage = exports.Monitorkill = exports.Monitordie = exports.Monitorrevival = exports.Playerpayhome = exports.Playerhot = exports.Playerhelp = exports.Openmember = exports.Processcommand = exports.Linenoticemessage = exports.Playeroffline = exports.Playerreconnection = exports.Playeronlogin = exports.Playeroninitialization = void 0;
//玩家数据初始化完成触发，此时不可向角色发送消息(只初始化一次，离线挂机后重新上线不执行初始化)           
function Playeroninitialization(Player) {
}
exports.Playeroninitialization = Playeroninitialization;
//玩家登陆触发 
function Playeronlogin(Player, OnlineAddExp) {
    //新手登录
    if (Player.IsNewHuman) {
        //性别
        if (Player.Gender == 0) {
            GameLib.ManagerNpc.Give(Player, "布衣(男)");
        }
        else {
            GameLib.ManagerNpc.Give(Player, "布衣(女)");
        }
        GameLib.ManagerNpc.Give(Player, "木剑");
        GameLib.ManagerNpc.Give(Player, "蜡烛");
        GameLib.ManagerNpc.Give(Player, "魔法药(小量)");
        GameLib.ManagerNpc.Give(Player, "金创药(小量)");
        //职业
        switch (Player.Job) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
        }
        GameLib.Broadcast(`欢迎新玩家〖${Player.Name}〗来到了${GameLib.ServerName}!`);
    }
    //是否城主
    if (Player.ISCastleMaster) {
        GameLib.Broadcast(`号令天下的沙城主『${Player.Name}』来到了${GameLib.ServerName}!`);
    }
}
exports.Playeronlogin = Playeronlogin;
//人物小退  OnlineAddExp:是否离线挂机 
function Playerreconnection(Player, OnlineAddExp) {
}
exports.Playerreconnection = Playerreconnection;
//人物退出 
function Playeroffline(Player, OnlineAddExp) {
}
exports.Playeroffline = Playeroffline;
//玩家提示信息处理 
function Linenoticemessage(Player, Message) {
    return Message;
}
exports.Linenoticemessage = Linenoticemessage;
//玩家输入命令 
function Processcommand(Player, Command, Params, Processed) {
    //返回值 false 不阻止命令, true阻止命令
    return false;
}
exports.Processcommand = Processcommand;
//打开会员功能 
function Openmember(Player) {
}
exports.Openmember = Openmember;
//玩家打开帮助时内容 
function Playerhelp(Player) {
}
exports.Playerhelp = Playerhelp;
//玩家点击热点后触发 
function Playerhot(Player) {
}
exports.Playerhot = Playerhot;
//玩家点击商城在线充值时执行 
function Playerpayhome(Player) {
}
exports.Playerpayhome = Playerpayhome;
//怪物复活时触发: Envir地图环境,Actor怪物信息,Tag为怪物标志 
function Monitorrevival(Envir, ActorObject, Tag) {
}
exports.Monitorrevival = Monitorrevival;
//怪物死亡触发: Envir地图环境,Actor怪物信息,Killer击杀者,Tag为怪物标志    
function Monitordie(Envir, ActorObject, Killer, Tag) {
}
exports.Monitordie = Monitordie;
//怪物杀人触发: Envir地图环境,Actor怪物信息,Player被杀的玩家,Tag为怪物标志 
function Monitorkill(Envir, ActorObject, Killer, Tag) {
}
exports.Monitorkill = Monitorkill;
//怪物收到伤害触发: Actor怪物信息, ADamageSource造成目标掉血的对象,Tag为怪物标志,Value为掉血数量 该事件不区分物理攻击和魔法攻击   
function Monitordamage(ActorObject, ADamageSource, Tag, Value) {
}
exports.Monitordamage = Monitordamage;
//行会初始化 
function Guildinitialize(Npc, Guild) {
}
exports.Guildinitialize = Guildinitialize;
//发现玩家游戏速度异常 
function Playerspeedexception(Play, Kick) {
    return false;
}
exports.Playerspeedexception = Playerspeedexception;
//改名成功。需要注意的是这个时候传递进来的PlayObject 可能为nil 。 
function Onplayerrenamesucess(State, PlayObject, OldName, Newname) {
}
exports.Onplayerrenamesucess = Onplayerrenamesucess;
//改名失败。需要注意的是这个时候传递进来的PlayObject 可能为nil 。 
function Onplayerrenamefail(State, PlayObject, OldName, Newname) {
}
exports.Onplayerrenamefail = Onplayerrenamefail;
//此触发函数 为 export function MonitorDamage 的增强版本 会优先于 MonitorDamage执行。
function MonitorDamageEx(ActorObject, ADamageSource, Tag, SkillID, SkillLevel, Value) {
    return 0;
}
exports.MonitorDamageEx = MonitorDamageEx;
//当脚本引擎启动时 isReload  表示是否重载脚本
function OnScriptEngineInit(isReload) {
}
exports.OnScriptEngineInit = OnScriptEngineInit;
//当脚本引擎销毁时 isReload  表示是否重载脚本
function OnScriptEngineFinal(isReload) {
}
exports.OnScriptEngineFinal = OnScriptEngineFinal;
//自定义UI中脚本按钮触发函数， Flag参数 为 脚本按钮中 设置的 的标志字段
function OnScriptButton(PlayObject, Flag) {
}
exports.OnScriptButton = OnScriptButton;
function OnAsyncHttpPostResult(Ident, URL, ResultText, ErrorStr) {
}
exports.OnAsyncHttpPostResult = OnAsyncHttpPostResult;
//# sourceMappingURL=ManagerNpc.js.map