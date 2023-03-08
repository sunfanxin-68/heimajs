// 要件: findeIndex 関数をカプセル化して、配列内の検索された要素のindex番号を返します。

// 値渡り2個仮引数 元素、配列
// 如果找到，则返回查找元素在数组中的索引号，如果查找不到，则返回 -1
// 例如检测 香蕉 数组['苹果', '香蕉', '橘子', '荔枝', '梨子']中， 返回结果是 1

 //関数をカプセル化配列のデータに返還する 　封装函数返回元素的下标  [1, 5, 10, 22, 8, 7]
    // 1. 封装函数 findIndex，传递2个参数 元素、数组
    function findIndex(ele,arr = []){
        //2.indexという変数を定義する初期数値は-1　 宣言一个index変数初始值为 -1
        let index = -1
        // 3. 配列を反復処理してもし見つけたい数値見つかったらindexをその索引として循環を中断する
        　// 遍历循环如果找到则修改index为当前的索引号，中断循环
        for (let i = 0; i < arr.length; i++){
            if (ele === arr[i]){
            index = i

            break
        }
    }
      // index变数に返還する
      
      return index

    }
    let index1 = findIndex(10,[1,3,4,6,10])
    console.log(index1)
    let index3 = findIndex(88, [1, 5, 10, 22, 8, 7])
    console.log(index3)
  