// 不足している文字
// 渡された文字の範囲で不足している文字を見つけて返してください。

// すべての文字が範囲内に存在する場合は、undefined を返してください。
const abc = "abcdefghijklmnopqrstuvwxyz"
function fearNotLetter(str) {

  const start = str[0]
  const index = abc.indexOf(start)
  let strIndex = 0
  let ret = undefined
  for (let i = index; i < str.length + index; i++) {
    if ( abc[i] !== str[strIndex] ){
      ret = abc[i]
      break
    }
    strIndex++
  }
  return ret;
}

const a = fearNotLetter("abcdefghijklmnopqrstuvwxyz");
console.log(a);
