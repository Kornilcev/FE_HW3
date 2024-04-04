const age = prompt("How old are you?")
console.log ("Вам " + age * 360 + " Дней")

const number1 = +prompt("Number start")
const number2 = +prompt("Number end")
console.log (number1 + number2)

const isEven = +prompt("Is even?")
if(isEven === 0){
    console.log("Число ровно 0")
} else if(isEven % 2 == 0) {
    console.log("число чётнoe")
} else {
    console.log("число нечётнoe") }

const nan = prompt("NaN?")
if(!isNaN(prompt)){
    console.log("Это значение можно преобразовать в число")
} else {
    console.log("Это значение преобразовать в число не получится. Получится NaN")
}