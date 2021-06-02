let task1 = () => {
    alert('Последним будет 1')
}

let task2 = () => {
    let A = prompt('Enter A')
    let B = prompt('Enter B')
    let C = prompt('Enter C')
    if (A < B && B < C) {
        A *= 2
        B *= 2
        C *= 2
    } else {
        A = -A
        B = -B
        C = -C
    }
    alert(`A = ${A}, B = ${B} C = ${C}`)

}

let task3 = () => {
    let A = prompt('Enter A')
    let B = prompt('Enter B')
    let C = prompt('Enter C')
    if (A < B && B < C || A > B && B > C) {
        A *= 2
        B *= 2
        C *= 2
    } else {
        A = -A
        B = -B
        C = -C
    }
    alert(`A = ${A}, B = ${B} C = ${C}`)
}
let task4 = () => {
    let A = prompt('Enter A')
    let B = prompt('Enter B')
    let C = prompt('Enter C')
    let AB = -(A - B)
    let AC = -(A - C)
    if (AB > AC) {
        alert(`Точка С = ${C}, расстояние = ${AC}`)
    } else alert(`Точка B = ${B}, расстояние = ${AB}`)
}
let task5 = () => {
    let X = +prompt('Enter X')
    let Y = +prompt('Enter Y')
    if (X === 0 && Y === 0) {
        alert(0)
    } else if (X !== 0 && Y === 0) {
        alert(1)
    } else if (Y !== 0 && X === 0) {
        alert(2)
    } else alert(3)
}
let task6 = () => {
    let X = +prompt('Enter X')
    let Y = +prompt('Enter Y')
    if (X > 0 && Y > 0) {
        alert('First')
    } else if (X < 0 && Y > 0) {
        alert('Second')
    } else if (X < 0 && Y < 0) {
        alert('Third')
    } else alert('Fourth')
}
let task7 = () => {
    let X1 = +prompt('Enter X1', '2')
    let Y1 = +prompt('Enter Y1', '2')
    let X2 = +prompt('Enter X2', '2')
    let Y2 = +prompt('Enter Y2', '1')
    let X3 = +prompt('Enter X3', '1')
    let Y3 = +prompt('Enter Y3', '1')
    let X4
    let Y4

    if (X1 === X2) {
        X4 = X3;
    } else if (X1 === X3) {
        X4 = X2;
    } else {
        X4 = X1;
    }

    if (Y1 === Y2) {
        Y4 = Y3;
    } else if (Y1 === Y3) {
        Y4 = Y2;
    } else {
        Y4 = Y1;
    }
    alert(`X4: ${X4}, Y4: ${Y4}`)
}
let task8 = () => {
    let year = +prompt('Enter year')
    if (year < 400 && year % 4 === 0) {
        alert(366)
    } else if (year % 400 === 0) {
        alert(366)
    } else alert(365)
}

let task9 = () => {
    let num = +prompt('Enter number')
    if (num < 0 && num % 2 === 0) {
        alert(`${num} - отрицательное четное число`)
    } else if (num < 0 && num % 2 !== 0) {
        alert(`${num} - отрицательное нечетное число`)
    } else if (num > 0 && num % 2 === 0) {
        alert(`${num} - положительное четное число`)
    } else if (num > 0 && num % 2 !== 0) {
        alert(`${num} - положительное нечетное число`)
    } else alert(`${num} - нулевое число`)
}

let task10 = () => {
    let num = +prompt('Enter number')
    if (num < 10 && num % 2 === 0) {
        alert(`${num} - четное однозначное число`)
    } else if (num < 10 && num % 2 !== 0) {
        alert(`${num} - нечетное однозначное число`)
    } else if (num < 100 && num % 2 === 0) {
        alert(`${num} - четное двухзначное число`)
    } else if (num < 100 && num % 2 !== 0) {
        alert(`${num} - нечетное двухзначное число`)
    } else if (num < 1000 && num % 2 === 0) {
        alert(`${num} - четное трехзначное число`)
    } else if (num < 1000 && num % 2 !== 0) {
        alert(`${num} - нечетное трехзначное число`)
    } else alert('Вне диапазона')
}

let task11 = () => {
    alert('Выводы разные')

}

let task12 = () => {
    alert('Выводы одинаковые')
}

let task13 = () => {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            alert(i)
        }
    }
}

let task14 = () => {
    for (let i = 0; i < 3; i++) {
        alert(`number ${i}!`);
    }
    let i = -1
    while (i++ < 2) {
        alert(`number ${i}!`)
    }
}

let task15 = () => {
    let num;

    do {
        num = prompt("Введите число, большее 100?");
    } while (num <= 100 && num);
}

let task16 = () => {
    let from = +prompt('From:')
    let to = +prompt('To:')
    firstLoop:
        for (from; from < to; from++) {
            for (let divider = 2; divider < from; divider++) {
                if (from % divider === 0) continue firstLoop
            }
            alert(from)
        }
}

let task17 = () => {
    let num1 = +prompt('Enter number 1')
    let num2 = +prompt('Enter number 2')
    alert((num1 + num2) / 2)
}

let task18 = () => {
    let num = +prompt('Enter number')
    alert(`Число на число: ${num * num}, Через Math.pow: ${Math.pow(num, 2)}, Оператор **: ${num ** 2} `)
}

let task19 = () => {
    let num1 = +prompt('Enter number 1')
    let num2 = +prompt('Enter number 2')
    let num3 = +prompt('Enter number 3')
    alert(Math.max(num1, num2, num3) - Math.min(num1, num2, num3))
}

let task20 = () => {
    let num = +prompt('Enter number')
    if (num % 2 === 0) {
        alert('Четное')
    } else alert('Нечетное')
}

let task21 = () => {
    let num = prompt('Enter number')
    let result = 0
    for (let i = 0; i <= num.length; i++) {
        result += +num.charAt(i)
    }
    alert(`Длина: ${num.length} Сума: ${result}`)
}

let task22 = () => {
    let answer = prompt('Что во что? см в дюймы - пиши с, наоборот пиши д')
    let num = +prompt('Сколько?')
    if (answer === 'c') {
        alert(num / 2.54)
    } else alert(num * 2.54 + ' см')
}

let task23 = () => {
    alert('Было мало времени поэтому пока сыро, буду допиливать')
    let cash = 0
    for (let i = 0; i < 1; i++) {
        let answer1 = prompt('1. Столица Украины? Введите букву или подсказку: A Киев B Харьков C Львов D Ужгород Подсказки: Друг, Зал')
        if (answer1 === 'A') {
            cash += 100
            alert(`Верно! Заработано: ${cash}`)
        } else if (answer1 === 'Друг') {
            cash += 100
            alert(`Друг пока на стадии разработки, но за веру в дружбу идем дальше! Заработано: ${cash}`)
        } else if (answer1 === `Зал`) {
            cash += 100
            alert(`Какой зал? Ковид! Оглянись, ты один! Но чтобы не скучал идем дальше Заработано: ${cash}`)
        } else {
            alert('Game over')
            break
        }
        let answer2 = prompt('2. Столица России? Введите букву или подсказку: A Питербург B Екатеринбург C Москва D Сочи Подсказки: Друг, 50/50, Зал')
        if (answer2 === 'C') {
            cash += 100
            alert(`Верно! Заработано: ${cash}`)
        } else if (answer2 === 'Друг') {
            cash += 100
            alert(`Друг пока на стадии разработки, но за веру в дружбу идем дальше! Заработано: ${cash}`)
        } else if (answer2 === `Зал`) {
            cash += 100
            alert(`Какой зал? Ковид! Оглянись, ты один! Но чтобы не скучал идем дальше Заработано: ${cash}`)
        } else {
            alert('Game over')
            break
        }
        let answer3 = prompt('3. Столица Турции? Введите букву или подсказку: A Анкара B Станбул C Алания D Анталия Подсказки: Друг, 50/50, Зал')
        if (answer3 === 'B') {
            cash += 100
            alert(`Верно! Победа! Заработано: ${cash}!!! Приходи в другой день, денег будет больше, но и правила сложнее`)
        } else if (answer3 === 'Друг') {
            cash += 100
            alert(`Друг пока на стадии разработки, но за веру в дружбу идем дальше! Заработано: ${cash}`)
        } else if (answer3 === `Зал`) {
            cash += 100
            alert(`Какой зал? Ковид! Оглянись, ты один! Но чтобы не скучал идем дальше Заработано: ${cash}`)
        } else {
            alert('Game over')
            break
        }

    }
}

let task24 = () => {
    let num = prompt('Enter number')
    let result = 0
    if (num % 2 === 0) {
        for (let i = 0; i <= num.length; i++) {
            result += +num.charAt(i)
        }
    } else {
        result = 1
        for (let i = 0; i <= num.length; i++) {
            result *= +num.charAt(i)
        }

    }
    alert(result)
}

let task25 = () => {
    let A = +prompt('Enter A')
    let B = +prompt('Enter B')
    let C = +prompt('Enter C')
    if (A + B > C && A + C > B && C + B > A) {
        alert('Существует')
    } else alert('Несуществует')
}

let task26 = () => {
    let X = +prompt('Enter X', '4')
    let Y = +prompt('Enter Y', '9')
    let R = +prompt('Enter R', '10')
    if (X ** 2 + Y ** 2 <= R ** 2) {
        alert('Лежит')
    } else alert('Не лежит')
}

let task27 = () => {
    alert('let user = {}\n' +
        '    user.name = \'John\'\n' +
        '    user.surname = \'Smith\'\n' +
        '    user.name = \'Pete\'\n' +
        '    delete user.name')
}

let task28 = () => {
    alert('Объект может быть изменен, нельзя менять ссылку объекта')
}

let task29 = () => {
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }
    let sum = 0
    if (Object.keys(salaries).length) {
        for (let key in salaries) {
            sum += salaries[key]
        }
        alert(sum)
    } else alert(0)
}

let task30 = () => {
    alert('Проблема в точности дробных чисел в JS')
}

let task31 = () => {
    let first = +prompt('Enter first')
    let second = +prompt('Enter second')
    if (first > second) {
        alert(2)
    } else if (first < second) {
        alert(1)
    } else alert('Равны')
}

let task32 = () => {
    let first = +prompt('Enter first')
    let second = +prompt('Enter second')
    if (first > second) {
        alert(first)
        alert(second)
    } else if (first < second) {
        alert(second)
        alert(first)
    } else alert('Равны')
}

let task33 = () => {
    let A = +prompt('Enter A')
    let B = +prompt('Enter B')
    let a = A
    let b = B
    if (A > B) {
        B = a
        A = b
        alert(`A: ${A}, B: ${B}`)
    } else if (A < B) {
        alert(`A: ${A}, B: ${B}`)
    } else alert('Равны')
}

let task34 = () => {
    let A = +prompt('Enter A')
    let B = +prompt('Enter B')
    if (A === B) {
        A = B = 0
        alert(`A: ${A}, B: ${B}`)
    } else {
        A = B = A + B
        alert(`A: ${A}, B: ${B}`)
    }
}

let task35 = () => {
    let A = +prompt('Enter A')
    let B = +prompt('Enter B')
    if (A === B) {
        A = B = 0
        alert(`A: ${A}, B: ${B}`)
    } else if (A > B) {
        A = B = A
        alert(`A: ${A}, B: ${B}`)
    } else {
        A = A = B
        alert(`A: ${A}, B: ${B}`)
    }
}

let task36 = () => {
    let first = +prompt('Enter first')
    let second = +prompt('Enter second')
    let third = +prompt('Enter third')
    alert(Math.min(first, second, third))
}

let task37 = () => {
    let first = +prompt('Enter first')
    let second = +prompt('Enter second')
    let third = +prompt('Enter third')
    alert(first + second + third - Math.min(first, second, third) - Math.max(first, second, third))
}

let task38 = () => {
    let first = +prompt('Enter first')
    let second = +prompt('Enter second')
    let third = +prompt('Enter third')
    alert(Math.min(first, second, third))
    alert(Math.max(first, second, third))
}

let task39 = () => {
    let first = +prompt('Enter first')
    let second = +prompt('Enter second')
    let third = +prompt('Enter third')
    alert(Math.max(first, second, third) + (first + second + third - Math.min(first, second, third) - Math.max(first, second, third)))

}

let task40 = () => {
    let first = +prompt('Enter first')
    let second = +prompt('Enter second')
    let third = +prompt('Enter third')
    if (first === second) {
        alert(3)
    } else if (first === third) {
        alert(2)
    } else alert(1)
}