// 3. 互動式網頁, html, css selector
// a. 練習1: BMI計算機 (alert, console.log)
// b. 練習2: 帳號註冊  (input types)
// git?
// jquery?

var SHEET_ID = '1FgX_t2Wp1ZB5JTCo_jG_TI6F3paCEkp8qjtaIfkdNjk';

function doPost(e){
    postData = JSON.parse(e.postData.contents);
    if(postData.action === 'GetMenuName'){
        return ContentService.createTextOutput(getMenuName(SHEET_ID));
    }else if(postData.action === 'GetAngelName'){
        return ContentService.createTextOutput(GetAngelName(SHEET_ID));
    }else if(postData.action === 'GetMenu'){
        return ContentService.createTextOutput(GetMenu(SHEET_ID));
    }else if(postData.action === 'OrderMeat'){
        return ContentService.createTextOutput(OrderMeat(SHEET_ID,postData));
    }
}


function myFunction() {
    Logger.log(
        OrderMeat(SHEET_ID,{
            Name:'Roy',
            MeatName: '沙茶牛肉炒飯'
        })
    )
}


function getMenuName(ID){
    var sheet = SpreadsheetApp.openById(ID);
    var _sheet = sheet.getSheetByName("菜單");

    return _sheet.getRange('A1').getValue();
}

/**
 * @return {string}
 */
function GetAngelName(ID){
    var sheet = SpreadsheetApp.openById(ID);
    var _sheet = sheet.getSheetByName("填單區");
    var nowAngelName = _sheet.getRange('K2').getValue();
    var angelList = _sheet.getRange('K4:K24').getValues();
    var nextAngelName = '';
    var isStop = false;
    for(var name in angelList){
        if(!isStop){
            if(angelList[name] === nowAngelName){
                isStop = true;
            }
        }else{
            nextAngelName = angelList[name];
            break;
        }
    }

    if(nextAngelName === ''){
        nextAngelName = angelList[0];
    }
    _sheet.getRange('K2').setValue(nextAngelName);

    return nextAngelName
}

function isInMenu(ID,meatName){
    var sheet = SpreadsheetApp.openById(ID);
    var _sheet = sheet.getSheetByName("菜單");
    var menu = _sheet.getRange('A2:A100').getValues();
    var result = false;
    menu.forEach(function(value){
        if(meatName === value[0]){
            result = true;
        }
    });

    return result
}

function insertMeat(ID, name, meat, amount){
    if(!amount){
        amount = 1;
    }

    var sheet = SpreadsheetApp.openById(ID);
    var _sheet = sheet.getSheetByName("填單區");
    var orders = _sheet.getRange('A2:B60').getValues();
    for(var i in orders){
        if(!orders[i][0] && !orders[i][1]){
            var targetRow = 2 + parseInt(i) ;
            _sheet.getRange('A' + targetRow).setValue(name);
            _sheet.getRange('B' + targetRow).setValue(meat);
            _sheet.getRange('F' + targetRow).setValue(amount);
            _sheet.getRange('I' + targetRow).setValue('N');
            break;
        }
    }
}


/**
 * @return {string}
 */
function OrderMeat(ID,postData){
    if(isInMenu(ID,postData.MeatName)){
        insertMeat(ID, postData.Name, postData.MeatName, postData.Amount);
        return '已新增訂單，記得付錢。'
    }else{
        return '找不到一道叫做 ' + postData.MeatName + ' 的餐點，請確認餐點名稱'
    }
}