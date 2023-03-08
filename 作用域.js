function fn(){
    let i = 1
    console.log(i)
}
//console.log(i) 局部作用域 得放括号里
fn()

//全局变量
let num = 2

function fun(){
    console.log(num)
}
fun()