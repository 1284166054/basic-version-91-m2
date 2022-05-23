"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
function main(Npc, Player, Args) {
    const S = `
不要说我没提醒你, \\
这座烽火魔城很可能成为你的一场恶梦,\\
你真的还打算进去吗? \\ \\
<确定/@exit>
`;
    Npc.Say(Player, S);
}
exports.main = main;
//# sourceMappingURL=%E6%81%B6%E9%AD%94%E8%80%81%E4%BA%BA.js.map