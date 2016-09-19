// TypeScript file
var nn;
var Arraya;
var k;
var l;
var m;
Arraya = [];
nn = 3;
m = 2 * nn - 1;
initialize();
set();
function initialize() {
    for (k = 0; k < m; k++)
        Arraya.push(" ");
}
function set() {
    for (k = 0; k < nn; k++) {
        Arraya[(m - 1) / 2] = "*";
        for (l = 0; l <= k; l++) {
            Arraya[(m - 1) / 2 - l] = "*";
            Arraya[(m - 1) / 2 + l] = "*";
        }
        console.log(Arraya);
    }
}
