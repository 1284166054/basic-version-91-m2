
import * as AINpc from "./AINpc"
import * as ExternalNpc from "./ExternalNpc"
import * as MagicNpc from "./MagicNpc"
import * as ManagerNpc from "./ManagerNpc"
import * as MapEventNpc from "./MapEventNpc"
import * as MissionsNpc from "./MissionsNpc"
import * as QFunctionNpc from "./QFunctionNpc"
import * as RobotManageNpc from "./RobotManageNpc"
import * as TimeManageNpc from "./TimeManageNpc"




export function main() {
    ManagerNpcBind()
    MapEventNpcBind()
    QFunctionNpcBind()
    GameLib.onAINpcExecute = AINpc.Run
    GameLib.onMissionFinish = MissionsNpc.OnMissionFinish
}

function ManagerNpcBind() {
    //GameLib.onPlayerInitialization = ManagerNpc.Playeroninitialization
    //GameLib.onPlayerReconnection = ManagerNpc.Playerreconnection
    GameLib.onPlayerLogin = ManagerNpc.Playeronlogin  //角色登录触发
    //GameLib.onPlayerReconnection = ManagerNpc.Playerreconnection
    //GameLib.onPlayerOffLine = ManagerNpc.Playeroffline
    //GameLib.onGetLineNoticeMessage = ManagerNpc.Linenoticemessage
    //GameLib.onProcessCommand = ManagerNpc.Processcommand
    //GameLib.onOpenMember = ManagerNpc.Openmember
    //GameLib.onPlayerHelp = ManagerNpc.Playerhelp
    //GameLib.onPlayerHot = ManagerNpc.Playerhot
    //GameLib.onPlayerPayHome = ManagerNpc.Playerpayhome
    //GameLib.onMonitorRevival = ManagerNpc.Monitorrevival
    //GameLib.onMonitorDie = ManagerNpc.Monitordie
    //GameLib.onMonitorKill = ManagerNpc.Monitorkill
    //GameLib.onMonitorDamage = ManagerNpc.Monitordamage
    //GameLib.onPlayerSpeedException = ManagerNpc.Playerspeedexception
    //GameLib.onPlayerReNameState = ManagerNpc.Onplayerrenamesucess
    //GameLib.onPlayerReNameState = ManagerNpc.Onplayerrenamefail
    //GameLib.onMonitorDamageEx = ManagerNpc.MonitorDamageEx
    //GameLib.onScriptEngineInit = ManagerNpc.OnScriptEngineInit
    //GameLib.onScriptEngineFinal = ManagerNpc.OnScriptEngineFinal
    //GameLib.onScriptButtonClick = ManagerNpc.OnScriptButton
    //GameLib.onAsyncHttpPostResult = ManagerNpc.OnAsyncHttpPostResult
}

function MapEventNpcBind() {
    GameLib.onCheckEnterMap = MapEventNpc.Checkentermap
}

function QFunctionNpcBind() {
    GameLib.onKillMonster = QFunctionNpc.Killmonster                    //杀怪触发

    //GameLib.onSlaveKillMonster = QFunctionNpc.Slavekillmonster        //宝宝杀怪触发
    GameLib.onKillPlayer = QFunctionNpc.Killplayer                      //杀人触发
    //GameLib.onSlaveKillPlayer = QFunctionNpc.Slavekillplayer            //宝宝杀人触发
    GameLib.onPlayerDie = QFunctionNpc.Playerdie                       //人物死亡触发
    //GameLib.onPlayerReAlive = QFunctionNpc.Playerrealive
    GameLib.onPlayerLevelUp = QFunctionNpc.Playerlevelup
    //GameLib.onSlaveLevelUp = QFunctionNpc.Slavelevelup
    //GameLib.onPlayAddSkill = QFunctionNpc.Playaddskill
    //GameLib.onChangeAttatckMode = QFunctionNpc.Changeattatckmode   //更改攻击模式

    GameLib.onPlayerAttack = QFunctionNpc.Playerattack      //攻击触发

    //GameLib.onPlayerDropItem = QFunctionNpc.Playerdropitem
    GameLib.onGetExp = QFunctionNpc.Ongetexp    //获得经验触发
}