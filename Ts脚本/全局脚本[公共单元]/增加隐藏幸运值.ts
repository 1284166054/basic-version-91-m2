export function addbodyluck(Player: TPlayObject, n: number) {
    let bodyluck = Player.VarString("bodyluck").AsInteger + Math.trunc(n)
    let bodyluckLevel = Math.trunc(bodyluck / 5000)

    Player.VarString("bodyluck").AsInteger = bodyluck
    Player.VarString("bodyluckLevel").AsInteger = bodyluckLevel
    Player.VarString("bodyluck").Save()
    Player.VarString("bodyluckLevel").Save()
}