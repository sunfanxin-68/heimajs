//1.封装函数 给一个参数的默认值
function getArr(arr = []){
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i] / arr.length
    }
    console.log(sum)

}
getArr([80,90,85])