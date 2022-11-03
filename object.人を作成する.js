// 人を作成する
// 次のメソッドを持つオブジェクトコンストラクターを記述してください。

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// テストを実行して、各メソッドに対して期待される出力を確認してください。
// 引数を取るメソッドは 1 つの引数のみを受け取る必要があり、それは文字列でなければなりません。 これらのメソッドのみをオブジェクトとやり取りする手段とする必要があります。

const Person = function(firstAndLast) {
  // この行の下にあるコードのみを変更
  // 下のメソッドを完成させ、他のメソッドも同様に実装する
  let firstName = firstAndLast.split(' ')[0]
  let lastName = firstAndLast.split(' ')[1]

  this.getFirstName = ()=> {
    return firstName
  }
  this.getLastName = ()=> {
    return lastName
  }
  this.getFullName = ()=> {
    return `${firstName} ${lastName}`;
  };

  this.setFirstName = (first) => {
    firstName = first
  }
  this.setLastName = (last) => {
    lastName = last
  }
  this.setFullName = (firstAndLast) => {
    firstName = firstAndLast.split(' ')[0]
    lastName = firstAndLast.split(' ')[1]
  }
};

const bob = new Person('Bob Ross');
console.log(bob.getFullName())
console.log(bob.firstName)
