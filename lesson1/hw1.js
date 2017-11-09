/*
 *   作業需使用課程中未提到的運算符號 %
 *   % 的意思是「前者除後者的餘數」
 *   比方說: 10 除 3 的餘數會是 1
 *   則 (10 % 3 === 1) 會為 true
 *   10 % 3 的結果是 1
 *   15 % 3 的結果是 0
 *   17 % 3 的結果是 2
 *   以下進入練習題
 * */


isOdd(12);
/*
 *   作業一      難度☆☆☆☆★
 *   判斷輸入的變數 number 是否為基數
 *   是則回傳true, 不是則回傳false
 *   提示: 奇數的定義為，除2後的餘數為1的所有數字
 * */
function isOdd(number) {
    if (number % 2 === 1) {
        return true;
    } else {
        return false;
    }
}


/*
 *   作業二      難度☆☆☆★★
 *   判斷輸入的變數 factor 是否為 number 的因數
 *   是則回傳true, 不是則回傳false
 *   提示: 因數的定義為，可將自身整除的數字
 *        假設 a = 10, b = 2 
 *        因 10 除 2 能夠整除(餘數為0)
 *        所以 b 為 a 的因數
 * */
function isFactor(number, factor) {
    if (number % factor === 0) {
        return true
    } else {
        return false
    }
}


/*
 *   作業三      難度☆★★★★
 *   判斷輸入的變數 number 是否為 質數
 *   是則回傳true, 不是則回傳false
 *   提示: 質數的定義為，因數只有兩個的數字
 *        假設 a = 3， 其因數只有1與3
 *        所以 a 為 質數
 * */
function isPrimeNumber(number) {
    var count = 0;

    for (var i = 1; i <= number; i++) {
        if (number % i === 0) {
            count += 1;
            console.log(i);
        }
    }

    if (count > 2) {
        return false;
    } else {
        return true;
    }
}


//一個月30天
//休5的倍數的日期

function offday() {
    var result = [];
    for (var i = 1; i <= 30; i = i + 1) {
        if (i % 5 === 0) {
            result.push(i);
        }
    }
    return result;
}

function offdayZoe() {
    for (var i = 1; i <= 30; i = i + 1) {
        if (i % 5 === 0)
            console.log(i)
    }
}

