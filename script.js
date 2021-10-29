let digits = document.querySelectorAll('.digit')
let ops = document.querySelectorAll('.operator')

let firstNum = ''
let secNum = ''

const firstnumber = digits.forEach(digit => {
    digit.addEventListener('click', () => {
        firstNum += digit.value
        return firstNum
    })
})

const operator = ops.forEach(op => {
    op.addEventListener('click', ()=>{
        console.log(op.value)
    })
})

const secondnumber = digits.forEach(digit => {
    digit.addEventListener('click', () => {
        secNum += digit.value
        console.log(secNum)
    })
})