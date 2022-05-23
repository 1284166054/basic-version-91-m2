"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a1 = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
能来到这里，说明你有足够的实力进入下一层。\
你现在就去吗？\ \
<去/@a1>\
<不去/@exit>
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function a1(Npc, Player, Args) {
    Player.MapMove("H004", 12, 27);
}
exports.a1 = a1;
//# sourceMappingURL=%E5%B9%BB%E5%A2%83%E5%90%91%E5%AF%BC.js.map