var sheetId = '1ni-HkDo-dscLM8bLC0L2iDc51nzNO0RUQlXT8bt-NKw';


function main() {
    var sheet = SpreadsheetApp.openById(sheetId).getSheetByName("心評results");
    var lastRow = sheet.getLastRow();

    var sheetRanges = sheet.getRange('B2:BS' + lastRow);
    var nameList = [];
    var values = sheetRanges.getValues();

    values.forEach(function (row, rowIndex) {
        if(row[64]){
            nameList.push({
                rowIndex: rowIndex + 2,
                gender: row[0],
                birth: row[1],
                name: row[64],
                phone: row[65]
            });
        }
    });

    values.forEach(function (row, rowIndex) {
        var filtered = nameList.filter(function (value) {
            return value.name === row[64];
        });


        if(filtered.length > 1){
            filtered.forEach(function (value) {
                if(
                    row[64] === value.name &&
                    (row[65] !== value.phone ||
                    row[0] !== value.gender ||
                    row[1] !== value.birth )
                ){
                    var ranges = sheet.getRange('B' + value.rowIndex + ':' + 'BS' + value.rowIndex);
                    ranges.setBackground('red');
                    ranges.setFontColor('white');
                }
            })
        }
    });
}



