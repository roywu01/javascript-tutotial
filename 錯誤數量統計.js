// 要處理的文件清單
var SHEET_ID = [
    '18ya7kvfyVI9CZXIsl4Bx8mDp4Off-tyc79XzjMrNZ04'
];

var TOTAL_ERROR_SHEET_ID = '1RdvOOk4M_LUWqpwumsmdQdnkqH7tK8xAsOUUXBPm9Nc';


function myFunction() {
    var app = SpreadsheetApp.openById(TOTAL_ERROR_SHEET_ID);
    var TotalErrorSheet = app.getSheetByName('批改錯誤率');
    var temp = TotalErrorSheet.getRange('A1:Z1').getValues()[0];
    var TesterNames = [];
    temp.forEach(function (value) {
        if(value !== ""){
            TesterNames.push(value);
        }
    });

    var Questions = [];
    var temp = TotalErrorSheet.getRange('A3:A8').getValues();
    temp.forEach(function (value) {
        Questions.push(value[0]);
    });

    var result = {};
    TesterNames.forEach(function (value) {
        if(value !== ""){
            result[value] = {

            };
            Questions.forEach(function (value2) {
                if(value2 !== ""){
                    result[value][value2] = 0
                }
            })
        }
    });

    SHEET_ID.forEach(function (id) {
        var app = SpreadsheetApp.openById(id);
        var sheets = app.getSheets();
        sheets.forEach(function (sheet) {
            var valeus = sheet.getRange('A3:B36').getValues();
            var nowTest = [];
            var nowQuestion = '';
            valeus.forEach(function (rowValue, index) {
                rowValue.forEach(function (colValue, colIndex) {
                    var isCleanTest = true;
                    TesterNames.forEach(function (Tester) {
                        try{
                            if(colValue.indexOf(Tester) !== -1){
                                if(isCleanTest){
                                    nowTest = [];
                                    isCleanTest = false;
                                }
                                nowTest.push(Tester);
                            }
                        }catch(err) {

                        }

                    });

                    if(Questions.indexOf(colValue) !== -1){
                        nowQuestion = colValue;
                    }
                    if(index > 0 && colValue !== "" && !isNaN(parseInt(colValue))){
                        nowTest.forEach(function (value) {
                            result[value][nowQuestion] += parseInt(colValue);
                        });
                    }
                })
            })
        })
    });

    var data = [];

    Questions.forEach(function (value2) {
        var appendingRow = [];
        TesterNames.forEach(function (value) {
            appendingRow.push(result[value][value2]);
        });
        data.push(appendingRow);
    });

    Logger.log(data);

    var ranges = TotalErrorSheet.getRange('B3:' + idOf(data[0].length).toUpperCase() + (data.length+2));
    ranges.setValues(data);
}

function idOf(i) {
    return (i >= 26 ? idOf((i / 26 >> 0) - 1) : '') +  'abcdefghijklmnopqrstuvwxyz'[i % 26 >> 0];
}