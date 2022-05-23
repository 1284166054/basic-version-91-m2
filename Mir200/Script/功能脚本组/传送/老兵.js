"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
听说虹魔教主复活了!他的领地“封魔谷”也已重现大陆!\\
好象封魔谷的入口在沃玛森林附近\\
不过那么邪恶的地方,你真的打算去吗?\\\\
<坐标/@坐标> 询问\\
关于<PK/@pk>\\
<速度/@速度> 太慢？\\
<想瞬息移动/@瞬息移动>\\
<知道了/@exit>\\
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
//# sourceMappingURL=%E8%80%81%E5%85%B5.js.map