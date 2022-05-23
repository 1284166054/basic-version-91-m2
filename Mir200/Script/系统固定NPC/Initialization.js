"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const AINpc = require("./AINpc");
const ManagerNpc = require("./ManagerNpc");
const MapEventNpc = require("./MapEventNpc");
const MissionsNpc = require("./MissionsNpc");
const QFunctionNpc = require("./QFunctionNpc");
function main() {
    ManagerNpcBind();
    MapEventNpcBind();
    QFunctionNpcBind();
    GameLib.onAINpcExecute = AINpc.Run;
    GameLib.onMissionFinish = MissionsNpc.OnMissionFinish;
}
exports.main = main;
function ManagerNpcBind() {
    //GameLib.onPlayerInitialization = ManagerNpc.Playeroninitialization
    //GameLib.onPlayerReconnection = ManagerNpc.Playerreconnection
    GameLib.onPlayerLogin = ManagerNpc.Playeronlogin; //角色登录触发
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
    GameLib.onCheckEnterMap = MapEventNpc.Checkentermap;
}
function QFunctionNpcBind() {
    GameLib.onKillMonster = QFunctionNpc.Killmonster; //杀怪触发
    //GameLib.onSlaveKillMonster = QFunctionNpc.Slavekillmonster        //宝宝杀怪触发
    GameLib.onKillPlayer = QFunctionNpc.Killplayer; //杀人触发
    //GameLib.onSlaveKillPlayer = QFunctionNpc.Slavekillplayer            //宝宝杀人触发
    GameLib.onPlayerDie = QFunctionNpc.Playerdie; //人物死亡触发
    //GameLib.onPlayerReAlive = QFunctionNpc.Playerrealive
    GameLib.onPlayerLevelUp = QFunctionNpc.Playerlevelup;
    //GameLib.onSlaveLevelUp = QFunctionNpc.Slavelevelup
    //GameLib.onPlayAddSkill = QFunctionNpc.Playaddskill
    //GameLib.onChangeAttatckMode = QFunctionNpc.Changeattatckmode   //更改攻击模式
    GameLib.onPlayerAttack = QFunctionNpc.Playerattack; //攻击触发
    //GameLib.onPlayerDropItem = QFunctionNpc.Playerdropitem
    GameLib.onGetExp = QFunctionNpc.Ongetexp; //获得经验触发
}
//# sourceMappingURL=Initialization.js.map