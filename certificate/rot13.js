// シーザー暗号
// 最もシンプルで広く知られている暗号の 1 つがシーザー暗号で、シフト暗号とも呼ばれています。 シフト暗号では、文字の意味が一定量ずつシフトされます。

// 現代では、文字を 13 文字ずつシフトさせる ROT13 という暗号がよく使われます。 たとえば、A ↔ N、B ↔ O のようになります。

// ROT13 でエンコードされた文字列を入力として受け取り、デコードされた文字列を返す関数を作成してください。

// 文字はすべて大文字にしてください。 アルファベット以外の文字 (スペース、句読点など) は、変換せず、そのまま渡してください。

function rot13(str) {
  let newStr = ""
  for (let index = 0; index < str.length; index++) {
    newStr += shiftLetter(str[index], 13)
  }
  return newStr;
}

function shiftLetter(l, s) {
  l = l.toUpperCase();
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var newInd = (alphabet.indexOf(l)+s)%26;
  return alphabet.includes(l) ? alphabet[newInd] : l; 
}

rot13("SERR PBQR PNZC");