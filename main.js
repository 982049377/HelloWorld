// TypeScript file
var nn;
var newArray;
var Arraya;
var k;
var l;
var m;
Arraya = [];
newArray = [[]];
nn = 3;
m = 2 * nn - 1;
initialize();
set();
output();
function initialize() {
    newArray.pop();
    for (l = 0; l < nn; l++) {
        var Arraya = [];
        for (k = 0; k < m; k++)
            Arraya.push(" ");
        newArray.push(Arraya);
    }
}
function set() {
    for (k = 0; k < nn; k++) {
        newArray[k][(m - 1) / 2] = "*";
        for (l = 0; l <= k; l++) {
            newArray[k][(m - 1) / 2 - l] = "*";
            newArray[k][(m - 1) / 2 + l] = "*";
        }
    }
}
function output() {
    for (k = 0; k < nn; k++) {
        console.log(newArray[k]);
    }
}
