"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dawnMsg = exports.nightMsg = exports.afternoonMsg = exports.morningMsg = void 0;
function morningMsg(Npc, Player, OnlineAddExp) {
    GameLib.Broadcast("亲爱的玩家，现在已经是早上了");
    GameLib.Broadcast("游戏虽然好玩，可别忘了工作和学习的时间");
}
exports.morningMsg = morningMsg;
function afternoonMsg(Npc, Player, OnlineAddExp) {
    GameLib.Broadcast("亲爱的玩家，现在已经是中午了");
    GameLib.Broadcast("游戏虽然好玩，可别忘了多陪陪你的朋友和家人");
}
exports.afternoonMsg = afternoonMsg;
function nightMsg(Npc, Player, OnlineAddExp) {
    GameLib.Broadcast("亲爱的玩家，现在已经是晚上了");
    GameLib.Broadcast("游戏虽然好玩，也别忘了陪朋友和家人吃顿晚饭");
}
exports.nightMsg = nightMsg;
function dawnMsg(Npc, Player, OnlineAddExp) {
    GameLib.Broadcast("亲爱的玩家，现在已经是凌晨了");
    GameLib.Broadcast("游戏虽然好玩，也别忘了是不是该休息了");
}
exports.dawnMsg = dawnMsg;
//# sourceMappingURL=RobotManageNpc.js.map