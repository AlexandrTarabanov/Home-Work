let task1 = () => {
    let name, admin
    name = "Alexandr"
    admin = name
    alert(admin)
}

let task2 = () => {
    alert('Можно использовать заглавные буквы при создании переменной, но при этом JS чувствителен к регистру т.е. BIRTHDAY !== birthday')
}

let task3 = () => {
    alert('hello 1, hello name, hello Ilya')
}
let task4 = () => {
    alert(`
    1: ${"" + 1 + 0} \n
    2: ${"" - 1 + 0} \n
    3: ${true + false} \n
    4: ${6 / "3"} \n
    5: ${"2" * "3"} \n
    6: ${4 + 5 + "px"} \n
    7: ${"$" + 4 + 5} \n
    8: ${"4" - 2} \n
    9: ${"4px" - 2} \n
    10: ${7 / 0} \n
    11: ${" -9 " + 5} \n
    12: ${" -9 " - 5} 13: ${null + 1} 14: ${undefined + 1}`)
}
let task5 = () => {
    alert("c = 2, d = 1")
}
let task6 = () => {
    alert("a = 4, x = 5")
}
let task7 = () => {
    alert(`
    1: ${5 > 4} \n
    2: ${"ананас" > "яблоко"} \n
    3: ${"2" > "12"} \n
    4: ${undefined == null} \n
    5: ${undefined === null} \n
    6: ${null == "\n0\n"} \n
    7: ${null === +"\n0\n"} \n`)
}
let task8 = () => {
    let name = prompt('What is your name')
    alert('Hello: ' + name)
}

let task9 = () => {
    alert('Выведется')
}

let task10 = () => {
    let answer = prompt('Каково «официальное» название JavaScript?')
    if (answer === "ECMAScript") {
        alert('Верно')
    } else alert('Не знаете? ECMAScript!')
}

let task11 = () => {
    let number = prompt('Your number')
    if (number > 0) {
        alert(1)
    } else if (number < 0) {
        alert(-1)
    } else alert(0)
}

let task12 = () => {
    alert("a + b < 4 ? 'Мало' : 'Много'")
}

let task13 = () => {
    alert("login == 'Сотрудник' ? message = 'Привет' : \n (login == 'Директор') ? message = 'Здравствуйте' : \n (login == '') ? message = 'Нет логина' : message = ''")
}

let task14 = () => {
    alert(2)
}

let task15 = () => {
    alert('1 затем 2')
}

let task16 = () => {
    alert(null)
}

let task17 = () => {
    alert('1 затем undefined')
}

let task18 = () => {
    alert(3)
}

let task19 = () => {
    let age = prompt('Введите значение')
    if (age >= 14 && age <= 90) {
        alert('Входит')
    } else alert('Не входит')
}

let task20 = () => {
    let age = prompt('Введите значение')
    if (age <= 14 || age >= 90) {
        alert('Не входит')
    } else alert('Входит')
}

let task21 = () => {
    alert('Выведется 1 и 3, значения -1, 0, 1')
}

let task22 = () => {
    let login = prompt('Введите логин')
    if (login === 'Админ') {
        let password = prompt('Введите пароль')
        if (password === 'Я главный') {
            alert('Здравствуйте')
        } else if (password === null) {
            alert('Отменено')
        } else alert('Неверный пароль')
    } else if (login === '' || login === null) {
        alert('Отменено')
    } else alert('Я вас не знаю')
}

let task23 = () => {
    alert("if (browser === 'Edge') {\n" +
        "        alert(\"You've got the Edge!\")\n" +
        "    } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {\n" +
        "        alert('Okay we support these browsers too')\n" +
        "    } else {\n" +
        "        alert('We hope that this page looks ok!')\n" +
        "    }")
}

let task24 = () => {

    alert("let a = +prompt('a?', '');\n" +
        "\n" +
        "    switch (a) {\n" +
        "        case 0:\n" +
        "            alert( 0 )\n" +
        "            break\n" +
        "        case 1:\n" +
        "            alert( 1 )\n" +
        "            break\n" +
        "        case 2:\n" +
        "        case 3:\n" +
        "            alert( '2,3' )\n" +
        "            break\n" +
        "    }")
}

let task25 = () => {
    let number = +prompt('Введите число')
    if (number > 0) {
        alert(++number)
    } else alert(number)
}

let task26 = () => {
    let number = +prompt('Введите число')
    if (number > 0) {
        ++number
        alert(number)
    } else {
        number -= 2
        alert(number)
    }
}

let task27 = () => {
    let number = +prompt('Введите число')
    if (number > 0) {
        ++number
        alert(number)
    } else if (number < 0) {
        number -= 2
        alert(number)
    } else {
        number = 10
        alert(number)
    }
}

let task28 = () => {
    let arr = []
    let counter = 0
    arr.push(prompt('Enter first'))
    arr.push(prompt('Enter second'))
    arr.push(prompt('Enter third'))
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            counter++
        }
    }
    alert(counter)
}

let task29 = () => {
    let arr = []
    let pos = 0
    let neg = 0
    arr.push(prompt('Enter first'))
    arr.push(prompt('Enter second'))
    arr.push(prompt('Enter third'))
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            pos++
        } else if (arr[i] < 0) {
            neg++
        }
    }
    alert(`Положительных: ${pos} Отрицательных: ${neg}`)
}

let task30 = () => {
    let first = +prompt('Enter first')
    let second = +prompt('Enter second')
    if (first > second) {
        alert(first)
    } else if (first < second) {
        alert(second)
    } else alert('Равны')
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