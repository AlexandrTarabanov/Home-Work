let liAll = document.getElementsByTagName('li')
for (let li of liAll) {
    let number = li.getElementsByTagName('li').length
    if (!number) continue
    li.firstChild.data += `[${number}]`
}