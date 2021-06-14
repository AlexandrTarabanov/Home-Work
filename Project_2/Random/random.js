let generate = document.querySelector('#generate')
generate.onclick = (event) => {
    event.preventDefault()
    let form = document.forms.userInput
    let min = parseInt(form.min.value)
    let max = parseInt(form.max.value)
    let number = parseInt(form.number.value)
    let resultRender = document.querySelector('#result')
    let result = []
    let main = document.querySelector('.main')
    for(let i = 0; i < number; i++) {
        result.push((min + Math.random() * (max - min)).toFixed())
    }
    resultRender.innerHTML = result
    main.append(resultRender)
}


