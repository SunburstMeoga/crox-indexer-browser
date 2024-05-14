

export function FilterAddress(value, startIndex = 3, endIndex = 4) {
    // //console.log("value", value);
    if (value === undefined || value === null) return
    let arr = value.split('')
    let targetStr
    let targetArr = []
    arr.map((item, index) => {
        if (index <= startIndex || index >= arr.length - endIndex) {
            targetArr.push(item)
        }
    })
    targetArr.splice(endIndex, 0, '...')
    targetStr = targetArr.join('')
    return targetStr
}

export function FilterTime(value) {
    var timestamp = new Date(value * 1000).getTime()
    let date = new Date(parseInt(timestamp))
    let Year = date.getFullYear()
    let Moth = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    let Day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    let Hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    let Minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    let Sechond = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    let GMT = Year + '-' + Moth + '-' + Day + '   ' + Hour + ':' + Minute + ':' + Sechond
    // //console.log(timestamp)
    return GMT
}
