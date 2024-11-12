let data = [
    {id:1, name: "Вася"},
    {id:2, name: "Петя"},
    {id:1, name: "Вася"}
];
let set = new Set();

const uniqueData = data.filter((elem) => {
    if (set.has(elem.id)) {
        return false;
    }
    set.add(elem.id)
    return true;
});


console.log(uniqueData)