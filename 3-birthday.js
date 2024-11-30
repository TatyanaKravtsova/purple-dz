function isCorrectAge (age) {
    let now = new Date();
    let userBirthday = new Date(age);
    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    const correctAge = 14;
    let reference = new Date(`${year-correctAge}-${month + 1}-${day}`); //можно было не создавать отдеотные переменные, но так понятнее

    if (userBirthday <= reference) {
        return true;
    }

    return false;

}
let user1 = '2004-11-13'

console.log(isCorrectAge(user1))

let user2 = '2014-11-13'

console.log(isCorrectAge(user2))