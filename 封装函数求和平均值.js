function fn(arr,flag = true){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    if (flag){
        return sum
    } else {
        return sum / arr.length

    }
}
console.log(fn([1,2,3,4]))
console.log(fn([1,2,3,4,5],false))