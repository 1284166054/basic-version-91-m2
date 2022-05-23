"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showTime = exports.citymove = exports.evilmove = exports.evil = exports.city = exports.Main = void 0;
function Main(Npc, Player, Args) {
    const S = `欢迎光临!你可以在我这里享受以下服务.\\
请选择你要前往的地区:\\
┏━━━━┳━━━━┳━━━━┳━━━━┓\\
┃<城区传送/@city>┃<险恶区域/@evil>┃<挑战幻境/@幻境传送.Main>┃<查看时间/@showTime>┃\\
┗━━━━┻━━━━┻━━━━┻━━━━┛\\
`;
    Npc.Say(Player, S);
}
exports.Main = Main;
function city(Npc, Player, Args) {
    const S = `
这里是<城区传送>服务,你必须给我2000金币的报酬!\\
┏━━━━┳━━━━┳━━━━┳━━━━┓\\
┃<比齐大城/@citymove(0,333,268,2000)>┃<毒蛇山谷/@citymove(2,500,485,2000)>┃<银杏小村/@citymove(0,650,630,2000)>┃<比奇村庄/@citymove(0,290,615,2000)>┃\\
┣━━━━╋━━━━╋━━━━╋━━━━┫\\
┃<盟重土城/@citymove(3,330,330,2000)>┃<苍月之岛/@citymove(5,140,330,2000)>┃<封魔神谷/@citymove(4,240,200,2000)>┃<白 日 门/@citymove(11,180,325,2000)>┃\\
┗━━━━┻━━━━┻━━━━┻━━━━┛\\
`;
    if (Player.Level > 6) {
        Npc.Say(Player, S);
    }
    else {
        Npc.Say(Player, "照你现在这个级别,我没什么能帮的上你!\\请你练到7级再来找我吧，祝你好运!\\");
    }
}
exports.city = city;
function evil(Npc, Player, Args) {
    const S1 = `
这里是<险恶地区>服务，按照你的级别你可以前往以下地区:\\
当然你还得付给我3000金币的报酬!\\
┏━━━━┳━━━━┳━━━━┳━━━━┳━━━━┓\\
┃<沃玛三层/@evilmove(D023,50,364,3000)>┃<猪洞七层/@evilmove(D716,24,27,3000)>┃<祖玛七层/@evilmove(,3000)>┃<死亡棺材/@evilmove(D606,10,26,3000)>┃<抉择之地/@evilmove(D1004,118,35,3000)>┃\\
┣━━━━╋━━━━╋━━━━╋━━━━╋━━━━┫\\
┃<比齐矿区/@evilmove(0,666,215,3000)>┃<蜈蚣洞穴/@evilmove(3,142,93,3000)>┃<天然洞穴/@evilmove(E001,15,13,3000)>┃<牛魔四层/@evilmove(,3000)>┃<封魔矿区/@evilmove(4,138,69,3000)>┃\\
┣━━━━╋━━━━╋━━━━╋━━━━╋━━━━┫\\
┃<未知暗殿/@evilmove(M001,200,10,3000)>┃<尸 魔 洞/@evilmove(5,526,612,3000)>┃<骨 魔 洞/@evilmove(5,548,128,3000)>┃<尸王大殿/@evilmove(q004,14,14,3000)>┃<沙城区域/@evilmove(3,716,407,3000)>┃\\
┗━━━━┻━━━━┻━━━━┻━━━━┻━━━━┛\\
`;
    const S2 = `
这里是<险恶地区>服务，按照你的级别35级前你可以前往以下地区:\\
当然你还得付给我3000金币的报酬!\\
┏━━━━┳━━━━┳━━━━┳━━━━┳━━━━┓\\
┃<沃玛二层/@evilmove(D022,250,206,3000)>┃<猪洞一层/@evilmove(D710,28,21,3000)>┃<祖玛三层@evilmove(D503,166,216,3000)>┃<赤月峡谷/@evilmove(D10011,269,384,3000)>┃<封魔矿区/@evilmove(4,138,69,3000)>┃\\
┣━━━━╋━━━━╋━━━━╋━━━━╋━━━━┫\\
┃<比齐矿区/@evilmove(0,666,215,3000)>┃<蜈蚣洞穴/@evilmove(3,142,93,3000)>┃<天然洞穴/@evilmove(E001,15,13,3000)>┃<牛魔一层/@evilmove(D2071,224,220,3000)>┃<尸 魔 洞/@evilmove(5,526,612,3000)>┃\\
┣━━━━╋━━━━╋━━━━┻━━━━┻━━━━┛\\
┃<骨 魔 洞/@evilmove(5,548,128,3000)>┃<尸王大殿/@evilmove(q004,14,14,3000)>┃\\
┗━━━━┻━━━━┛\\
`;
    const S3 = `
这里是<险恶地区>服务，按照你的级别22级前你只能前往以下地区:\\
当然你还得付给我3000金币的报酬!\\
┏━━━━┳━━━━┳━━━━┓\\
┃<比齐矿区/@evilmove(0,666,215,3000)>┃<蜈蚣洞穴/@evilmove(3,142,93,3000)>┃<天然洞穴/@evilmove(E001,15,13,3000)>┃\\
┣━━━━╋━━━━╋━━━━┫\\
┃<封魔矿区/@evilmove(4,138,69,3000)>┃<兽人古墓/@evilmove(0,146,35,3000)>┃<骷髅洞穴/@evilmove(0,42,112,3000)>┃\\
┗━━━━┻━━━━┻━━━━┛\\
`;
    switch (true) {
        case Player.Level <= 6:
            Npc.Say(Player, S3);
            break;
        case Player.Level <= 21:
            Npc.Say(Player, S2);
            break;
        default:
            Npc.Say(Player, S1);
    }
}
exports.evil = evil;
function evilmove(Npc, Player, Args) {
    if (Player.Gold >= Args.Int[3]) {
        Player.Gold = Player.Gold - Args.Int[3];
        Player.Give("回城卷");
        Player.MapMove(Args.Str[0], Args.Int[1], Args.Int[2]);
    }
    else {
        Npc.MessageBox(Player, `对不起,你的金币不足${Args.Int[3]},无法传送.`);
    }
}
exports.evilmove = evilmove;
function citymove(Npc, Player, Args) {
    if (Player.Gold >= Args.Int[3]) {
        Player.Gold = Player.Gold - Args.Int[3];
        Player.MapMove(Args.Str[0], Args.Int[1], Args.Int[2]);
    }
    else {
        Npc.MessageBox(Player, `对不起,你的金币不足${Args.Int[3]},无法执行城市传送.`);
    }
}
exports.citymove = citymove;
function showTime(Npc, Player, Args) {
    let nowdate = new Date();
    let year = nowdate.getFullYear();
    let month = nowdate.getMonth() + 1;
    let date = nowdate.getDate();
    let day = nowdate.getDay();
    let week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    let h = nowdate.getHours();
    let m = nowdate.getMinutes();
    let s = nowdate.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    let S = year + "年" + month + "月" + date + "日" + week[day] + " " + h + ":" + m + ":" + s;
    Npc.MessageBox(Player, S);
}
exports.showTime = showTime;
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
//# sourceMappingURL=%E4%BC%A0%E9%80%81%E5%91%98.js.map