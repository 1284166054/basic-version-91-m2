"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnitMap = new Map();
//商店
const 武器店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5546\u5E97/\u6B66\u5668\u5E97");
const 项链店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5546\u5E97/\u9879\u94FE\u5E97");
const 手镯店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5546\u5E97/\u624B\u956F\u5E97");
const 戒指店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5546\u5E97/\u6212\u6307\u5E97");
const 首饰店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5546\u5E97/\u9996\u9970\u5E97");
const 杂货店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5546\u5E97/\u6742\u8D27\u5E97");
const 服装店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5546\u5E97/\u670D\u88C5\u5E97");
const 书店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5546\u5E97/\u4E66\u5E97");
const 肉店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5546\u5E97/\u8089\u5E97");
const 仓库 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5546\u5E97/\u4ED3\u5E93");
const 药店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5546\u5E97/\u836F\u5E97");
const 炼药店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5546\u5E97/\u70BC\u836F\u5E97");
const 头盔店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5546\u5E97/\u5934\u76D4\u5E97");
const 商人 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5546\u5E97/\u5546\u4EBA");
const 彩票店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5546\u5E97/\u5F69\u7968\u5E97");
UnitMap.set("武器店", 武器店);
UnitMap.set("项链店", 项链店);
UnitMap.set("手镯店", 手镯店);
UnitMap.set("戒指店", 戒指店);
UnitMap.set("首饰店", 首饰店);
UnitMap.set("杂货店", 杂货店);
UnitMap.set("服装店", 服装店);
UnitMap.set("书店", 书店);
UnitMap.set("肉店", 肉店);
UnitMap.set("仓库", 仓库);
UnitMap.set("药店", 药店);
UnitMap.set("炼药店", 炼药店);
UnitMap.set("头盔店", 头盔店);
UnitMap.set("商人", 商人);
UnitMap.set("彩票店", 彩票店);
//传送员
const 传送员 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u4F20\u9001/\u4F20\u9001\u5458");
const 幻境传送 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u4F20\u9001/\u5E7B\u5883\u4F20\u9001");
UnitMap.set("传送员", 传送员);
UnitMap.set("幻境传送", 幻境传送);
//比奇城
const 比奇老兵 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6BD4\u5947\u57CE/\u6BD4\u5947\u8001\u5175");
const 海岛老兵 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6BD4\u5947\u57CE/\u6D77\u5C9B\u8001\u5175");
const 宣传员 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6BD4\u5947\u57CE/\u5BA3\u4F20\u5458");
const 比奇国王 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6BD4\u5947\u57CE/\u6BD4\u5947\u56FD\u738B");
const 助理小敏 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6BD4\u5947\u57CE/\u52A9\u7406\u5C0F\u654F");
const 武馆教头 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6BD4\u5947\u57CE/\u6B66\u9986\u6559\u5934");
UnitMap.set("比奇老兵", 比奇老兵);
UnitMap.set("海岛老兵", 海岛老兵);
UnitMap.set("宣传员", 宣传员);
UnitMap.set("比奇国王", 比奇国王);
UnitMap.set("助理小敏", 助理小敏);
UnitMap.set("武馆教头", 武馆教头);
//白日门
const 白日门向导 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u767D\u65E5\u95E8/\u767D\u65E5\u95E8\u5411\u5BFC");
const 白日门学员 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u767D\u65E5\u95E8/\u767D\u65E5\u95E8\u5B66\u5458");
const 白日门教头 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u767D\u65E5\u95E8/\u767D\u65E5\u95E8\u6559\u5934");
UnitMap.set("白日门向导", 白日门向导);
UnitMap.set("白日门教头", 白日门教头);
UnitMap.set("白日门学员", 白日门学员);
//盟重省
const 红名村老人 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u76DF\u91CD\u7701/\u7EA2\u540D\u6751\u8001\u4EBA");
const 林小姐 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u76DF\u91CD\u7701/\u6797\u5C0F\u59D0");
const 盟重老兵 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u76DF\u91CD\u7701/\u76DF\u91CD\u8001\u5175");
UnitMap.set("盟重老兵", 盟重老兵);
UnitMap.set("红名村老人", 红名村老人);
UnitMap.set("林小姐", 林小姐);
//封魔谷
const 封魔谷主 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u5C01\u9B54\u8C37/\u5C01\u9B54\u8C37\u4E3B");
const 恶魔老兵 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u5C01\u9B54\u8C37/\u6076\u9B54\u8001\u5175");
const 恶魔老人 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u5C01\u9B54\u8C37/\u6076\u9B54\u8001\u4EBA");
const 恶魔修理师 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u5C01\u9B54\u8C37/\u6076\u9B54\u4FEE\u7406\u5E08");
const 月老 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u5C01\u9B54\u8C37/\u6708\u8001");
UnitMap.set("封魔谷主", 封魔谷主);
UnitMap.set("恶魔老兵", 恶魔老兵);
UnitMap.set("恶魔老人", 恶魔老人);
UnitMap.set("恶魔修理师", 恶魔修理师);
UnitMap.set("月老", 月老);
//苍月岛
const 苍月老兵 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u82CD\u6708\u5C9B/\u82CD\u6708\u8001\u5175");
UnitMap.set("苍月老兵", 苍月老兵);
//沙巴克
const 武器升级 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6C99\u5DF4\u514B/\u6B66\u5668\u5347\u7EA7");
const 沙巴克特修 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6C99\u5DF4\u514B/\u6B66\u5668\u7279\u4FEE");
const 沙巴克武器店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6C99\u5DF4\u514B/\u6B66\u5668\u5E97");
const 沙巴克杂货店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6C99\u5DF4\u514B/\u6742\u8D27\u5E97");
const 沙巴克服装店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6C99\u5DF4\u514B/\u8863\u670D\u5E97");
const 沙巴克头盔店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6C99\u5DF4\u514B/\u5934\u76D4\u5E97");
const 沙巴克戒指店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6C99\u5DF4\u514B/\u6212\u6307\u5E97");
const 沙巴克手镯店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6C99\u5DF4\u514B/\u624B\u956F\u5E97");
const 沙巴克项链店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6C99\u5DF4\u514B/\u9879\u94FE\u5E97");
const 沙巴克药店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6C99\u5DF4\u514B/\u836F\u5E97");
const 沙巴克炼药店 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6C99\u5DF4\u514B/\u70BC\u836F\u5E97");
const 皇宫神秘老人 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6C99\u5DF4\u514B/\u795E\u79D8\u8001\u4EBA");
const 沙巴克老人 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6C99\u5DF4\u514B/\u6C99\u5DF4\u514B\u8001\u4EBA");
const 管理人员 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6C99\u5DF4\u514B/\u7BA1\u7406\u4EBA\u5458");
const 白日门来使 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u57CE\u5E02NPC/\u6C99\u5DF4\u514B/\u767D\u65E5\u95E8\u6765\u4F7F");
UnitMap.set("沙巴克武器升级", 武器升级);
UnitMap.set("沙巴克特修", 沙巴克特修);
UnitMap.set("沙巴克武器店", 沙巴克武器店);
UnitMap.set("沙巴克杂货店", 沙巴克杂货店);
UnitMap.set("沙巴克服装店", 沙巴克服装店);
UnitMap.set("沙巴克头盔店", 沙巴克头盔店);
UnitMap.set("沙巴克项链店", 沙巴克项链店);
UnitMap.set("沙巴克手镯店", 沙巴克手镯店);
UnitMap.set("沙巴克戒指店", 沙巴克戒指店);
UnitMap.set("沙巴克药店", 沙巴克药店);
UnitMap.set("沙巴克炼药店", 沙巴克炼药店);
UnitMap.set("皇宫神秘老人", 皇宫神秘老人);
UnitMap.set("皇宫神秘老人", 皇宫神秘老人);
UnitMap.set("沙巴克老人", 沙巴克老人);
UnitMap.set("管理人员", 管理人员);
UnitMap.set("白日门来使", 白日门来使);
//自然洞穴
const 古墓商贩 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5730\u56FENPC/\u81EA\u7136\u6D1E\u7A74/\u53E4\u5893\u5546\u8D29");
const 洞穴商贩 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5730\u56FENPC/\u81EA\u7136\u6D1E\u7A74/\u6D1E\u7A74\u5546\u8D29");
UnitMap.set("古墓商贩", 古墓商贩);
UnitMap.set("洞穴商贩", 洞穴商贩);
//蜈蚣洞
const 神秘老人_连接通道 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5730\u56FENPC/\u8708\u86A3\u6D1E/\u795E\u79D8\u8001\u4EBA");
UnitMap.set("神秘老人_连接通道", 神秘老人_连接通道);
//桃园之门
const 神秘老人_桃园之门 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5730\u56FENPC/\u6843\u56ED\u4E4B\u95E8/\u795E\u79D8\u8001\u4EBA");
const 合成师_桃园之门 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5730\u56FENPC/\u6843\u56ED\u4E4B\u95E8/\u5408\u6210\u5E08");
UnitMap.set("神秘老人_桃园之门", 神秘老人_桃园之门);
UnitMap.set("合成师_桃园之门", 合成师_桃园之门);
//藏宝阁
const 藏宝阁小贩 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5730\u56FENPC/\u85CF\u5B9D\u9601/\u5C0F\u8D29");
UnitMap.set("藏宝阁小贩", 藏宝阁小贩);
//沃玛森林
const 沃玛铁匠 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5730\u56FENPC/\u6C83\u739B\u68EE\u6797/\u94C1\u5320");
const 沃玛商人 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5730\u56FENPC/\u6C83\u739B\u68EE\u6797/\u5546\u4EBA");
const 沃玛老人 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5730\u56FENPC/\u6C83\u739B\u68EE\u6797/\u6C83\u739B\u8001\u4EBA");
const 白日门勇士 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5730\u56FENPC/\u6C83\u739B\u68EE\u6797/\u767D\u65E5\u95E8\u52C7\u58EB");
UnitMap.set("沃玛铁匠", 沃玛铁匠);
UnitMap.set("沃玛商人", 沃玛商人);
UnitMap.set("沃玛老人", 沃玛老人);
UnitMap.set("白日门勇士", 白日门勇士);
//幻境
const 幻境小贩 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5730\u56FENPC/\u5E7B\u5883/\u5C0F\u8D29");
const 幻境三层向导 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5730\u56FENPC/\u5E7B\u5883/\u4E09\u5C42\u5411\u5BFC");
const 幻境十层向导 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5730\u56FENPC/\u5E7B\u5883/\u5341\u5C42\u5411\u5BFC");
const 禁地看护人 = require("./\u529F\u80FD\u811A\u672C\u7EC4/\u5730\u56FENPC/\u5E7B\u5883/\u7981\u5730\u770B\u62A4\u4EBA");
UnitMap.set("幻境小贩", 幻境小贩);
UnitMap.set("幻境三层向导", 幻境三层向导);
UnitMap.set("幻境十层向导", 幻境十层向导);
UnitMap.set("禁地看护人", 禁地看护人);
//系统固定NPC
const Initialization = require("./\u7CFB\u7EDF\u56FA\u5B9ANPC/Initialization");
const AINpc = require("./\u7CFB\u7EDF\u56FA\u5B9ANPC/AINpc");
const ExternalNpc = require("./\u7CFB\u7EDF\u56FA\u5B9ANPC/ExternalNpc");
const MagicNpc = require("./\u7CFB\u7EDF\u56FA\u5B9ANPC/MagicNpc");
const ManagerNpc = require("./\u7CFB\u7EDF\u56FA\u5B9ANPC/ManagerNpc");
const MapEventNpc = require("./\u7CFB\u7EDF\u56FA\u5B9ANPC/MapEventNpc");
const MissionsNpc = require("./\u7CFB\u7EDF\u56FA\u5B9ANPC/MissionsNpc");
const QFunctionNpc = require("./\u7CFB\u7EDF\u56FA\u5B9ANPC/QFunctionNpc");
const RobotManageNpc = require("./\u7CFB\u7EDF\u56FA\u5B9ANPC/RobotManageNpc");
const TimeManageNpc = require("./\u7CFB\u7EDF\u56FA\u5B9ANPC/TimeManageNpc");
UnitMap.set("AINpc", AINpc);
UnitMap.set("ExternalNpc", ExternalNpc);
UnitMap.set("MagicNpc", MagicNpc);
UnitMap.set("ManagerNpc", ManagerNpc);
UnitMap.set("MapEventNpc", MapEventNpc);
UnitMap.set("MissionsNpc", MissionsNpc);
UnitMap.set("QFunctionNpc", QFunctionNpc);
UnitMap.set("RobotManageNpc", RobotManageNpc);
UnitMap.set("TimeManageNpc", TimeManageNpc);
Initialization.main();
//引擎启动检查创建必要文件
if (!GameLib.DirectoryExists(GameLib.EnvirPath + 'PetData\\'))
    GameLib.CreateDir(GameLib.EnvirPath + 'PetData\\');
if (!GameLib.DirectoryExists(GameLib.EnvirPath + 'DebugData\\'))
    GameLib.CreateDir(GameLib.EnvirPath + 'DebugData\\');
if (!GameLib.DirectoryExists(GameLib.EnvirPath + 'Gua\\'))
    GameLib.CreateDir(GameLib.EnvirPath + 'Gua\\');
if (!GameLib.DirectoryExists(GameLib.EnvirPath + 'TiXian\\'))
    GameLib.CreateDir(GameLib.EnvirPath + 'TiXian\\');
//设定点击NPC触发回调
GameLib.onNpcClicked = (Npc, PlayObject, ClickLabel, AUnitName, AParams) => {
    //console.log("NpcClicked,", AUnitName, ClickLabel, AParams)
    let module = UnitMap.get(AUnitName);
    if (!module) {
        console.error("没有找到有效的NPC执行单元", AUnitName, ClickLabel);
        return;
    }
    do {
        if (ClickLabel.charAt(0) == "@") {
            ClickLabel = ClickLabel.substr(1);
        }
    } while (ClickLabel.charAt(0) == "@");
    if (ClickLabel == 'main') {
        ClickLabel = 'Main';
    }
    let func = module[ClickLabel];
    //let LabelArr = ["buy", "sell", "repair", "s_repair"]
    let LabelArr = ["exit", "EXIT", "Exit"];
    if (LabelArr.indexOf(ClickLabel) != -1) {
        return;
    }
    if (!func) {
        console.error("单元内没有找到有效的执行函数", AUnitName, ClickLabel);
        return;
    }
    let args = CreateTArgs(AParams);
    try {
        func(Npc, PlayObject, args);
    }
    catch (e) {
        console.error("点击NPC出现异常:", e.message, e.stack);
    }
};
//# sourceMappingURL=Main.js.map