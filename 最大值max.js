arr = [ 99,4,8,6,3,4343,24,51]
let max = arr[0]
let min = arr[0]
for(let i = 1; i < arr.length; i++) {
    if (max < arr[i]){ //もしmaxの数値がiより小さいだったらiの数値をmaxに置き換える　　如果max的数值比i小则赋值给max
        max = arr[i]
        //max < arr[i] ? max = arr[i] : max
    }
    if (min > arr[i]){ //もしminの数値がiより大きいなら　如果min的数值比i大则赋值给max
        min = arr[i]
        //min > arr[i] ? min = arr[i] : min
    }
}
console.log(max)
console.log(min) 