let rollDice = function (dice) {
    let typeDice = Number(dice.slice(1))
    return Math.floor(Math.random() * (typeDice - 1 + 1) + 1); // можно убрать -1+1 в скобках, но оставила, чтобы было понятно
};
console.log(rollDice('d20'))
