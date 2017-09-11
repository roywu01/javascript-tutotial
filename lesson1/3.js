// var i2 = '2';
// var i3 = '3';
//
// document.write(i2 + i3);

var i4 = '""';
// document.write(i4);

/*
*
* asdadsada
*
* */


var plus = 1 + (2 + 3) + 4;
var b = 2-1-3-5+1+2;
var c = 2*3+2+5*6; //38 => 78
var d = 12/5;

e = 123;

// document.write(d);
//
// function test(a,b,c) {
//     var ii = 123;
//     // document.write(a+b+c);
//     return a + b + c;
// }
//
// var dd = test(1,2,3);
// document.write(ii);

var array = [plus,b,c,d,12345];
// document.write(array[0] + array[3]);

var a = '{"Name":"Xuecheng"}';
var b = JSON.parse(a);
// document.write(b.Name);



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