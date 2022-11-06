// ローマ数字への変換
// 与えられた数をローマ数字に変換してください。

// ローマ数字	アラビア数字
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1
// 解答のローマ数字はすべて大文字で返す必要があります。

function strMap(num) {
  switch (num) {
    case 1000:
      return "M";
    case 900:
      return "CM";
    case 500:
      return "D";
    case 400:
      return "CD";
    case 100:
      return "C";
    case 90:
      return "XC";
    case 50:
      return "L";
    case 40:
      return "XL";
    case 10:
      return "X";
    case 9:
      return "IX";
    case 5:
      return "V";
    case 4:
      return "IV";
    case 1:
      return "I";
    default:
      throw new Error("ないよ");
  }
}

function convertToRoman(num) {
  const numArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  //割り切れなかったら次のarrをpushしていくことで表現する
  let counter = num
  let arrIndex = numArr.length -1;
  let retArr = [];
  while (arrIndex >= 0) {
    //割ることができたらあるってことで・・・
    const div = Math.floor(counter / numArr[arrIndex])
    console.log(counter / numArr[arrIndex],div);
    if ( div > 0 ) {
      for (let loop = 0; loop < div; loop++) {
        retArr.push( strMap( numArr[arrIndex] ))
      }
    }
    counter = counter - (div * numArr[arrIndex])//終わった文字列を消去
    arrIndex -= 1
  }
  return retArr.join("");
}

const ret = convertToRoman(29);
console.log(ret);

