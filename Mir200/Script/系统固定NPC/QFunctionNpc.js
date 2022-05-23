"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stallupdateitem = exports.Stallbuyitem = exports.Stallputoff = exports.Stallputon = exports.Onactivetitlechanged = exports.Itemsoullevelup = exports.Progressfaild = exports.Progressevent = exports.Getboxitem = exports.Groupremovedmember = exports.Groupaddedmember = exports.Guildremovedmember = exports.Beforeguildremovemember = exports.Guildaddedmember = exports.Beforeguildaddmember = exports.Refineitem = exports.Onrefinebuttonclick = exports.Magicspell = exports.Itemclickuseitem = exports.Itemclickitem = exports.Onaftertakeonitem = exports.Ontakeonitem = exports.Onafteroffonitem = exports.Ontakeoffitem = exports.Stdmodefunc = exports.Buyshopitemend = exports.Buyshopitem = exports.Butchitem = exports.Oncollect = exports.Onbeforecollect = exports.Minedropitem = exports.Pickupitem = exports.Dropitembymonname = exports.Mondropitem = exports.Playerthrowitem = exports.Playerdropitem = exports.Onbagitemevent = exports.Duelend = exports.Ongetexp = exports.Playerattack = exports.Changeattatckmode = exports.Playaddskill = exports.Slavelevelup = exports.Playerlevelup = exports.Playerrealive = exports.Playerdie = exports.Slavekillplayer = exports.Killplayer = exports.Slavekillmonster = exports.Killmonster = void 0;
exports.Onshowmissionclick = exports.Onshowfashionclick = exports.Playeraction = exports.Onsendhotkey = exports.Ongetlevelexp = exports.Onqueryallowlevelup = exports.Onpickupitemchangepicker = exports.Onchangetomonsterend = exports.Onchangetomonsterstart = exports.Oncustommessage = exports.Ondiceevent = exports.Altandlbuttonclickuseitem = exports.Altandlbuttonclickbagitem = exports.Clicksighicon = exports.Rideonhorse = exports.Mailaftersend = exports.Mailbeforesend = exports.Onafterstopstall = exports.Onbeforestartstall = exports.Onbeforeopenstall = exports.Stallextractgold = void 0;
const _______1 = require("../\u5168\u5C40\u811A\u672C[\u516C\u5171\u5355\u5143]/\u589E\u52A0\u9690\u85CF\u5E78\u8FD0\u503C");
const UpgradeWeapon = require("../\u5168\u5C40\u811A\u672C[\u516C\u5171\u5355\u5143]/\u6C99\u5DF4\u514B\u6B66\u5668\u5347\u7EA7\u8BBE\u7F6E");
//人物杀怪
function Killmonster(Player, Monster) {
}
exports.Killmonster = Killmonster;
//宝宝杀怪触发
function Slavekillmonster(Player, Slave, Monster) {
}
exports.Slavekillmonster = Slavekillmonster;
//杀人触发
function Killplayer(Killer, Player) {
    (0, _______1.addbodyluck)(Player, -500);
}
exports.Killplayer = Killplayer;
//宝宝杀人触发
function Slavekillplayer(Master, Slave, Player) {
}
exports.Slavekillplayer = Slavekillplayer;
//人物死亡触发
function Playerdie(Player, Killer) {
}
exports.Playerdie = Playerdie;
//人物复活触发
function Playerrealive(Player) {
}
exports.Playerrealive = Playerrealive;
//人物升级触发
function Playerlevelup(Player, Level) {
    (0, _______1.addbodyluck)(Player, 100);
}
exports.Playerlevelup = Playerlevelup;
//BB升级触发 Master:BB属于谁(可能是人形怪) Slave:当前升级的BB NewLevel:将要升到的级数 Accept:是否允许升级,默认为True,如果设置为False则BB不可升级
function Slavelevelup(Master, Slave, NewLevel, Accept) {
    return true;
}
exports.Slavelevelup = Slavelevelup;
//人物修习技能触发
function Playaddskill(Player, Magic, Accept) {
    return true;
}
exports.Playaddskill = Playaddskill;
//人物改变PK模式时触发,OldMode为改变前的模式,NewMode为新模式
function Changeattatckmode(Player, OldMode, NewMode, ResultMode) {
    return NewMode;
}
exports.Changeattatckmode = Changeattatckmode;
//人物攻击时触发: UserMagic为当前技能,可能为nil,Target为当前攻击的目标,可能为nil,Accept是否允许本次攻击,默认为是
function Playerattack(Player, UserMagic, Target, Accept) {
    //检测是否升级武器
    if (Player.Weapon != undefined) {
        if (Player.Weapon.DisplayName.includes('(*)') && Player.PoseCreate != null) {
            UpgradeWeapon.WeaponTest(Player);
        }
    }
    return true;
}
exports.Playerattack = Playerattack;
//人物获得经验值时触发
function Ongetexp(Player, Exp, ResultExp) {
    (0, _______1.addbodyluck)(Player, ResultExp * 0.002);
    return ResultExp;
}
exports.Ongetexp = Ongetexp;
//决斗结束
function Duelend(Npc, Winner, Loser) {
}
exports.Duelend = Duelend;
//OnBagItemEvent:背包物品事件
//Item:和当前事件相关的物品
//EventType: 事件类型
//  0:增加到背包
//  1:从背包中移出
//EventID：事件ID
/*
EventType:0,
EventID:
0:捡取
1:怪物身上挖出
2:挖矿挖出
3:解包
4:从身上取下
5:商店购买
6:元宝商城购买
7:礼金商城购买
8:玩家交易获得
9:交易市场购买
10:交易市场下架
11:命令制造获得
12:取仓库
13:其他

EventType:1,
EventID:
0:丢弃
1:死亡爆出
2:出售
3:正常使用
4:穿戴到身上
5:交易给其他玩家
6:到期销毁
7:破损销毁
8:上架到交易市场
9:用脚本执行销毁或拿走
10:存
11:其他
*/
function Onbagitemevent(Npc, Player, Item, EventType, EventID) {
}
exports.Onbagitemevent = Onbagitemevent;
//人物掉落物品(扔物)触发(针对监视物品):Player：玩家,Item: 物品,ISUseItem:是否为身上穿戴的物品,Accept:是否允许掉落(当物品规则中指定死亡必掉物品此参数无效)
function Playerdropitem(Player, Item, X, Y, ISUseItem, Accept) {
    console.log(Item);
    return true;
}
exports.Playerdropitem = Playerdropitem;
//人物扔物品触发(针对监视物品):Player：玩家,Item: 物品,Accept:是否允许扔出
function Playerthrowitem(Npc, Player, Item, MapX, MapY, Accept) {
}
exports.Playerthrowitem = Playerthrowitem;
//怪物掉落物品触发(针对监视物品)：Owner:物品所属玩家，Monster:掉落怪物,item:物品，Accept：是否允许掉落
function Mondropitem(Npc, Owner, Monster, Item, Map, X, Y, Accept) {
}
exports.Mondropitem = Mondropitem;
//根据怪物名称爆出物品触发(针对监视物品)：Owner:物品所属玩家，Monster:怪物名称,item:物品，Accept：是否允许掉落
function Dropitembymonname(Npc, Owner, Monster, Item, Accept) {
}
exports.Dropitembymonname = Dropitembymonname;
//玩家从地上捡物品触发
function Pickupitem(Npc, Player, Envir, UserItem, Accept) {
}
exports.Pickupitem = Pickupitem;
//挖矿时挖出物品触发: Player挖矿人 UserItem挖出的物品 Envir当前挖矿地图 Accept是否允许将该物品给玩家，默认为是
function Minedropitem(Npc, Player, Item, Envir, X, Y, Accept) {
}
exports.Minedropitem = Minedropitem;
//当玩家点击采集物时执行 Player:当前进行采集的玩家 Monster:被采集的资源对象 Accept:是否允许执行采集
function Onbeforecollect(Npc, Player, Monster, Accept) {
}
exports.Onbeforecollect = Onbeforecollect;
//当玩家采集完成 Player:当前进行采集的玩家 Monster:被采集的资源对象 Accept:是否允许采集到物品
function Oncollect(Npc, Player, Monster, Accept) {
}
exports.Oncollect = Oncollect;
//从怪物升上挖掘道具触发:Accept表示该物品允许玩家拥有，默认为True
function Butchitem(Npc, Player, Monster, UserItem, Accept) {
}
exports.Butchitem = Butchitem;
//购买商铺物品触发
function Buyshopitem(Npc, Player, UserItem, Kind, ShopType, Count, Price) {
}
exports.Buyshopitem = Buyshopitem;
//商铺购买完成时触发
function Buyshopitemend(Npc, Player, ItemName, Kind, ShopType, Count, ActualCount, Price) {
}
exports.Buyshopitemend = Buyshopitemend;
//使用物品时触发: StdMode=31,Accept:执行之后是否删除物品,默认为True,如果设置为False,则执行函数的同时不删除物品
function Stdmodefunc(Npc, Player, UserItem, Accept) {
}
exports.Stdmodefunc = Stdmodefunc;
//脱装备触发,Accept是否允许脱下,默认为True
function Ontakeoffitem(Npc, Player, UserItem, ItemWhere, Accept) {
}
exports.Ontakeoffitem = Ontakeoffitem;
//脱下装备且属性属性变化后触发
function Onafteroffonitem(Player, TakeOffItem, AItemWhere) {
}
exports.Onafteroffonitem = Onafteroffonitem;
//穿装备触发,Accept是否允许穿戴,默认为True
function Ontakeonitem(Npc, Player, UserItem, ItemWhere, Accept) {
}
exports.Ontakeonitem = Ontakeonitem;
//穿戴装备且属性变化后触发，与OnTakeOnItem不同是 OnTakeOnItem 触发执行的时候装备附加的属性没有加到人身上。OnAfterTakeOnItem是属性已经附加到人物身上了。
//注意当穿戴位置 原先没有装备的时候 TakeOffItem 是为nil 的 请先判断 再做操作。
function Onaftertakeonitem(Player, TakeOnItem, TakeOffItem, AItemWhere) {
}
exports.Onaftertakeonitem = Onaftertakeonitem;
//玩家使用物品点击目标物品触发, 使用物品的StdMode=33,Accept:执行后是否删除使用物品，默认为是
function Itemclickitem(Npc, Player, Source, Dest, Accept) {
}
exports.Itemclickitem = Itemclickitem;
//玩家使用物品点击身上穿戴的物品触发, 使用物品的StdMode=33,Accept:执行后是否删除使用物品，默认为是
function Itemclickuseitem(Npc, Player, ItemWhere, Source, Dest, Accept) {
}
exports.Itemclickuseitem = Itemclickuseitem;
//释放魔法触发,Accpet:是否允许释放，默认为True
function Magicspell(Npc, Player, UserMagic, nTargetX, nTargetY, Target, Accpet) {
}
exports.Magicspell = Magicspell;
//点击了背包中淬炼装备按钮 Handled设置为True后客户端将不弹出默认的淬炼窗口,Handled默认为False,如果需要在点击淬炼按钮的时候执行其他处理则在此事件中执行,同时将Handled设置为True
function Onrefinebuttonclick(Npc, Player, Handled) {
}
exports.Onrefinebuttonclick = Onrefinebuttonclick;
//淬炼装备
function Refineitem(Npc, Player, Item1, Item2, Item3, Handled) {
}
exports.Refineitem = Refineitem;
//加入行会前触发
function Beforeguildaddmember(Npc, Guild, Player, Accept) {
}
exports.Beforeguildaddmember = Beforeguildaddmember;
//加入行会后触发
function Guildaddedmember(Npc, Guild, Player) {
}
exports.Guildaddedmember = Guildaddedmember;
//退出行会前触发
function Beforeguildremovemember(Npc, Guild, Player, Accept) {
}
exports.Beforeguildremovemember = Beforeguildremovemember;
//退出行会后触发
function Guildremovedmember(Npc, Guild, Player) {
}
exports.Guildremovedmember = Guildremovedmember;
//队伍有角色加入时触发
function Groupaddedmember(Npc, Owner, Member) {
}
exports.Groupaddedmember = Groupaddedmember;
//队伍有角色退出触发
function Groupremovedmember(Npc, Owner, Member) {
}
exports.Groupremovedmember = Groupremovedmember;
//获取宝箱物品触发
function Getboxitem(Npc, Player, Item, BoxID) {
}
exports.Getboxitem = Getboxitem;
//用户执行进度条事件触发，只有脚本调用ShowProgress函数且最终执行其事件才会触发本函数
function Progressevent(Npc, Player, EventID) {
}
exports.Progressevent = Progressevent;
//用户角度条执行失败触发
function Progressfaild(Npc, Player, EventID) {
}
exports.Progressfaild = Progressfaild;
//装备的魂炼等级提升时触发：
function Itemsoullevelup(Npc, Player, Item) {
}
exports.Itemsoullevelup = Itemsoullevelup;
//角色称号系统当前称号发生变化后触发
function Onactivetitlechanged(Npc, Player) {
}
exports.Onactivetitlechanged = Onactivetitlechanged;
//历史更新原因,自由市场和个人摊位都命名为Stall,勿喷
//自由市场
function Stallputon(Npc, Player, Item, GoldPrice, GameGoldPrice, GamePoint, Accpet) {
} //上架之前
exports.Stallputon = Stallputon;
function Stallputoff(Npc, Player, Item, GoldPrice, GameGoldPrice, GamePoint, Accpet) {
} //下架之前
exports.Stallputoff = Stallputoff;
function Stallbuyitem(Npc, Player, StallName, Item, Gold, GameGold, GamePoint, Accpet) {
} //购买
exports.Stallbuyitem = Stallbuyitem;
function Stallupdateitem(Npc, Player, Item, OldGold, OldGameGold, OldGamePoint, Gold, GameGold, GamePoint, Accpet) {
} //修改物品价格
exports.Stallupdateitem = Stallupdateitem;
function Stallextractgold(Npc, Player, Gold, GameGold, GamePoint, Accpet) {
} //提取货款
exports.Stallextractgold = Stallextractgold;
//个人摊位
function Onbeforeopenstall(Npc, Player, Accpet) {
} //玩家打开摊位前触发,如果Accpet设置为false则不允许打开摊位界面
exports.Onbeforeopenstall = Onbeforeopenstall;
function Onbeforestartstall(Npc, Player, Accpet) {
} //玩家在摊位界面点击开始摆摊时触发,如果Accpet设置为false则不允许摆摊
exports.Onbeforestartstall = Onbeforestartstall;
function Onafterstopstall(Npc, Player) {
} //玩家在摊位界面点击停止摆摊后触发
exports.Onafterstopstall = Onafterstopstall;
//邮件系统
function Mailbeforesend(Npc, Player, SendTo, Item, Accept) {
}
exports.Mailbeforesend = Mailbeforesend;
function Mailaftersend(Npc, Player, SendTo) {
}
exports.Mailaftersend = Mailaftersend;
//坐骑 RideOn是骑马还是下马,True表示骑马,Accept表示是否允许本次骑马操作
function Rideonhorse(Npc, Player, RideOn, Accept) {
}
exports.Rideonhorse = Rideonhorse;
//客户端点击感叹号图标
function Clicksighicon(Npc, Player, MethodID) {
}
exports.Clicksighicon = Clicksighicon;
//Ctrl+左键点击背包物品触发,Item为被点击的物品
function Altandlbuttonclickbagitem(Npc, Player, Item) {
}
exports.Altandlbuttonclickbagitem = Altandlbuttonclickbagitem;
//Ctrl+左键点击穿戴物品触发,Item为被点击的物品,AItemWhere为穿戴位置
function Altandlbuttonclickuseitem(Npc, Player, Item, AItemWhere) {
}
exports.Altandlbuttonclickuseitem = Altandlbuttonclickuseitem;
//客户端骰子动画播放完毕触发处理事件 ATag:骰子标志 APoint: 骰子点数
function Ondiceevent(Npc, Player, ATag, APoint1, APoint2, APoint3) {
}
exports.Ondiceevent = Ondiceevent;
//自定义UI中通过脚本发送的命令
function Oncustommessage(Npc, Player, AMessageToken, AParam1, AParam2, AParam3, AData) {
}
exports.Oncustommessage = Oncustommessage;
//变身开始触发函数
function Onchangetomonsterstart(Actor, sMonName, nSec) {
} //变身的Actor,变成目标的怪物名称 ,变身的时长(单位秒)
exports.Onchangetomonsterstart = Onchangetomonsterstart;
//变身结束触发函数
function Onchangetomonsterend(Actor, sMonName) {
} //变身的Actor,变成目标的怪物名称
exports.Onchangetomonsterend = Onchangetomonsterend;
//PickSender 拾取者, Item 拾取的物品. Gold . 金币数量(如果物品是金币 那么 此变量 不等于 0 否则 此变量等于0.可根据此变量是否为 0 判断拾取的是物品还是金币)  WhoPicker .最终拾取者(通过改变此值 可实现 A拾取 到B背包的功能)
//ItemState 0: 可以继续拾取 1.不允许继续拾取物品还在地图上 2.不允许继续拾取直接从地图删除物品
function Onpickupitemchangepicker(PickSender, Item, Gold, WhoPicker, ItemState) {
}
exports.Onpickupitemchangepicker = Onpickupitemchangepicker;
//是否允许引擎对人物进行升级。通过操作Allow 进行 True 表示允许升级  False 表示不允许升级
function Onqueryallowlevelup(Player, Allow) {
}
exports.Onqueryallowlevelup = Onqueryallowlevelup;
// 用于获取每个等级的经验配置数据。此函数由引擎在人物需要改变人物升级经验时引擎触发。
function Ongetlevelexp(Level, Exp) {
}
exports.Ongetlevelexp = Ongetlevelexp;
//自定义热键触发（Akey的值代表按下的按键字符值,KeyCtrl，KeyAlt 代表 Ctrl，Alt按键的状态 False为没有按下 True为按下。ATargetActor代表客户端鼠标指向的TActor，X,Y代表TActor所在位置坐标，如果TActor为nil，则X,Y代表客户端鼠标指向的坐标。）
function Onsendhotkey(Npc, Player, Akey, KeyCtrl, KeyAlt, ATargetActor, X, Y) {
}
exports.Onsendhotkey = Onsendhotkey;
//PlayerAction函数，可以用来脚本封挂。Accept值为True 则执行动作，反之则不执行。默认为True。Action值代表不同的动作：
{
    /*
    1 攻击
    2 魔法
    3 骑马跑动
    4 跑动
    5 走路
    6 转向
    7 挖肉
    8 点击脚本
     */
}
function Playeraction(Npc, Player, Action, Accept) {
}
exports.Playeraction = Playeraction;
//时装界面勾选是否显示时装触发
function Onshowfashionclick(Npc, Player) {
}
exports.Onshowfashionclick = Onshowfashionclick;
//点击点击弹出任务侧边栏按钮时触发，默认Accept为True，当Accept为True的时候将弹出默认的任务侧边栏。
function Onshowmissionclick(Npc, Player, Accept) {
}
exports.Onshowmissionclick = Onshowmissionclick;
//# sourceMappingURL=QFunctionNpc.js.map