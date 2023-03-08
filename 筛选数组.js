let arr = [2,55,0,3,6,23,1,6,86,3]
let newArray = [] //声明新的空数组

// for (let i = 0; i < arr.length; i++) {//遍历旧数组
//     if ( arr[i] >= 10){
//         //将满足条件的 追加给新的数组
//         newArray.push(arr[i]) 
//     }
// }

for (let i = 0; i < arr.length; i++){
if (arr[i] !== 0){
    newArray.push(arr[i])
}

}
console.log(newArray) //输出新数组