function myFunction() {

    var response = UrlFetchApp.fetch('https://zosbjfsx0j.execute-api.us-east-1.amazonaws.com/production');

    var data = JSON.parse(response.getContentText());

    var app = SpreadsheetApp.openById('1UedCqdRyh4sCw3BxBM_O_r7BQIfhIW8uMeftCDrAFHk');

    var sheets = app.getSheets();

    var title = [];

    for(var country in data){
        for(var date in data[country]){
            if(title.indexOf(date) === -1){
                title.push(date);
            }
        }
    }

    var sorted = title.sort().reverse();
    var t = [""];
    sorted.forEach(function (value) {
        t.push(value);
    });

    title = t;

    var result = [
        title
    ];

    //逐個sheet處理
    sheets.forEach(function (sheet, index) {
        if(index === 0){
            for(var country in data){
                var appending = [country];
                while(appending.length < title.length){
                    appending.push("0")
                }

                for(var date in data[country]){
                    appending[title.indexOf(date)] = parseInt(data[country][date]);
                }
                result.push(appending)
            }

            var ranges = sheet.getRange('A1:'+ idOf(result[0].length-1) + result.length);
            ranges.setValues(result);
        }
    });

    Logger.log(result);
}

function idOf(i) {
    return (i >= 26 ? idOf((i / 26 >> 0) - 1) : '') +  'abcdefghijklmnopqrstuvwxyz'[i % 26 >> 0];
}