// 電話番号の検証
// 渡された文字列が有効な米国の電話番号と思われる場合は、true を返してください。

// ユーザーは、有効な米国番号の形式になっている限り、任意の方法でフォームフィールドに入力することができます。 以下は、米国の電話番号の有効な形式の例です (他のバリエーションについては、以下のテストを参照してください)。

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// このチャレンジでは、800-692-7753 や 8oo-six427676;laskdjf などの文字列が渡されます。 上記に示した形式の任意の組み合わせに基づいて、米国の電話番号を有効と判断するか、または拒否してください。 市外局番は必須です。 国コードが指定されている場合は、国コードが 1 であることを確認する必要があります。 文字列が有効な米国の電話番号の場合は true を返してください。それ以外の場合は false を返してください。

function telephoneCheck(str) {
  //カッコの数合わせ
  const parenthesisOpen = str.match(/\(/g);
  const parenthesisClose = str.match(/\)/g);
  console.log(parenthesisOpen,parenthesisClose)
  if ((parenthesisOpen != null && parenthesisOpen.length)
      !== (parenthesisClose != null && parenthesisClose.length)) return false

  //先頭が1でなかったらもうアウトに
  if (!/^(1 )?[1-9]|^\([1-9]/g.test(str)) {
    return false
  }

  //カッコ消して 11桁か空白付き11桁でマッチさせる
  const delPare = str.replace(/\(/g," ")
                    .replace(/\)/g," ")
                    .replace(/-/g," ")
                    .trim()
                    .replace(/\s+/g,' ');
  
  console.log(delPare)
  
  const reg = /^(1 )?[1-9]{3} [1-9]{3} [1-9]{4}$|^1?[1-9]{10}$/
  return reg.test(delPare)
}

const ret = telephoneCheck("5555555555");
console.log(ret);