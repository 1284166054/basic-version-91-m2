"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `
这里是比奇城堡宫殿.我是管理各种事情的国王.你有什么事情吗？\\
请注意:您在填写行会名称时一定要慎重。如果包含不健康、\\
有悖于社会精神文明的字眼，我们可以在不通知的情况下\\
做删除处理。我们愿与您共建网络文明，谢谢您的配合！\ \
<请求创建行会./@@buildguildnow>\\
<申请行会战争./@guildwar>\\
<如何建立行会./@buildguildexp>\\
<有关行会战争./@guildwarexp>\\
<申请攻城战争./@requestcastlewar>\\
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
//# sourceMappingURL=%E6%AF%94%E8%B5%B7%E5%9B%BD%E7%8E%8B.js.map