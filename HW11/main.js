let task1 = () => {
    let arr = ["HTML", "JavaScript", "CSS"]
    let copySorted = (arr) => {
        return arr.slice().sort()
    }
    let sorted = copySorted(arr)
    alert('Новый: ' + sorted)
    alert('Старый: ' + arr)
}

let task2 = () => {
    let vasya = {name: "Вася", age: 25}
    let petya = {name: "Петя", age: 30}
    let masha = {name: "Маша", age: 28}
    let users = [vasya, petya, masha]
    let names = users.map((item) => item.name)
    alert(names)
}

let task3 = () => {
    let vasya = {name: "Вася", age: 25}
    let petya = {name: "Петя", age: 30}
    let masha = {name: "Маша", age: 29}
    let arr = [vasya, petya, masha]
    let getAverageAge = (arr) => {
        return arr.reduce((acc, item) => acc + item.age, 0) / arr.length
    }
    alert(getAverageAge(arr))
}

let task4 = () => {
    let strings = ["кришна", "кришна", "харе", "харе",
        "харе", "харе", "кришна", "кришна", ":-O"]

    let unique = (arr) => {
        let uniqueArr = []

        for (let item of arr) {
            if (!uniqueArr.includes(item)) {
                uniqueArr.push(item)
            }
        }
        return uniqueArr
    }

    alert(unique(strings))
}
let task5 = () => {
    let sum = (a) => {
        return (b) => {
            return a + b
        }
    }
    alert(sum(1)(2))
    alert(sum(5)(-1))
}
let task6 = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8]

    let inBetween = (a, b) => {
        return (x) => {
            return x >= a && x <= b
        }
    }

    let inArray = (arr) => {
        return (x) => {
            return arr.includes(x)
        }
    }

    alert(arr.filter(inBetween(3, 6)))
    alert(arr.filter(inArray([1, 2, 3])))
}
let task7 = () => {
    let factorial = (n) => {
        if (n != 1) {
            return n * factorial(n - 1)
        } else return 1
    }

    alert(factorial(5))
}
let task8 = () => {
    let fib = (n) => {
        if (n <= 1) {
            return n
        } else return fib(n - 1) + fib(n - 2)
    }
    alert(fib(3))
    alert(fib(7))
}