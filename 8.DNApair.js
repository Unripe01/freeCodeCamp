// DNA 2 本鎖は核酸塩基対で構成されます。 塩基対は AT および CG という文字で表され、DNA 2 重らせんの基本構成要素を形成します。

// DNA 鎖の対を成す要素が欠落しています。 与えられた DNA 鎖の欠落している塩基対を対応させる関数を記述してください。 与えられた文字列の各文字について、塩基対の文字を見つけ出してください。 結果は 2 次元配列で返してください。

// たとえば、入力が GCG の場合は、[["G", "C"], ["C","G"], ["G", "C"]] を返してください。

// 文字とそのペアを組み合わせて配列にし、すべての配列を 1 つのカプセル化された配列にグループ化します。
function pairElement(str) {
  //ついになるやつ
  const pair = {
    G:'C',
    C:'G',
    T:'A',
    A:'T',
  }

  let arr = []
  str.split('').forEach(element => {
    const elmArr = [ element, pair[element] ]
    arr.push(elmArr)
  });
  return arr;
}

const a = pairElement("GCG");
console.log(a);
