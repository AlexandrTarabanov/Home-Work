for (let li of document.querySelectorAll('li')) {
    let text = li.firstChild.data
    text = text.trim()
    let number = li.getElementsByTagName('li').length
    alert(text + ': ' + number)
}