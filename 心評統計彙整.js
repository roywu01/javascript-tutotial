var originSheetId = '1ni-HkDo-dscLM8bLC0L2iDc51nzNO0RUQlXT8bt-NKw';
var targetSheetId = '1OTwji1jXDQu4o7dfqfY3S3sHoJk4RQVCkIjrQt2x3WI';


function main() {
    var originSheet = SpreadsheetApp.openById(originSheetId).getSheetByName("心評分級");
    var targetSheet = SpreadsheetApp.openById(targetSheetId).getSheetByName("聯繫名單");

    var lastRow = targetSheet.getLastRow();
    var targetListRange = targetSheet.getRange('B3:B' + lastRow);
    var targetList = [];

    targetListRange.getValues().forEach(function (row, rowIndex) {
        row.forEach(function (value, ColumeIndex) {
            targetList.push(value);
        })
    });

    var originListRange = originSheet.getRange('A589:BB' + originSheet.getLastRow());
    originListRange.getValues().forEach(function (row, rowIndex) {
        //若名字不重複
        var isValid  = row.pop();
        if (row[1] && targetList.indexOf(row[1]) === -1 && isValid === '符合') {
            targetList.push(row[1]);
            targetSheet.appendRow(
                [row[0], row[1], "", "", "", row[3], row[6], row[7], row[8], row[9], row[10], row[11], row[12], row[13]]
            )
        }
    });
}

//589


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

            if (sheetName === 'DEBUG') {

            } else {
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
