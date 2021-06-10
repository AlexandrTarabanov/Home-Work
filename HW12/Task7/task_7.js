let allPane = document.querySelectorAll('.pane');

for(let pane of allPane) {
    pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>')
    pane.firstChild.onclick = () => pane.remove()
}