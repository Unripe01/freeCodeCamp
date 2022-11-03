// すべてが True かどうか
// コレクションのすべての要素 (最初の引数) について述語 (2 番目の引数) が truthy (真値) かどうかを確認します。

// 言い換えれば、まず、オブジェクトの配列のコレクションが与えられます。 述語 pre はオブジェクトのプロパティになり、値が truthy の場合は true を返す必要があり、 それ以外の場合は false を返す必要があります。

// JavaScript では、truthy な値 (真値) とは、ブール値のコンテキストで評価されたときに true に変換される値のことです。

// オブジェクトのプロパティにアクセスするには、ドット表記または [] 表記のいずれかを使用できます。


function truthCheck(collection, pre) {
  const ret = collection.every( col => !!col[pre])
  return ret;
}

console.log(
  truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot")
)