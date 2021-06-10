let showNotification = ({top, right, className, html}) => {
    
    let notification = document.createElement('div')
    notification.className = "notification"
    if (className) {
        notification.classList.add(className)
    }
    notification.style.top = top + 'px'
    notification.style.right = right + 'px'
    notification.innerHTML = html

    document.body.append(notification)
    setTimeout(() => notification.remove(), 1500)
}
showNotification({top: 5, right: 200, html: "HI I AM HERE", className: "welcome" })