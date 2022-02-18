// function

function hallo() {
    console.log('Hallo')
}
hallo()


function vip(price1, price2, discount) {
    let result = price1 + price2 - discount
    let msg = 'VIP'

    if (result >= 0 && result < 50) {
        msg = 'Iron VIP'
    } else if (result >= 50 && result < 500) {
        msg = 'Silver VIP'
    } else if (result >= 500 && result < 5000) {
        msg = 'Gold VIP'
    } else {
        msg = 'IDK VIP'
    }
    return msg
}

let msg = vip(500, 2000, 400)
console.log(msg)



// 构造函数
function con (name){
    this.name = name
}
let n1 = new con('Julian')
let n2 = new con('Li')
let n3 = new con('Yang')

console.log(n1)
console.log(n2)
console.log(n3)

