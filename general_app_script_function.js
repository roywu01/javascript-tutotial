function doPost(e) {
    if(typeof e !== 'undefined')
        return myFunction(JSON.parse(e.postData.contents))
}


function myFunction(request) {

    // var response = UrlFetchApp.fetch('https://zosbjfsx0j.execute-api.us-east-1.amazonaws.com/production');

    // var data = JSON.parse(response.getContentText());

    var app = SpreadsheetApp.openById(request.SheetId);
    var sheet = app.getSheetByName(request.SheetName);
    if(!sheet){
        app.insertSheet(request.SheetName);
        sheet = app.getSheetByName(request.SheetName);
    }
    var result = request.Data;

    var ranges = sheet.getRange('A1:'+ idOf(result[0].length-1) + result.length);
    ranges.setValues(result);

    // Logger.log(result);
    return ContentService.createTextOutput(JSON.stringify(result));
}

function idOf(i) {
    return (i >= 26 ? idOf((i / 26 >> 0) - 1) : '') +  'abcdefghijklmnopqrstuvwxyz'[i % 26 >> 0];
}