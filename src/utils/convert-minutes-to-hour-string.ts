export function convertMinutesToHourString(minutesAmount:number) {
    const hours = Math.floor(minutesAmount / 60)
    const minutes = minutesAmount % 60
    
    const hourString = `${padZero(hours)}:${padZero(minutes)}`
    return hourString
}

function padZero(number:Number) {
    return String(number).padStart(2, '0')
}