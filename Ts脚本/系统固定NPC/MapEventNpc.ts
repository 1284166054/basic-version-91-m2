export function Checkentermap(Player: TPlayObject, SourceEnvir: TEnvirnoment, DestEnvir: TEnvirnoment, SourceX: number, SourceY: number, DestX: number, DestY: number, Accept: boolean): boolean {
    return true
}
//玩家进入地图后触发 
export function Entermap(Npc: TNormNpc, Player: TPlayObject, SourceEnvir, DestEnvir: TEnvirnoment, SourceX, SourceY, DestX, DestY: number) {
}
//删除通过Gamelib.AddMapRoute创建的地图入口时触发(非脚本调用删除才会触发): 
export function Deletemaproute(Npc: TNormNpc, RouteName: String) {
}
//副本被关闭 Envir为即将关闭的副本地图 
export function Ondeleteduplicatesmap(Npc: TNormNpc, Envir: TEnvirnoment) {
} 
