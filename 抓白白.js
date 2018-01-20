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
        var debug_sheet = app.getSheetByName("DEBUG");
        var result = [];

        //逐個sheet處理
        sheets.forEach(function (sheet) {

            //取得需要判斷的範圍
            var ranges = sheet.getRange('C1:O41');
            //取得sheet名稱
            var sheetName = sheet.getName();

            if(sheetName === 'DEBUG'){

            }else{
                //拿到範圍內的值
                var values = ranges.getValues();

                //以迴圈判斷兩欄的值是否相同
                values.forEach(function (row, rowIndex) {
                    row.forEach(function (value, ColumeIndex) {
                        if (rowIndex < 2 || ColumeIndex === 0) {

                        } else {
                            // 學號長度 === 7
                            if (values[rowIndex][0].length === 7) {
                                if (value === "") {
                                    result.push(
                                        [
                                            sheetName,
                                            values[0][ColumeIndex],
                                            values[1][ColumeIndex] ? values[1][ColumeIndex] : values[1][ColumeIndex - 1],
                                            values[rowIndex][0]
                                        ]
                                    );
                                }
                            }
                        }
                    })
                });
            }
        });
        var ranges = debug_sheet.getRange('A1:D' + result.length);
        ranges.setValues(result);
        // Logger.log(result)
    });
}
