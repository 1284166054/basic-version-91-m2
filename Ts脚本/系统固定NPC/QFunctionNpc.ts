import { addbodyluck } from "../全局脚本[公共单元]/增加隐藏幸运值"
import * as UpgradeWeapon from "../全局脚本[公共单元]/沙巴克武器升级设置"

//人物杀怪
export function Killmonster(Player: TPlayObject, Monster: TActor): void {

}
//宝宝杀怪触发
export function Slavekillmonster(Player: TPlayObject, Slave: TActor, Monster: TActor): void {
}
//杀人触发
export function Killplayer(Killer: TPlayObject, Player: TPlayObject): void {
    addbodyluck(Player, -500)
}
//宝宝杀人触发
export function Slavekillplayer(Master: TPlayObject, Slave: TActor, Player: TPlayObject): void {
}
//人物死亡触发
export function Playerdie(Player: TPlayObject, Killer: TActor): void {
}
//人物复活触发
export function Playerrealive(Player: TPlayObject): void {
}
//人物升级触发
export function Playerlevelup(Player: TPlayObject, Level: number): void {
    addbodyluck(Player, 100)

}
//BB升级触发 Master:BB属于谁(可能是人形怪) Slave:当前升级的BB NewLevel:将要升到的级数 Accept:是否允许升级,默认为True,如果设置为False则BB不可升级
export function Slavelevelup(Master: TActor, Slave: TActor, NewLevel: number, Accept: boolean): boolean {
    return true
}
//人物修习技能触发
export function Playaddskill(Player: TPlayObject, Magic: TUserMagic, Accept: boolean): boolean {
    return true
}
//人物改变PK模式时触发,OldMode为改变前的模式,NewMode为新模式
export function Changeattatckmode(Player: TPlayObject, OldMode: number, NewMode: number, ResultMode: number): number {
    return NewMode
}
//人物攻击时触发: UserMagic为当前技能,可能为nil,Target为当前攻击的目标,可能为nil,Accept是否允许本次攻击,默认为是
export function Playerattack(Player: TPlayObject, UserMagic: TUserMagic, Target: TActor, Accept: boolean): boolean {

    //检测是否升级武器
    if (Player.Weapon != undefined) {
        if (Player.Weapon.DisplayName.includes('(*)') && Player.PoseCreate != null) {
            UpgradeWeapon.WeaponTest(Player)
        }
    }




    return true
}
//人物获得经验值时触发
export function Ongetexp(Player: TPlayObject, Exp: number, ResultExp: number): number {

    addbodyluck(Player, ResultExp * 0.002)
    return ResultExp
}
//决斗结束
export function Duelend(Npc: TNormNpc, Winner, Loser: TPlayObject) {
}

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
export function Onbagitemevent(Npc: TNormNpc, Player: TPlayObject, Item: TUserItem, EventType, EventID: Number) {
}
//人物掉落物品(扔物)触发(针对监视物品):Player：玩家,Item: 物品,ISUseItem:是否为身上穿戴的物品,Accept:是否允许掉落(当物品规则中指定死亡必掉物品此参数无效)
export function Playerdropitem(Player: TPlayObject, Item: TUserItem, X: number, Y: number, ISUseItem: boolean, Accept: boolean): boolean {
    console.log(Item)
    return true
}
//人物扔物品触发(针对监视物品):Player：玩家,Item: 物品,Accept:是否允许扔出
export function Playerthrowitem(Npc: TNormNpc, Player: TPlayObject, Item: TUserItem, MapX, MapY: Number, Accept: Boolean) {
}
//怪物掉落物品触发(针对监视物品)：Owner:物品所属玩家，Monster:掉落怪物,item:物品，Accept：是否允许掉落
export function Mondropitem(Npc: TNormNpc, Owner: TPlayObject, Monster: TActor, Item: TUserItem, Map: TEnvirnoment, X, Y: Number, Accept: Boolean) {
}
//根据怪物名称爆出物品触发(针对监视物品)：Owner:物品所属玩家，Monster:怪物名称,item:物品，Accept：是否允许掉落
export function Dropitembymonname(Npc: TNormNpc, Owner: TPlayObject, Monster: String, Item: TUserItem, Accept: Boolean) {
}
//玩家从地上捡物品触发
export function Pickupitem(Npc: TNormNpc, Player: TPlayObject, Envir: TEnvirnoment, UserItem: TUserItem, Accept: Boolean) {
}
//挖矿时挖出物品触发: Player挖矿人 UserItem挖出的物品 Envir当前挖矿地图 Accept是否允许将该物品给玩家，默认为是
export function Minedropitem(Npc: TNormNpc, Player: TPlayObject, Item: TUserItem, Envir: TEnvirnoment, X, Y: Number, Accept: Boolean) {
}
//当玩家点击采集物时执行 Player:当前进行采集的玩家 Monster:被采集的资源对象 Accept:是否允许执行采集
export function Onbeforecollect(Npc: TNormNpc, Player: TPlayObject, Monster: TActor, Accept: Boolean) {
}
//当玩家采集完成 Player:当前进行采集的玩家 Monster:被采集的资源对象 Accept:是否允许采集到物品
export function Oncollect(Npc: TNormNpc, Player: TPlayObject, Monster: TActor, Accept: Boolean) {
}
//从怪物升上挖掘道具触发:Accept表示该物品允许玩家拥有，默认为True
export function Butchitem(Npc: TNormNpc, Player: TPlayObject, Monster: TActor, UserItem: TUserItem, Accept: Boolean) {
}
//购买商铺物品触发
export function Buyshopitem(Npc: TNormNpc, Player: TPlayObject, UserItem: TUserItem, Kind, ShopType, Count, Price: Number) {
}
//商铺购买完成时触发
export function Buyshopitemend(Npc: TNormNpc, Player: TPlayObject, ItemName: String, Kind, ShopType, Count, ActualCount, Price: Number) {
}
//使用物品时触发: StdMode=31,Accept:执行之后是否删除物品,默认为True,如果设置为False,则执行函数的同时不删除物品
export function Stdmodefunc(Npc: TNormNpc, Player: TPlayObject, UserItem: TUserItem, Accept: Boolean) {
}
//脱装备触发,Accept是否允许脱下,默认为True
export function Ontakeoffitem(Npc: TNormNpc, Player: TPlayObject, UserItem: TUserItem, ItemWhere: TItemWhere, Accept: Boolean) {
}
//脱下装备且属性属性变化后触发
export function Onafteroffonitem(Player: TPlayObject, TakeOffItem: TUserItem, AItemWhere: TItemWhere) {
}
//穿装备触发,Accept是否允许穿戴,默认为True
export function Ontakeonitem(Npc: TNormNpc, Player: TPlayObject, UserItem: TUserItem, ItemWhere: TItemWhere, Accept: Boolean) {
}
//穿戴装备且属性变化后触发，与OnTakeOnItem不同是 OnTakeOnItem 触发执行的时候装备附加的属性没有加到人身上。OnAfterTakeOnItem是属性已经附加到人物身上了。
//注意当穿戴位置 原先没有装备的时候 TakeOffItem 是为nil 的 请先判断 再做操作。
export function Onaftertakeonitem(Player: TPlayObject, TakeOnItem: TUserItem, TakeOffItem: TUserItem, AItemWhere: TItemWhere) {
}
//玩家使用物品点击目标物品触发, 使用物品的StdMode=33,Accept:执行后是否删除使用物品，默认为是
export function Itemclickitem(Npc: TNormNpc, Player: TPlayObject, Source, Dest: TUserItem, Accept: Boolean) {
}
//玩家使用物品点击身上穿戴的物品触发, 使用物品的StdMode=33,Accept:执行后是否删除使用物品，默认为是
export function Itemclickuseitem(Npc: TNormNpc, Player: TPlayObject, ItemWhere: TItemWhere, Source, Dest: TUserItem, Accept: Boolean) {
}
//释放魔法触发,Accpet:是否允许释放，默认为True
export function Magicspell(Npc: TNormNpc, Player: TPlayObject, UserMagic: TUserMagic, nTargetX, nTargetY: Number, Target: TActor, Accpet: Boolean) {
}
//点击了背包中淬炼装备按钮 Handled设置为True后客户端将不弹出默认的淬炼窗口,Handled默认为False,如果需要在点击淬炼按钮的时候执行其他处理则在此事件中执行,同时将Handled设置为True
export function Onrefinebuttonclick(Npc: TNormNpc, Player: TPlayObject, Handled: Boolean) {
}
//淬炼装备
export function Refineitem(Npc: TNormNpc, Player: TPlayObject, Item1, Item2, Item3: TUserItem, Handled: Boolean) {
}
//加入行会前触发
export function Beforeguildaddmember(Npc: TNormNpc, Guild: TGuild, Player: TPlayObject, Accept: Boolean) {
}
//加入行会后触发
export function Guildaddedmember(Npc: TNormNpc, Guild: TGuild, Player: TPlayObject) {
}
//退出行会前触发
export function Beforeguildremovemember(Npc: TNormNpc, Guild: TGuild, Player: String, Accept: Boolean) {
}
//退出行会后触发
export function Guildremovedmember(Npc: TNormNpc, Guild: TGuild, Player: String) {
}
//队伍有角色加入时触发
export function Groupaddedmember(Npc: TNormNpc, Owner, Member: TPlayObject) {
}
//队伍有角色退出触发
export function Groupremovedmember(Npc: TNormNpc, Owner, Member: TPlayObject) {
}
//获取宝箱物品触发
export function Getboxitem(Npc: TNormNpc, Player: TPlayObject, Item: TUserItem, BoxID: Number) {
}
//用户执行进度条事件触发，只有脚本调用ShowProgress函数且最终执行其事件才会触发本函数
export function Progressevent(Npc: TNormNpc, Player: TPlayObject, EventID: Number) {
}
//用户角度条执行失败触发
export function Progressfaild(Npc: TNormNpc, Player: TPlayObject, EventID: Number) {
}
//装备的魂炼等级提升时触发：
export function Itemsoullevelup(Npc: TNormNpc, Player: TPlayObject, Item: TUserItem) {
}
//角色称号系统当前称号发生变化后触发
export function Onactivetitlechanged(Npc: TNormNpc, Player: TPlayObject) {
}

//历史更新原因,自由市场和个人摊位都命名为Stall,勿喷
//自由市场
export function Stallputon(Npc: TNormNpc, Player: TPlayObject, Item: TUserItem, GoldPrice: Number, GameGoldPrice: Number, GamePoint: Number, Accpet: Boolean) {
}//上架之前
export function Stallputoff(Npc: TNormNpc, Player: TPlayObject, Item: TUserItem, GoldPrice: Number, GameGoldPrice: Number, GamePoint: Number, Accpet: Boolean) {
}//下架之前
export function Stallbuyitem(Npc: TNormNpc, Player: TPlayObject, StallName: String, Item: TUserItem, Gold: Number, GameGold: Number, GamePoint: Number, Accpet: Boolean) {
}//购买
export function Stallupdateitem(Npc: TNormNpc, Player: TPlayObject, Item: TUserItem, OldGold: Number, OldGameGold: Number, OldGamePoint: Number, Gold: Number, GameGold: Number, GamePoint: Number, Accpet: Boolean) {
}//修改物品价格
export function Stallextractgold(Npc: TNormNpc, Player: TPlayObject, Gold: Number, GameGold: Number, GamePoint: Number, Accpet: Boolean) {
}//提取货款
//个人摊位
export function Onbeforeopenstall(Npc: TNormNpc, Player: TPlayObject, Accpet: Boolean) {
} //玩家打开摊位前触发,如果Accpet设置为false则不允许打开摊位界面
export function Onbeforestartstall(Npc: TNormNpc, Player: TPlayObject, Accpet: Boolean) {
} //玩家在摊位界面点击开始摆摊时触发,如果Accpet设置为false则不允许摆摊
export function Onafterstopstall(Npc: TNormNpc, Player: TPlayObject) {
} //玩家在摊位界面点击停止摆摊后触发
//邮件系统
export function Mailbeforesend(Npc: TNormNpc, Player: TPlayObject, SendTo: String, Item: TUserItem, Accept: Boolean) {
}
export function Mailaftersend(Npc: TNormNpc, Player: TPlayObject, SendTo: String) {
}
//坐骑 RideOn是骑马还是下马,True表示骑马,Accept表示是否允许本次骑马操作
export function Rideonhorse(Npc: TNormNpc, Player: TPlayObject, RideOn: Boolean, Accept: Boolean) {
}
//客户端点击感叹号图标
export function Clicksighicon(Npc: TNormNpc, Player: TPlayObject, MethodID: Number) {
}
//Ctrl+左键点击背包物品触发,Item为被点击的物品
export function Altandlbuttonclickbagitem(Npc: TNormNpc, Player: TPlayObject, Item: TUserItem) {
}
//Ctrl+左键点击穿戴物品触发,Item为被点击的物品,AItemWhere为穿戴位置
export function Altandlbuttonclickuseitem(Npc: TNormNpc, Player: TPlayObject, Item: TUserItem, AItemWhere: TItemWhere) {
}
//客户端骰子动画播放完毕触发处理事件 ATag:骰子标志 APoint: 骰子点数
export function Ondiceevent(Npc: TNormNpc, Player: TPlayObject, ATag, APoint1, APoint2, APoint3: Number) {
}
//自定义UI中通过脚本发送的命令
export function Oncustommessage(Npc: TNormNpc, Player: TPlayObject, AMessageToken, AParam1, AParam2, AParam3: Number, AData: String) {
}

//变身开始触发函数
export function Onchangetomonsterstart(Actor: TActor, sMonName: String, nSec: Number) {
} //变身的Actor,变成目标的怪物名称 ,变身的时长(单位秒)
//变身结束触发函数
export function Onchangetomonsterend(Actor: TActor, sMonName: String) {
} //变身的Actor,变成目标的怪物名称

//PickSender 拾取者, Item 拾取的物品. Gold . 金币数量(如果物品是金币 那么 此变量 不等于 0 否则 此变量等于0.可根据此变量是否为 0 判断拾取的是物品还是金币)  WhoPicker .最终拾取者(通过改变此值 可实现 A拾取 到B背包的功能)
//ItemState 0: 可以继续拾取 1.不允许继续拾取物品还在地图上 2.不允许继续拾取直接从地图删除物品
export function Onpickupitemchangepicker(PickSender: TPlayObject, Item: TUserItem, Gold: Number, WhoPicker: TPlayObject, ItemState: Number) {
}

//是否允许引擎对人物进行升级。通过操作Allow 进行 True 表示允许升级  False 表示不允许升级
export function Onqueryallowlevelup(Player: TPlayObject, Allow: Boolean) {
}

// 用于获取每个等级的经验配置数据。此函数由引擎在人物需要改变人物升级经验时引擎触发。
export function Ongetlevelexp(Level: Number, Exp: Number) {
}
//自定义热键触发（Akey的值代表按下的按键字符值,KeyCtrl，KeyAlt 代表 Ctrl，Alt按键的状态 False为没有按下 True为按下。ATargetActor代表客户端鼠标指向的TActor，X,Y代表TActor所在位置坐标，如果TActor为nil，则X,Y代表客户端鼠标指向的坐标。）
export function Onsendhotkey(Npc: TNormNpc, Player: TPlayObject, Akey: Number, KeyCtrl, KeyAlt: Boolean, ATargetActor: TActor, X, Y: Number) {
}
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
export function Playeraction(Npc: TNormNpc, Player: TPlayObject, Action: Number, Accept: Boolean) {
}
//时装界面勾选是否显示时装触发
export function Onshowfashionclick(Npc: TNormNpc, Player: TPlayObject) {
}
//点击点击弹出任务侧边栏按钮时触发，默认Accept为True，当Accept为True的时候将弹出默认的任务侧边栏。
export function Onshowmissionclick(Npc: TNormNpc, Player: TPlayObject, Accept: Boolean) {
}
