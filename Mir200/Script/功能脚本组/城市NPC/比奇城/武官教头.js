"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
${Player.Name}你目前已经可以独立了, \\
你去做你该做的事情吧.\\
祝你好运. \\\
<退  出/@exit> 
`;
    const S1 = `
你好,你是不是第一次玩这个游戏?\\
我可以帮你.\\\\
<学习入门技巧/@next>\\
<退出/@exit>\\
`;
    if (Player.Level > 28) {
        Npc.Say(Player, S);
    }
    else {
        Npc.Say(Player, S1);
    }
}
exports.Main = Main;
//# sourceMappingURL=%E6%AD%A6%E5%AE%98%E6%95%99%E5%A4%B4.js.map