"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeInit = exports.Weaponfail = exports.getUpgradeInfo = exports.getSetting = exports.WeaponTest = exports.GetBackupgWeapon = exports.GetBagUseItems = exports.UpgradeNow = void 0;
const UpgradeSetting = {
    升级价格: 100000,
    升级时间: 60,
    最高升级点数: 7,
    首饰编号: [19, 20, 21, 22, 23, 24, 26],
    矿石名称: "黑铁矿石",
    失败是否破碎: true,
    攻击成功率: 50,
    魔法成功率: 50,
    道术成功率: 50,
    刺术成功率: 50,
    箭术成功率: 50,
    武术成功率: 50,
    攻击两点几率: 50,
    魔法两点几率: 50,
    道术两点几率: 50,
    刺术两点几率: 50,
    箭术两点几率: 50,
    武术两点几率: 50,
    攻击三点几率: 100,
    魔法三点几率: 100,
    道术三点几率: 100,
    刺术三点几率: 100,
    箭术三点几率: 100,
    武术三点几率: 100, //数字越大几率越小
};
class TUpgradeSetting {
}
class TUpgradeInfo {
}
class TAttrInfo {
}
function UpgradeNow(Npc, Player, Args) {
    let UserUpgradeInfo = new TUpgradeInfo();
    UserUpgradeInfo.UserName = Player.Name;
    UserUpgradeInfo.IsOnWeepon = true;
    UserUpgradeInfo.UserItem = GameLib.SaveUserItemToString(Player.Weapon);
    UserUpgradeInfo.CreartTime = Date.now();
    UserUpgradeInfo.BackupTime = Date.now() + getSetting().升级时间 * 60 * 1000;
    let AttrInfo = GetBagUseItems(Npc, Player, Args);
    UserUpgradeInfo.btDC = AttrInfo.btDC;
    UserUpgradeInfo.btMC = AttrInfo.btMC;
    UserUpgradeInfo.btSC = AttrInfo.btSC;
    UserUpgradeInfo.btTC = AttrInfo.btTC;
    UserUpgradeInfo.btPC = AttrInfo.btPC;
    UserUpgradeInfo.btWC = AttrInfo.btWC;
    UserUpgradeInfo.Dura = AttrInfo.Dura;
    Player.VarString("UpgradeInfo").AsString = JSON.stringify(UserUpgradeInfo);
    Player.VarString("UpgradeInfo").Save();
    Player.DeleteUseItem(TItemWhere.wWeapon);
    Player.RefFeature();
    Player.RefUseItem();
}
exports.UpgradeNow = UpgradeNow;
function GetBagUseItems(Npc, Player, Args) {
    let DuraList = [];
    let Dura = 0;
    let nDC = 0;
    let nMC = 0;
    let nSC = 0;
    let nTC = 0;
    let nPC = 0;
    let nWC = 0;
    let DCMax = 0;
    let DCMin = 0;
    let MCMax = 0;
    let MCMin = 0;
    let SCMax = 0;
    let SCMin = 0;
    let TCMax = 0;
    let TCMin = 0;
    let PCMax = 0;
    let PCMin = 0;
    let WCMax = 0;
    let WCMin = 0;
    for (let I = Player.ItemSize; I >= 0; I--) { //循环背包
        let AItem = Player.GetBagItem(I);
        if (AItem != null) { //如果物品存在
            if (AItem.Name == getSetting().矿石名称) {
                DuraList.push(AItem.Dura / 1000);
                Player.DeleteItem(AItem);
            }
            if (getSetting().首饰编号.indexOf(AItem.StdMode) != -1) {
                let StdItem = GameLib.FindStdItem(AItem.ItemIndex);
                switch (AItem.StdMode) {
                    case 19:
                    case 20:
                    case 21:
                        nDC = StdItem.DC2 + StdItem.DC + AItem.AddDC + AItem.AddLDC;
                        nMC = StdItem.MC2 + StdItem.MC + AItem.AddMC + AItem.AddLMC;
                        nSC = StdItem.SC2 + StdItem.SC + AItem.AddSC + AItem.AddLSC;
                        nTC = StdItem.TC2 + StdItem.TC + AItem.AddTC + AItem.AddLTC;
                        nPC = StdItem.PC2 + StdItem.PC + AItem.AddPC + AItem.AddLPC;
                        nWC = StdItem.WC2 + StdItem.WC + AItem.AddWC + AItem.AddLWC;
                        break;
                    case 22:
                    case 23:
                        nDC = StdItem.DC2 + StdItem.DC + AItem.AddDC + AItem.AddLDC;
                        nMC = StdItem.MC2 + StdItem.MC + AItem.AddMC + AItem.AddLMC;
                        nSC = StdItem.SC2 + StdItem.SC + AItem.AddSC + AItem.AddLSC;
                        nTC = StdItem.TC2 + StdItem.TC + AItem.AddTC + AItem.AddLTC;
                        nPC = StdItem.PC2 + StdItem.PC + AItem.AddPC + AItem.AddLPC;
                        nWC = StdItem.WC2 + StdItem.WC + AItem.AddWC + AItem.AddLWC;
                        break;
                    case 24:
                    case 26:
                        nDC = StdItem.DC2 + StdItem.DC + AItem.AddDC + AItem.AddLDC + 1;
                        nMC = StdItem.MC2 + StdItem.MC + AItem.AddMC + AItem.AddLMC + 1;
                        nSC = StdItem.SC2 + StdItem.SC + AItem.AddSC + AItem.AddLSC + 1;
                        nTC = StdItem.TC2 + StdItem.TC + AItem.AddTC + AItem.AddLTC + 1;
                        nPC = StdItem.PC2 + StdItem.PC + AItem.AddPC + AItem.AddLPC + 1;
                        nWC = StdItem.WC2 + StdItem.WC + AItem.AddWC + AItem.AddLWC + 1;
                        break;
                }
                if (DCMin < nDC) {
                    DCMax = DCMin;
                    DCMin = nDC;
                }
                else {
                    if (DCMax < nDC) {
                        DCMax = nDC;
                    }
                }
                if (MCMin < nMC) {
                    MCMax = MCMin;
                    MCMin = nMC;
                }
                else {
                    if (MCMax < nMC) {
                        MCMax = nMC;
                    }
                }
                if (SCMin < nSC) {
                    SCMax = SCMin;
                    SCMin = nSC;
                }
                else {
                    if (SCMax < nSC) {
                        SCMax = nSC;
                    }
                }
                if (TCMin < nTC) {
                    TCMax = TCMin;
                    TCMin = nTC;
                }
                else {
                    if (TCMax < nTC) {
                        TCMax = nTC;
                    }
                }
                if (PCMin < nPC) {
                    PCMax = PCMin;
                    PCMin = nPC;
                }
                else {
                    if (PCMax < nPC) {
                        PCMax = nPC;
                    }
                }
                if (WCMin < nWC) {
                    WCMax = WCMin;
                    WCMin = nWC;
                }
                else {
                    if (WCMax < nWC) {
                        WCMax = nWC;
                    }
                }
                Player.DeleteItem(AItem);
            }
        }
    }
    //计算矿石纯度，取最大5个
    DuraList.sort().reverse();
    for (let index = 0; index < DuraList.length; index++) {
        Dura += DuraList[index];
        if (index >= 5) {
            break;
        }
    }
    let R = new TAttrInfo();
    R.Dura = Math.round(Math.min(5, DuraList.length) + Math.min(5, DuraList.length) * ((Dura / DuraList.length) / 5.0));
    R.btDC = Math.trunc(DCMin / 5) + Math.trunc(DCMax / 3);
    R.btMC = Math.trunc(MCMin / 5) + Math.trunc(MCMax / 3);
    R.btSC = Math.trunc(SCMin / 5) + Math.trunc(SCMax / 3);
    R.btTC = Math.trunc(TCMin / 5) + Math.trunc(TCMax / 3);
    R.btPC = Math.trunc(PCMin / 5) + Math.trunc(PCMax / 3);
    R.btWC = Math.trunc(WCMin / 5) + Math.trunc(WCMax / 3);
    return R;
}
exports.GetBagUseItems = GetBagUseItems;
function GetBackupgWeapon(Npc, Player, Args) {
    let UpgradeInfo;
    let UserUpgradeInfo = Player.VarString("UpgradeInfo").AsString;
    UpgradeInfo = JSON.parse(UserUpgradeInfo);
    let StdItem = GameLib.LoadUserItemFromString(UpgradeInfo.UserItem);
    if (!UpgradeInfo.IsOnWeepon) {
        return;
    }
    if (UpgradeInfo.Dura <= 8) {
        if (StdItem.DuraMax > 3000) {
            StdItem.DuraMax = StdItem.DuraMax - 3000;
        }
        else {
            StdItem.DuraMax = 1000;
        }
        if (StdItem.Dura > StdItem.DuraMax) {
            StdItem.Dura = StdItem.DuraMax;
        }
    }
    if (UpgradeInfo.Dura > 8 && UpgradeInfo.Dura <= 15) {
        if (random(UpgradeInfo.Dura) < 6) {
            if (StdItem.DuraMax > 1000) {
                StdItem.DuraMax = StdItem.DuraMax - 1000;
            }
            if (StdItem.Dura > StdItem.DuraMax) {
                StdItem.Dura = StdItem.DuraMax;
            }
        }
    }
    if (UpgradeInfo.Dura > 18) {
        let r_n = random(UpgradeInfo.Dura - 18);
        if (r_n <= 4) {
            StdItem.DuraMax = StdItem.DuraMax + 1000;
        }
        if (r_n > 9 && r_n <= 15) {
            StdItem.DuraMax = StdItem.DuraMax + 2000;
        }
        if (r_n > 18) {
            StdItem.DuraMax = StdItem.DuraMax + 3000;
        }
    }
    let addList = [
        { name: "DC", val: UpgradeInfo.btDC },
        { name: "MC", val: UpgradeInfo.btMC },
        { name: "TC", val: UpgradeInfo.btTC },
        { name: "PC", val: UpgradeInfo.btPC },
        { name: "WC", val: UpgradeInfo.btWC },
        { name: "SC", val: UpgradeInfo.btSC },
    ];
    addList.sort(function (a, b) { return a.val - b.val; }).reverse();
    let n1 = Math.min(11, addList[0].val);
    let n2 = Math.min(85, (n1 << 3) - n1 + 10 + StdItem.AddLuck + Player.VarString("bodyluckLevel").AsInteger);
    UpgradeInfo.addAttr = 0;
    UpgradeInfo.addPosition = addList[0].name;
    switch (UpgradeInfo.addPosition) {
        case "DC":
            if (random(getSetting().攻击成功率) < n2) {
                UpgradeInfo.addAttr = 1;
                if (n2 > 63 && random(getSetting().攻击两点几率) == 0) {
                    UpgradeInfo.addAttr = 2;
                }
                if (n2 > 79 && random(getSetting().攻击三点几率) == 0) {
                    UpgradeInfo.addAttr = 3;
                }
            }
            break;
        case "MC":
            if (random(getSetting().魔法成功率) < n2) {
                UpgradeInfo.addAttr = 1;
                if (n2 > 63 && random(getSetting().魔法两点几率) == 0) {
                    UpgradeInfo.addAttr = 2;
                }
                if (n2 > 79 && random(getSetting().魔法三点几率) == 0) {
                    UpgradeInfo.addAttr = 3;
                }
            }
            break;
        case "SC":
            if (random(getSetting().道术成功率) < n2) {
                UpgradeInfo.addAttr = 1;
                if (n2 > 63 && random(getSetting().道术两点几率) == 0) {
                    UpgradeInfo.addAttr = 2;
                }
                if (n2 > 79 && random(getSetting().道术三点几率) == 0) {
                    UpgradeInfo.addAttr = 3;
                }
            }
            break;
        case "TC":
            if (random(getSetting().刺术成功率) < n2) {
                UpgradeInfo.addAttr = 1;
                if (n2 > 63 && random(getSetting().刺术两点几率) == 0) {
                    UpgradeInfo.addAttr = 2;
                }
                if (n2 > 79 && random(getSetting().刺术三点几率) == 0) {
                    UpgradeInfo.addAttr = 3;
                }
            }
            break;
        case "PC":
            if (random(getSetting().箭术成功率) < n2) {
                UpgradeInfo.addAttr = 1;
                if (n2 > 63 && random(getSetting().箭术两点几率) == 0) {
                    UpgradeInfo.addAttr = 2;
                }
                if (n2 > 79 && random(getSetting().箭术三点几率) == 0) {
                    UpgradeInfo.addAttr = 3;
                }
            }
            break;
        case "WC":
            if (random(getSetting().武术成功率) < n2) {
                UpgradeInfo.addAttr = 1;
                if (n2 > 63 && random(getSetting().武术两点几率) == 0) {
                    UpgradeInfo.addAttr = 2;
                }
                if (n2 > 79 && random(getSetting().武术三点几率) == 0) {
                    UpgradeInfo.addAttr = 3;
                }
            }
            break;
    }
    UpgradeInfo.test = true;
    UpgradeInfo.IsOnWeepon = false;
    StdItem.Rename("(*)" + StdItem.DisplayName);
    Player.AddItemToBag(StdItem);
    Player.VarString("UpgradeInfo").AsString = JSON.stringify(UpgradeInfo);
    Player.VarString("UpgradeInfo").Save();
}
exports.GetBackupgWeapon = GetBackupgWeapon;
function WeaponTest(Player) {
    let UpgradeInfo;
    let UserUpgradeInfo = Player.VarString("UpgradeInfo").AsString;
    UpgradeInfo = JSON.parse(UserUpgradeInfo);
    if (UpgradeInfo.test == true) {
        let addNum = Player.Weapon.AddDC + Player.Weapon.AddMC + Player.Weapon.AddSC + Player.Weapon.AddTC + Player.Weapon.AddPC + Player.Weapon.AddWC;
        if (addNum >= getSetting().最高升级点数) {
            Weaponfail(Player);
            return;
        }
        if (UpgradeInfo.addAttr != 0) {
            switch (UpgradeInfo.addPosition) {
                case "DC":
                    Player.Weapon.AddDC += UpgradeInfo.addAttr;
                    break;
                case "MC":
                    Player.Weapon.AddMC += UpgradeInfo.addAttr;
                    break;
                case "SC":
                    Player.Weapon.AddSC += UpgradeInfo.addAttr;
                    break;
                case "TC":
                    Player.Weapon.AddTC += UpgradeInfo.addAttr;
                    break;
                case "PC":
                    Player.Weapon.AddPC += UpgradeInfo.addAttr;
                    break;
                case "WC":
                    Player.Weapon.AddWC += UpgradeInfo.addAttr;
                    break;
                default:
                    break;
            }
            Player.SendMessage("提示:你的武器升级成功");
            Player.Weapon.Rename(Player.Weapon.DisplayName.replace("(*)", ""));
            Player.UpdateItem(Player.Weapon);
        }
        else {
            Weaponfail(Player);
        }
        UpgradeInfo.test = false;
        Player.VarString("UpgradeInfo").AsString = JSON.stringify(UpgradeInfo);
        Player.VarString("UpgradeInfo").Save();
    }
}
exports.WeaponTest = WeaponTest;
function getSetting() {
    return UpgradeSetting;
}
exports.getSetting = getSetting;
function getUpgradeInfo(Npc, Player, Args, key) {
    let UpgradeInfo;
    let UserUpgradeInfo = Player.VarString("UpgradeInfo").AsString;
    UpgradeInfo = JSON.parse(UserUpgradeInfo);
    return UpgradeInfo[key];
}
exports.getUpgradeInfo = getUpgradeInfo;
function Weaponfail(Player) {
    if (getSetting().失败是否破碎) {
        Player.DeleteUseItem(TItemWhere.wWeapon);
        Player.RefFeature();
        Player.RefUseItem();
        Player.RecalcAbilitys();
        Player.SendMessage("提示:你的武器已破碎");
    }
    else {
        Player.SendMessage("提示:你的武器升级失败");
    }
    switch (Player.Direction) {
        case 0:
            GameLib.ShowEffect(Player.Map.MapName, Player.MapX, Player.MapY, 108, 10);
            //Player.ShowEffect(108)
            break;
        case 1:
            GameLib.ShowEffect(Player.Map.MapName, Player.MapX, Player.MapY, 101, 10);
            //Player.ShowEffect(101)
            break;
        case 2:
            GameLib.ShowEffect(Player.Map.MapName, Player.MapX, Player.MapY, 102, 10);
            //Player.ShowEffect(102)
            break;
        case 3:
            GameLib.ShowEffect(Player.Map.MapName, Player.MapX, Player.MapY, 103, 10);
            //Player.ShowEffect(103)
            break;
        case 4:
            GameLib.ShowEffect(Player.Map.MapName, Player.MapX, Player.MapY, 104, 10);
            //Player.ShowEffect(104)
            break;
        case 5:
            GameLib.ShowEffect(Player.Map.MapName, Player.MapX, Player.MapY, 105, 10);
            // Player.ShowEffect(105)
            break;
        case 6:
            GameLib.ShowEffect(Player.Map.MapName, Player.MapX, Player.MapY, 106, 0);
            // Player.ShowEffect(106)
            break;
        case 7:
            GameLib.ShowEffect(Player.Map.MapName, Player.MapX, Player.MapY, 107, 0);
            // Player.ShowEffect(107)
            break;
        default:
            break;
    }
}
exports.Weaponfail = Weaponfail;
function UpgradeInit(Player) {
    let UserUpgradeInfo = Player.VarString("UpgradeInfo").AsString;
    if (UserUpgradeInfo == "") {
        let UserUpgradeInfo = new TUpgradeInfo();
        UserUpgradeInfo.UserName = undefined;
        UserUpgradeInfo.IsOnWeepon = false;
        UserUpgradeInfo.UserItem = undefined;
        UserUpgradeInfo.CreartTime = 0;
        UserUpgradeInfo.BackupTime = 0;
        UserUpgradeInfo.btDC = 0;
        UserUpgradeInfo.btMC = 0;
        UserUpgradeInfo.btSC = 0;
        UserUpgradeInfo.btTC = 0;
        UserUpgradeInfo.btPC = 0;
        UserUpgradeInfo.btWC = 0;
        UserUpgradeInfo.Dura = 0;
        Player.VarString("UpgradeInfo").AsString = JSON.stringify(UserUpgradeInfo);
        Player.VarString("UpgradeInfo").Save();
    }
}
exports.UpgradeInit = UpgradeInit;
//# sourceMappingURL=%E6%B2%99%E5%B7%B4%E5%85%8B%E6%AD%A6%E5%99%A8%E5%8D%87%E7%BA%A7%E8%AE%BE%E7%BD%AE.js.map