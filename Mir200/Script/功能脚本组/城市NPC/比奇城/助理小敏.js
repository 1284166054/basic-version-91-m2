"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slave = exports.Hotkey = exports.Fireball = exports.Heal = exports.Onehand = exports.Skill = exports.Talk2 = exports.Talk = exports.Fight = exports.Getitem = exports.Move2 = exports.Move = exports.Wear = exports.next1 = exports.next = exports.Main = void 0;
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
function next(Npc, Player, Args) {
    const S = `
首先告诉你与NPC对话的方法. \\
与NPC对话的方法是点击对话框内的有黄色下划线的字 \\
就可以和NPC进行互相间的对话了 \\
第一次比较困难但以后会慢慢习惯的\\\\
<下一步/@next1>
`;
    Npc.Say(Player, S);
}
exports.next = next;
function next1(Npc, Player, Args) {
    const S = `
从以下菜单中选择一下. \\
<物品使用指南/@Wear>\\
<移动指南/@Move>\\
<战斗指南/@Fight>\\
<命令指南/@Talk>\\
<技能指南/@Skill>\\
<快捷键指南/@Hotkey>\\
<退  出/@exit>\\
`;
    Npc.Say(Player, S);
}
exports.next1 = next1;
function Wear(Npc, Player, Args) {
    const S = `
首先, 如果你按下F9(包裹窗口)和\\
F10(状态窗口) 窗口就会被打开。\\
把衣服等物品拖动到你的状态窗口，\\
并在相应的位置放好，你就可以穿戴上这些物品了。\\
穿戴的位置 : 衣服－身体  武器－右手, 项链－右上角\\
            蜡烛－放项链的下面, 手镯－放蜡烛的下面\\
            戒指－放手镯的下面\\\\
<返回/@Main>
`;
    Npc.Say(Player, S);
}
exports.Wear = Wear;
function Move(Npc, Player, Args) {
    const S = `
鼠标左键    作为基本的行动，移动，攻击，移动物品等\\
鼠标右键    你在其他地方点击住右键的话,\\
           你可以朝那个方向跑动起来哦！\\    
Shift+左键  强行攻击.\\
<返回/@Main>，<继续/@Move2>
`;
    Npc.Say(Player, S);
}
exports.Move = Move;
function Move2(Npc, Player, Args) {
    const S = `
Ctrl+左键   奔跑. \\
Ctrl+右键   你能够看到其他玩家的信息, \\
            它的作用和 F10一样. \\
Alt+左键    收集物品 <取得/@Getitem>.\\
双击        如果你双击掉落在地上的物品，你就可以捡起它. \\
            如果你双击在包裹里的物品，你将使用它\\
<返回/@Move>
`;
    Npc.Say(Player, S);
}
exports.Move2 = Move2;
function Getitem(Npc, Player, Args) {
    const S = `
对于那些死去的鸡、羊、鹿、狼等，你可\\
以在它们的尸体上得到一块一块的优质肉,\\
在食人植物上，你可以得到一些很重要的物品\\
对于蜘蛛来说，你可以得到蜘蛛的毒牙.\\
还有一些别的怪物，也可以从它们身上得到一些物品\\\\
<返回/@Move>
`;
    Npc.Say(Player, S);
}
exports.Getitem = Getitem;
function Fight(Npc, Player, Args) {
    const S = `
基本上来说，你都可以利用左键来进行攻击.\\
不过，如果你不能进行攻击\\
你也可以按住Shift + 左键来强行攻击.\\
<返回/@Main>\\
`;
    Npc.Say(Player, S);
}
exports.Fight = Fight;
function Talk(Npc, Player, Args) {
    const S = `
/人名 你能够和在线的玩家进行无距离限制的交流.\\
     你点击聊天窗口的名字，就自动和这个名字的玩家交流\\
!    你能够群发消息(信息颜色是黄色的，但是有19秒的限制\\
     只有在8级以后才能使用.\\
!!   能够向你的组员发送信息.\\
!~   可以向所有在线的行会会员发送信息，信息的颜色是绿色的\\\
<返回/@Main>,<继续/@Talk2>
`;
    Npc.Say(Player, S);
}
exports.Talk = Talk;
function Talk2(Npc, Player, Args) {
    const S = `
@拒绝私聊   拒绝所有信息. 解除这个命令只需要再使用一次\\
@拒绝人名  可以对具体的某人进行屏蔽，操作和上面一样\\
@拒绝喊话   此功能只是拒绝群发的消息，操作和上面一样 \\
@退出门派   脱离行会.\\
@加入门派   允许加入行会。\\
@允许联盟   允许行会联盟。\\
方向键      使用这个，你可以查看过去聊天记录.\\\\
<返回/@Talk>
`;
    Npc.Say(Player, S);
}
exports.Talk2 = Talk2;
function Skill(Npc, Player, Args) {
    const S = `
每种职业开始能够学习技能的等级要求都是7级.\\
战士可以学习<基本剑术/@Onehand>, 道士可以学习<治愈术/@Heal>\\
魔法师可以学习<火球术/@Fireball>.\\
这些书都可以在各地的书店买到的. \ \
在这个等级以后，有一些技能也是非常重要的，但这些书是买不到的\\
你只能通过和暴民战斗或者和其它玩家交易来得到它们.\\\\
<返回/@Main>
`;
    Npc.Say(Player, S);
}
exports.Skill = Skill;
function Onehand(Npc, Player, Args) {
    const S = `
作为一个战士，你可以学习在等级达到7级以后买书来学习它\\
当你的级别上升了，你的这种基本剑术将使你的命中率越来越高\\\\
<返回/@Skill>
`;
    Npc.Say(Player, S);
}
exports.Onehand = Onehand;
function Heal(Npc, Player, Args) {
    const S = `
作为一个道士，你可以学习在等级达到7级以后买书来学习它\\
当你的级别上升了，你的这种治愈术将使得你能够很轻松的\\
治愈你自己和其他人.\\\\
<返回/@Skill>
`;
    Npc.Say(Player, S);
}
exports.Heal = Heal;
function Fireball(Npc, Player, Args) {
    const S = `
作为一个魔法师，你可以学习在等级达到7级以后买书来学习它\\
当你的级别上升了，它会越来越具备杀伤力的.\\\\
<返回/@Skill>
`;
    Npc.Say(Player, S);
}
exports.Fireball = Fireball;
function Hotkey(Npc, Player, Args) {
    const S = `
F1~F8    技能的快捷键\\
F9       包裹窗口\\
F10      状态窗口\\
F11      技能状态窗口\\
Ctrl+H   改变攻击模式\\
Ctrl+F   改变字体 \\
Ctrl+A   <附属怪物/@Slave> 改变宠物的攻击模式\\\\
<返回/@Main>
`;
    Npc.Say(Player, S);
}
exports.Hotkey = Hotkey;
function Slave(Npc, Player, Args) {
    const S = `
附属的怪物就是指魔法师或者道士通过魔法控制的怪物。.\\\\
<返回/@Hotkey>\\
`;
    Npc.Say(Player, S);
}
exports.Slave = Slave;
//# sourceMappingURL=%E5%8A%A9%E7%90%86%E5%B0%8F%E6%95%8F.js.map