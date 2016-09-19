// TypeScript file
var nn;
//var newArray=new Array(new Array(),new Array())
var newArray;
var Arraya;
var k;
var l;
var m;
Arraya = [];
newArray = [[]];
nn = 5;
m = 2 * nn - 1;
initialize();
set();
output();
function initialize() {
    for (k = 0; k <= nn; k++)
        Arraya.push(2);
    for (l = 0; l <= m; l++)
        newArray.push(Arraya);
}
function set() {
    //var k:number;
    //var l:number
    for (k = 0; k <= nn; k++) {
        for (l = 0; l <= k; l++) {
            newArray[k][(2 * nn - 2) / 2] = 1;
            newArray[k][(2 * nn - 2) / 2 - l] = 1;
            newArray[k][(2 * nn - 2) / 2 + l] = 1;
        }
    }
}
function output() {
    for (k = 0; k <= nn; k++) {
        for (l = 0; l <= m; l++) {
            if (newArray[k][l] == 1)
                console.log("*");
            else
                console.log("");
        }
    }
}
