// 要處理的文件清單
var SHEET_ID = [
    '1SdqCz-6F3oNCkRVpeM_TGNNXBrUm7fHKW0JeNm2gBTk',
    '1py1_cAWG61DRTAnfm74fUUxo9XZE2vTVCRYCpbUSNrA',
    '1BuYa7xnXTU5i5rauVDwhRahDQzC2mc-XwRI_YEW21IY',
    '1tapNhJiu6rz6J8qYSFcH31GPDViqTxiUE8pvumoC8oc'
];


var RESULT_SHEET_ID = '17JbzrOzFfW2pwimOVG-8bF8TL57bF44dNDLjyZlSKhE';
var TITLE_FONT_SIZE = 12;
function myFunction() {
    var result = [];

    SHEET_ID.forEach(function (id) {
        //取得文件
        var app = SpreadsheetApp.openById(id);

        //取得sheets
        var sheets = app.getSheets();

        //逐個sheet處理
        sheets.forEach(function (sheet) {

            //取得需要判斷的範圍
            var ranges = sheet.getRange('A1:AG41');

            //拿到範圍內的值
            var values = ranges.getValues();
            var className = values[0][0];
            var TestId = values[0][1];


            result.push(
                [
                    "卷別代碼",
                    "學校",
                    "學號",
                    "一1",
                    "預1",
                    "預2",
                    "預4",
                    "閱2",
                    "閱4"
                ]
            );

            //以迴圈判斷兩欄的值是否相同
            values.forEach(function (row, rowIndex) {
                if (rowIndex < 2) {

                } else {
                    // 學號長度 === 7
                    if (values[rowIndex][2].length > 3) {

                        result.push([
                            TestId,
                            className,
                            values[rowIndex][2],
                            row[27],
                            row[28],
                            row[29],
                            row[30],
                            row[31],
                            row[32]
                        ]);
                    }
                }
            });
        });

    });
    var app = SpreadsheetApp.openById(RESULT_SHEET_ID);
    var result_sheet = app.getSheetByName("正確答案總表");
    var ranges = result_sheet.getRange('A1:I' + result.length);
    ranges.setValues(result);
    Logger.log(result);

    result.forEach(function (row, index) {
        if(row[0] === "卷別代碼"){
            var ranges = result_sheet.getRange('A' + (index + 1).toString() + ':I' + (index + 1).toString());
            ranges.setBackground("yellow");
            ranges.setFontWeights([
                ["bold","bold","bold","bold","bold","bold","bold","bold","bold"]
            ]);
            ranges.setFontSizes([
                [TITLE_FONT_SIZE,TITLE_FONT_SIZE,TITLE_FONT_SIZE,TITLE_FONT_SIZE,TITLE_FONT_SIZE,TITLE_FONT_SIZE,TITLE_FONT_SIZE,TITLE_FONT_SIZE,TITLE_FONT_SIZE]
            ]);
        }
    })
}
