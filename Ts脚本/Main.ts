const UnitMap = new Map<string, any>()
//商店
import * as 武器店 from "./功能脚本组/商店/武器店"
import * as 项链店 from "./功能脚本组/商店/项链店"
import * as 手镯店 from "./功能脚本组/商店/手镯店"
import * as 戒指店 from "./功能脚本组/商店/戒指店"
import * as 首饰店 from "./功能脚本组/商店/首饰店"
import * as 杂货店 from "./功能脚本组/商店/杂货店"
import * as 服装店 from "./功能脚本组/商店/服装店"
import * as 书店 from "./功能脚本组/商店/书店"
import * as 肉店 from "./功能脚本组/商店/肉店"
import * as 仓库 from "./功能脚本组/商店/仓库"
import * as 药店 from "./功能脚本组/商店/药店"
import * as 炼药店 from "./功能脚本组/商店/炼药店"
import * as 头盔店 from "./功能脚本组/商店/头盔店"
import * as 商人 from "./功能脚本组/商店/商人"
import * as 彩票店 from "./功能脚本组/商店/彩票店"
UnitMap.set("武器店", 武器店)
UnitMap.set("项链店", 项链店)
UnitMap.set("手镯店", 手镯店)
UnitMap.set("戒指店", 戒指店)
UnitMap.set("首饰店", 首饰店)
UnitMap.set("杂货店", 杂货店)
UnitMap.set("服装店", 服装店)
UnitMap.set("书店", 书店)
UnitMap.set("肉店", 肉店)
UnitMap.set("仓库", 仓库)
UnitMap.set("药店", 药店)
UnitMap.set("炼药店", 炼药店)
UnitMap.set("头盔店", 头盔店)
UnitMap.set("商人", 商人)
UnitMap.set("彩票店", 彩票店)

//传送员
import * as 传送员 from "./功能脚本组/传送/传送员"
import * as 幻境传送 from "./功能脚本组/传送/幻境传送"
UnitMap.set("传送员", 传送员)
UnitMap.set("幻境传送", 幻境传送)



//比奇城
import * as 比奇老兵 from "./功能脚本组/城市NPC/比奇城/比奇老兵"
import * as 海岛老兵 from "./功能脚本组/城市NPC/比奇城/海岛老兵"
import * as 宣传员 from "./功能脚本组/城市NPC/比奇城/宣传员"
import * as 比奇国王 from "./功能脚本组/城市NPC/比奇城/比奇国王"
import * as 助理小敏 from "./功能脚本组/城市NPC/比奇城/助理小敏"
import * as 武馆教头 from "./功能脚本组/城市NPC/比奇城/武馆教头"
UnitMap.set("比奇老兵", 比奇老兵)
UnitMap.set("海岛老兵", 海岛老兵)
UnitMap.set("宣传员", 宣传员)
UnitMap.set("比奇国王", 比奇国王)
UnitMap.set("助理小敏", 助理小敏)
UnitMap.set("武馆教头", 武馆教头)


//白日门
import * as 白日门向导 from "./功能脚本组/城市NPC/白日门/白日门向导"
import * as 白日门学员 from "./功能脚本组/城市NPC/白日门/白日门学员"
import * as 白日门教头 from "./功能脚本组/城市NPC/白日门/白日门教头"
UnitMap.set("白日门向导", 白日门向导)
UnitMap.set("白日门教头", 白日门教头)
UnitMap.set("白日门学员", 白日门学员)

//盟重省

import * as 红名村老人 from "./功能脚本组/城市NPC/盟重省/红名村老人"
import * as 林小姐 from "./功能脚本组/城市NPC/盟重省/林小姐"
import * as 盟重老兵 from "./功能脚本组/城市NPC/盟重省/盟重老兵"
UnitMap.set("盟重老兵", 盟重老兵)
UnitMap.set("红名村老人", 红名村老人)
UnitMap.set("林小姐", 林小姐)


//封魔谷

import * as 封魔谷主 from "./功能脚本组/城市NPC/封魔谷/封魔谷主"
import * as 恶魔老兵 from "./功能脚本组/城市NPC/封魔谷/恶魔老兵"
import * as 恶魔老人 from "./功能脚本组/城市NPC/封魔谷/恶魔老人"
import * as 恶魔修理师 from "./功能脚本组/城市NPC/封魔谷/恶魔修理师"
import * as 月老 from "./功能脚本组/城市NPC/封魔谷/月老"
UnitMap.set("封魔谷主", 封魔谷主)
UnitMap.set("恶魔老兵", 恶魔老兵)
UnitMap.set("恶魔老人", 恶魔老人)
UnitMap.set("恶魔修理师", 恶魔修理师)
UnitMap.set("月老", 月老)


//苍月岛
import * as 苍月老兵 from "./功能脚本组/城市NPC/苍月岛/苍月老兵"
UnitMap.set("苍月老兵", 苍月老兵)



//沙巴克
import * as 武器升级 from "./功能脚本组/城市NPC/沙巴克/武器升级"
import * as 沙巴克特修 from "./功能脚本组/城市NPC/沙巴克/武器特修"
import * as 沙巴克武器店 from "./功能脚本组/城市NPC/沙巴克/武器店"
import * as 沙巴克杂货店 from "./功能脚本组/城市NPC/沙巴克/杂货店"
import * as 沙巴克服装店 from "./功能脚本组/城市NPC/沙巴克/衣服店"
import * as 沙巴克头盔店 from "./功能脚本组/城市NPC/沙巴克/头盔店"
import * as 沙巴克戒指店 from "./功能脚本组/城市NPC/沙巴克/戒指店"
import * as 沙巴克手镯店 from "./功能脚本组/城市NPC/沙巴克/手镯店"
import * as 沙巴克项链店 from "./功能脚本组/城市NPC/沙巴克/项链店"
import * as 沙巴克药店 from "./功能脚本组/城市NPC/沙巴克/药店"
import * as 沙巴克炼药店 from "./功能脚本组/城市NPC/沙巴克/炼药店"
import * as 皇宫神秘老人 from "./功能脚本组/城市NPC/沙巴克/神秘老人"
import * as 沙巴克老人 from "./功能脚本组/城市NPC/沙巴克/沙巴克老人"
import * as 管理人员 from "./功能脚本组/城市NPC/沙巴克/管理人员"
import * as 白日门来使 from "./功能脚本组/城市NPC/沙巴克/白日门来使"
UnitMap.set("沙巴克武器升级", 武器升级)
UnitMap.set("沙巴克特修", 沙巴克特修)
UnitMap.set("沙巴克武器店", 沙巴克武器店)
UnitMap.set("沙巴克杂货店", 沙巴克杂货店)
UnitMap.set("沙巴克服装店", 沙巴克服装店)
UnitMap.set("沙巴克头盔店", 沙巴克头盔店)
UnitMap.set("沙巴克项链店", 沙巴克项链店)
UnitMap.set("沙巴克手镯店", 沙巴克手镯店)
UnitMap.set("沙巴克戒指店", 沙巴克戒指店)
UnitMap.set("沙巴克药店", 沙巴克药店)
UnitMap.set("沙巴克炼药店", 沙巴克炼药店)
UnitMap.set("皇宫神秘老人", 皇宫神秘老人)
UnitMap.set("皇宫神秘老人", 皇宫神秘老人)
UnitMap.set("沙巴克老人", 沙巴克老人)
UnitMap.set("管理人员", 管理人员)
UnitMap.set("白日门来使", 白日门来使)


//自然洞穴
import * as 古墓商贩 from "./功能脚本组/地图NPC/自然洞穴/古墓商贩"
import * as 洞穴商贩 from "./功能脚本组/地图NPC/自然洞穴/洞穴商贩"
UnitMap.set("古墓商贩", 古墓商贩)
UnitMap.set("洞穴商贩", 洞穴商贩)

//蜈蚣洞
import * as 神秘老人_连接通道 from "./功能脚本组/地图NPC/蜈蚣洞/神秘老人"
UnitMap.set("神秘老人_连接通道", 神秘老人_连接通道)

//桃园之门

import * as 神秘老人_桃园之门 from "./功能脚本组/地图NPC/桃园之门/神秘老人"
import * as 合成师_桃园之门 from "./功能脚本组/地图NPC/桃园之门/合成师"
UnitMap.set("神秘老人_桃园之门", 神秘老人_桃园之门)
UnitMap.set("合成师_桃园之门", 合成师_桃园之门)

//藏宝阁

import * as 藏宝阁小贩 from "./功能脚本组/地图NPC/藏宝阁/小贩"
UnitMap.set("藏宝阁小贩", 藏宝阁小贩)


//沃玛森林

import * as 沃玛铁匠 from "./功能脚本组/地图NPC/沃玛森林/铁匠"
import * as 沃玛商人 from "./功能脚本组/地图NPC/沃玛森林/商人"
import * as 沃玛老人 from "./功能脚本组/地图NPC/沃玛森林/沃玛老人"
import * as 白日门勇士 from "./功能脚本组/地图NPC/沃玛森林/白日门勇士"
UnitMap.set("沃玛铁匠", 沃玛铁匠)
UnitMap.set("沃玛商人", 沃玛商人)
UnitMap.set("沃玛老人", 沃玛老人)
UnitMap.set("白日门勇士", 白日门勇士)




//幻境

import * as 幻境小贩 from "./功能脚本组/地图NPC/幻境/小贩"
import * as 幻境三层向导 from "./功能脚本组/地图NPC/幻境/三层向导"
import * as 幻境十层向导 from "./功能脚本组/地图NPC/幻境/十层向导"
import * as 禁地看护人 from "./功能脚本组/地图NPC/幻境/禁地看护人"
UnitMap.set("幻境小贩", 幻境小贩)
UnitMap.set("幻境三层向导", 幻境三层向导)
UnitMap.set("幻境十层向导", 幻境十层向导)
UnitMap.set("禁地看护人", 禁地看护人)







//系统固定NPC
import * as Initialization from "./系统固定NPC/Initialization"
import * as AINpc from "./系统固定NPC/AINpc"
import * as ExternalNpc from "./系统固定NPC/ExternalNpc"
import * as MagicNpc from "./系统固定NPC/MagicNpc"
import * as ManagerNpc from "./系统固定NPC/ManagerNpc"
import * as MapEventNpc from "./系统固定NPC/MapEventNpc"
import * as MissionsNpc from "./系统固定NPC/MissionsNpc"
import * as QFunctionNpc from "./系统固定NPC/QFunctionNpc"
import * as RobotManageNpc from "./系统固定NPC/RobotManageNpc"
import * as TimeManageNpc from "./系统固定NPC/TimeManageNpc"
UnitMap.set("AINpc", AINpc)
UnitMap.set("ExternalNpc", ExternalNpc)
UnitMap.set("MagicNpc", MagicNpc)
UnitMap.set("ManagerNpc", ManagerNpc)
UnitMap.set("MapEventNpc", MapEventNpc)
UnitMap.set("MissionsNpc", MissionsNpc)
UnitMap.set("QFunctionNpc", QFunctionNpc)
UnitMap.set("RobotManageNpc", RobotManageNpc)
UnitMap.set("TimeManageNpc", TimeManageNpc)


Initialization.main()
//引擎启动检查创建必要文件
if (!GameLib.DirectoryExists(GameLib.EnvirPath + 'PetData\\'))
    GameLib.CreateDir(GameLib.EnvirPath + 'PetData\\')

if (!GameLib.DirectoryExists(GameLib.EnvirPath + 'DebugData\\'))
    GameLib.CreateDir(GameLib.EnvirPath + 'DebugData\\');

if (!GameLib.DirectoryExists(GameLib.EnvirPath + 'Gua\\'))
    GameLib.CreateDir(GameLib.EnvirPath + 'Gua\\');

if (!GameLib.DirectoryExists(GameLib.EnvirPath + 'TiXian\\'))
    GameLib.CreateDir(GameLib.EnvirPath + 'TiXian\\');

//设定点击NPC触发回调
GameLib.onNpcClicked = (Npc: TNormNpc, PlayObject: TPlayObject, ClickLabel: string, AUnitName: string, AParams: string) => {

    //console.log("NpcClicked,", AUnitName, ClickLabel, AParams)

    let module = UnitMap.get(AUnitName)
    if (!module) {
        console.error("没有找到有效的NPC执行单元", AUnitName, ClickLabel)
        return
    }
    do {
        if (ClickLabel.charAt(0) == "@") {
            ClickLabel = ClickLabel.substr(1)
        }
    } while (ClickLabel.charAt(0) == "@");

    if (ClickLabel == 'main') {
        ClickLabel = 'Main'
    }


    let func = module[ClickLabel]


    //let LabelArr = ["buy", "sell", "repair", "s_repair"]
    let LabelArr = ["exit", "EXIT", "Exit"]
    if (LabelArr.indexOf(ClickLabel) != -1) {
        return
    }

    if (!func) {
        console.error("单元内没有找到有效的执行函数", AUnitName, ClickLabel)
        return

    }

    let args = CreateTArgs(AParams)
    try {
        func(Npc, PlayObject, args)
    } catch (e) {
        console.error("点击NPC出现异常:", e.message, e.stack)
    }

}



