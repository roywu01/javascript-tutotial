//美化程式，更好維護
function log(msg) {
    console.log(msg);
}

function logNewLine() {
    log('<br>')
}


//for迴圈
for (var j = 18; j < 65; j = j + 1) {
    log(j);
    logNewLine();
}

var a = ['a', 'b', 'c', 'd', 'e'];

for (var i in a) {
    log(i);
    if (a[i] === 'c') {
        break;
    }
}

a.forEach(function (value, index) {
    log(value);
});


var profile = {
    Name: 'Xuecheng',
    Height: 180,
    Weight: 55,
    Gender: 'Male',
    Age: 25,
    DesirePay: 22000,
    Nationality: 'Taiwanese',
    IsMarried: false,
    IsSingle: true
};

for (var attr in profile) {
    log(attr + ':' + profile[attr]);
}


function isVotable(profile) {
    switch (profile.Nationality) {
        case 'Taiwanese':
            return true;
        default:
            return false;
    }
}
// number % 17

// 餘數為2 return 2的2次方;
// 餘數為3 return 3的3次方;
// 餘數為5 return 5的5次方;

function test(number) {
    switch (number % 17) {
        case 2:
            return Math.pow(2, 2);
        case 3:
            return Math.pow(3, 3);
        case 5:
            return Math.pow(5, 5);
        default:
            return false;
    }
}


var angelList = ['小毛', '小王', '小花', '小J', '小S'];
function getNextAngel(nowAngel) {
    if (!nowAngel) {
        return angelList[0];
    } else {
        for (var i = 0; i < angelList.length; i++) {
            if (angelList[i] === nowAngel) {
                if ((i + 1) < angelList.length) {
                    return angelList[i + 1];
                } else {
                    return angelList[0];
                }
            }
        }
    }
}


function getbeforeAngel(nowAngel) {
    function getLastValue(array) {
        return array[array.length - 1];
    }

    if (!nowAngel) {
        return angelList[0];
    } else {
        for (i = angelList.length - 1; i !== -1; i--) {
            if (angelList[i] === nowAngel) {
                if (i !== 0) {
                    return angelList[i - 1];
                } else {
                    return getLastValue();
                }
            }
        }
    }
}

// getNextAngel('小J');


/**
 *   2017-09-16
 * */


//硬功夫
function getGCD(a, b) {
    var gcd;

    for (var i = 1; i <= a && i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }

    return gcd;
}


/**
 *   找最小公倍數
 *   硬功夫
 * */
function getLCM(a, b) {

}

/**
 *   找最小公倍數
 *   a * b / gcd(a,b)
 * */
function getLCMAdvance(a, b) {

}



/**
 * 遞迴涵氏
 * 1. 定義甚麼時候停止
 * 2. 定義不符合1的情況下，要做哪些處理
 * */

//輾轉相除法
//定義 m為被除數，n為餘數
//當餘數為0，代表找到最小公倍數，即停止
//當餘數不等於0，將被除數除上餘數後傳入涵式
function getGCDAdvance(m, n) {
    if (n === 0)
        return m;
    else
        return getGCDAdvance(n, m % n);
}


//計算 n! 的值
// 3! = 3 * 2 * 1
// 6! = 6 * 5 * 4 * 3 * 2 * 1
function factorial(n) {
    if (n === 1) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}


/**
 *  費氏數列
 *  0,1,1,2,3,5,8,13,21.....
 *  
 *  輸入數列長度，輸出所有數字並以逗號分開
 * */
function FibonacciNumber(len) {

}



var sequence = 100;
while (sequence > 1) {
    sequence = cutInLine(sequence);
}

// 插隊演算法
function cutInLine(nowSequence) {
    return nowSequence - parseInt(Math.random() * 10);
}

//信任的演化
//https://audreyt.github.io/trust-zh-TW/