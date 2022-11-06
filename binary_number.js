// 二進法
// 渡されたバイナリー文字列の英語の翻訳文を返してください。

// バイナリー文字列はスペースで区切られます。

// var bytes = [227, 129, 130, 227, 129, 132, 227, 129, 134, 227, 129, 136, 227, 129, 138];
// var text_decoder = new TextDecoder("utf-8");
// var str = text_decoder.decode(Uint8Array.from(bytes).buffer);
// console.log(str);

function binaryAgent(str) {
  const bytes = str.split(' ').map( byte => parseInt(byte,2))
  const text_decoder = new TextDecoder("utf-8");
  const ret = text_decoder.decode(Uint8Array.from(bytes).buffer);
  return ret;
}

// Buffer.fromがサポートされていれば以下でもOK
function binaryAgent2(str) {
  const bytes = str.split(' ').map( byte => parseInt(byte,2))
  const ret = Buffer.from(bytes).toString()
  return ret;
}

const ret = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log(ret);