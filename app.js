let a = 22
let b = [4, 9, 17, 21, 56]

function biggest (a, b) {
    let result

    for (let i = 0; i < b.length; i++) {
        if (a > b[i]) {
            result = b[i]
        }
    }

    return result
}

biggest(a, b)

console.log(biggest(a, b))









