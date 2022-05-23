
declare const __filename:string
declare const __dirname:string

declare function require(filePath:string): any;

declare interface TMissionLinkItem {

}

//fileStream 打开模式
declare const fmCreate:number
declare const fmOpenRead:number
declare const fmOpenWrite:number
declare const fmOpenReadWrite:number
declare const fmExclusive:number
declare const fmShareCompat:number
declare const fmShareExclusive:number
declare const fmShareDenyWrite:number
declare const fmShareDenyRead:number
declare const fmShareDenyNone:number


type TStoreItemList = any

declare class TArgs {
	Int:number[]
	Str:string[]
    Count:number
    DataString:string
    Clear():void;
    Add(str:string | number):void;
	constructor ();
	ParseParams(s:string):void;
}

declare function CreateTArgs(params: string): TArgs;

declare function random(range:number):number;

declare function randomRange(min:number,max:number):number;

declare function format(str:string,param:any[]):string

declare function Debug(str:string):void;

declare function Trunc(value:number):number;

declare function ConvertDataSetToArray(dataSet: TDataSet , timeMode:"unixtime"|"date"): any[]

declare enum TItemWhere {
    wDress, wWeapon, wRightHand, wNecklace, wHelmet, wArmringL, wArmringR, wRingL, wRingR, wBujuk, wBelt, wBoots, wCharm, wMask, wFashion, wMount, wShield,
    wJewelry1, wJewelry2, wJewelry3, wJewelry4, wJewelry5, wJewelry6, //首饰盒
    wZodiac1, wZodiac2, wZodiac3, wZodiac4, wZodiac5, wZodiac6, wZodiac7, wZodiac8, wZodiac9, wZodiac10, wZodiac11, wZodiac12
}

declare enum TAttackMode { amAll, amPeaceful, amDear, amMaster, amGroup, amGuild, amRed, amNation, amCamp }

declare enum TFunctionFlag {ffJewelryBox , ffZodiac}


declare enum TBuffStatusType {
    stNone,
    stStone, // 石化
    stDenyMove, // 禁止移动 行走 和 跑步都不允许
    stDenyWalk, // 禁止行走
    stDenyRun, // 禁止跑步
    stDenyHorseRun, //禁止骑马
    stSuperMan, // 无敌
    stSuperManForMon, // 无敌只对怪物
    stRelive, //复活
    stUnRelive, //防复活
    stObserver, // 隐身
    stObserverForMon, // 隐身只对怪物
    stDenyUseMagic, //禁止使用技能
    stDenyUseItem //禁止使用物品
}

//间隔作用的Buff类型。
declare enum TBuffIntervalType {
    biNone,
    biCustom,
    biHP,
    biMP,
    biExp
}

//属性类型buff
declare enum TBuffAbilityType {
    atNone,
    atMaxHP,
    atMaxMP,
    atDC,
    atDCMax,
    atMC,
    atMCMax,
    atSC,
    atSCMax,
    atTC,
    atTCMax,
    atPC,
    atPCMax,
    atWC,
    atWCMax,
    atAC,
    atACMax,
    atMAC,
    atMacMax,
    atHitPoint,
    atHitSpeed,
    atSpeedPoint,
    atLucky,
    atHealthRecover,
    atSpellRecover,
    atAntiMagic,
    atAntiPoison,
    atPoisonRecover,
    atAbsorbing,
    atRebound,
    atAttackAdd,
    atPunchHit,
    atCriticalHit,
    atPunchHitDef,
    atCriticalHitDef
}

declare function ReplaceStr(srcStr:string,oldPartten:string,newPartten:string|number):string

declare function max(a:number,b:number):number

//比较字符串返回差异值
declare function CompareStr(a:string,b:string):number

declare function Randomize():void;
declare function FloatToStr(value:number):string;

//带下划线的表示兼容层 不建议据需使用
declare function _Copy(str:string,startIndex:number,count:number):string

declare function _Pos(subStr:string,srcStr:string):number

declare function CharCodeIn(src:string,low:string,high:string):number

declare interface TimeDef {
	year:number,
    month:number,
    day:number,
    hour:number,
    minute:number,
    second:number,
    msecond:number
}


declare type QueryDBAsyncResult = (error:string,dataset:TDataSet)=>void
declare type ExecDBAsyncResult = (error:string,affectRow:number)=>void
declare type HttpAsyncResult = (error:string,result:string)=>void

//未实现
declare function RegisterMonster(race:number,clazz:typeof TMonster):boolean;

declare function GetTickCount():number;

declare function ExtractStrings(spliteChar:string[], skipFirstChar:string[], Value:string, List:TStringList):void;





declare class TActor {
	GetRaceType(): number;
	RaceType:number;
	GetMapName(): string;
	MapName:string;
	GetMap(): TEnvirnoment;
	Map:TEnvirnoment;
	GetName(): string;
	Name:string;
	SetName(Value: string): void;
	GetMapY(): number;
	MapY:number;
	GetMapX(): number;
	MapX:number;
	GetGender(): number;
	Gender:number;
	SetGender(Value: number): void;
	GetDirection(): number;
	Direction:number;
	SetDirection(Value: number): void;
	GetHair(): number;
	Hair:number;
	SetHair(Value: number): void;
	GetJob(): number;
	Job:number;
	SetJob(Value: number): void;
	GetNation(): number;
	Nation:number;
	SetNation(Value: number): void;
	GetCamp(): number;
	Camp:number;
	SetCamp(Value: number): void;
	GetGold(): number;
	Gold:number;
	SetGold(Value: number): void;
	GetMaxGold(): number;
	MaxGold:number;
	GoldChanged(): void;
	GetPkPoint(): number;
	PkPoint:number;
	SetPkPoint(Value: number): void;
	GetPkLevel(): number;
	PkLevel:number;
	GetGhost(): boolean;
	Ghost:boolean;
	GetDeath(): boolean;
	Death:boolean;
	GetHasHorse(): boolean;
	HasHorse:boolean;
	GetHorseType(): number;
	HorseType:number;
	SetHorseType(Value: number): void;
	GetOnHorse(): boolean;
	OnHorse:boolean;
	SetOnHorse(Value: boolean): void;
	GetGuild(): TGuild;
	Guild:TGuild;
	GetCastle(): TUserCastle;
	Castle:TUserCastle;
	GetHasGuild(): boolean;
	HasGuild:boolean;
	GetGuildName(): string;
	GuildName:string;
	GetGuildRankName(): string;
	GuildRankName:string;
	GetIsGuildMaster(): boolean;
	IsGuildMaster:boolean;
	GetISCastleMaster(): boolean;
	ISCastleMaster:boolean;
	GetISCastleGuild(): boolean;
	ISCastleGuild:boolean;
	GetInSafeZone(): boolean;
	InSafeZone:boolean;
	GetCheck(Index: number): boolean;
	SetCheck(Index: number,Value: boolean): void;
	GetSlaveAllCount(): number;
	SlaveCount:number;
	GetSlave(Index: number): TActor;
	GetSlaveLevel(): number;
	SlaveLevel:number;
	SetSlaveLevel(Value: number): void;
	GetItemCount(ItemName: string): number;
	ItemCount:number;
	GetPoseCreate(): TActor;
	PoseCreate:TActor;
	GetHP(): number;
	HP:number;
	SetHP(Value: number): void;
	GetMaxHP(): number;
	MaxHP:number;
	SetMaxHP(Value: number): void;
	GetMP(): number;
	MP:number;
	SetMP(Value: number): void;
	GetMaxMP(): number;
	MaxMP:number;
	SetMaxMP(Value: number): number;
	GetDCMin(): number;
	DCMin:number;
	SetDCMin(Value: number): void;
	GetDCMax(): number;
	DCMax:number;
	SetDCMax(Value: number): void;
	GetMCMin(): number;
	MCMin:number;
	SetMCMin(Value: number): void;
	GetMCMax(): number;
	MCMax:number;
	SetMCMax(Value: number): void;
	GetSCMin(): number;
	SCMin:number;
	SetSCMin(Value: number): void;
	GetSCMax(): number;
	SCMax:number;
	SetSCMax(Value: number): void;
	GetTCMin(): number;
	TCMin:number;
	SetTCMin(Value: number): void;
	GetTCMax(): number;
	TCMax:number;
	SetTCMax(Value: number): void;
	GetPCMin(): number;
	PCMin:number;
	SetPCMin(Value: number): void;
	GetPCMax(): number;
	PCMax:number;
	SetPCMax(Value: number): void;
	GetWCMin(): number;
	WCMin:number;
	SetWCMin(Value: number): void;
	GetWCMax(): number;
	WCMax:number;
	SetWCMax(Value: number): void;
	GetACMin(): number;
	ACMin:number;
	SetACMin(Value: number): void;
	GetACMax(): number;
	ACMax:number;
	SetACMax(Value: number): void;
	GetMACMin(): number;
	MACMin:number;
	SetMACMin(Value: number): void;
	GetMACMax(): number;
	MACMax:number;
	SetMACMax(Value: number): void;
	GetSpeedPoint(): number;
	SpeedPoint:number;
	SetSpeedPoint(Value: number): void;
	GetHitPoint(): number;
	HitPoint:number;
	SetHitPoint(Value: number): void;
	GetWalkSpeed(): number;
	WalkSpeed:number;
	SetWalkSpeed(Value: number): void;
	GetWalkStep(): number;
	WalkStep:number;
	SetWalkStep(Value: number): void;
	GetWalkWait(): number;
	WalkWait:number;
	SetWalkWait(Value: number): void;
	GetAttackSpeed(): number;
	AttackSpeed:number;
	SetAttackSpeed(Value: number): void;
	GetLuck(): number;
	Luck:number;
	GetLevel(): number;
	Level:number;
	SetLevel(Value: number): void;
	GetExpHitter(): TActor;
	ExpHitter:TActor;
	SetExpHitter(Value: TActor): void;
	LastHitter(): TActor;
	SetLastHitter(Value: TActor): void;
	GetTargetActor(): TActor;
	TargetActor:TActor;
	SetTargetActor(Value: TActor): void;
	GetMaxBagSize(): number;
	MaxBagSize:number;
	SetMaxBagSize(Value: number): void;
	GetItemSize(): number;
	ItemSize:number;
	GetBagItem(Index: number): TUserItem;
	GetArmItem(AItemWhere: number): TUserItem;
	ArmItem:TUserItem;
	GetDress(): TUserItem;
	Dress:TUserItem;
	GetWepon(): TUserItem;
	Wepon:TUserItem;
	GetWeapon(): TUserItem;
	Weapon:TUserItem;
	GetNeckLace(): TUserItem;
	NeckLace:TUserItem;
	GetZodiacs(index: number): TUserItem;
	Zodiacs:TUserItem;
	GetJewelrys(index: number): TUserItem;
	Jewelrys:TUserItem;
	GetHelmet(): TUserItem;
	Helmet:TUserItem;
	GetRightHand(): TUserItem;
	RightHand:TUserItem;
	GetArmringLeft(): TUserItem;
	ArmringLeft:TUserItem;
	GetArmringRight(): TUserItem;
	ArmringRight:TUserItem;
	GetRingLeft(): TUserItem;
	RingLeft:TUserItem;
	GetRingRight(): TUserItem;
	RingRight:TUserItem;
	GetBelt(): TUserItem;
	Belt:TUserItem;
	GetBoots(): TUserItem;
	Boots:TUserItem;
	GetCharm(): TUserItem;
	Charm:TUserItem;
	GetMask(): TUserItem;
	Mask:TUserItem;
	GetBujuk(): TUserItem;
	Bujuk:TUserItem;
	GetFashion(): TUserItem;
	Fashion:TUserItem;
	GetMount(): TUserItem;
	Mount:TUserItem;
	GetShield(): TUserItem;
	Shield:TUserItem;
	ClearSkill(): void;
	DelNoJobSkill(): void;
	DelSkill(ASkillName: string): void;
	AddSkill: ( ASkillName: string,SkillLevel?: number) =>  void;
	FindSkill(ASkillName: string): TUserMagic;
	ChangeSkillLevel(ASkillName: string,SkillLevel: number): void;
	GetExp(): number;
	Exp:number;
	SetExp(Exp: number): void;
	GetMaxExp(): number;
	MaxExp:number;
	AddExp(Value: number): void;
	GetWeight(): number;
	Weight:number;
	GetMaxWeight(): number;
	MaxWeight:number;
	GetWearWeight(): number;
	WearWeight:number;
	GetMaxWearWeight(): number;
	MaxWearWeight:number;
	GetHandWeight(): number;
	HandWeight:number;
	GetMaxHandWeight(): number;
	MaxHandWeight:number;
	CheckCanTakeOnItem(AUserItem: TUserItem,ItemWhere: number): boolean;
	CheckCanTakeOffItem(ItemWhere: number): boolean;
	TakeOnItem(AUserItem: TUserItem,ItemWhere: number): void;
	TakeOffItem(nItemWhere: number): void;
	AddItemToBag(Item: TUserItem): boolean;
	Die(): void;
	MakeGhost(): void;
	IsPlayer(): boolean;
	IsNPC(): boolean;
	IsMonNPC(): boolean;
	GetIsUnknowActor(): boolean;
	IsUnknowActor:boolean;
	SetIsUnknowActor(Value: boolean): void;
	GetIsAdminMode(): boolean;
	IsAdminMode:boolean;
	SetIsAdminMode(Value: boolean): void;
	GetSuperManMode(): boolean;
	SuperManMode:boolean;
	SetSuperManMode(Value: boolean): void;
	GetObserverMode(): boolean;
	ObserverMode:boolean;
	SetObserverMode(Value: boolean): void;
	GetPermission(): number;
	Permission:number;
	SetPermission(Value: number): void;
	GetAttackMode(): number;
	AttackMode:number;
	SetAttackMode(Value: number): void;
	DeleteUseItem(NWhere: number): void;
	RepairItem(NWhere: number): void;
	RepairAll(): void;
	GetNameColor(): number;
	NameColor:number;
	SetNameColor(Value: number): void;
	KillSlave: ( ASlaveName: string,ACount?: number) =>  void;
	GetSideSlaveCount(Range: number,ASlaveName: string): number;
	SideSlaveCount:number;
	GetSlaveCount(ASlaveName: string): number;
	GetKillMonExpRate(): number;
	KillMonExpRate:number;
	SetKillMonExpRate(Value: number): void;
	ChangeKillMonExpRate(ARate: number,ATime: number): void;
	GetPowerRate(): number;
	PowerRate:number;
	ChangePowerRate(ARate: number,ATime: number): void;
	GetIsAdmin(): boolean;
	IsAdmin:boolean;
	GetISSysOp(): boolean;
	ISSysOp:boolean;
	Kill: ( AMode?: number) =>  void;
	GetAlwaysShowHP(): boolean;
	AlwaysShowHP:boolean;
	SetAlwaysShowHP(Value: boolean): void;
	RecalcAbilitys(): void;
	GetMaster(): TActor;
	Master:TActor;
	SetMaster(Master: TActor): void;
	GetMasterRoyaltyTick(): number;
	MasterRoyaltyTick:number;
	SetMasterRoyaltyTick(Value: number): void;
	GetProtect(): boolean;
	Protect:boolean;
	SetProtect(Value: boolean): void;
	GetTotalAbility(): number;
	TotalAbility:number;
	GetDropName(): string;
	DropName:string;
	SetDropName(Value: string): void;
	GetNoDropItem(): boolean;
	NoDropItem:boolean;
	SetNoDropItem(Value: boolean): void;
	GetNoDropUseItem(): boolean;
	NoDropUseItem:boolean;
	SetNoDropUseItem(Value: boolean): void;
	GetData(): Object;
	Data:Object;
	SetData(Value: Object): void;
	SearchViewRange(): void;
	ClearViewRange(): void;
	MagicAttackXY: ( ATarget: TActor,ATargetX: number,ATargetY: number,AMagic: number,ClientPlayerHaveSpellAction?: boolean) =>  void;
	MagicAttackXYEx: ( ATarget: TActor,ATargetX: number,ATargetY: number,AMagic: TUserMagic,ClientPlayerHaveSpellAction?: boolean) =>  void;
	MagicAttack: ( ATarget: TActor,AMagic: number,ClientPlayerHaveSpellAction?: boolean) =>   void;
	MagicAttackEx: ( ATarget: TActor,AMagic: TUserMagic,ClientPlayerHaveSpellAction?: boolean) =>  void;
	MagicAttackGroup: ( ATarget: TActor,ATargetX: number,ATargetY: number,AMagic: number,Level: number,Group: number,ClientPlayerHaveSpellAction?: boolean) =>   void;
	Damage(ATarget: TActor,AValue: number): void;
	DamageDelay(ATarget: TActor,AValue: number,Delay: number): void;
	CreateAttackEvent(AMapX: number,AMapY: number,ATime: number,AInterval: number,ADamage: number): boolean;
	MoveTo: ( DestX: number,DestY: number,ARange?: number) =>  boolean;
	CheckState(AState: number): boolean;
	SetState(AState: number,ATime: number,AValue: number): void;
	Push(ADirection: number,AStep: number): number;
	AddGameLog1(Event: string,ItemName: string,Amount: number,Log: string): void;
	AddGameLog2(Event: string,Log: string): void;
	GetSkillCount(): number;
	SkillCount:number;
	GetSkills(Index: number): TUserMagic;
	Move(sMapName: string,nX: number,nY: number): boolean;
	ChangeToMonster(sMonName: string,nSec: number): void;
	CancelToMonster(): void;
	AddShowName(sName: string): void;
	DelShowName(sName: string): void;
	HaveShowName(sName: string): boolean;
	SetDropItemRate(Value: number): void;
	GetDropItemRate(): number;
	DropItemRate:number;
	GetSVar(Index: number): string;
	SVar:string;
	GetNVar(Index: number): number;
	NVar:number;
	SetSVar(Index: number,S: string): void;
	SetNVar(Index: number,Value: number): void;
	SetBlendColor(Value: number): void;
	GetBlendColor(): number;
	BlendColor:number;
	SetWeaponBlendColor(Value: number): void;
	GetWeaponBlendColor(): number;
	WeaponBlendColor:number;
	SendMessage: ( Msg: string,Kind?: number) =>  void;
	GetSlaveList(): TActorList;
	SlaveList:TActorList;
	GetSlaveRelax(): boolean;
	SlaveRelax:boolean;
	SetSlaveRelax(Value: boolean): void;
	SetThroughMonster(Value: boolean): void;
	GetThroughMonster(): boolean;
	ThroughMonster:boolean;
	SetThroughHuman(Value: boolean): void;
	GetThroughHuman(): boolean;
	ThroughHuman:boolean;
	SetThroughNPC(Value: boolean): void;
	GetThroughNPC(): boolean;
	ThroughNPC:boolean;
	SetThroughGuard(Value: boolean): void;
	GetThroughGuard(): boolean;
	ThroughGuard:boolean;
	ResetThroughMonster(): void;
	ResetThroughHuman(): void;
	ResetThroughNPC(): void;
	ResetThroughGuard(): void;
	SetMaxDropHp(Value: number): void;
	GetMaxDropHp(): number;
	MaxDropHp:number;
	RefFeature(): void;
	RefUseItem(): void;
	GetCustomEffect(index: number): number;
	SetCustomEffect(index: number,Value: number): void;
	GetGameMoney(MoneyType: number): number;
	GameMoney:number;
	SetGameMoney(MoneyType: number,Value: number,Log: string): void;
	CanAddGameMoney(MoneyType: number,Value: number): boolean;
	CanTakeGameMoney(MoneyType: number,Value: number): boolean;
	AddGameMoney(MoneyType: number,Value: number,Log: string): boolean;
	TakeGameMoney(MoneyType: number,Value: number,Log: string): boolean;
	GetTitleEffect(): number;
	TitleEffect:number;
	SetTitleEffect(Value: number): void;
	IsFriendlyTarget(Target: TActor): boolean;
	IsFrindlyTarget(Target: TActor): boolean;
	AddAbilityBuff(GroupID: number,AbilityType: number,DuraMs: number,AblityValue: number,ValueIsRate: boolean): TBuff;
	AddStatusBuff: ( GroupID: number,StatusType: TBuffStatusType,DuraMs: number,Args1: number,Args2: number) =>  TBuff;
	AddIntervalBuff(GroupID: number,IntervalType: number,DuraMs: number,Interval: number,Args1: number,Args2: number): TBuff;
	SetBuffIcon(BuffHandle: number,ImageFileName: string,ImageIndex: number,HoverImageIndex: number,ShowMessage: string,DisappearMessage: string,HintMessage: string,FlashOnDisappear: boolean,ShowTimeStr: boolean): void;
	DeleteBuff(BuffHandle: number): boolean;
	DeleteBuffByGroupID(Min: number,Max: number): number;
	DeleteBuffByTag(Tag: number): number;
	GetBuffCount(): number;
	BuffCount:number;
	GetBuffByIndex(Index: number): TBuff;
	BuffByIndex:TBuff;
	AddBuffByID(ID: number,GroupID: number): TBuff;
	AddBuffByName(BuffName: string,GroupID: number): TBuff;
	GetDenyAutoAddHP(): boolean;
	DenyAutoAddHP:boolean;
	SetDenyAutoAddHP(Value: boolean): void;
	GetHandle(): number;
	Handle:number;
	GetHashCode(): number;
	HashCode:number;

        }
declare class TPlayObject extends TActor {
	GetNotOnlineAddExp(): boolean;
	NotOnlineAddExp:boolean;
	GetStationTime(): number;
	StationTime:number;
	GetStationTick(): number;
	StationTick:number;
	GetHomeMapName(): string;
	HomeMapName:string;
	GetHomeX(): number;
	HomeX:number;
	GetHomeY(): number;
	HomeY:number;
	SendCustomMessage(AMessageToken: number,AParam1: number,AParam2: number,AParam3: number,AData: string): void;
	SendGuildMessage(Msg: string): void;
	SendTopMessage(Message: string,Mode: number): void;
	SendCenterMessage: ( Message: string,Mode: number,Time?: number) =>  void;
	SendCountDownMessage: ( Message: string,Mode: number,Falg?: number,ChangMapDelete?: boolean) =>  void;
	DeleteCountDownMessage(Falg: number): void;
	OpenURL(AUrl: string,Width: number,Height: number): void;
	RequestURL(AUrl: string): void;
	GetAccount(): string;
	Account:string;
	GetIsNewHuman(): boolean;
	IsNewHuman:boolean;
	GetLoginTime(): number;
	LoginTime:number;
	GetSessionID(): number;
	SessionID:number;
	GetDearName(): string;
	DearName:string;
	SetDearName(Name: string): void;
	CallMethod(Npc: TActor,Method: string): void;
	GetMarried(): boolean;
	Married:boolean;
	GetMasterName(): string;
	MasterName:string;
	SetMasterName(Name: string): void;
	GetISMaster(): boolean;
	ISMaster:boolean;
	GetMarryCount(): number;
	MarryCount:number;
	GetReNewLevel(): number;
	ReNewLevel:number;
	SetReNewLevel(Value: number): void;
	GetBonusPoint(): number;
	BonusPoint:number;
	SetBonusPoint(Value: number): void;
	GetMemberType(): number;
	MemberType:number;
	SetMemberType(Value: number): void;
	GetMemberLevel(): number;
	MemberLevel:number;
	SetMemberLevel(Value: number): void;
	GetGameGold(): number;
	GameGold:number;
	SetGameGold(Value: number): void;
	GetPaoDianPoint(): number;
	PaoDianPoint:number;
	SetPaoDianPoint(Value: number): void;
	GetGamePoint(): number;
	GamePoint:number;
	SetGamePoint(Value: number): void;
	GetGameGlory(): number;
	GameGlory:number;
	SetGameGlory(Value: number): void;
	GetGameDiaMond(): number;
	GameDiaMond:number;
	SetGameDiaMond(Value: number): void;
	GetGameGird(): number;
	GameGird:number;
	SetGameGird(Value: number): void;
	GetCustomItemCount(): number;
	CustomItemCount:number;
	GetCustomItem(Index: number): TUserItem;
	ShowEffect(EffectID: number): void;
	CheckTextList(ATextFile: string,AText: string): boolean;
	CheckNameList(ATextFile: string): boolean;
	CheckAccountList(ATextFile: string): boolean;
	ClearList(ATextFile: string): void;
	AddTextList(ATextFile: string,AText: string): void;
	AddNameList(ATextFile: string): void;
	AddAccountList(ATextFile: string): void;
	AddGuildList(ATextFile: string): void;
	AddIPList(ATextFile: string): void;
	DelTextList(ATextFile: string,AText: string): void;
	DelNameList(ATextFile: string): void;
	DelGuildList(ATextFile: string): void;
	DelAccountList(ATextFile: string): void;
	DelIPList(ATextFile: string): void;
	MapMove(MapName: string,MapX: number,MapY: number): void;
	MapMoveEx(Envir: TEnvirnoment,MapX: number,MapY: number): void;
	ForceMapMove(Envir: TEnvirnoment,MapX: number,MapY: number): void;
	RestBonusPoint(): void;
	TakeCastGold(AGold: number): void;
	AutoGetExp(AMap: string,ATime: number,APoint: number,IsSafeZone: boolean): void;
	StopAutoGetExp(): void;
	OffLinePlay(AIntervalTime: number,AExpPoint: number): void;
	KickOffLine(): void;
	DelayGoto(ID: number,AIntervalTime: number,AChangeMapDelete: boolean,Once: boolean): boolean;
	ClearDelayGoto(ID: number): void;
	DelayCallMethod(AMethod: string,AIntervalTime: number,AChangeMapDelete: boolean): void;
	DeleteDelayCallMethod(AMethod: string): void;
	PlaySound(ASoundFile: string): void;
	PlayVideo(AVideoFile: string): void;
	Recallmob: ( AMonName: string,MonLvl?: number,RoyaltySec?: number,X?: number,Y?: number) =>  TActor;
	GroupMoveEx(Envir: TEnvirnoment,MapX: number,MapY: number,boForce: boolean): void;
	GroupMapMove(MapName: string,MapX: number,MapY: number): void;
	GuildMapMoveEx(Envir: TEnvirnoment,MapX: number,MapY: number): void;
	GuildMapMove(MapName: string,MapX: number,MapY: number): void;
	RandomMove: ( MapName?: string) =>  void;
	RandomMoveEx(AEnvir: TEnvirnoment): void;
	GetCreditPoint(): number;
	CreditPoint:number;
	SetCreditPoint(Value: number): void;
	StartAutoAddGameGold(APoint: number,AInterval: number): void;
	StopAutoAddGameGold(): void;
	StartAutoSubGameGold(APoint: number,AInterval: number): void;
	StopAutoSubGameGold(): void;
	ChangeReNewLevel(Value: number,NewLevel: number,BounsuPoint: number): void;
	Kick(): void;
	ReAlive(): void;
	UpdateItem(Item: TUserItem): void;
	DeleteItem: ( Item: TUserItem,Count?: number) =>  void;
	UpdateMagic(Magic: TUserMagic): void;
	GetLogonTick(): number;
	LogonTick:number;
	GetIPAddress(): string;
	IPAddress:string;
	GetIPLocal(): string;
	IPLocal:string;
	GetTimeRecall(): boolean;
	TimeRecall:boolean;
	GetPayMent(): number;
	PayMent:number;
	GetGroupOwner(): TPlayObject;
	GroupOwner:TPlayObject;
	GetGroupCount(): number;
	GroupCount:number;
	GetGroupMember(Index: number): TPlayObject;
	GetISGroupMaster(): boolean;
	ISGroupMaster:boolean;
	JoinGroup(APlayer: TPlayObject,ShowDialog: boolean): void;
	LeaveGroup(): void;
	GetRankLevelName(): string;
	RankLevelName:string;
	SetRankLevelName(Value: string): void;
	GetTitleName(): string;
	TitleName:string;
	SetTitleName(Value: string): void;
	GetShowRankLevelName(): boolean;
	ShowRankLevelName:boolean;
	SetShowRankLevelName(Value: boolean): void;
	UpdateName(): void;
	GetContribution(): number;
	Contribution:number;
	SetContribution(Value: number): void;
	GetLocked(): boolean;
	Locked:boolean;
	SetLocked(Value: boolean): void;
	GetStallState(): number;
	StallState:number;
	SetTimeRecall(Value: boolean,ATick: number): void;
	SetTimeRecallEx(AMap: string,ATick: number,MapX: number,MapY: number): void;
	GetProperties(): number;
	Properties:number;
	GetFeature(): number;
	Feature:number;
	GetFeatureEx(): number;
	FeatureEx:number;
	GetStoragePwd(): string;
	StoragePwd:string;
	SetStoragePwd(Value: string): void;
	GetAllowDeal(): boolean;
	AllowDeal:boolean;
	SetAllowDeal(Value: boolean): void;
	GetAllowGuild(): boolean;
	AllowGuild:boolean;
	SetAllowGuild(Value: boolean): void;
	GetAllowGroup(): boolean;
	AllowGroup:boolean;
	SetAllowGroup(Value: boolean): void;
	GetAllowGroupReCall(): boolean;
	AllowGroupReCall:boolean;
	SetAllowGroupReCall(Value: boolean): void;
	GetAllowGuildReCall(): boolean;
	AllowGuildReCall:boolean;
	SetAllowGuildReCall(Value: boolean): void;
	GetAllowReAlive(): boolean;
	AllowReAlive:boolean;
	SetAllowReAlive(Value: boolean): void;
	GetShowFashion(): boolean;
	ShowFashion:boolean;
	SetShowFashion(Value: boolean): void;
	GetAddedAbility(): TAddedAbility;
	AddedAbility:TAddedAbility;
	GetMonDropItems(MonName: string): void;
	AddExtendButton: ( Name: string,Hint: string,Command: string,ImageIndex: number,X?: number,Y?: number) =>  void;
	AddTopExtendButton(Name: string,Hint: string,Command: string,ImageIndex: number,X: number,Y: number): void;
	RemoveExtendButton(Name: string): void;
	OpenMarket(): void;
	OpenBag(): void;
	ReloadBag(): void;
	OpenShop(): void;
	OpenMailBox(): void;
	OpenMapView(): void;
	OpenRefineBox(): void;
	ShowSighIcon(MethodID: number,Hint: string): void;
	ShowSighIcon1(Method: string,Hint: string): void;
	Give: ( ItemName: string,Count?: number,Upgrade?: boolean) =>  void;
	GiveItem: ( ItemName: string,Upgrade?: boolean) => TUserItem;
	GiveItemByIndex: ( ItemIndex: number,Upgrade?: boolean) =>  TUserItem;
	Say(Msg: string): void;
	SayEx(UIName: string,Msg: string): void;
	UpdateSay(UIName: string,Msg: string): void;
	CloseWindow(UIName: string): void;
	MessageBox(Msg: string): void;
	Question(Msg: string,YMethod: string,NMethod: string): void;
	OpenBox(BoxID: number): void;
	OpenBoxEx(Shape: number,BoxID: number): void;
	OpenShuffle(BoxID: number): void;
	ShowProgress(Caption: string,ATime: number,EventID: number,ActCancel: boolean): boolean;
	ShowProgressEx(Caption: string,ATime: number,NPC: TNormNpc,SucessFunction: string,FailFunction: string,ActCancel: boolean): boolean;
	CloseProgress(): void;
	GetAllowSendMessage(): boolean;
	AllowSendMessage:boolean;
	SetAllowSendMessage(Value: boolean): void;
	GetMailCount(): number;
	MailCount:number;
	GetMailUnreadCount(): number;
	MailUnreadCount:number;
	CheckItemSoulLevelUp(AItem: TUserItem): void;
	GetStorageItemsCount(): number;
	StorageItemsCount:number;
	GetStorageItem(Index: number): TUserItem;
	AddItemToStorage(AItem: TUserItem): boolean;
	DeleteStorageItem1(Index: number): boolean;
	DeleteStorageItem2(AItem: TUserItem): boolean;
	TakebackStorageItem(Index: number): boolean;
	GetBigStorageItemsCount(): number;
	BigStorageItemsCount:number;
	GetBigStorageItem(Index: number): TUserItem;
	AddItemToBigStorage(AItem: TUserItem): boolean;
	DeleteBigStorageItem1(Index: number): boolean;
	DeleteBigStorageItem2(AItem: TUserItem): boolean;
	TakebackBigStorageItem(Index: number): boolean;
	GetMachineCode(): string;
	MachineCode:string;
	AddTitle(ATitle: string): boolean;
	RemoveTitle(ATitle: string): boolean;
	SetActiveTitle(ATitle: string): void;
	GetTitleCount(): number;
	TitleCount:number;
	GetTitleItems(AIndex: number): THumTitle;
	TitleItems:THumTitle;
	GetActiveTitle(): THumTitle;
	ActiveTitle:THumTitle;
	FlashWindow(): void;
	GetMissions(): TMissions;
	Missions:TMissions;
	LockMoveItem(): void;
	UnLockMoveItem(): void;
	LockMoveItem1(ATime: number): void;
	PlayDice: ( ATag: number,APoint1: number,APoint2: number,APoint3: number,AutoCloseTime?: number) =>  void;
	AddSidebarButton(ACaption: string,AName: string): void;
	DeleteSidebarButton(AName: string): void;
	ClearSidebarButton(): void;
	SetChatText(AValue: string): void;
	GetFunctionState: ( ff: TFunctionFlag) =>  boolean;
	SetFunctionState: ( ff: TFunctionFlag,boState: boolean) =>  void;
	SendControlVisible(Name: string,Visible: boolean,Auto: boolean): void;
	GetTotalExpRate(): number;
	TotalExpRate:number;
	LockClient(Caption: string,CallBack: string): void;
	UnLockClient(): void;
	SetChatColor(Color: number): void;
	GetChatColor(): number;
	ChatColor:number;
	setMaxExp(Value: number): void;
	UIGuide(UIName: string,Hint: string,GuideIdent: string): void;
	MoveItemToUIContainer(UniTag: number,Item: TUserItem,Count: number): void;
	RemoveItemFromUIContainer(UniTag: number): void;
	GetPromotionFlag(): string;
	PromotionFlag:string;
	GetSVar(index: number): string;
	SetSVar(Index: number,Value: string): void;
	GetNVar(index: number): number;
	SetNVar(Index: number,Value: number): void;
	GetPVar(index: number): number;
	SetPVar(Index: number,Value: number): void;
	VarString(AVarName: string): TVarValue;
	VarInteger(AVarName: string): TVarValue;
	VarDateTime(AVarName: string): TVarValue;
	VarFloat(AVarName: string): TVarValue;
	VarBoolean(AVarName: string): TVarValue;
	ClearVarTable(): void;
	RemoveVar(AName: string): void;
	GoHome(): void;
	RecallHuman(AHumName: string): void;
	SetClientUIProperty(UIName: string,UIProperty: string): void;
	LoadUI(UI: string): void;
	GetPlayerID(): number;
	PlayerID:number;
	GetCustomSaveStr(): string;
	CustomSaveStr:string;
	SetCustomSaveStr(Value: string): void;
	StartAutoFight(): void;
	StopAutoFight(): void;
	UpdateAssistantIni(IniText: string): void;
	V:any;
	R:any;
        }
declare class TNormNpc extends TActor {
	CloseDialog(PlayObject: TPlayObject): void;
	Say(PlayObject: TPlayObject,Msg: string): void;
	SayEx(PlayObject: TPlayObject,UIName: string,Msg: string): void;
	UpdateSay(PlayObject: TPlayObject,UIName: string,Msg: string): void;
	MessageBox(PlayObject: TPlayObject,Msg: string): void;
	Question(PlayObject: TPlayObject,Msg: string,YMethod: string,NMethod: string): void;
	Give: ( Actor: TActor,ItemName: string,Count?: number,Upgrade?: boolean) =>  void;
	GiveItem: ( Actor: TActor,ItemName: string,Upgrade?: boolean) =>  TUserItem;
	GiveItemByIndex(Actor: TActor,ItemIndex: number,Upgrade: boolean): TUserItem;
	Take: ( Actor: TActor,ItemName: string,Count?: number) =>  void;
	TakeItem(Actor: TActor,Item: TUserItem): boolean;
	RepairActorItem(Actor: TActor,ItemWhere: number): void;
	RepairActorAllItem(Actor: TActor): void;
	SetEffigyState(Job: number,Properties: number,Feature: number,FeatureEx: number,Offset: number): void;
	GetTag(): number;
	Tag:number;
	GetRankLevelName(): string;
	RankLevelName:string;
	SetRankLevelName(Value: string): void;

        }
declare class TGuild {
	GetName(): string;
	Name:string;
	GetGuildID(): number;
	GuildID:number;
	GetChiefName(): string;
	ChiefName:string;
	GetContestPoint(): number;
	ContestPoint:number;
	SetContestPoint(Value: number): void;
	GetTeamFight(): boolean;
	TeamFight:boolean;
	GetMemberMaxLimit(): number;
	MemberMaxLimit:number;
	SetMemberMaxLimit(Value: number): void;
	GetMemberCount(): number;
	MemberCount:number;
	GetCount(): number;
	Count:number;
	IsFull(): boolean;
	GetBuildPoint(): number;
	BuildPoint:number;
	SetBuildPoint(Value: number): void;
	GetAurae(): number;
	Aurae:number;
	SetAurae(Value: number): void;
	GetStability(): number;
	Stability:number;
	SetStability(Value: number): void;
	GetFlourishing(): number;
	Flourishing:number;
	SetFlourishing(Value: number): void;
	GetFountainOpen(): boolean;
	FountainOpen:boolean;
	SetFountainOpen(Value: boolean): void;
	AddRankName(ARankNo: number,ARankName: string): boolean;
	UpdateRankName(AOldName: string,ANewName: string): boolean;
	DropRankName(ARankName: string): boolean;
	AddMemberWithRank(ARankName: string,APlayName: string): boolean;
	AddMember(APlayName: string): boolean;
	DeleteMember(APlayName: string): boolean;
	ChangeChief(APlayName: string): boolean;
	AddAlly0(AGuildName: string): boolean;
	AddAlly1(AAllyGuild: TGuild): boolean;
	DeleteAlly0(AGuildName: string): boolean;
	DeleteAlly1(AAllyGuild: TGuild): boolean;
	VarString(AVarName: string): TVarValue;
	VarInteger(AVarName: string): TVarValue;
	VarDateTime(AVarName: string): TVarValue;
	VarFloat(AVarName: string): TVarValue;
	VarBoolean(AVarName: string): TVarValue;
	GetRankNames(AList: TStringList): void;
	GetRankMembers(ARankName: string,AList: TStringList): void;
	GetCustomSaveStr(): string;
	CustomSaveStr:string;
	SetCustomSaveStr(Value: string): void;
	V:any;
	R:any;
        }
declare class TUserCastle {
	GetMapCastle(): TEnvirnoment;
	MapCastle:TEnvirnoment;
	GetMapPalace(): TEnvirnoment;
	MapPalace:TEnvirnoment;
	GetMapSecret(): TEnvirnoment;
	MapSecret:TEnvirnoment;
	GetName(): string;
	Name:string;
	SetName(Value: string): void;
	GetTotalGold(): number;
	TotalGold:number;
	SetTotalGold(Value: number): void;
	GetTodayIncome(): number;
	TodayIncome:number;
	SetTodayIncome(Value: number): void;
	GetGuild(): TGuild;
	Guild:TGuild;
	SetGuild(AGuild: TGuild): void;
	GetHomeMap(): string;
	HomeMap:string;
	GetHomeX(): number;
	HomeX:number;
	GetHomeY(): number;
	HomeY:number;
	GetWarDate(): number;
	WarDate:number;
	GetUnderWar(): boolean;
	UnderWar:boolean;
	InCastleWarArea(Envir: TEnvirnoment,nX: number,nY: number): boolean;
	IsMember(Cert: TActor): boolean;
	IsMasterGuild(Guild: TGuild): boolean;
	IsAttackGuild(Guild: TGuild): boolean;
	IsAttackAllyGuild(Guild: TGuild): boolean;
	IsDefenseGuild(Guild: TGuild): boolean;
	IsDefenseAllyGuild(Guild: TGuild): boolean;
	StartWall(): void;
	StopWall(): void;
	AddAttacker(Guild: TGuild): boolean;
	AddAttackerByTime(Guild: TGuild,ATime: number): boolean;
	AddAllAttacker(): void;
	AddAllAttackerByTime(ATime: number): void;
	RepairDoor(): boolean;
	GetLeftWall(): TActor;
	LeftWall:TActor;
	GetCenterWall(): TActor;
	CenterWall:TActor;
	GetRightWall(): TActor;
	RightWall:TActor;
	RepairWall(nWallIndex: number): boolean;
	GetMainDoorOpened(): boolean;
	MainDoorOpened:boolean;
	GetMainDoor(): TActor;
	MainDoor:TActor;
	OpenDoor(): void;
	CloseDoor(): void;
	HireArcher(Index: number): boolean;
	HireGuard(Index: number): boolean;
	UnHireArcher(Index: number): boolean;
	UnHireGuard(Index: number): boolean;
	GetGuard(Index: number): TActor;
	GetArcher(Index: number): TActor;
	GetAttackWarCount(): number;
	AttackWarCount:number;
	GetAttackWarDate(Index: number): number;
	GetAttackWarGuild(Index: number): TGuild;
	GetAttackGuildCount(): number;
	AttackGuildCount:number;
	GetAttackGuild(Index: number): TGuild;
	GetChangeData(): number;
	ChangeData:number;

        }
declare class TStdItem {
	GetName(): string;
	Name:string;
	GetIndex(): number;
	Index:number;
	GetStdMode(): number;
	StdMode:number;
	GetShape(): number;
	Shape:number;
	GetWeight(): number;
	Weight:number;
	GetAniCount(): number;
	AniCount:number;
	GetSource(): number;
	Source:number;
	GetReserved(): number;
	Reserved:number;
	GetLooks(): number;
	Looks:number;
	GetDuraMax(): number;
	DuraMax:number;
	GetAC(): number;
	AC:number;
	GetAC2(): number;
	AC2:number;
	GetMAC(): number;
	MAC:number;
	GetMAC2(): number;
	MAC2:number;
	GetDC(): number;
	DC:number;
	GetDC2(): number;
	DC2:number;
	GetMC(): number;
	MC:number;
	GetMC2(): number;
	MC2:number;
	GetSC(): number;
	SC:number;
	GetSC2(): number;
	SC2:number;
	GetTC(): number;
	TC:number;
	GetTC2(): number;
	TC2:number;
	GetPC(): number;
	PC:number;
	GetPC2(): number;
	PC2:number;
	GetWC(): number;
	WC:number;
	GetWC2(): number;
	WC2:number;
	GetNeed(): number;
	Need:number;
	GetNeedLevel(): number;
	NeedLevel:number;
	GetPrice(): number;
	Price:number;
	GetJob(): number;
	Job:number;
	GetColor(): number;
	Color:number;
	GetTypeID(): number;
	TypeID:number;

        }
declare class TUserItem {
	GetName(): string;
	Name:string;
	GetDisplayName(): string;
	DisplayName:string;
	Rename(NewName: string): boolean;
	RevertName(): boolean;
	GetColor(): number;
	Color:number;
	SetColor(Value: number): void;
	GetQuality(): number;
	Quality:number;
	SetQuality(Value: number): void;
	MakeHole(): boolean;
	OpenSoul(): boolean;
	CopyFrom(Source: TUserItem): boolean;
	GetStdMode(): number;
	StdMode:number;
	GetNeed(): number;
	Need:number;
	SetNeed(Value: number): void;
	GetNeedLevel(): number;
	NeedLevel:number;
	SetNeedLevel(Value: number): void;
	GetPrice(): number;
	Price:number;
	GetPrice2(): number;
	Price2:number;
	GetShape(): number;
	Shape:number;
	SetShape(Value: number): void;
	GetLook(): number;
	Look:number;
	SetLook(Value: number): void;
	GetAniCount(): number;
	AniCount:number;
	SetAniCount(Value: number): void;
	GetSource(): number;
	Source:number;
	GetJob(): number;
	Job:number;
	GetMakeIndex(): number;
	MakeIndex:number;
	GetItemIndex(): number;
	ItemIndex:number;
	GetDura(): number;
	Dura:number;
	SetDura(Value: number): void;
	GetDuraMax(): number;
	DuraMax:number;
	SetDuraMax(Value: number): void;
	GetMaxDate(): number;
	MaxDate:number;
	SetMaxDate(Value: number): void;
	GetAddAC(): number;
	AddAC:number;
	SetAddAC(Value: number): void;
	GetAddMAC(): number;
	AddMAC:number;
	SetAddMAC(Value: number): void;
	GetAddDC(): number;
	AddDC:number;
	GetAddDCStr(): string;
	AddDCStr:string;
	SetAddDC(Value: number): void;
	GetAddMC(): number;
	AddMC:number;
	SetAddMC(Value: number): void;
	GetAddSC(): number;
	AddSC:number;
	SetAddSC(Value: number): void;
	GetAddTC(): number;
	AddTC:number;
	SetAddTC(Value: number): void;
	GetAddPC(): number;
	AddPC:number;
	SetAddPC(Value: number): void;
	GetAddWC(): number;
	AddWC:number;
	SetAddWC(Value: number): void;
	GetAddLAC(): number;
	AddLAC:number;
	SetAddLAC(Value: number): void;
	GetAddLMAC(): number;
	AddLMAC:number;
	SetAddLMAC(Value: number): void;
	GetAddLDC(): number;
	AddLDC:number;
	SetAddLDC(Value: number): void;
	GetAddLMC(): number;
	AddLMC:number;
	SetAddLMC(Value: number): void;
	GetAddLSC(): number;
	AddLSC:number;
	SetAddLSC(Value: number): void;
	GetAddLTC(): number;
	AddLTC:number;
	SetAddLTC(Value: number): void;
	GetAddLPC(): number;
	AddLPC:number;
	SetAddLPC(Value: number): void;
	GetAddLWC(): number;
	AddLWC:number;
	SetAddLWC(Value: number): void;
	GetBind(): boolean;
	Bind:boolean;
	SetBind(Value: boolean): void;
	GetNeverDrop(): boolean;
	NeverDrop:boolean;
	SetNeverDrop(Value: boolean): void;
	GetNoRepair(): boolean;
	NoRepair:boolean;
	SetNoRepair(Value: boolean): void;
	GetNoStore(): boolean;
	NoStore:boolean;
	SetNoStore(Value: boolean): void;
	GetAddHitPoint(): number;
	AddHitPoint:number;
	SetAddHitPoint(Value: number): void;
	GetAddHitSpeed(): number;
	AddHitSpeed:number;
	SetAddHitSpeed(Value: number): void;
	GetAddSpeedPoint(): number;
	AddSpeedPoint:number;
	SetAddSpeedPoint(Value: number): void;
	GetAddAntiMagic(): number;
	AddAntiMagic:number;
	SetAddAntiMagic(Value: number): void;
	GetAddAntiPoison(): number;
	AddAntiPoison:number;
	SetAddAntiPoison(Value: number): void;
	GetAddHealthRecover(): number;
	AddHealthRecover:number;
	SetAddHealthRecover(Value: number): void;
	GetAddSpellRecover(): number;
	AddSpellRecover:number;
	SetAddSpellRecover(Value: number): void;
	GetAddPoisonRecover(): number;
	AddPoisonRecover:number;
	SetAddPoisonRecover(Value: number): void;
	GetAddLuck(): number;
	AddLuck:number;
	SetAddLuck(Value: number): void;
	GetUpgrade(): number;
	Upgrade:number;
	SetUpgrade(Value: number): void;
	GetMaxUpgrade(): number;
	MaxUpgrade:number;
	SetMaxUpgrade(Value: number): void;
	GetAddPoint(Idx: number): TAddPointItem;
	GetAddLevel(Idx: number): TAddLevelItem;
	SetAddHold(Idx: number,Value: number): void;
	SetAddHole(Idx: number,Value: number): void;
	GetAddHold(Idx: number): number;
	GetAddHole(Idx: number): number;
	AddHole:number;
	GetOpenedSoul(): boolean;
	OpenedSoul:boolean;
	GetSoulLevel(): number;
	SoulLevel:number;
	SetSoulLevel(Value: number): void;
	GetSoulExp(): number;
	SoulExp:number;
	SetSoulExp(Value: number): void;
	SetSoulMaxExp(Value: number): void;
	GetSoulMaxExp(): number;
	SoulMaxExp:number;
	GetEffectType(): number;
	EffectType:number;
	SetEffectType(Value: number): void;
	GetTotalAbility(): number;
	TotalAbility:number;
	GetItemOutWay(): number;
	ItemOutWay:number;
	SetItemOutWay(Value: number): void;
	MakeString(): string;
	MakeString2(): string;
	SetFromDateTime(Value: number): void;
	GetFromDateTime(): number;
	FromDateTime:number;
	GetCustomEffect(): number;
	CustomEffect:number;
	SetCustomEffect(Value: number): void;
	GetCustomCaption(Index: number): string;
	SetCustomCaption(Index: number,Value: string): void;
	GetCustomText(Index: number): string;
	SetCustomText(Index: number,Value: string): void;
	GetCustomDesc(): string;
	CustomDesc:string;
	SetCustomDesc(Value: string): void;
	GetOutWay1(Index: number): number;
	OutWay1:number;
	SetOutWay1(Index: number,Value: number): void;
	GetOutWay2(Index: number): number;
	OutWay2:number;
	SetOutWay2(Index: number,Value: number): void;
	GetOutWay3(Index: number): number;
	OutWay3:number;
	SetOutWay3(Index: number,Value: number): void;
	GetCustomValue(Index: number): number;
	CustomValue:number;
	SetCustomValue(Index: number,Value: number): void;
	GetDropEff(): number;
	DropEff:number;
	SetDropEff(Value: number): void;
	GetState(): TItemState;
	State:TItemState;
	MakeCopy(): TUserItem;

        }
declare class TEnvirnoment {
	GetName(): string;
	Name:string;
	GetMapName(): string;
	MapName:string;
	GetDuplicate(): boolean;
	Duplicate:boolean;
	GetDark(): boolean;
	Dark:boolean;
	SetDark(Value: boolean): void;
	GetDay(): boolean;
	Day:boolean;
	SetDay(Value: boolean): void;
	GetDarkness(): boolean;
	Darkness:boolean;
	SetDarkness(Value: boolean): void;
	GetDayLight(): boolean;
	DayLight:boolean;
	SetDayLight(Value: boolean): void;
	GetSafe(): boolean;
	Safe:boolean;
	SetSafe(Value: boolean): void;
	GetFight(): boolean;
	Fight:boolean;
	SetFight(Value: boolean): void;
	GetFight3(): boolean;
	Fight3:boolean;
	SetFight3(Value: boolean): void;
	GetQuiz(): boolean;
	Quiz:boolean;
	SetQuiz(Value: boolean): void;
	GetNoReconect(): boolean;
	NoReconect:boolean;
	SetNoReconect(Value: boolean): void;
	GetReConnectMap(): string;
	ReConnectMap:string;
	SetReConnectMap(Value: string): void;
	GetMUSIC(): boolean;
	MUSIC:boolean;
	SetMUSIC(Value: boolean): void;
	GetExpRate(): number;
	ExpRate:number;
	SetExpRate(Value: number): void;
	GetPKWinLevel(): number;
	PKWinLevel:number;
	SetPKWinLevel(Value: number): void;
	GetPKWinExp(): number;
	PKWinExp:number;
	SetPKWinExp(Value: number): void;
	GetPKLostLevel(): number;
	PKLostLevel:number;
	SetPKLostLevel(Value: number): void;
	GetPKLostExp(): number;
	PKLostExp:number;
	SetPKLostExp(Value: number): void;
	GetDecHP(): number;
	DecHP:number;
	SetDecHP(Value: number): void;
	GetDecHPTime(): number;
	DecHPTime:number;
	SetDecHPTime(Value: number): void;
	GetIncHP(): number;
	IncHP:number;
	SetIncHP(Value: number): void;
	GetIncHPTime(): number;
	IncHPTime:number;
	SetIncHPTime(Value: number): void;
	GetDecGameGold(): number;
	DecGameGold:number;
	SetDecGameGold(Value: number): void;
	GetDecGameGoldTime(): number;
	DecGameGoldTime:number;
	SetDecGameGoldTime(Value: number): void;
	GetDecGamePoint(): number;
	DecGamePoint:number;
	SetDecGamePoint(Value: number): void;
	GetDecGamePointTime(): number;
	DecGamePointTime:number;
	SetDecGamePointTime(Value: number): void;
	GetIncGameGold(): number;
	IncGameGold:number;
	SetIncGameGold(Value: number): void;
	GetIncGameGoldTime(): number;
	IncGameGoldTime:number;
	SetIncGameGoldTime(Value: number): void;
	GetIncGamePoint(): number;
	IncGamePoint:number;
	SetIncGamePoint(Value: number): void;
	GetIncGamePointTime(): number;
	IncGamePointTime:number;
	SetIncGamePointTime(Value: number): void;
	GetRunHuman(): boolean;
	RunHuman:boolean;
	SetRunHuman(Value: boolean): void;
	GetRunMon(): boolean;
	RunMon:boolean;
	SetRunMon(Value: boolean): void;
	GetNeedHole(): boolean;
	NeedHole:boolean;
	SetNeedHole(Value: boolean): void;
	GetNoRecall(): boolean;
	NoRecall:boolean;
	SetNoRecall(Value: boolean): void;
	GetNoGuildRecall(): boolean;
	NoGuildRecall:boolean;
	SetNoGuildRecall(Value: boolean): void;
	GetNoDearRecall(): boolean;
	NoDearRecall:boolean;
	SetNoDearRecall(Value: boolean): void;
	GetNoMasterRecall(): boolean;
	NoMasterRecall:boolean;
	SetNoMasterRecall(Value: boolean): void;
	GetNoRandomMove(): boolean;
	NoRandomMove:boolean;
	SetNoRandomMove(Value: boolean): void;
	GetNoDrug(): boolean;
	NoDrug:boolean;
	SetNoDrug(Value: boolean): void;
	GetMine(): boolean;
	Mine:boolean;
	SetMine(Value: boolean): void;
	GetNoPostionMove(): boolean;
	NoPostionMove:boolean;
	SetNoPostionMove(Value: boolean): void;
	GetFightPK(): boolean;
	FightPK:boolean;
	SetFightPK(Value: boolean): void;
	GetNoHorse(): boolean;
	NoHorse:boolean;
	SetNoHorse(Value: boolean): void;
	GetMonCount(): number;
	MonCount:number;
	GetHumCount(): number;
	HumCount:number;
	ClearMon(ANoDrop: boolean,AMonName: string): void;
	GetMonCountEx: ( AMonName?: string) =>  number;
	MonCountEx:number;
	GetMonCountInRange(MapX: number,MapY: number,Range: number,AMonName: string): number;
	MonCountInRange:number;
	GetActorListInRange: ( MapX: number,MapY: number,Range: number,ActorName?: string) =>  TActorList;
	ActorListInRange:TActorList;
	GetActorListAt: ( MapX: number,MapY: number,ActorName?: string) =>  TActorList;
	ActorListAt:TActorList;
	GetFreeing(): boolean;
	Freeing:boolean;
	GetStartTime(): number;
	StartTime:number;
	CanMove(MapX: number,MapY: number,boIgnoreActor: boolean): boolean;
	SetInTroubleModeActive(boDenySay: boolean,boDenyAutoColor: boolean,boDenyViewUserInfo: boolean,WeaponShape: number,DressShape: number,SameName: string): void;
	SetInTroubleModeClose(): void;
	SetDisplayName(S: string): void;
	GetDisplayName(): string;
	DisplayName:string;
	GetMapWidth(): number;
	MapWidth:number;
	GetMapHeight(): number;
	MapHeight:number;

        }
declare class TUserMagic {
	GetName(): string;
	Name:string;
	GetMagID(): number;
	MagID:number;
	GetMagIdx(): number;
	MagIdx:number;
	GetJob(): number;
	Job:number;
	GetLevel(): number;
	Level:number;
	SetLevel(Value: number): void;
	GetStrengthen(): number;
	Strengthen:number;
	SetStrengthen(Value: number): void;
	GetTranPoint(): number;
	TranPoint:number;
	SetTranPoint(Value: number): void;
	GetUseTime(): number;
	UseTime:number;
	GetOpened(): boolean;
	Opened:boolean;
	GetMagicInfo(): TMagic;
	MagicInfo:TMagic;

        }
declare class TBuff {
	GetTag(): number;
	Tag:number;
	GetID(): number;
	ID:number;
	GetHandle(): number;
	Handle:number;
	GetGroupID(): number;
	GroupID:number;
	GetBuffValue(): number;
	BuffValue:number;
	GetValueRate(): boolean;
	ValueRate:boolean;
	GetDestoryTick(): number;
	DestoryTick:number;
	SetDestoryTick(value: number): void;
	AffectInterval(): number;
	GetActor(): TActor;
	Actor:TActor;
	SetActor(Value: TActor): void;
	GetCustomInt(Index: number): number;
	CustomInt:number;
	SetCustomInt(Index: number,value: number): void;
	SetCustomStr(Str: string): void;
	GetCustomStr(): string;
	CustomStr:string;
	GetCategory(): number;
	Category:number;
	GetBuffAbilityType(): number;
	BuffAbilityType:number;
	GetBuffStatusType(): number;
	BuffStatusType:number;
	GetBuffIntervalType(): number;
	BuffIntervalType:number;
	GetArgs1(): number;
	Args1:number;
	GetArgs2(): number;
	Args2:number;
	SetGroup(value: number): void;

        }
declare class THumTitle {
	GetIndex(): number;
	Index:number;
	GetName(): string;
	Name:string;
	GetLooks(): number;
	Looks:number;
	GetTitleID(): number;
	TitleID:number;
	GetHP(): number;
	HP:number;
	GetMP(): number;
	MP:number;
	GetAC(): number;
	AC:number;
	GetACMax(): number;
	ACMax:number;
	GetMAC(): number;
	MAC:number;
	GetMACMax(): number;
	MACMax:number;
	GetDC(): number;
	DC:number;
	GetDCMax(): number;
	DCMax:number;
	GetMC(): number;
	MC:number;
	GetMCMax(): number;
	MCMax:number;
	GetSC(): number;
	SC:number;
	GetSCMax(): number;
	SCMax:number;
	GetTC(): number;
	TC:number;
	GetTCMax(): number;
	TCMax:number;
	GetPC(): number;
	PC:number;
	GetPCMax(): number;
	PCMax:number;
	GetWC(): number;
	WC:number;
	GetWCMax(): number;
	WCMax:number;
	GetHitPoint(): number;
	HitPoint:number;
	GetAntiPoison(): number;
	AntiPoison:number;
	GetPoisonRecover(): number;
	PoisonRecover:number;
	GetHealthRecover(): number;
	HealthRecover:number;
	GetSpellRecover(): number;
	SpellRecover:number;
	GetAntiMagic(): number;
	AntiMagic:number;
	GetLimit(): number;
	Limit:number;
	SetLimit(Value: number): void;

        }
declare class TMissionItem {
	GetRecordID(): string;
	RecordID:string;
	GetKind(): number;
	Kind:number;
	GetMissionID(): string;
	MissionID:string;
	GetSubject(): string;
	Subject:string;
	SetSubject(AValue: string): void;
	GetContent(): string;
	Content:string;
	SetContent(AValue: string): void;
	GetRewards(): string;
	Rewards:string;
	SetRewards(AValue: string): void;
	GetNeedType(): number;
	NeedType:number;
	SetNeedType(AValue: number): void;
	GetNeedName(): string;
	NeedName:string;
	SetNeedName(AValue: string): void;
	GetNeedQuality(): number;
	NeedQuality:number;
	SetNeedQuality(AValue: number): void;
	GetNeedMax(): number;
	NeedMax:number;
	SetNeedMax(AValue: number): void;
	GetNeedProgress(): number;
	NeedProgress:number;
	SetNeedProgress(AValue: number): void;
	GetTargetNPC(): number;
	TargetNPC:number;
	SetTargetNPC(AValue: number): void;
	GetStart(): number;
	Start:number;
	SetStart(AValue: number): void;
	GetLimit(): number;
	Limit:number;
	SetLimit(AValue: number): void;
	GetState(): number;
	State:number;
	SetState(AValue: number): void;
	Update(): void;
	Submit(): void;
	Cancel(): void;
	Delete(): void;

        }
declare class TMissions {
	Clear(): void;
	Contain(ARecordID: string): boolean;
	TryGet(ARecordID: string): TMissionItem;
	ContainMissionIDInDB(AMissionID: string): boolean;
	ContainMissionID(AMissionID: string): boolean;
	TryGetByMissionID(AMissionID: string): TMissionItem;
	ContainLink(AMissionID: string): boolean;
	TryGetLink(AMissionID: string): TMissionLinkItem;
	Add1(AKind: number,AMissionID: string,ATargetNPC: number): TMissionItem;
	Add2(AKind: number,AMissionID: string,ANeedType: number,ASubject: string,AContent: string,ARewards: string,ANeedName: string,ANeedMax: number,ANeedQuality: number,ALimit: number,ATargetNPC: number,AAutoComplete: boolean): TMissionItem;
	AddLink1(AKind: number,AMissionID: string,ATargetNPC: number): TMissionLinkItem;
	AddLink2(AKind: number,AMissionID: string,ASubject: string,AContent: string,ATargetNPC: number,ANeedLevel: number,ANeedReLevel: number): TMissionLinkItem;
	Delete(ARecordID: string): void;
	DeleteLink(AMissionID: string): void;
	Refresh(): void;
	GetCount(): number;
	Count:number;
	GetItems(AIndex: number): TMissionItem;
	Items:TMissionItem;
	IndexOf(ARecordID: string): number;
	GetLinkCount(): number;
	LinkCount:number;
	GetLinkItems(AIndex: number): TMissionLinkItem;
	LinkItems:TMissionLinkItem;
	IndexOfLink(AMissionID: string): number;

        }
declare class TAddPointItem {
	GetValue(): number;
	Value:number;
	SetValue(Value: number): void;
	GetValueType(): number;
	ValueType:number;
	SetValueType(Value: number): void;

        }
declare class TAddLevelItem {
	GetValue(): number;
	Value:number;
	SetValue(Value: number): void;
	GetValueType(): number;
	ValueType:number;
	SetValueType(Value: number): void;
	GetState(): number;
	State:number;
	SetState(Value: number): void;

        }
declare class TAddedAbility {
	GetHP(): number;
	HP:number;
	SetHP(Value: number): void;
	GetMP(): number;
	MP:number;
	SetMP(Value: number): void;
	GetAC(): number;
	AC:number;
	SetAC(Value: number): void;
	GetACMax(): number;
	ACMax:number;
	SetACMax(Value: number): void;
	GetMAC(): number;
	MAC:number;
	SetMAC(Value: number): void;
	GetMACMax(): number;
	MACMax:number;
	SetMACMax(Value: number): void;
	GetDC(): number;
	DC:number;
	SetDC(Value: number): void;
	GetDCMax(): number;
	DCMax:number;
	SetDCMax(Value: number): void;
	GetMC(): number;
	MC:number;
	SetMC(Value: number): void;
	GetMCMax(): number;
	MCMax:number;
	SetMCMax(Value: number): void;
	GetSC(): number;
	SC:number;
	SetSC(Value: number): void;
	GetSCMax(): number;
	SCMax:number;
	SetSCMax(Value: number): void;
	GetTC(): number;
	TC:number;
	SetTC(Value: number): void;
	GetTCMax(): number;
	TCMax:number;
	SetTCMax(Value: number): void;
	GetPC(): number;
	PC:number;
	SetPC(Value: number): void;
	GetPCMax(): number;
	PCMax:number;
	SetPCMax(Value: number): void;
	GetWC(): number;
	WC:number;
	SetWC(Value: number): void;
	GetWCMax(): number;
	WCMax:number;
	SetWCMax(Value: number): void;
	GetLuck(): number;
	Luck:number;
	SetLuck(Value: number): void;
	GetHitPoint(): number;
	HitPoint:number;
	SetHitPoint(Value: number): void;
	GetHitSpeed(): number;
	HitSpeed:number;
	SetHitSpeed(Value: number): void;
	GetAntiPoison(): number;
	AntiPoison:number;
	SetAntiPoison(Value: number): void;
	GetPoisonRecover(): number;
	PoisonRecover:number;
	SetPoisonRecover(Value: number): void;
	GetHealthRecover(): number;
	HealthRecover:number;
	SetHealthRecover(Value: number): void;
	GetSpellRecover(): number;
	SpellRecover:number;
	SetSpellRecover(Value: number): void;
	GetAntiMagic(): number;
	AntiMagic:number;
	SetAntiMagic(Value: number): void;
	GetDamageAbsorb(): number;
	DamageAbsorb:number;
	SetDamageAbsorb(Value: number): void;
	GetDamageAdd(): number;
	DamageAdd:number;
	SetDamageAdd(Value: number): void;
	GetPunchHit(): number;
	PunchHit:number;
	SetPunchHit(Value: number): void;
	GetCriticalHit(): number;
	CriticalHit:number;
	SetCriticalHit(Value: number): void;
	GetRebound(): number;
	Rebound:number;
	SetRebound(Value: number): void;
	GetExpRate(): number;
	ExpRate:number;
	SetExpRate(Value: number): void;
	GetGoldRate(): number;
	GoldRate:number;
	SetGoldRate(Value: number): void;
	GetItemRate(): number;
	ItemRate:number;
	SetItemRate(Value: number): void;
	GetAppendDamage(): number;
	AppendDamage:number;
	SetAppendDamage(Value: number): void;
	GetSpeedPoint(): number;
	SpeedPoint:number;
	SetSpeedPoint(Value: number): void;
	GetCriticalHitDef(): number;
	CriticalHitDef:number;
	SetCriticalHitDef(Value: number): void;
	GetPunchHitDef(): number;
	PunchHitDef:number;
	SetPunchHitDef(Value: number): void;
	GetAppendDamageDef(): number;
	AppendDamageDef:number;
	SetAppendDamageDef(Value: number): void;
	GetHPRate(): number;
	HPRate:number;
	SetHPRate(Value: number): void;
	GetMPRate(): number;
	MPRate:number;
	SetMPRate(Value: number): void;
	GetWeaponStrong(): number;
	WeaponStrong:number;
	SetWeaponStrong(Value: number): void;
	GetHoly(): number;
	Holy:number;
	SetHoly(Value: number): void;
	GetWearWeight(): number;
	WearWeight:number;
	SetWearWeight(Value: number): void;
	GetMaxWeight(): number;
	MaxWeight:number;
	SetMaxWeight(Value: number): void;
	GetPunchHitAppendDamage(): number;
	PunchHitAppendDamage:number;
	SetPunchHitAppendDamage(Value: number): void;
	GetCriticalHitAppendDamage(): number;
	CriticalHitAppendDamage:number;
	SetCriticalHitAppendDamage(Value: number): void;
	GetFatalHit(): number;
	FatalHit:number;
	SetFatalHit(Value: number): void;

        }
declare class TM2Core {
	GetGVar(index: number): number;
	GVar:number;
	GetAVar(index: number): string;
	AVar:string;
	GetIVar(index: number): number;
	IVar:number;
	GetUVar(index: number): string;
	UVar:string;
	SetGVar(index: number,Value: number): void;
	SetAVar(index: number,Value: string): void;
	SetIVar(index: number,Value: number): void;
	SetUVar(index: number,Value: string): void;
	GetPlayCount(): number;
	PlayCount:number;
	GetPlayer(index: number): TPlayObject;
	Kick(APlayName: string): void;
	KickAll(): void;
	ClearMapMon: ( AMapName: string,ANoDrop?: boolean,AMonName?: string) =>  void;
	ShowEffect(Map: string,MapX: number,MapY: number,Effect: number,IntervalTime: number): void;
	CreateAttackEvent(Map: string,AMapX: number,AMapY: number,ATime: number,AInterval: number,ADamage: number): boolean;
	RecallMap(ASourceMap: string,ADestMap: string): void;
	MonGen: ( AMap: string,AMonName: string,AMonCount: number,AMapX: number,AMapY: number,ARange: number,ACamp?: number,ANation?: number,ATag?: number,ARevivalEvent?: boolean,ADieEvent?: boolean,AKillerEvent?: boolean,ADamageEvent?: boolean) =>  TActorList;
	MonGenEx(AMap: TEnvirnoment,AMonName: string,AMonCount: number,AMapX: number,AMapY: number,ARange: number,ACamp: number,ANation: number,ATag: number,ARevivalEvent: boolean,ADieEvent: boolean,AKillerEvent: boolean,ADamageEvent: boolean): TActorList;
	MobPlace: ( AMissionMap: string,AMissionX: number,AMissionY: number,AMonName: string,AX: number,AY: number,ACount?: number,ARange?: number,ACamp?: number,ANation?: number,ATag?: number,ARevivalEvent?: boolean,ADieEvent?: boolean,AKillerEvent?: boolean,ADamageEvent?: boolean) =>  TActorList;
	MobPlaceEx(AMissionMap: TEnvirnoment,AMissionX: number,AMissionY: number,AMonName: string,AX: number,AY: number,ACount: number,ARange: number,ACamp: number,ANation: number,ATag: number,ARevivalEvent: boolean,ADieEvent: boolean,AKillerEvent: boolean,ADamageEvent: boolean): TActorList;
	GetServerName(): string;
	ServerName:string;
	GetServerID(): number;
	ServerID:number;
	GetDBEngine(): TDBEngine;
	DBEngine:TDBEngine;
	GetToptenz(): TToptenz;
	Toptenz:TToptenz;
	WriteLog(Log: string): void;
	RefreshDBItems(): void;
	GetStartTime(): number;
	StartTime:number;
	GetEnvirPath(): string;
	EnvirPath:string;
	GetPath(): string;
	Path:string;
	BroadcastMoveMessage(Message: string,_Type: number,DuraTick: number): void;
	GetClientSpeed(): number;
	ClientSpeed:number;
	SetClientSpeed(Value: number): void;
	RandomRange(Min: number,Max: number): number;
	BuildDB(): void;
	Lock(): void;
	UnLock(): void;
	Load(): void;
	Save(isStop: boolean): void;
	ReLoadScriptEngine(): void;
	CreateIdentStringList(Ident: string): TStringList;
	GetIdentStringList(Ident: string): TStringList;
	IdentStringList:TStringList;
	FreeIdentStringList(Ident: string): void;
	CreateStringList(): TStringList;
	DebugOutStringList(): void;
	DefString(AVarName: string): TVarValue;
	DefInteger(AVarName: string): TVarValue;
	DefDateTime(AVarName: string): TVarValue;
	DefFloat(AVarName: string): TVarValue;
	DefBoolean(AVarName: string): TVarValue;
	ClearVarTable(): void;
	RemoveVar(AName: string): void;
	Broadcast(Msg: string): void;
	BroadcastSay(Msg: string,FontColor: number,Backgound: number): void;
	BroadcastTopMessage(Message: string): void;
	BroadcastCenterMessage: ( Message: string,DuraTick?: number) =>  void;
	BroadcastCountDownMessage(Message: string): void;
	StartQuest(AQManagerMethod: string): void;
	FindStdItem(ItemIndex: number): TStdItem;
	FindItemIndex(Name: string): number;
	FindMap(AMap: string): TEnvirnoment;
	AddMapRoute(Name: string,Source: string,SourceX: number,SourceY: number,Dest: string,DestX: number,DestY: number,UsefulLife: number,Looks: number,ShowName: boolean): boolean;
	DelMapRoute(Name: string): boolean;
	CreateDuplicateMap(Name: string,UsefulLife: number): TEnvirnoment;
	CloseDuplicateMap(MapName: string): boolean;
	AddNpc(Name: string,Map: string,MapX: number,MapY: number,Appr: number,AUnitName: string): TNormNpc;
	RemoveNpc(Name: string,Map: string,MapX: number,MapY: number): boolean;
	AddMonNpc: ( MonName: string,NpcName: string,Map: string,MapX: number,MapY: number,AUnitName?: string,ACamp?: number,ANation?: number,AttackDiffCamp?: boolean,AttackDiffNation?: boolean,AttackRed?: boolean,AttackMon?: boolean,MissionX?: number,MissionY?: number,MissionRange?: number) =>  TActor;
	AddMonNpcEx: ( MonName: string,NpcName: string,Map: TEnvirnoment,MapX: number,MapY: number,AUnitName?: string,ACamp?: number,ANation?: number,AttackDiffCamp?: boolean,AttackDiffNation?: boolean,AttackRed?: boolean,AttackMon?: boolean,MissionX?: number,MissionY?: number,MissionRange?: number) =>  TActor;
	RemoveMonNpc(NpcName: string,Map: string,MapX: number,MapY: number): boolean;
	RemoveMonNpcEx(NpcName: string,Map: TEnvirnoment,MapX: number,MapY: number): boolean;
	FindPlayer(AName: string): TPlayObject;
	FindPlayerEx(AAccount: string,AName: string): TPlayObject;
	CreateGuild(AName: string,AChief: string): TGuild;
	FindGuild(sGuildName: string): TGuild;
	GetGuildCount(): number;
	GuildCount:number;
	GetGuildByIndex(index: number): TGuild;
	GuildByIndex:TGuild;
	DeleteGuild(sGuildName: string): boolean;
	DeleteGuildForce(sGuildName: string): boolean;
	AddGuildWar(SourceGuild: string,DesTGuild: string): boolean;
	FindCastle(Name: string): TUserCastle;
	FindNpc(NpcName: string): TNormNpc;
	FindMerchant(MapName: string,MerchantName: string): TNormNpc;
	FindMerchantByTag(ATag: number): TNormNpc;
	SavePlayerToFile(Source: TPlayObject,AFileName: string): void;
	AddClonePlayer(Source: TPlayObject,AName: string,Envir: TEnvirnoment,MapX: number,MapY: number): TActor;
	AddClonePlayerFromFile(AFileName: string,AName: string,Envir: TEnvirnoment,MapX: number,MapY: number): TActor;
	DelayGoto(ID: number,AIntervalTime: number,Once: boolean): boolean;
	ClearDelayGoto(ID: number): void;
	RenamePlayer(PlayObject: TPlayObject,NewName: string): void;
	ThrowItem: ( MapName: string,ItemName: string,MapX: number,MapY: number,Range: number,Count: number,Owner?: TActor,ForbidTime?: number) =>  boolean;
	ThrowItemEx: ( Map: TEnvirnoment,ItemName: string,MapX: number,MapY: number,Range: number,Count: number,Owner?: TActor,ForbidTime?: number) =>  boolean;
	RandomUpgrade(UserItem: TUserItem): boolean;
	RandomUpgradePoint(UserItem: TUserItem): boolean;
	RandomUpgradeLevel(UserItem: TUserItem): void;
	AddRobot(ExecTime: number,AMethod: string): void;
	SlaveMutiny(ATime: number): void;
	GetLastThrowItemList(): TUserItemListReadOnly;
	LastThrowItemList:TUserItemListReadOnly;
	LoadUserItemFromString(S: string): TUserItem;
	SaveUserItemToString(UserItem: TUserItem): string;
	SaveItemToStore(Item: TUserItem,ChrName: string,EventType: number,Param: string): string;
	LoadItemFromStore(Index: string): TUserItem;
	GetStoreItemType(Index: string): number;
	StoreItemType:number;
	GetAllStoreItem(ChrName: string): TStoreItemList;
	AllStoreItem:TStoreItemList;
	GetStoreItemsWithType(ChrName: string,EventType: number): TStoreItemList;
	StoreItemsWithType:TStoreItemList;
	GetStoreItemsOnlyType(EventType: number): TStoreItemList;
	StoreItemsOnlyType:TStoreItemList;
	DeleteStoreItem(Index: string): void;
	CopyUserItem(Item: TUserItem): TUserItem;
	DeleteStoreItems(IndexList: TStringList): number;
	GetIPLocal(IP: string): string;
	IPLocal:string;
	QueryPerformanceCounter(): number;
	QueryPerformanceFrequency(): number;
	LoadLibrary(FileName: string): number;
	GetProcAddress(hModule: number,ProcName: string): number;
	ProcAddress:number;
	FreeLibrary(hModule: number): boolean;
	ASyncHttpPostJson(Ident: string,URL: string,Json: string,TimeOut: number): void;
	ASyncHttpGet(Ident: string,URL: string,TimeOut: number): void;
	TryGetResource(AName: string): TStringList;
	SendMail(AFrom: string,ATo: string,ASubject: string,AContent: string): void;
	SendChangeClientSpeed(): void;
	Sleep(MS: number): void;
	GetMagicIdByName(Name: string): number;
	DirectoryExists(Name: string): boolean;
	CreateDir(Name: string): boolean;
	FileExists(Name: string): boolean;
	VarString(AVarName: string): TVarValue;
	VarInteger(AVarName: string): TVarValue;
	VarDateTime(AVarName: string): TVarValue;
	VarFloat(AVarName: string): TVarValue;
	VarBoolean(AVarName: string): TVarValue;
	CreateFastIniFile(AFileName: string): TFastIniFile;
	CreateActorList(): TActorList;
	MakeMaskString(AStr: string): string;
	GetManagerNpc(): TNormNpc;
	ManagerNpc:TNormNpc;
	GetQFunctionNpc(): TNormNpc;
	QFunctionNpc:TNormNpc;
	ForceDirectories(Path: string): boolean;
	DeleteFile(Path: string): boolean;
	CreateFileStream(Path: string,Mode: number): TFileStream;
	FileStreamOpenMode(): string;
	DeleteMapRoute(RouterName: string): boolean;
	GetTickCount(): number;
	TickCount:number;
	CreateFastIniFromStrings(List: TStringList): TFastIniFile;
	ClearScriptCreateObject(): void;
	CreateUserItemList(AName: string,SaveToDB: boolean): TUserItemList;
	GetUserItemList(AName: string): TUserItemList;
	UserItemList:TUserItemList;
	DeleteUserItemList(AName: string): void;
	CreateUserItemByName(ItemName: string): TUserItem;
	DestoryUserItem(Item: TUserItem,Force: boolean): void;
	ReadDirFiles(Path: string,Ext: string,IncludeSubDir: boolean): TStringList;
	ASyncHttpPostJsonEx: ( url: string,postJson: string,timeout: number,cb: HttpAsyncResult) =>  void;
	ASyncHttpGetEx: ( url: string,timeout: number,cb: HttpAsyncResult) =>  void;
	UpdatePlayerAccount(Account: string,PlayerName: string,NewAccount: string,Log: string): void;
	GetCustomSaveStr(): string;
	CustomSaveStr:string;
	SetCustomSaveStr(Value: string): void;
	GetAdminUI(): TProjectUIAdmin;
	AdminUI:TProjectUIAdmin;
	V:any;
	R:any;
	onNpcClicked : (Npc : TNormNpc,PlayObject : TPlayObject,ClickLabel : string,AUnitName : string,AParams : string) =>void;
	onPlayerLevelUp : (PlayObject : TPlayObject,Level : number) =>void;
	onPlayerLogin : (PlayObject : TPlayObject,OnlineAddExp : boolean) =>void;
	onPlayerInitialization : (PlayObject : TPlayObject) =>void;
	onPlayerReconnection : (PlayObject : TPlayObject,OnlineAddExp : boolean) =>void;
	onPlayerOffLine : (PlayObject : TPlayObject,OnlineAddExp : boolean) =>void;
	onGetLineNoticeMessage : (PlayObject : TPlayObject,Message : string) =>string;
	onEngineStart : (Text : string,NewText : number) =>number;
	onPlayerHelp : (PlayObject : TPlayObject) =>void;
	onPlayerHot : (PlayObject : TPlayObject) =>void;
	onPlayerPayHome : (PlayObject : TPlayObject) =>void;
	onPlayerReNameState : (State : number,PlayObject : TPlayObject,OldName : string, Newname : string) =>void;
	onScriptEngineInit : (isReload : boolean) =>void;
	onScriptEngineFinal : (isReload : boolean) =>void;
	onLogicLoopBegin : () =>void;
	onLogicLoopEnd : () =>void;
	onMonitorRevival : (Envir : TEnvirnoment,ActorObject : TActor,Tag : number) =>void;
	onMonitorDie : (Envir : TEnvirnoment,ActorObject : TActor, Killer : TActor,Tag : number) =>void;
	onMonitorKill : (Envir : TEnvirnoment,ActorObject : TActor,Player : TPlayObject,Tag : number) =>void;
	onMonitorDamage : (ActorObject : TActor, ADamageSource : TActor,Tag : number, Value : number) =>void;
	onMonitorDamageEx : (ActorObject : TActor, ADamageSource : TActor,Tag : number, SkillID : number, SkillLevel : number,Value : number) =>number;
	onOpenMember : (PlayObject : TPlayObject) =>void;
	onProcessCommand : (Play : TPlayObject,Command : string, Params : string,Processed : boolean) =>boolean;
	onGuildInitialize : (AGuild : TGuild) =>void;
	onAsyncHttpPostResult : (Ident : string,URL : string,ResultText : string,ErrorStr : string) =>void;
	onAsyncHttpGetResult : (Ident : string,URL : string,ResultText : string,ErrorStr : string) =>void;
	onExecuteExtendButton : (Play : TPlayObject,CommandText : string) =>void;
	onPlayerSpeedException : (Play : TPlayObject,Kick : boolean) =>boolean;
	onScriptButtonClick : (PlayObject : TPlayObject,Flag : string) =>void;
	onPlayerReAlive : (Player : TPlayObject) =>void;
	onKillPlayer : (Killer : TPlayObject, Player : TPlayObject) =>void;
	onSlaveKillPlayer : (Master : TPlayObject,Slave : TActor,Player : TPlayObject) =>void;
	onPlayerDie : (Player : TPlayObject,Killer : TActor) =>void;
	onKillMonster : (Player : TPlayObject,Monster : TActor) =>void;
	onSlaveKillMonster : (Player : TPlayObject,Slave : TActor, Monster : TActor) =>void;
	onDuelEnd : (Winner : TPlayObject, Loser : TPlayObject) =>void;
	onBagItemEvent : (Player : TPlayObject,Item : TUserItem,EventType : number, EventID : number) =>void;
	onBuyShopItem : (Player : TPlayObject,UserItem : TUserItem,Kind : number, ShopType : number, Count : number, Price : number) =>void;
	onClickSighIcon : (Player : TPlayObject,MethodID : number) =>void;
	onGetBoxItem : (Player : TPlayObject,Item : TUserItem,BoxID : number) =>void;
	onProgressEvent : (Player : TPlayObject,EventID : number) =>void;
	onProgressFaild : (Player : TPlayObject,EventID : number) =>void;
	onItemSoulLevelUp : (Player : TPlayObject,UserItem : TUserItem) =>void;
	onActiveTitleChanged : (Player : TPlayObject) =>void;
	onSideBarButtonClick : (Player : TPlayObject,AName : string) =>void;
	onGuildExtendButtonClick : (Player : TPlayObject) =>void;
	onBuyShopItemEnd : (Player : TPlayObject,ItemName : string,Kind : number, ShopType : number, Count : number, ActualCount : number, Price : number) =>void;
	onGuildAddedMember : (Guild : TGuild,Player : TPlayObject) =>void;
	onGuildRemovedMember : (Guild : TGuild,Player : string) =>void;
	onGroupAddedMember : (Owner : TPlayObject, Member : TPlayObject) =>void;
	onGroupRemovedMember : (Owner : TPlayObject, Member : TPlayObject) =>void;
	onBeforeGuildAddMember : (Guild : TGuild,PlayObject : TPlayObject,boAccept : boolean) =>boolean;
	onScriptAllowLevelUp : (PlayObject : TPlayObject,Level : number,Allow : boolean) =>boolean;
	onPlayerAction : (PlayObject : TPlayObject,Action : number,Allow : boolean) =>boolean;
	onSendHotKey : (Player : TPlayObject,Akey : number,KeyCtrl : boolean, KeyAlt : boolean,ATargetActor : TActor,X : number, Y : number) =>void;
	onPlayerDropItem : (Player : TPlayObject,Item : TUserItem,X : number, Y : number,ISUseItem : boolean,Accept : boolean) =>boolean;
	onPlayerThrowItem : (Player : TPlayObject,Item : TUserItem,X : number, Y : number,Accept : boolean) =>boolean;
	onMonDropItem : (Player : TPlayObject,Monster : TActor,UserItem : TUserItem,Envir : TEnvirnoment,X : number, Y : number,Accept : boolean) =>boolean;
	onDropItemByMonName : (Player : TPlayObject,Monster : string,UserItem : TUserItem,Accept : boolean) =>boolean;
	onMineDropItem : (Player : TPlayObject,UserItem : TUserItem,Envir : TEnvirnoment,X : number, Y : number,Accept : boolean) =>boolean;
	onBeforeCollect : (Player : TPlayObject,AMon : TActor,Accept : boolean) =>boolean;
	onCollect : (Player : TPlayObject,AMon : TActor,Accept : boolean) =>boolean;
	onButchItem : (Player : TPlayObject,Monster : TActor,UserItem : TUserItem,Accept : boolean) =>boolean;
	onStdModeFunc : (Player : TPlayObject,UserItem : TUserItem,Accept : boolean) =>boolean;
	onItemClickItem : (Player : TPlayObject,Source : TUserItem, Dest : TUserItem,Accept : boolean) =>boolean;
	onPickupItem : (Player : TPlayObject,Envir : TEnvirnoment,UserItem : TUserItem,Accept : boolean) =>boolean;
	onItemClickUseItem : (Player : TPlayObject,ItemWhere : number,Source : TUserItem, Dest : TUserItem,Accept : boolean) =>boolean;
	onTakeOnItem : (Player : TPlayObject,UserItem : TUserItem,ItemWhere : number,Accept : boolean) =>boolean;
	onTakeOffItem : (Player : TPlayObject,UserItem : TUserItem,ItemWhere : number,Accept : boolean) =>boolean;
	onAfterTakeOnItem : (Player : TPlayObject,TakeOnUserItem : TUserItem,TakeOffItem : TUserItem,ItemWhere : number) =>void;
	onAfterTakeOffItem : (Player : TPlayObject,TakeOffItem : TUserItem,ItemWhere : number) =>void;
	onGetExp : (Player : TPlayObject,Exp : number,ResultExp : number) =>number;
	onRefineButtonClick : (Player : TPlayObject,Handled : boolean) =>boolean;
	onRefineItem : (Player : TPlayObject,Item1 : TUserItem, Item2 : TUserItem, Item3 : TUserItem,Handled : boolean) =>boolean;
	onBeforeGuildRemoveMember : (Guild : TGuild,Player : string,Accept : boolean) =>boolean;
	onStallPutOn : (Player : TPlayObject,Item : TUserItem,GoldPrice : number, GameGoldPrice : number, GamePoint : number,Accept : boolean) =>boolean;
	onStallPutOff : (Player : TPlayObject,Item : TUserItem,GoldPrice : number, GameGoldPrice : number, GamePoint : number,Accept : boolean) =>boolean;
	onStallBuyItem : (Player : TPlayObject,StallName : string,Item : TUserItem,Gold : number, GameGold : number, GamePoint : number,Accept : boolean) =>boolean;
	onStallUpdateItem : (Player : TPlayObject,Item : TUserItem,OldGold : number, OldGameGold : number, OldGamePoint : number, Gold : number, GameGold : number, GamePoint : number,Accept : boolean) =>boolean;
	onStallExtractGold : (Player : TPlayObject,Gold : number, GameGold : number, GamePoint : number,Accept : boolean) =>boolean;
	onAfterStopStall : (Player : TPlayObject) =>void;
	onBeforeStartStall : (Player : TPlayObject,Accept : boolean) =>boolean;
	onMailBeforeSend : (Player : TPlayObject,SendTo : string,Item : TUserItem,Accept : boolean) =>boolean;
	onMailAfterSend : (Player : TPlayObject,SendTo : string) =>void;
	onMailReceived : (Player : TPlayObject,MailFrom : string, Subject : string) =>void;
	onSlaveLevelUp : (Master : TActor, Slave : TActor,NewLevel : number,Accept : boolean) =>boolean;
	onPlayAddSkill : (Player : TPlayObject,Magic : TUserMagic,Accept : boolean) =>boolean;
	onMagicSpell : (Player : TPlayObject,UserMagic : TUserMagic,nTargetX : number, nTargetY : number,Target : TActor,Handled : boolean) =>boolean;
	onPlayerAttack : (Player : TPlayObject,UserMagic : TUserMagic,Target : TActor,Accept : boolean) =>boolean;
	onRideOnHorse : (Player : TPlayObject,RideOn : boolean,Accept : boolean) =>boolean;
	onCustomMessage : (Player : TPlayObject,AMessageToken : number, AParam1 : number, AParam2 : number, AParam3 : number,AData : string) =>void;
	onChangeAttatckMode : (Player : TPlayObject,OldMode : number,NewMode : number,ResultMode : number) =>number;
	onAltAndLButtonClickBagItem : (Player : TPlayObject,Item : TUserItem) =>void;
	onDiceEvent : (Player : TPlayObject,ATag : number, APoint1 : number, APoint2 : number, APoint3 : number) =>void;
	onBeforeOpenStall : (Player : TPlayObject,AAccept : boolean) =>boolean;
	onChangeToMonsterStart : (Actor : TActor,TargetMonName : string,nSec : number) =>void;
	onChangeToMonsterEnd : (Actor : TActor,TargetMonName : string) =>void;
	onUseExpStoneItem : (Player : TPlayObject,Item : TUserItem,CanUse : boolean) =>boolean;
	onClickGameShop : (PlayObject : TPlayObject,OpenDefalut : boolean) =>boolean;
	onGetLevelExp : (Level : number,Exp : number) =>number;
	onAddBuff : (Actor : TActor,Buff : TBuff,Accept : boolean) =>boolean;
	onRemoveBuff : (Actor : TActor,Buff : TBuff) =>void;
	onCustomBuffAct : (Actor : TActor,Buff : TBuff) =>void;
	onChatMessage : (PlayObject : TPlayObject,Message : string,Allow : boolean) =>boolean;
	onCustomProgressEvent : (FunctionName : string,Npc : TNormNpc,Player : TPlayObject,Args : string) =>void;
	onLockClientPassword : (FunctionName : string,Player : TPlayObject,Password : string,Args : string) =>void;
	onAltAndLButtonClickUseItem : (Player : TPlayObject,Item : TUserItem,AItemWhere : number) =>void;
	onPickUpItemChangePicker: (PickSender: TPlayObject, Item: TUserItem, Gold: number, WhoPicker: TPlayObject, ItemState: number) => [number,TPlayObject,number];
	onCheckEnterMap : (Play : TPlayObject,SourceEnvir : TEnvirnoment, DestEnvir : TEnvirnoment,SourceX : number, SourceY : number, DestX : number, DestY : number,Accept : boolean) =>boolean;
	onPlayerEnterMap : (Play : TPlayObject,SourceEnvir : TEnvirnoment, DestEnvir : TEnvirnoment,SourceX : number, SourceY : number, DestX : number, DestY : number) =>void;
	onCloseDuplicatesMap : (Envir : TEnvirnoment) =>void;
	onDeleteRoute : (AName : string) =>void;
	onExternalNpcExecCommand : (Command : string,Args : string) =>void;
	onGlobalEventExecute : (TimeID : number) =>void;
	onGlobalEventRemove : (TimeID : number) =>void;
	onPrivyEventExecute : (Play : TPlayObject,TimeID : number) =>void;
	onPrivyEventRemove : (Play : TPlayObject,TimeID : number) =>void;
	onMagicNpcExecute : (AMethod : string,ASource : TActor, ATarget : TActor,ATargetX : number, ATargetY : number, AMouseX : number, AMouseY : number,AList : TActorList,AMagic : TUserMagic,Processed : boolean) =>boolean;
	onMonSelectMagicBeforeAttack : (AMon : TActor, ATarget : TActor,AMagicID : number) =>number;
	onSkillActionExecute : (Source : TActor, Target : TActor,AMethod : string,nParam1 : number, nParam2 : number,sParam1 : string, sParam2 : string) =>void;
	onSkillActorSelConditionCustom : (Source : TActor, Target : TActor,AMethod : string,N1 : number, N2 : number, N3 : number,Processed : boolean) =>boolean;
	onSkillUseCondtionCustom : (Source : TActor,AMethod : string,N1 : number, N2 : number, N3 : number,Consume : boolean,Processed : boolean) =>boolean;
	onMissionFinish : (Player : TPlayObject,AMission : TMissionItem) =>void;
	onAINpcExecute : (Actor : TActor) =>void;
	onScriptEngineError : (E : Error) =>void;
	onActorGhost : (Actor : TActor) =>void;
	onQueryUserState : (Player : TPlayObject,QueryTarget : TActor) =>void;
	onAsyncDBQueryResult : (Ident : string,DBName : string,SQL : string,ErrorDesc : string,DataSet : TDataSet) =>void;
	onAsyncDBExecResult : (Ident : string,DBName : string,SQL : string,ErrorDesc : string,RowAffected : number) =>void;
	onPlayerSaveCustomSaveStr : (Player : TPlayObject,isOfflineSave : boolean) =>void;
	onPlayerLoadCustomSaveStr : (Player : TPlayObject) =>void;
	onUpdatePlayerAccountResult : (OldAccount : string,PlayerName : string,NewAccount : string,Sucess : boolean,ErrorDesc : string,Log : string) =>void;
	onLoginResetData : (Player : TPlayObject,isOnlineAddExp : boolean) =>void;
	onEngineStop : (M2Core : TM2Core) =>void;
	onAdminUIButtonClick : (ButtonName : string) =>void;
	onAdminUIEditOk : (Name : string,InputText : string) =>void;
	onAdminUICheckBoxChange : (Name : string,Checked : boolean) =>void;
	onClickLockedBagGrid : (Player : TPlayObject,GridIndex : number) =>void;
	onStartAutoFight : (Player : TPlayObject) =>void;
	onStopAutoFight : (Player : TPlayObject) =>void;

        }
declare class TVarValue {
	GetName(): string;
	Name:string;
	GetVarType(): number;
	VarType:number;
	GetAsString(): string;
	AsString:string;
	SetAsString(Value: string): void;
	GetAsFloat(): number;
	AsFloat:number;
	SetAsFloat(Value: number): void;
	GetAsInteger(): number;
	AsInteger:number;
	SetAsInteger(Value: number): void;
	Save(): void;
	GetAsDateTime(): number;
	AsDateTime:number;
	SetAsDateTime(Value: number): void;
	GetAsBoolean(): boolean;
	AsBoolean:boolean;
	SetAsBoolean(Value: boolean): void;

        }
declare class TToptenz {
	GetRichest(): TNumOrderItems;
	Richest:TNumOrderItems;
	GetLevels(): TLevelOrderItems;
	Levels:TLevelOrderItems;
	GetMaster(): TNumOrderItems;
	Master:TNumOrderItems;
	GetEfficiency(): TNumOrderItems;
	Efficiency:TNumOrderItems;
	GetWarrior(): TJobOrderItems;
	Warrior:TJobOrderItems;
	GetWizard(): TJobOrderItems;
	Wizard:TJobOrderItems;
	GetTaoist(): TJobOrderItems;
	Taoist:TJobOrderItems;
	GetArcher(): TJobOrderItems;
	Archer:TJobOrderItems;
	GetAssassin(): TJobOrderItems;
	Assassin:TJobOrderItems;
	GetShaman(): TJobOrderItems;
	Shaman:TJobOrderItems;
	Refresh(): void;

        }
declare class TJobOrderItems extends TOrderItems {
	GetMinValue(AIndex: number): number;
	MinValue:number;
	GetMaxValue(AIndex: number): number;
	MaxValue:number;

        }
declare class TLevelOrderItems extends TOrderItems {
	GetReLevel(AIndex: number): number;
	ReLevel:number;
	GetLevel(AIndex: number): number;
	Level:number;

        }
declare class TNumOrderItems extends TOrderItems {
	GetValue(AIndex: number): number;
	Value:number;

        }
declare class TOrderItems {
	GetCount(): number;
	Count:number;
	GetName(AIndex: number): string;
	Name:string;
	GetJob(AIndex: number): number;
	Job:number;
	GetGender(AIndex: number): number;
	Gender:number;
	IndexOf(AName: string): number;

        }
declare class TFastIniFile {
	ReadInteger(Sect: string,Name: string,Def: number): number;
	WriteInteger(Sect: string,Name: string,Value: number): void;
	ReadString(Sect: string,Name: string,Def: string): string;
	WriteString(Sect: string,Name: string,Value: string): void;
	ReadBoolean(Sect: string,Name: string,Def: boolean): boolean;
	WriteBoolean(Sect: string,Name: string,Value: boolean): void;
	SectionExists(Sect: string): boolean;
	ReadFixedDateTime(Sect: string,Name: string,Value: number): number;
	UpdateFile(): void;
	EraseSection(Sect: string): void;
	Free: () =>  void;
	GetInlineCommentsEnabled(): boolean;
	InlineCommentsEnabled:boolean;
	SetInlineCommentsEnabled(Value: boolean): void;
	ReadSections(AList: TStringList): void;
	GetStrings(AList: TStringList): void;
	ReadSectionValues(Name: string,AList: TStringList): void;

        }
declare class TStringList {
	GetCount(): number;
	Count:number;
	GetStrings(Index: number): string;
	Strings:string;
	LoadFromFile(AFileName: string): void;
	SaveToFile(AFileName: string): void;
	Delete(Index: number): void;
	Clear(): void;
	IndexOf(Text: string): number;
	Add(Text: string): number;
	Free: () =>  void;
	SetCommaText(Text: string): void;
	GetCommaText(): string;
	CommaText:string;
	SetDelimiter(Text: string): void;
	GetDelimiter(): string;
	Delimiter:string;
	SetDelimitedText(Text: string): void;
	GetDelimitedText(): string;
	DelimitedText:string;
	Insert(Index: number,Text: string): void;
	GetText(): string;
	Text:string;
	SetText(Text: string): void;
	GetLineBreak(): string;
	LineBreak:string;
	SetLineBreak(Value: string): void;
	SetValues(Index: string,Value: string): void;
	GetValues(Index: string): string;
	Values:string;
	GetNames(Index: number): string;
	GetValueFromIndex(Index: number): string;
	SetValueFromIndex(Index: number,Value: string): void;

        }
declare class TItemState {
	GetDisableMake(): boolean;
	DisableMake:boolean;
	SetDisableMake(Value: boolean): void;
	GetWriteLog(): boolean;
	WriteLog:boolean;
	SetWriteLog(Value: boolean): void;
	GetDropHint(): boolean;
	DropHint:boolean;
	SetDropHint(Value: boolean): void;
	GetButchHint(): boolean;
	ButchHint:boolean;
	SetButchHint(Value: boolean): void;
	GetNoPickUp(): boolean;
	NoPickUp:boolean;
	SetNoPickUp(Value: boolean): void;
	GetBoxHint(): boolean;
	BoxHint:boolean;
	SetBoxHint(Value: boolean): void;
	GetShowNameClient(): boolean;
	ShowNameClient:boolean;
	SetShowNameClient(Value: boolean): void;
	GetSpecialShow(): boolean;
	SpecialShow:boolean;
	SetSpecialShow(Value: boolean): void;
	GetAutoPickUp(): boolean;
	AutoPickUp:boolean;
	SetAutoPickUp(Value: boolean): void;
	GetNerverDrop(): boolean;
	NerverDrop:boolean;
	SetNerverDrop(Value: boolean): void;
	GetBind(): boolean;
	Bind:boolean;
	SetBind(Value: boolean): void;
	GetNoRepair(): boolean;
	NoRepair:boolean;
	SetNoRepair(Value: boolean): void;
	GetNoStore(): boolean;
	NoStore:boolean;
	SetNoStore(Value: boolean): void;
	GetOfflineFree(): boolean;
	OfflineFree:boolean;
	SetOfflineFree(Value: boolean): void;
	GetNoDrop(): boolean;
	NoDrop:boolean;
	SetNoDrop(Value: boolean): void;
	GetDeathFree(): boolean;
	DeathFree:boolean;
	SetDeathFree(Value: boolean): void;
	GetDeathDrop(): boolean;
	DeathDrop:boolean;
	SetDeathDrop(Value: boolean): void;
	GetNoTakeOff(): boolean;
	NoTakeOff:boolean;
	SetNoTakeOff(Value: boolean): void;
	GetAutoBindAfterTakeOn(): boolean;
	AutoBindAfterTakeOn:boolean;
	SetAutoBindAfterTakeOn(Value: boolean): void;
	GetCallMethodOnMonDrop(): boolean;
	CallMethodOnMonDrop:boolean;
	SetCallMethodOnMonDrop(Value: boolean): void;
	GetCallMethodOnPlayerDrop(): boolean;
	CallMethodOnPlayerDrop:boolean;
	SetCallMethodOnPlayerDrop(Value: boolean): void;
	GetCallMethodOnButch(): boolean;
	CallMethodOnButch:boolean;
	SetCallMethodOnButch(Value: boolean): void;
	GetCallMethodOnPickUp(): boolean;
	CallMethodOnPickUp:boolean;
	SetCallMethodOnPickUp(Value: boolean): void;
	GetCanInQuickBar(): boolean;
	CanInQuickBar:boolean;
	SetCanInQuickBar(Value: boolean): void;
	GetCanInJewelryBox(): boolean;
	CanInJewelryBox:boolean;
	SetCanInJewelryBox(Value: boolean): void;

        }
declare class TActorList {
	GetCount(): number;
	Count:number;
	Actor(index: number): TActor;
	Add(Item: TActor): number;
	Delete(Index: number): void;
	Free: () =>  void;

        }
declare class TList {
	GetCount(): number;
	Count:number;
	Items(index: number): Object;

        }
declare class TDateUtils {
	MinuteOfTheHour(DateTime: number): number;
	SecondSpan(TimeA: number,TimeB: number): number;
	MilliSecondSpan(TimeA: number,TimeB: number): number;
	StrToDateTimeDef(format: string,Time: number): number;
	DaysBetween(TimeA: number,TimeB: number): number;
	MinutesBetween(TimeA: number,TimeB: number): number;
	HoursBetween(TimeA: number,TimeB: number): number;
	MilliSecondsBetween(TimeA: number,TimeB: number): number;
	DecodeDateTime: ( DateTime: number) =>  TimeDef;
	EncodeDateTime(Y: number,M: number,D: number,H: number,N: number,S: number,MS: number): number;
	DateTimeToStr(Time: number): string;
	Now(): number;
	IncDay(Time: number,ANumberOfDays: number): number;
	IncHour(Time: number,ANumberOfHour: number): number;
	IncMinute(Time: number,ANumberOfMinute: number): number;
	SecondsBetween(TimeA: number,TimeB: number): number;
	IncSecond(Time: number,ANumberOfSec: number): number;
	DateTimeToFileDate(Time: number): number;
	DayOfTheWeek(Time: number): number;
	DayOfWeek(Time: number): number;
	FormatDateTime(FormatStr: string,Time: number): string;
	StrToDateTime(TimeStr: string): number;
	FileDateToDateTime(FileDateTime: number): number;
	DateTimeToTimeStamp(Time: number): TTimeStamp;
	FreeTimeStamp(Time: TTimeStamp): void;
	StartOfTheMonth(Time: number): number;
	DaysInAMonth(Year: number,Month: number): number;
	UnixTimeToDateTime(UnixTime: number,AReturnUtc: boolean): number;
	DateTimeToUnixTime(AValue: number,AInputIsUTC: boolean): number;
	MilliSecondOf(AValue: number): number;
	MinuteOf(AValue: number): number;
	SecondOf(AValue: number): number;
	HourOf(AValue: number): number;
	DayOf(AValue: number): number;
	WeekOf(AValue: number): number;
	MonthOf(AValue: number): number;
	YearOf(AValue: number): number;

        }
declare class TFileStream {
	WriteStrAnsi(Str: string): void;
	WriteBuffer(PBuffer: Object,Size: number): void;
	ReadBuffer(PBuffer: Object,Size: number): void;
	GetSize(): number;
	Size:number;
	SetSize(Value: number): void;
	GetPosition(): number;
	Position:number;
	SetPosition(Value: number): void;
	Free(): void;

        }
declare class TMagic {
	GetwSpell(): number;
	wSpell:number;
	GetbtDefSpell(): number;
	btDefSpell:number;

        }
declare class TTimeStamp {
	GetTime(): number;
	Time:number;
	SetTime(Value: number): void;
	GetDate(): number;
	Date:number;
	SetDate(Value: number): void;

        }
declare class TDBEngine {
	ExecSQL(Name: string,SQLText: string): number;
	Query(Name: string,SQLText: string): TDataSet;
	QueryAsync(Ident: string,Name: string,SQLText: string): void;
	ExecAsync(Ident: string,Name: string,SQLText: string): void;
	ValueList(Name: string,SQLText: string): TStringList;
	BeginTran(Name: string): void;
	CommitTran(Name: string): void;
	RollbackTran(Name: string): void;
	AddConection(Name: string,DBServer: string,DBPort: number,DBUser: string,DBPassword: string,DataBase: string): boolean;
	QueryAsyncEx: ( name: string,sql: string,cb: QueryDBAsyncResult) =>  void;
	ExecAsyncEx: ( name: string,sql: string,cb: ExecDBAsyncResult) =>  void;

        }
declare class TDataSet {
	Open(): void;
	IsEmpty(): boolean;
	Eof(): boolean;
	Next(): void;
	FieldByName(Name: string): TField;
	GetRecordCount(): number;
	RecordCount:number;
	Free(): void;
	GetFieldCount(): number;
	FieldCount:number;
	GetField(Index: number): TField;

        }
declare class TField {
	GetFieldName(): string;
	FieldName:string;
	GetAsString(): string;
	AsString:string;
	GetAsInteger(): number;
	AsInteger:number;
	GetAsDateTime(): number;
	AsDateTime:number;
	GetAsBoolean(): boolean;
	AsBoolean:boolean;
	GetAsFloat(): number;
	AsFloat:number;
	IsInt(): boolean;
	IsFloat(): boolean;
	GetFieldType(): number;
	FieldType:number;
	GetRawFieldType(): number;
	RawFieldType:number;
	IsDateTime(): boolean;

        }
declare class TMonster extends TActor {
	Run(): void;
	AttackTarget(): boolean;
	SearchTarget(): void;
	DelTargetCreat(): void;
	SelectTarget(): void;
	Initialize(): void;
	MakeGhost(): void;
	OnSetTargetCreat(Target: TActor): void;
	OnDelTargetCreat(Target: TActor): void;
	Say(PMessage: string): void;
	InViewRange(Target: TActor): boolean;
	ReAlive(): void;
	RecalcAbilitys(): void;
	Die(): void;
	ReadAddedAbility(PAblity: TAddedAbility): void;
	IsProtectTarget(Target: TActor): boolean;
	IsAttackTarget(Target: TActor): boolean;
	IsProperTarget(Target: TActor): boolean;
	IsProperFriend(Target: TActor): boolean;
	GetCustomRace(): number;
	CustomRace:number;

        }
declare class TUserItemList {
	DontAddToOtherListIfWantNeedMakeCopyGet(Index: number): TUserItem;
	MakeCopyAndAdd(Item: TUserItem): number;
	DeleteAndFreeItem(Index: number): void;
	GetCount(): number;
	Count:number;

        }
declare class TMissionLinkItem {
	GetKind(): number;
	Kind:number;
	GetMisssionID(): string;
	MisssionID:string;
	GetSubject(): string;
	Subject:string;
	GetContent(): string;
	Content:string;
	GetLevel(): number;
	Level:number;
	GetReLevel(): number;
	ReLevel:number;
	GetTargetNpc(): number;
	TargetNpc:number;
	SetKind(Value: number): void;
	SetMisssionID(Value: string): void;
	SetSubject(Value: string): void;
	SetContent(Value: string): void;
	SetLevel(Value: number): void;
	SetReLevel(Value: number): void;
	SetTargetNpc(Value: number): void;
	Delete(): void;

        }
declare class TProjectUIAdmin {
	AddPage(PageName: string,CWidth: number,CHeight: number,CRowCount: number): void;
	AddButton: ( PageName: string,ControlName: string,Hint?: string,confirm?: boolean) =>  void;
	AddCheckBox: ( PageName: string,ControlName: string,Checked: boolean,Hint?: string) =>  void;
	AddEdit: ( PageName: string,ControlName: string,Text: string,Hint?: string,confirm?: boolean) =>  void;
	AddLogPage(PageName: string): void;
	AddLog(PageName: string,LogText: string): void;
	UpdateInputText(ControlName: string,LogText: string): void;
	UpdateCheckBoxState(ControlName: string,Checked: boolean): void;
	ClearLogPage(PageName: string): void;

        }
declare class TUserItemListReadOnly {
	GetItem(Index: number): TUserItem;
	GetCount(): number;
	Count:number;

        }

declare var GameLib : TM2Core; 
 declare var DateUtils : TDateUtils