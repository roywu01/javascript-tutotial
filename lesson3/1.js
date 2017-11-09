document.getElementById('submit').onclick = function () {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    document.getElementById('result').innerText = CalBMI(height,weight);
};

/**
 * @return {string}
 */
function CalBMI(height, weight) {
    return '結果: ' + weight / Math.pow((height / 100), 2);
}