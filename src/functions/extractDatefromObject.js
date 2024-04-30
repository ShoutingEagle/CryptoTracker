export const extractData = (time) => {
    const date = new Date(time)
    return date.getDate()+' - '+ (date.getMonth()+1) +' - '+date.getFullYear()
}