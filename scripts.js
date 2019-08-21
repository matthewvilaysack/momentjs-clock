const clock = document.querySelector('.clock')

setInterval(() => {
    const now = moment()
    const legibleFormat = now.format('hh:mm:ss A')
    clock.innerHTML = legibleFormat
}, 1000)