//変数(num)に1以上の正の数を代入
let num = Math.floor(Math.random() * 100);
// 変数numの値を出力する
console.log(num);

// 変数(num)が3の倍数の場合“3の倍数です”という文字列を出力する
if (num  % 3 === 0) {
    console.log("3の倍数です");
}else if(num % 5 === 0) {
    console.log("5の倍数です");
}else if(num % 15 === 0) {
    console.log("3と5の倍数です");
}else {
    console.log(num);
}

