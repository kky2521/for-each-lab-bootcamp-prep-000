function iterativeLog(array) {
    array.forEach((element, index) => {
        console.log(`${index}: ${element}`)
    })
}

function iterate (callback) {
    const friends = ["John", "Ann", "Henry"]
    friends.forEach(callback)
    return friends
}
function doToArray (array, callback) {
    array.forEach(callback)
}
