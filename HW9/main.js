let task1 = () => {
    alert(`fruits.length = 4, т.к. fruits === shoppingCart // true`)
}

let task2 = () => {
    let styles = ['Джаз', 'Блюз']
    styles.push('Рок-н-ролл')
    styles[styles.length / 2 - 0.5] = 'Классика'
    styles.splice(0, 0)
    alert(styles.splice(0, 1))
    styles.unshift('Рэп', 'Регги')
    alert(styles)
}

let task3 = () => {
    alert('Результатом будет вывод массива из 3 элементов, последним будет описание функции, массив в данном случае поведет себя как объект и запишет в себя функцию как метод')
}

//////

let task4 = () => {
    let obj = {}
    let isEmpty = (obj) => {
        for (let key in obj) {
            alert(false);
        }
        alert(true);
    }
    isEmpty(obj)
}
let task5 = () => {
    let obj = {
        a: 1,
        b: 'Hi',
        c: 3
    }
    let multiplyNumeric = (obj) => {
        for (let key in obj) {
            if (typeof(obj[key]) === 'number') {
                obj[key] *= 2
            }
        }
        alert(JSON.stringify(obj))
    }
    multiplyNumeric(obj)
}
let task6 = () => {
    let readNumber = () => {
        let value
        do {
            value = prompt('Enter number!')
        } while(!isFinite(value))

        if (value === null || value === '') return null
        return value
    }
    alert(readNumber())
}
let task7 = () => {
    let random = (min,max) => min + Math.random() * (max - min)
    alert( random(1, 5) )
    alert( random(1, 5) )
    alert( random(1, 5) )
}
let task8 = () => {
    let randomInteger = (min,max) => (min + Math.random() * (max - min)).toFixed()
    alert( randomInteger(1, 5) )
    alert( randomInteger(1, 5) )
    alert( randomInteger(1, 5) )
}

let task9 = () => {
    let ucFirst = (str) => str[0].toUpperCase() + str.slice(1)
    alert(ucFirst('vasya'))
}

let task10 = () => {
    let checkSpam = (str) => {
        let lowStr = str.toLowerCase()
        return lowStr.includes('viagra') || lowStr.includes('xxx');
    }
    alert(checkSpam('buy ViAgRA now'))
    alert(checkSpam('free xxxxx'))
    alert(checkSpam("innocent rabbit"))
}

let task11 = () => {
    let truncate = (str, maxlength) => {
        if (str.length > maxlength) {
            return str.slice(0, maxlength - 1) + '…'
        } else return  str;
    }
    alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
    alert(truncate("Всем привет!", 20))

}

let task12 = () => {
    let extractCurrencyValue = (str) => str.slice(1)
    alert(extractCurrencyValue('$120'))
}

let task13 = () => {
    let sumInput = () => {
        let arr = []
        let sum = 0
    while (true) {
        let value = prompt("Введите число");
        if (value === "" || value === null || !isFinite(value)) break
        arr.push(+value);
    }
    sum = arr.reduce((a, b) =>  a+b)
    return sum;
}
    alert(sumInput())
}

let task14 = () => {
    let getMaxSubSum = (arr) => {
        let max = 0;
        let sum = 0;
        for (let item of arr) {
            sum += item
            max = Math.max(max, sum)
            if (sum < 0) sum = 0
        }
        return max;
    }
    alert(getMaxSubSum([-1, 2, 3, -9]))
}

let task15 = () => {
    alert('Функция будет работать одинаково, ведь в обоих вариантах функция будет обращать внимание на return, если же по условию до return дело не дойдет функция продолжит выполнение кода ниже')
}

let task16 = () => {
    let checkAge1 = (age) => (age > 18) ? true : confirm('Родители разрешили?')
    let checkAge2 = (age) => (age > 18) || confirm('Родители разрешили?')
    alert(checkAge1)
    alert(checkAge2)
}

let task17 = () => {
    let min = (a,b) => Math.min(a,b)
    alert(min(2, 5))
    alert(min(3, -1))
    alert(min(1, 1))
}

let task18 = () => {
    let x = prompt('Enter number!')
    let n = prompt('Enter number!')
    let pow = (x,n) => {
        let result = 1
        for (let i = 0; i < n; i++) {
            result *= x
        }
        return result
    }
    alert(pow(x, n))

}

let task19 = () => {
    let ask = (question, yes, no) => {
        if (confirm(question)) yes()
        else no();
    }
    ask(
        "Вы согласны?",
        () => { alert("Вы согласились."); },
        () => { alert("Вы отменили выполнение."); }
    );
    alert(ask)
}

let task20 = () => {
    alert(Math.round(8000 / (3333 - 1750)) + ' Месяцев')
}

let task21 = () => {
    let sum = 0
    for (let i = 0; i < 10; i++) {
        let num = +prompt('Enter number')
        if(num < 0) sum += num
    }
    if (sum !== 0) alert(sum)
}