// ドロップする
// 配列 arr が与えられたとき、最初の要素 (インデックスは 0) から順に各要素を反復処理し、関数 func に反復要素が渡されたときに関数が true を返すまで、要素を削除してください。

// 条件が満たされた場合は、配列の残りの部分を返してください。条件が満たされない場合は、arr を空の配列として返す必要があります。

function dropElements(arr, func) {
  const loop = arr.slice().entries()
  for (const [_, element] of loop) {
    if (!func(element)) {
      arr.shift()
    } else {
      break;
    }
  }
  return loop.length === arr.length ? [] : arr;
}

const ret = dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
console.log(ret)


