// 省略可能な引数
// 2 つの引数を合計する関数を作成してください。 1 つの引数のみが与えられた場合は、関数を返してください。その関数は 1 つの引数を取り、合計を返します。

// たとえば、addTogether(2, 3) は 5を返し、addTogether(2) は関数を返す必要があります。

// この返された関数に １ つの引数を与えて呼び出すと、合計を返します。


function addTogether() {
  const [first, second] = arguments;//こうやって取れる ..agg にするほうがわかりよい。

  //undefined対応
  if ( typeof first !== "number") {
    return undefined
  }

  //カリー化
  if (arguments.length === 1){
    return (second) => addTogether(first, second)
  }

  //第二引数チェック
  if ( typeof second !== "number") {
    return undefined
  }
  //ただの合計
  return first + second
}



const ret = addTogether(5)(7);
console.log(ret)