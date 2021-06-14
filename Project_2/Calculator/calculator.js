let btnAll = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '/',
    '0', '.', '%', '*',
    'AC', '='
]

let calculator = document.getElementById('calculator')

let screen = document.getElementById('screen')

btnAll.forEach(function (btn) {
    let btnElement = document.createElement('div')
    btnElement.className = 'btn'
    btnElement.innerHTML = btn
    calculator.appendChild(btnElement)
})

document.querySelectorAll('#calc-wrap .btn').forEach((button) => {
    button.addEventListener('click', onButtonClick)
})

function onButtonClick(e)  {
    if (e.target.innerHTML === 'AC') {
        screen.innerHTML = '0'
    }
    else if (e.target.innerHTML === '=' && screen.innerHTML.indexOf('/0') > -1)
    {
        screen.innerHTML = 'Ошибка'
    }
    else if (e.target.innerHTML === '=') {
        screen.innerHTML = eval(screen.innerHTML)
    } else if (screen.innerHTML === '0') {
        screen.innerHTML = e.target.innerHTML
    }
    else if (e.target.innerHTML === '%') {
            screen.innerHTML = Number(screen.innerHTML /100)
    } else {
        screen.innerHTML += e.target.innerHTML
    }
}