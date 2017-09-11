//核心技能

//1. Google
//2. IDE (Integrated Development Environment)

//前端與後端的差別
//前端所有的東西都可以被竄改


//Login
//Account, Password => service => is_valid
//Service, http


//html,css,javascript

//ES5,ES6



// 變數宣告
// 區域變數: 只在該function內有效的變數
// 全域變數: 在整個程式都有效的變數
var i1 = 1; //integer
var i5 = 1.112435432; //float
var i2 = '2'; // string
var i3 = "3"; // char
var i4 = [1,'2',3,4,5,6]; // array
var i6 = true; //boolean
var i7 = false;

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
document.write(JSON.stringify(profile));

var a = '{"Name":"Xuecheng"}';
var b = JSON.parse(a);
// document.write(b.Name);




//只有台灣人能投票
function canVote(profile) {
    if (profile.nationality === 'Taiwanese') {
        return true
    } else if(profile.nationality === 'American'){
        return false;
    }else{
        return '再看看';
    }
}

//薪水計算機
function yourPay(profile) {
    var base = 21009;
    var boost = 0;

    if (profile.Age > 30) {
        boost += 1000;
    }
    if (profile.Height > 180){
        boost -= 1000;
    }

    return base + boost;
}

document.write(yourPay(profile));




