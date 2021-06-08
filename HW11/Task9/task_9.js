let li2 = document.createElement("li")
li2.innerHTML = '2'
let li3 = document.createElement("li")
li3.innerHTML = '3'
let one = document.getElementById('one')
one.after(li2)
one.after(li3)