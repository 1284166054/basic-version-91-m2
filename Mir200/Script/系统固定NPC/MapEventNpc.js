"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ondeleteduplicatesmap = exports.Deletemaproute = exports.Entermap = exports.Checkentermap = void 0;
function Checkentermap(Player, SourceEnvir, DestEnvir, SourceX, SourceY, DestX, DestY, Accept) {
    return true;
}
exports.Checkentermap = Checkentermap;
//玩家进入地图后触发 
function Entermap(Npc, Player, SourceEnvir, DestEnvir, SourceX, SourceY, DestX, DestY) {
}
exports.Entermap = Entermap;
//删除通过Gamelib.AddMapRoute创建的地图入口时触发(非脚本调用删除才会触发): 
function Deletemaproute(Npc, RouteName) {
}
exports.Deletemaproute = Deletemaproute;
//副本被关闭 Envir为即将关闭的副本地图 
function Ondeleteduplicatesmap(Npc, Envir) {
}
exports.Ondeleteduplicatesmap = Ondeleteduplicatesmap;
//# sourceMappingURL=MapEventNpc.js.map