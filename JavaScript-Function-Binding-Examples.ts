function add1(x, y) {

    return x + y

}

const addFive = add1.bind(null,5)
const result1 = addFive(3)

console.log(result1)

function add3(x, y) {
    return x + y;
}

const addFiveToThree = add3.bind(null, 5, 3); // Привязываем аргументы 5 и 3
const result3 = addFiveToThree(); // Теперь вызываем функцию без аргументов

console.log(result3); // Выведет: 8, так как 5 + 3 = 8
