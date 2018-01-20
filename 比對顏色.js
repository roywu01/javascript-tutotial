// 要處理的文件清單
var SHEET_ID = [
    '1SdqCz-6F3oNCkRVpeM_TGNNXBrUm7fHKW0JeNm2gBTk'
];

function myFunction() {
    SHEET_ID.forEach(function (id) {
        //取得文件
        var app = SpreadsheetApp.openById(id);

        //取得sheets
        var sheets = app.getSheets();

        //逐個sheet處理
        sheets.forEach(function (sheet) {

            //取得需要判斷的範圍
            var ranges = sheet.getRange('D3:O41');

            //拿到範圍內的值
            var values = ranges.getValues();

            //以迴圈判斷兩欄的值是否相同
            values.forEach(function (row, rowIndex) {
                var temp = 0;
                row.forEach(function (value, ColumeIndex) {
                    if ((ColumeIndex + 1) % 2 === 0) {
                        if (value !== temp) {
                            // change backgroud color
                            sheet.getRange(rowIndex + 3 , ColumeIndex + 4).setBackground('red');
                            sheet.getRange(rowIndex + 3 , ColumeIndex + 3).setBackground('red');

                            // change font color
                            sheet.getRange(rowIndex + 3, ColumeIndex + 4).setFontColor('white');
                            sheet.getRange(rowIndex + 3, ColumeIndex + 3).setFontColor('white');

                            Logger.log(
                                value + ' ' + temp
                            )
                        }
                    } else {
                        temp = value;
                    }
                })
            });

        });
    });
}
