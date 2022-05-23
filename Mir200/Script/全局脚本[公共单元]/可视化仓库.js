"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerLogin = exports.ItemTake = exports.ItemShow = exports.ItemSave = void 0;
function ItemSave(Npc, Player, Args) {
    let StoreList = JSON.parse(Player.VarString("可视化仓库").AsString);
    Player.MoveItemToUIContainer(1, Player.Weapon, 1);
    /*
    for (let I = 0; I <= Player.CustomItemCount - 1; I++) {
        let AItem = Player.GetCustomItem(I);
        if (AItem == undefined) {
            StoreList[I] = undefined
        } else {
            StoreList[I] = GameLib.SaveUserItemToString(AItem)
            Player.DeleteItem(AItem)
        }
    }

    Player.VarString("可视化仓库").AsString = JSON.stringify(StoreList)
    Player.VarString("可视化仓库").Save()
    ItemShow(Player) */
}
exports.ItemSave = ItemSave;
function ItemShow(Player) {
    let StoreList = JSON.parse(Player.VarString("可视化仓库").AsString);
    for (let index = 0; index < StoreList.length; index++) {
        if (StoreList[index] != undefined) {
            let item = GameLib.LoadUserItemFromString(StoreList[index]);
            console.log(index, item.Name);
            Player.MoveItemToUIContainer(index + 1, item, 1);
        }
    }
}
exports.ItemShow = ItemShow;
function ItemTake(Npc, Player, Args) {
    let i = Args.Int[0];
    //storeString = Player.VarString("可视化仓库").AsString
    //Player.RemoveItemFromUIContainer(i)
    //Player.MoveItemToUIContainer("1",物品对象，数量)
}
exports.ItemTake = ItemTake;
function PlayerLogin(Player) {
    let storeString = Player.VarString("可视化仓库").AsString;
    let storeList = JSON.parse(storeString);
    let item = GameLib.LoadUserItemFromString(storeList[1]);
    console.log(item.DisplayName);
    /*     for (let index = 0; index < storeList.length; index++) {
            console.log(index,storeList[index])
            if (storeList[index] != undefined) {
                let item = GameLib.LoadUserItemFromString(storeList[index])
                console.log(item.Name)
            }
    
        } */
}
exports.PlayerLogin = PlayerLogin;
//# sourceMappingURL=%E5%8F%AF%E8%A7%86%E5%8C%96%E4%BB%93%E5%BA%93.js.map